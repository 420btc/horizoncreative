'use client';

import React, { useState } from 'react';
import { X, Calendar, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface CitaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CitaModal({ isOpen, onClose }: CitaModalProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: '',
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
        fecha: '',
        hora: '',
        mensaje: ''
      });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-yellow-500 text-black p-4 flex items-center justify-between rounded-t-lg">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Solicitar Cita</h2>
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
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ¡Solicitud Enviada!
              </h3>
              <p className="text-gray-600">
                Nos pondremos en contacto contigo pronto para confirmar tu cita.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="nombre" className="flex items-center space-x-2 mb-2">
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
                />
              </div>

              <div>
                <Label htmlFor="email" className="flex items-center space-x-2 mb-2">
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
                />
              </div>

              <div>
                <Label htmlFor="telefono" className="flex items-center space-x-2 mb-2">
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
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fecha" className="block mb-2">
                    Fecha preferida
                  </Label>
                  <Input
                    id="fecha"
                    name="fecha"
                    type="date"
                    value={formData.fecha}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <Label htmlFor="hora" className="block mb-2">
                    Hora preferida
                  </Label>
                  <Input
                    id="hora"
                    name="hora"
                    type="time"
                    value={formData.hora}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="mensaje" className="flex items-center space-x-2 mb-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Mensaje (opcional)</span>
                </Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  placeholder="Cuéntanos más sobre lo que necesitas..."
                  rows={3}
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
                  {isSubmitting ? 'Enviando...' : 'Solicitar Cita'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}