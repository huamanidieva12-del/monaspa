
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Por favor ingresa un email válido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

const ContactoPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Contact form data:', data);
    toast.success('Mensaje enviado. Te responderemos pronto.');
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contacto - Mona Spa</title>
        <meta name="description" content="Contáctanos para reservas, consultas o más información sobre nuestros servicios de spa. Estamos en Villa El Salvador." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="heading-font text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Contacto
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed max-w-prose mx-auto">
                Estamos aquí para ayudarte. Contáctanos para reservas, consultas o cualquier pregunta
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="heading-font text-3xl font-bold text-foreground mb-8">Información de contacto</h2>
                
                <div className="space-y-6 mb-12">
                  <Card className="border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Ubicación</h3>
                          <p className="text-foreground/70">Mona'spa, Sector 02, Gpo. 6</p>
                          <p className="text-foreground/70">Mz. F, Lote 17, Villa EL Salvador</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                          <a href="tel:+51941633385" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                            +51 941 633 385
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Email</h3>
                          <a href="mailto:monaspa0578@gmail.com" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                            monaspa0578@gmail.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Horario</h3>
                          <p className="text-foreground/70">Lunes - Viernes: 9:00 - 21:00</p>
                          <p className="text-foreground/70">Sábados: 10:00 - 20:00</p>
                          <p className="text-foreground/70">Domingos: 10:00 - 18:00</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-border/50 shadow-lg">
                  <CardContent className="pt-6">
                    <h2 className="heading-font text-3xl font-bold text-foreground mb-6">Envíanos un mensaje</h2>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-medium">Nombre</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Tu nombre" 
                                  {...field} 
                                  className="bg-background text-foreground placeholder:text-muted-foreground"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-medium">Email</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email" 
                                  placeholder="tu@email.com" 
                                  {...field} 
                                  className="bg-background text-foreground placeholder:text-muted-foreground"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-medium">Mensaje</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="¿En qué podemos ayudarte?"
                                  className="resize-none bg-background text-foreground placeholder:text-muted-foreground"
                                  rows={6}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                        >
                          {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactoPage;
