
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GalleryImage from '@/components/GalleryImage.jsx';

const galleryImages = [
  {
    src: 'https://horizons-cdn.hostinger.com/7f064dfd-0531-4fc5-814c-35f640f3d05e/93497ff04af8957e793f51355d0e4da4.png',
    title: 'DOS ALISADOS Y PAGA UNO',
    description: 'Alisado definitivo duración al crecimiento. Oferta S/.200',
  },
  {
    src: 'https://horizons-cdn.hostinger.com/7f064dfd-0531-4fc5-814c-35f640f3d05e/c9398a86121d467a052ef2a6816a34b9.png',
    title: 'LIMPIEZA FACIAL',
    description: 'Mes de aniversario: DOS POR S/.80. Incluye limpieza con CLEAR, crema exfoliante, mascarilla LED, sérum de hidratación, punta de diamante, extracción de puntos negros',
  },
  {
    src: 'https://horizons-cdn.hostinger.com/7f064dfd-0531-4fc5-814c-35f640f3d05e/ea90d62ed30b9abd4de59550aec5cc5d.png',
    title: 'DEPILACIÓN DEFINITIVA',
    description: 'Depilación masculina/femenina definitiva con láser IPL. Zona íntima (Bikini, Zona Pélvica). Separa tu cita: 941633385',
  },
  {
    src: 'https://horizons-cdn.hostinger.com/7f064dfd-0531-4fc5-814c-35f640f3d05e/b6b0b9e7e7c217cbcfe603eefd70cc5c.png',
    title: 'AUMENTO DE GLÚTEOS',
    description: 'Glúteos de impacto. Antes y después. Consultas: 941633385',
  },
  {
    src: 'https://horizons-cdn.hostinger.com/7f064dfd-0531-4fc5-814c-35f640f3d05e/1013f211dd43db6a4e6a1942f355f7fe.png',
    title: 'PLAN 30 DÍAS REDUCTOR',
    description: '¿Estás preparada para las fiestas de fin de año? Reduce medidas y luce un cuerpo espectacular. Programa 100% personalizado con resultados reales duraderos. Incluye 1 dieta alimenticia. Contacto: 941633385 / 997260080',
  },
  {
    src: 'https://horizons-cdn.hostinger.com/7f064dfd-0531-4fc5-814c-35f640f3d05e/244d1dd2907250a00f328af646ce051c.png',
    title: 'BALAYAGE',
    description: 'Mes de aniversario: DOS POR S/.300. Hasta el brasier / No afro. Separa tu cita: 941633385 / 997260080',
  },
  {
    src: 'https://horizons-cdn.hostinger.com/7f064dfd-0531-4fc5-814c-35f640f3d05e/c4ef7ea865118399d189a911bd8f5750.png',
    title: 'REDUCCIÓN DE PAPADA',
    description: 'Mes de aniversario. Antes y después. Preguntar por promociones: 941633385 / 997260080',
  },
];

const GaleriaPage = () => {
  return (
    <>
      <Helmet>
        <title>Promociones y Galería - Mona Spa</title>
        <meta name="description" content="Descubre nuestras promociones especiales y resultados de tratamientos en Mona Spa. Alisados, limpieza facial, depilación láser y más." />
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
                Promociones y Galería
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed max-w-prose mx-auto">
                Aprovecha nuestras ofertas especiales de aniversario y descubre los resultados de nuestros tratamientos
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <GalleryImage key={index} {...image} index={index} />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default GaleriaPage;
