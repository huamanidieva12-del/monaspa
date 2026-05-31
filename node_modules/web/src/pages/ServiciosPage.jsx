
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import { Sparkles, Activity, Zap, Syringe, ShieldPlus } from 'lucide-react';

const services = {
  corporales: [
    {
      name: 'Drenajes linfáticos',
      description: 'Tratamiento de drenaje linfático manual para mejorar la circulación y reducir la retención de líquidos.',
      icon: Activity,
    },
    {
      name: 'Reducciones corporales con aparatologías',
      description: 'Tratamientos corporales con tecnología avanzada para reducción de medidas y modelado corporal.',
      icon: Zap,
    },
    {
      name: 'Drenajes post operatorios',
      description: 'Drenaje linfático especializado post-operatorio para una recuperación óptima y reducción de inflamación.',
      icon: ShieldPlus,
    },
    {
      name: 'Reducción con endolifting',
      description: 'Tratamiento de lifting endoscópico para reducción y firmeza corporal con resultados duraderos.',
      icon: Zap,
    },
  ],
  faciales: [
    {
      name: 'Rejuvenecimiento facial',
      description: 'Tratamientos faciales avanzados para revitalizar, iluminar y rejuvenecer la piel del rostro.',
      icon: Sparkles,
    },
  ],
  endovenosas: [
    {
      name: 'Aplicación con vitamina C vía endovenosa',
      description: 'Infusión intravenosa de vitamina C para revitalización integral, refuerzo inmunológico y luminosidad.',
      icon: Syringe,
    },
    {
      name: 'Resveratrol en vía endovenosa',
      description: 'Infusión intravenosa de resveratrol para antioxidación profunda, anti-envejecimiento y bienestar general.',
      icon: Syringe,
    },
  ],
};

const ServiciosPage = () => {
  return (
    <>
      <Helmet>
        <title>Servicios - Mona Spa</title>
        <meta name="description" content="Descubre nuestra gama de servicios médico-estéticos: drenajes linfáticos, rejuvenecimiento facial, aparatología y terapias endovenosas." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h1 className="heading-font text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Nuestros servicios
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed max-w-prose mx-auto">
                Tratamientos médico-estéticos diseñados para tu bienestar, realizados por especialistas con tecnología de vanguardia
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-3">Tratamientos Corporales</h2>
              <p className="text-lg text-foreground/70 mb-8">
                Tecnología y técnicas especializadas para modelar tu figura y mejorar tu recuperación
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.corporales.map((service, index) => (
                  <ServiceCard key={service.name} {...service} index={index} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-3">Tratamientos Faciales</h2>
              <p className="text-lg text-foreground/70 mb-8">
                Revitaliza y rejuvenece tu piel con protocolos avanzados
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.faciales.map((service, index) => (
                  <ServiceCard key={service.name} {...service} index={index} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-3">Terapias Endovenosas</h2>
              <p className="text-lg text-foreground/70 mb-8">
                Nutrición celular profunda para revitalización y bienestar integral
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.endovenosas.map((service, index) => (
                  <ServiceCard key={service.name} {...service} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServiciosPage;
