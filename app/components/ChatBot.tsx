'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Minimize2 } from 'lucide-react';
import { LiaRocketchat } from 'react-icons/lia';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import CitaModal from './modals/CitaModal';
import PlanModal from './modals/PlanModal';
import ServicioModal from './modals/ServicioModal';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  responseTime?: number; // tiempo en segundos
  actionButton?: {
    type: string;
    label: string;
  };
}

interface ChatBotProps {
  className?: string;
}

export default function ChatBot({ className = '' }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '¡Hola! Soy Horix, el asistente virtual de Horizon Creative. ¿En qué puedo ayudarte hoy? Puedo contarte sobre nuestros servicios de branding, diseño web, fotografía y marketing digital.',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<any[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Modal states
  const [citaModalOpen, setCitaModalOpen] = useState(false);
  const [planModalOpen, setPlanModalOpen] = useState(false);
  const [servicioModalOpen, setServicioModalOpen] = useState(false);
  const [selectedPlanType, setSelectedPlanType] = useState<'eco' | 'medio' | 'premium'>('eco');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    const startTime = Date.now();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          conversationHistory: conversationHistory
        }),
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const data = await response.json();
      const endTime = Date.now();
      const responseTime = (endTime - startTime) / 1000; // convertir a segundos
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
        timestamp: new Date(),
        responseTime: responseTime,
        actionButton: data.actionButton
      };

      setMessages(prev => [...prev, assistantMessage]);
      setConversationHistory(data.conversationHistory || []);
    } catch (error) {
      console.error('Error sending message:', error);
      const endTime = Date.now();
      const responseTime = (endTime - startTime) / 1000;
      
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Lo siento, hubo un error al procesar tu mensaje. Por favor, inténtalo de nuevo.',
        timestamp: new Date(),
        responseTime: responseTime
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(!isMinimized);
  };

  const handleActionButtonClick = (actionType: string) => {
    switch (actionType) {
      case 'cita':
        setCitaModalOpen(true);
        break;
      case 'plan-eco':
        setSelectedPlanType('eco');
        setPlanModalOpen(true);
        break;
      case 'plan-medio':
        setSelectedPlanType('medio');
        setPlanModalOpen(true);
        break;
      case 'plan-premium':
        setSelectedPlanType('premium');
        setPlanModalOpen(true);
        break;
      case 'servicio':
        setServicioModalOpen(true);
        break;
      default:
        console.log('Tipo de acción no reconocido:', actionType);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getResponseTimeColor = (responseTime: number) => {
    if (responseTime <= 2) return 'text-green-400';
    if (responseTime <= 5) return 'text-orange-400';
    return 'text-red-400';
  };

  const formatResponseTime = (responseTime: number) => {
    return `${responseTime.toFixed(1)}s`;
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="h-14 w-14 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black shadow-lg transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <LiaRocketchat className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-black rounded-lg shadow-2xl border border-gray-600 w-80 h-96 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-yellow-400 text-black p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <LiaRocketchat className="h-6 w-6" />
              <span className="font-semibold">Horizon IA Chat</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                onClick={minimizeChat}
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-black hover:bg-yellow-500"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button
                onClick={toggleChat}
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-black hover:bg-yellow-500"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages Area */}
          {!isMinimized && (
            <>
              <ScrollArea className="flex-1 p-4 bg-black">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className="flex flex-col space-y-2">
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.role === 'user'
                              ? 'bg-yellow-400 text-black'
                              : 'bg-gray-800 text-white'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          <div className="flex justify-between items-center mt-1">
                            <p className="text-xs opacity-70">
                              {formatTime(message.timestamp)}
                            </p>
                            {message.role === 'assistant' && message.responseTime && (
                              <p className={`text-xs ${getResponseTimeColor(message.responseTime)}`}>
                                {formatResponseTime(message.responseTime)}
                              </p>
                            )}
                          </div>
                        </div>
                        {message.actionButton && message.role === 'assistant' && (
                          <Button
                            onClick={() => handleActionButtonClick(message.actionButton!.type)}
                            className="bg-yellow-400 hover:bg-yellow-500 text-black text-xs py-1 px-3 h-auto max-w-[80%]"
                            size="sm"
                          >
                            {message.actionButton.label}
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-800 rounded-lg p-3 max-w-[80%]">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Input Area */}
              <div className="p-4 border-t border-gray-600 bg-black">
                <div className="flex space-x-2">
                  <Input
                    ref={inputRef}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Escribe tu mensaje..."
                    disabled={isLoading}
                    className="flex-1 bg-yellow-400 text-black placeholder:text-gray-700 border-yellow-400 focus:border-yellow-300"
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={isLoading || !inputMessage.trim()}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black"
                    size="icon"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
      
      {/* Modales */}
      <CitaModal 
        isOpen={citaModalOpen} 
        onClose={() => setCitaModalOpen(false)} 
      />
      <PlanModal 
        isOpen={planModalOpen} 
        onClose={() => setPlanModalOpen(false)}
        planType={selectedPlanType}
      />
      <ServicioModal 
        isOpen={servicioModalOpen} 
        onClose={() => setServicioModalOpen(false)} 
      />
    </div>
  );
}