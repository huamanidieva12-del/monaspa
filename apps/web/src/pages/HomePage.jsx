
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
import { Button } from '@/components/ui/button';
import { Sparkles, Heart, Leaf, ArrowRight, Facebook, Instagram, MessageCircle, Activity, Zap, Syringe } from 'lucide-react';

const featuredServices = [{
  name: 'Drenajes linfáticos',
  description: 'Tratamiento de drenaje linfático manual para mejorar la circulación y reducir la retención de líquidos.',
  icon: Activity
}, {
  name: 'Rejuvenecimiento facial',
  description: 'Tratamientos faciales avanzados para revitalizar y rejuvenecer la piel.',
  icon: Sparkles
}, {
  name: 'Reducciones corporales con aparatologías',
  description: 'Tratamientos corporales con tecnología avanzada para reducción de medidas.',
  icon: Zap
}, {
  name: 'Aplicación con vitamina C vía endovenosa',
  description: 'Infusión intravenosa de vitamina C para revitalización integral.',
  icon: Syringe
}];

const testimonials = [{
  name: 'Sofía Martínez',
  review: 'El drenaje linfático post-operatorio fue increíble. La terapeuta fue muy profesional y el ambiente es perfecto para desconectar. Volveré sin duda.',
  rating: 5
}, {
  name: 'Carlos Ruiz',
  review: 'Reservé el rejuvenecimiento facial y los resultados son visibles desde la primera sesión. El personal es muy atento y el spa impecable.',
  rating: 5
}, {
  name: 'Ana López',
  review: 'Un oasis en medio de la ciudad. Los tratamientos con aparatología son de primera calidad y el precio es muy razonable. Mi lugar favorito para cuidarme.',
  rating: 5
}, {
  name: 'Miguel Fernández',
  review: 'La terapia endovenosa con vitamina C superó mis expectativas. Atención al detalle excepcional y productos de alta gama. Totalmente recomendable.',
  rating: 5
}];

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Mona Spa - Tu oasis de tranquilidad y bienestar</title>
        <meta name="description" content="Descubre Mona Spa, tu refugio de relajación en Villa El Salvador. Tratamientos médico-estéticos, drenajes linfáticos, rejuvenecimiento facial y más." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1651065213855-e6094f99ee65" alt="Ambiente relajante de spa con velas y piedras" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

          <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
              <h1 className="heading-font text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Tu oasis de tranquilidad
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 max-w-prose">
                Descubre el equilibrio perfecto entre cuerpo y mente con nuestros tratamientos médico-estéticos premium
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]">
                  <Link to="/reservas">
                    Reservar ahora
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 transition-all duration-200 active:scale-[0.98]">
                  <Link to="/servicios">Ver servicios</Link>
                </Button>
              </div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex items-center gap-6 pt-8 border-t border-white/20">
                <span className="text-white/80 text-sm font-medium uppercase tracking-wider">Síguenos</span>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/share/1D1Qbmb6Vz/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/monaspaa?igsh=aWNnM2drZGdocHl3" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://whatsapp.com/channel/0029VbB8pX9L2ATuMwNx1k2f" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="WhatsApp">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Bienvenido a Mona Spa
              </div>
              <h2 className="heading-font text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Donde la estética se encuentra con la salud
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-prose mx-auto">
                En Mona Spa, creemos que el cuidado personal es esencial para una vida equilibrada. Nuestro equipo de especialistas utiliza tecnología avanzada y técnicas comprobadas para ofrecerte una experiencia transformadora que nutre tu cuerpo y renueva tu bienestar.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-font text-xl font-semibold text-foreground mb-2">Especialistas certificados</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Profesionales con amplia experiencia en tratamientos médico-estéticos
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-font text-xl font-semibold text-foreground mb-2">Tecnología avanzada</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Equipos de última generación para resultados óptimos y seguros
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-font text-xl font-semibold text-foreground mb-2">Ambiente exclusivo</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Espacios diseñados para tu máxima comodidad y privacidad
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
              <h2 className="heading-font text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Servicios destacados
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Descubre nuestros tratamientos más populares diseñados para tu bienestar integral
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredServices.map((service, index) => <ServiceCard key={service.name} {...service} index={index} />)}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="transition-all duration-200 active:scale-[0.98]">
                <Link to="/servicios">
                  Ver todos los servicios
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
              <h2 className="heading-font text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Lo que dicen nuestros clientes
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Experiencias reales de personas que han encontrado su bienestar en Mona Spa
              </p>
            </motion.div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
              {testimonials.map((testimonial, index) => <TestimonialCard key={testimonial.name} {...testimonial} index={index} />)}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/20 to-primary/10">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
              <h2 className="heading-font text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Comienza tu viaje hacia el bienestar
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8 max-w-prose mx-auto">
                Reserva tu tratamiento hoy y descubre por qué Mona Spa es el destino preferido para quienes buscan resultados estéticos y de salud
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]">
                <Link to="/reservas">
                  Reservar mi experiencia
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
