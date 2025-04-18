"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  phoneNumber: z.string().min(10, { message: "Por favor, introduce un número de teléfono válido." }),
  budget: z.string().min(1, { message: "Por favor, introduce tu presupuesto." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      budget: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()
      alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.")
    }, 2000)
  }

  return (
    <section id="contact" className="bg-black py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Contacto</h2>
          <p className="text-lg text-white">
            Nos encantaría saber de ti. Completa el formulario a continuación y nos pondremos en contacto contigo lo
            antes posible.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Juan Pérez" {...field} className="bg-[#222] !text-white !placeholder-white" />
                    </FormControl>
                    <FormMessage className="text-white" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Correo Electrónico</FormLabel>
                    <FormControl>
                      <Input placeholder="juan@ejemplo.com" {...field} className="bg-[#222] !text-white !placeholder-white" />
                    </FormControl>
                    <FormMessage className="text-white" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Número de Teléfono</FormLabel>
                    <FormControl>
                      <Input placeholder="+34 600 000 000" {...field} className="bg-[#222] !text-white !placeholder-white" />
                    </FormControl>
                    <FormMessage className="text-white" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Presupuesto</FormLabel>
                    <FormControl>
                      <Input placeholder="500€ - 2000€" {...field} className="bg-[#222] !text-white !placeholder-white" />
                    </FormControl>
                    <FormMessage className="text-white" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Mensaje</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Cuéntanos sobre tu proyecto..." className="min-h-[120px] bg-[#222] !text-white !placeholder-white" {...field} />
                    </FormControl>
                    <FormMessage className="text-white" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-primary text-black hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  )
}
