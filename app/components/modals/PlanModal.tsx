'use client';

import React, { useState } from 'react';
import { X, Star, User, Mail, Phone, Building, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';

const planSchema = z.object({
  nombre: z.string().min(1, 'El nombre es requerido'),
  email: z.string().email('Email inválido'),
  telefono: z.string().min(1, 'El teléfono es requerido'),
  empresa: z.string().min(1, 'La empresa es requerida'),
  mensaje: z.string().optional()
});

type PlanFormData = z.infer<typeof planSchema>;

interface PlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  planType: 'eco' | 'medio' | 'premium';
}

const planDetails = {
  eco: {
    name: 'Plan ECO',
    price: '299€/mes',
    color: 'bg-green-500',
    features: [
      'Diseño básico de logo',
      'Página web simple',
      'Gestión básica de redes sociales',
      'Soporte por email'
    ]
  },
  medio: {
    name: 'Plan MEDIO',
    price: '599€/mes',
    color: 'bg-blue-500',
    features: [
      'Branding completo',
      'Sitio web profesional',
      'Fotografía básica',
      'Estrategia de marketing digital',
      'Soporte prioritario'
    ]
  },
  premium: {
    name: 'Plan PREMIUM',
    price: '999€/mes',
    color: 'bg-purple-500',
    features: [
      'Todos los servicios incluidos',
      'Fotografía profesional',
      'Campañas publicitarias avanzadas',
      'Soporte 24/7',
      'Consultor dedicado',
      'Reportes mensuales detallados'
    ]
  }
};

export default function PlanModal({ isOpen, onClose, planType }: PlanModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const plan = planDetails[planType];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<PlanFormData>({
    resolver: zodResolver(planSchema)
  });

  const onSubmit = async (data: PlanFormData) => {
    setIsSubmitting(true);

    try {
      // Enviar email al usuario
      await emailjs.send(
        'service_06mwro7',
        'template_fbh9vyx',
        {
          to_name: data.nombre,
          to_email: data.email,
          from_name: 'Agencia Creativa',
          message: `Hemos recibido tu solicitud para contratar el ${plan.name}. Te contactaremos pronto para proceder con la activación.`,
          reply_to: data.email
        },
        'crT-xgI3BjGddLEgY'
      );

      // Enviar email a la empresa
      await emailjs.send(
        'service_06mwro7',
        'template_o8x6wug',
        {
          from_name: data.nombre,
          from_email: data.email,
          phone: data.telefono,
          empresa: data.empresa,
          plan: plan.name,
          precio: plan.price,
          message: data.mensaje || 'Sin mensaje adicional',
          reply_to: data.email
        },
        'crT-xgI3BjGddLEgY'
      );

      setSubmitted(true);
      
      // Cerrar modal después de 2 segundos
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        reset();
      }, 2000);
    } catch (error) {
      console.error('Error al enviar el email:', error);
      alert('Error al enviar la solicitud. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-black border border-gray-600 rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className={`${plan.color} text-white p-4 flex items-center justify-between rounded-t-lg`}>
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Contratar {plan.name}</h2>
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-white hover:bg-white hover:bg-opacity-20"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className={`w-16 h-16 ${plan.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Star className={`h-8 w-8 ${plan.color.replace('bg-', 'text-')}`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                ¡Solicitud Enviada!
              </h3>
              <p className="text-gray-300">
                Nos pondremos en contacto contigo pronto para activar tu {plan.name}.
              </p>
            </div>
          ) : (
            <>
              {/* Plan Details */}
              <div className="mb-6 p-4 bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                  <span className="text-2xl font-bold text-white">{plan.price}</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className={`w-2 h-2 ${plan.color} rounded-full`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="nombre" className="flex items-center space-x-2 mb-2 text-white">
                    <User className="h-4 w-4" />
                    <span>Nombre completo</span>
                  </Label>
                  <Input
                    id="nombre"
                    type="text"
                    {...register('nombre')}
                    placeholder="Tu nombre completo"
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  {errors.nombre && (
                    <p className="text-red-400 text-sm mt-1">{errors.nombre.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="flex items-center space-x-2 mb-2 text-white">
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="tu@email.com"
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="telefono" className="flex items-center space-x-2 mb-2 text-white">
                    <Phone className="h-4 w-4" />
                    <span>Teléfono</span>
                  </Label>
                  <Input
                    id="telefono"
                    type="tel"
                    {...register('telefono')}
                    placeholder="+34 123 456 789"
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  {errors.telefono && (
                    <p className="text-red-400 text-sm mt-1">{errors.telefono.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="empresa" className="flex items-center space-x-2 mb-2 text-white">
                    <Building className="h-4 w-4" />
                    <span>Empresa</span>
                  </Label>
                  <Input
                    id="empresa"
                    type="text"
                    {...register('empresa')}
                    placeholder="Nombre de tu empresa"
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  {errors.empresa && (
                    <p className="text-red-400 text-sm mt-1">{errors.empresa.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="mensaje" className="flex items-center space-x-2 mb-2 text-white">
                    <MessageSquare className="h-4 w-4" />
                    <span>Mensaje (opcional)</span>
                  </Label>
                  <Textarea
                    id="mensaje"
                    {...register('mensaje')}
                    placeholder="Cuéntanos más sobre tu proyecto..."
                    rows={3}
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1 border-gray-600 text-white hover:bg-gray-800"
                    disabled={isSubmitting}
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    className={`flex-1 ${plan.color} hover:opacity-90 text-white`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : `Contratar ${plan.name}`}
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}