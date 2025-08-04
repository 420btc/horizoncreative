'use client';

import React, { useState } from 'react';
import { X, Briefcase, User, Mail, Phone, Building, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ServicioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const servicios = [
  { value: 'branding', label: 'Branding e Identidad Visual' },
  { value: 'web', label: 'Diseño y Desarrollo Web' },
  { value: 'fotografia', label: 'Fotografía Profesional' },
  { value: 'marketing', label: 'Marketing Digital' },
  { value: 'seo', label: 'SEO y Posicionamiento' },
  { value: 'social', label: 'Gestión de Redes Sociales' },
  { value: 'publicidad', label: 'Campañas Publicitarias' },
  { value: 'otro', label: 'Otro servicio' }
];

export default function ServicioModal({ isOpen, onClose }: ServicioModalProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    servicio: '',
    presupuesto: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Cerrar modal después de 2 segundos
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        servicio: '',
        presupuesto: '',
        mensaje: ''
      });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-black border border-gray-600 rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-yellow-500 text-black p-4 flex items-center justify-between rounded-t-lg">
          <div className="flex items-center space-x-2">
            <Briefcase className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Solicitar Servicio</h2>
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-black hover:bg-yellow-600"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                ¡Solicitud Enviada!
              </h3>
              <p className="text-gray-300">
                Nos pondremos en contacto contigo pronto para discutir tu proyecto.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="nombre" className="flex items-center space-x-2 mb-2 text-white">
                  <User className="h-4 w-4" />
                  <span>Nombre completo</span>
                </Label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                  placeholder="Tu nombre completo"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <div>
                <Label htmlFor="email" className="flex items-center space-x-2 mb-2 text-white">
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="tu@email.com"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <div>
                <Label htmlFor="telefono" className="flex items-center space-x-2 mb-2 text-white">
                  <Phone className="h-4 w-4" />
                  <span>Teléfono</span>
                </Label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                  placeholder="+34 123 456 789"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <div>
                <Label htmlFor="empresa" className="flex items-center space-x-2 mb-2 text-white">
                  <Building className="h-4 w-4" />
                  <span>Empresa (opcional)</span>
                </Label>
                <Input
                  id="empresa"
                  name="empresa"
                  type="text"
                  value={formData.empresa}
                  onChange={handleInputChange}
                  placeholder="Nombre de tu empresa"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <div>
                <Label htmlFor="servicio" className="flex items-center space-x-2 mb-2 text-white">
                  <Briefcase className="h-4 w-4" />
                  <span>Servicio de interés</span>
                </Label>
                <Select onValueChange={(value) => handleSelectChange('servicio', value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    {servicios.map((servicio) => (
                      <SelectItem key={servicio.value} value={servicio.value}>
                        {servicio.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="presupuesto" className="block mb-2 text-white">
                  Presupuesto aproximado (opcional)
                </Label>
                <Select onValueChange={(value) => handleSelectChange('presupuesto', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un rango" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="menos-1000">Menos de 1.000€</SelectItem>
                    <SelectItem value="1000-3000">1.000€ - 3.000€</SelectItem>
                    <SelectItem value="3000-5000">3.000€ - 5.000€</SelectItem>
                    <SelectItem value="5000-10000">5.000€ - 10.000€</SelectItem>
                    <SelectItem value="mas-10000">Más de 10.000€</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="mensaje" className="flex items-center space-x-2 mb-2 text-white">
                  <MessageSquare className="h-4 w-4" />
                  <span>Descripción del proyecto</span>
                </Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  required
                  placeholder="Cuéntanos más sobre tu proyecto, objetivos, plazos, etc..."
                  rows={4}
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar Servicio'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}