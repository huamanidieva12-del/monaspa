
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BookingForm from '@/components/BookingForm.jsx';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Confirmación inmediata por email',
  'Recordatorio 24 horas antes',
  'Cancelación gratuita hasta 12 horas antes',
  'Atención personalizada',
];

const ReservasPage = () => {
  return (
    <>
      <Helmet>
        <title>Reservas - Mona Spa</title>
        <meta name="description" content="Reserva tu tratamiento de spa en Mona Spa. Selecciona servicio, fecha y hora. Confirmación inmediata y cancelación gratuita." />
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
                Reserva tu experiencia
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed max-w-prose mx-auto">
                Selecciona tu tratamiento preferido y elige el momento perfecto para tu sesión de bienestar
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <Card className="border-border/50 shadow-lg">
                  <CardContent className="pt-6">
                    <h2 className="heading-font text-3xl font-bold text-foreground mb-6">Completa tu reserva</h2>
                    <BookingForm />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-border/50 bg-secondary sticky top-24">
                  <CardContent className="pt-6">
                    <h3 className="heading-font text-2xl font-bold text-foreground mb-6">Beneficios de reservar</h3>
                    <ul className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 pt-8 border-t border-border">
                      <h4 className="font-semibold text-foreground mb-3">¿Necesitas ayuda?</h4>
                      <p className="text-sm text-foreground/70 mb-4">
                        Nuestro equipo está disponible para asistirte con tu reserva
                      </p>
                      <div className="space-y-2 text-sm">
                        <p className="text-foreground/80">
                          <span className="font-medium">Teléfono:</span>{' '}
                          <a href="tel:+51941633385" className="hover:text-primary transition-colors duration-200">
                            +51 941 633 385
                          </a>
                        </p>
                        <p className="text-foreground/80 flex items-center gap-1">
                          <span className="font-medium">Email:</span>{' '}
                          <a href="mailto:monaspa0578@gmail.com" className="hover:text-primary transition-colors duration-200">
                            monaspa0578@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
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

export default ReservasPage;
