'use client';

import React, { useState } from 'react';
import { X, Calendar, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';

const citaSchema = z.object({
  nombre: z.string().min(1, 'El nombre es requerido'),
  email: z.string().email('Email inválido'),
  telefono: z.string().min(1, 'El teléfono es requerido'),
  fecha: z.string().min(1, 'La fecha es requerida'),
  hora: z.string().min(1, 'La hora es requerida'),
  mensaje: z.string().optional()
});

type CitaFormData = z.infer<typeof citaSchema>;

interface CitaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CitaModal({ isOpen, onClose }: CitaModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<CitaFormData>({
    resolver: zodResolver(citaSchema)
  });

  const onSubmit = async (data: CitaFormData) => {
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
          message: `Hemos recibido tu solicitud de cita para el ${data.fecha} a las ${data.hora}. Te contactaremos pronto para confirmar.`,
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
          fecha: data.fecha,
          hora: data.hora,
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
      <div className="bg-black border border-gray-600 rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
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
              <h3 className="text-lg font-semibold text-white mb-2">
                ¡Solicitud Enviada!
              </h3>
              <p className="text-gray-300">
                Nos pondremos en contacto contigo pronto para confirmar tu cita.
              </p>
            </div>
          ) : (
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

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fecha" className="block mb-2 text-white">
                    Fecha preferida
                  </Label>
                  <Input
                    id="fecha"
                    type="date"
                    {...register('fecha')}
                    min={new Date().toISOString().split('T')[0]}
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  {errors.fecha && (
                    <p className="text-red-400 text-sm mt-1">{errors.fecha.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="hora" className="block mb-2 text-white">
                    Hora preferida
                  </Label>
                  <Input
                    id="hora"
                    type="time"
                    {...register('hora')}
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  {errors.hora && (
                    <p className="text-red-400 text-sm mt-1">{errors.hora.message}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="mensaje" className="flex items-center space-x-2 mb-2 text-white">
                  <MessageSquare className="h-4 w-4" />
                  <span>Mensaje (opcional)</span>
                </Label>
                <Textarea
                  id="mensaje"
                  {...register('mensaje')}
                  placeholder="Cuéntanos más sobre lo que necesitas..."
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