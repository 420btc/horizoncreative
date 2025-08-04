import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Información sobre la agencia y servicios
const AGENCY_CONTEXT = `
Eres un asistente virtual de Horizon Creative, una agencia de marketing online especializada en:

**SERVICIOS:**
- Branding: Creación de identidad visual, logotipos, y estrategia de marca completa
- Diseño Web: Desarrollo de sitios web modernos, responsivos, e-commerce y aplicaciones
- Fotografía y Vídeo: Sesiones profesionales con fotógrafos y videógrafos especializados
- Drones FPV: Grabaciones aéreas con pilotos certificados para contenido cinematográfico
- Marketing Digital: Estrategias SEO, SEM, campañas publicitarias y analítica avanzada
- Gestión de Redes Sociales: Community management, creación de contenido y estrategia social

**PLANES DE SUSCRIPCIÓN:**
- Plan ECO: Ideal para pequeñas empresas. Incluye diseño básico de logo, página web simple y gestión básica de redes sociales. Precio: 299€/mes
- Plan MEDIO: Para empresas en crecimiento. Incluye branding completo, sitio web profesional, fotografía básica y estrategia de marketing digital. Precio: 599€/mes
- Plan PREMIUM: Solución integral para grandes empresas. Incluye todos los servicios, fotografía profesional, campañas publicitarias avanzadas y soporte 24/7. Precio: 999€/mes

**PROYECTOS REALIZADOS:**
- Golf Club Branding: Branding y personaje de Club de Golf, Marbella
- Vacation Benalmádena: Gestión de red social y web, Vacation Benalmádena
- Tennis Club Marbella: Branding y publicidad de Club de Tennis, Marbella
- Enboca Gastrobar: Branding y comunicación digital para Enboca Gastrobar
- UAC – Hospital Virgen de la Victoria: Desarrollo de app UAC y branding para el Hospital Virgen de la Victoria
- Mosh Fun Kitchen: Sesión creativa y fotografía gastronómica para Mosh Fun Kitchen

**NUESTRO EQUIPO:**
- Fotógrafos profesionales especializados en producto, corporativo y eventos
- Videógrafos expertos en contenido audiovisual y storytelling
- Pilotos de drones certificados FPV para grabaciones aéreas cinematográficas
- Community managers y especialistas en gestión de redes sociales
- Desarrolladores web y diseñadores UX/UI
- Especialistas en marketing digital y analítica

**INFORMACIÓN DE CONTACTO:**
- DIRECCIÓN: Málaga, Benalmádena
- EMAIL: info.horizoncreative@gmail.com
- TELÉFONO: 656314757
- INSTAGRAM: https://www.instagram.com/horizoncreative.agency
- Especialistas en crear experiencias digitales únicas
- Enfoque en resultados medibles y ROI
- Equipo multidisciplinario con tecnología de vanguardia

Responde siempre de manera profesional, amigable y enfocada en cómo Horizon Creative puede ayudar al cliente. Si te preguntan sobre servicios específicos, proporciona detalles relevantes y sugiere una consulta personalizada.

Cuando un usuario muestre interés en contratar un servicio, plan de suscripción o solicitar una cita, incluye en tu respuesta la palabra clave [ACTION_BUTTON] seguida del tipo de acción: [CITA], [ECO], [MEDIO], [PREMIUM], o [SERVICIO_GENERAL].
`;

export async function POST(req: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Mensaje requerido' },
        { status: 400 }
      );
    }

    // Preparar el historial de conversación para OpenAI
    const messages = [
      {
        role: 'system' as const,
        content: AGENCY_CONTEXT
      },
      ...conversationHistory.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      })),
      {
        role: 'user' as const,
        content: message
      }
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
      max_tokens: 500,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content || 'Lo siento, no pude procesar tu mensaje.';

    // Detectar si necesita mostrar botón de acción
    let actionButton = null;
    if (response.includes('[ACTION_BUTTON]')) {
      if (response.includes('[CITA]')) {
        actionButton = { type: 'cita', label: 'Solicitar Cita' };
      } else if (response.includes('[ECO]')) {
        actionButton = { type: 'plan-eco', label: 'Contratar Plan ECO' };
      } else if (response.includes('[MEDIO]')) {
        actionButton = { type: 'plan-medio', label: 'Contratar Plan MEDIO' };
      } else if (response.includes('[PREMIUM]')) {
        actionButton = { type: 'plan-premium', label: 'Contratar Plan PREMIUM' };
      } else if (response.includes('[SERVICIO_GENERAL]')) {
        actionButton = { type: 'servicio', label: 'Solicitar Servicio' };
      }
    }

    // Limpiar la respuesta de las palabras clave
    const cleanResponse = response
      .replace(/\[ACTION_BUTTON\]/g, '')
      .replace(/\[CITA\]/g, '')
      .replace(/\[ECO\]/g, '')
      .replace(/\[MEDIO\]/g, '')
      .replace(/\[PREMIUM\]/g, '')
      .replace(/\[SERVICIO_GENERAL\]/g, '')
      .trim();

    return NextResponse.json({
      message: cleanResponse,
      actionButton,
      conversationHistory: [
        ...conversationHistory,
        { role: 'user', content: message },
        { role: 'assistant', content: cleanResponse }
      ]
    });

  } catch (error) {
    console.error('Error en chat API:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}