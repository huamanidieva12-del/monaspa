
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <span className="heading-font text-2xl font-semibold">
                Mona Spa
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Tu oasis de tranquilidad y bienestar. Tratamientos de spa premium diseñados para renovar tu cuerpo y mente.
            </p>
          </div>

          <div>
            <span className="font-semibold text-base mb-4 block">Contacto</span>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+51941633385" className="hover:opacity-100 transition-opacity duration-200">
                  +51 941 633 385
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:monaspa0578@gmail.com" className="hover:opacity-100 transition-opacity duration-200">
                  monaspa0578@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Mona'spa, Sector 02, Gpo. 6, Mz. F, Lote 17, Villa EL Salvador</span>
              </div>
            </div>
          </div>

          <div>
            <span className="font-semibold text-base mb-4 block">Horario</span>
            <div className="space-y-2 text-sm opacity-80">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Lunes - Viernes: 9:00 - 21:00</p>
                  <p>Sábados: 10:00 - 20:00</p>
                  <p>Domingos: 10:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="font-semibold text-base mb-4 block">Síguenos</span>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-70">
          <p>&copy; 2026 Mona Spa. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/contacto" className="hover:opacity-100 transition-opacity duration-200">
              Política de privacidad
            </Link>
            <Link to="/contacto" className="hover:opacity-100 transition-opacity duration-200">
              Términos de servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
