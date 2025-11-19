import { useEffect, useMemo, useRef, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Catalog from "./components/Catalog";
import Process from "./components/Process";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

const dict = {
  es: {
    slogan: "Nuestra excelencia y trabajo nos define",
    explore: "Explorar Colección",
    reserve_whatsapp: "Reservar por WhatsApp",
    legacy_title: "Herencia Artesanal: 80 años",
    legacy_copy1: "Desde hace ocho décadas elaboramos hamacas 100% a mano con manila natural, honrando técnicas que pasan de generación en generación.",
    legacy_copy2: "Cada pieza es un testimonio de paciencia, precisión y belleza atemporal.",
    award1: "Mejor Hamaca del Mundo 2003 — OPSA Guatemala",
    award2: "Quality Crown 2006 — Londres",
    catalog_title: "Catálogo de Productos",
    catalog_sub: "Piezas artesanales en tabaco, marfil, negro y blanco.",
    reserve_this: "Reservar esta hamaca",
    wa_message: ({ name, color }) => `Hola, quiero reservar la hamaca ${name} en color ${color}.`,
    process_title: "Proceso Artesanal",
    reserve_title: "Reserva personalizada",
    name: "Nombre y Apellido",
    color: "Color deseado",
    type: "Tipo de hamaca",
    phone: "Teléfono",
    message: "Mensaje (opcional)",
    send_reservation: "Enviar reserva",
    success: "¡Gracias! Te contactaremos pronto.",
    error: "Ocurrió un error. Intenta nuevamente.",
    contact: "Contacto",
    download_catalog: "Descargar Catálogo (PDF)",
    faq_title: "Preguntas frecuentes",
    testimonials_title: "Testimonios",
  },
  en: {
    slogan: "Our excellence and craft define us",
    explore: "Explore Collection",
    reserve_whatsapp: "Reserve via WhatsApp",
    legacy_title: "Artisanal Legacy: 80 Years",
    legacy_copy1: "For eight decades we have crafted hammocks 100% by hand from natural manila, honoring techniques passed down through generations.",
    legacy_copy2: "Each piece is a testament to patience, precision, and timeless beauty.",
    award1: "Best Hammock in the World 2003 — OPSA Guatemala",
    award2: "Quality Crown 2006 — London",
    catalog_title: "Product Catalog",
    catalog_sub: "Artisanal pieces in tobacco, ivory, black and white.",
    reserve_this: "Reserve this hammock",
    wa_message: ({ name, color }) => `Hello, I would like to reserve the ${name} hammock in ${color} color.`,
    process_title: "Artisan Process",
    reserve_title: "Custom reservation",
    name: "Full name",
    color: "Desired color",
    type: "Hammock type",
    phone: "Phone",
    message: "Message (optional)",
    send_reservation: "Send reservation",
    success: "Thank you! We will contact you soon.",
    error: "An error occurred. Please try again.",
    contact: "Contact",
    download_catalog: "Download Catalog (PDF)",
    faq_title: "FAQ",
    testimonials_title: "Testimonials",
  },
};

function useI18n() {
  const [lang, setLang] = useState("es");
  const t = (key, params) => {
    const entry = dict[lang][key];
    return typeof entry === "function" ? entry(params) : entry;
  };
  return { lang, setLang, t };
}

export default function App() {
  const { lang, setLang, t } = useI18n();
  const [products, setProducts] = useState([]);
  const backend = import.meta.env.VITE_BACKEND_URL || "";
  const catalogRef = useRef(null);

  useEffect(() => {
    fetch(`${backend}/api/products`).then(r=>r.json()).then(setProducts).catch(()=>{});
  }, [backend]);

  const processSteps = useMemo(() => [
    { image: "/process/1.jpg", copy: lang === 'es' ? "Selección de manila de la más alta calidad." : "Selection of the finest manila." },
    { image: "/process/2.jpg", copy: lang === 'es' ? "Torcido y preparación del hilo." : "Twisting and thread preparation." },
    { image: "/process/3.jpg", copy: lang === 'es' ? "Tejido artesanal con paciencia y precisión." : "Hand weaving with patience and precision." },
    { image: "/process/4.jpg", copy: lang === 'es' ? "Acabados y control de calidad." : "Finishing and quality control." },
    { image: "/process/5.jpg", copy: lang === 'es' ? "Lavado y secado natural." : "Natural washing and drying." },
    { image: "/process/6.jpg", copy: lang === 'es' ? "Empaque y entrega con cariño." : "Packaging and delivery with care." },
  ], [lang]);

  const onExplore = () => catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
  const onWhatsApp = () => window.open("https://wa.me/50576942865", "_blank");

  return (
    <div className="min-h-screen bg-[#0B0A09] text-white">
      <header className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-lg tracking-wide">Hamacas Suazo</div>
          <div className="flex items-center gap-4">
            <button onClick={() => setLang("es")} className={`text-sm px-3 py-1 rounded-full border ${lang==='es'?'bg-white/10 border-white/30':'border-white/10 hover:border-white/20'}`}>ES</button>
            <button onClick={() => setLang("en")} className={`text-sm px-3 py-1 rounded-full border ${lang==='en'?'bg-white/10 border-white/30':'border-white/10 hover:border-white/20'}`}>EN</button>
          </div>
        </div>
      </header>

      <Hero t={t} onExplore={onExplore} onWhatsApp={onWhatsApp} />
      <About t={t} />

      <div ref={catalogRef}>
        <Catalog t={t} products={products} />
      </div>

      <Process t={t} steps={processSteps} />

      <section className="bg-[#0E0D0C] text-[#E8E4D9]">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-light mb-2">{t("faq_title")}</h3>
            <ul className="text-[#C9BBA9] space-y-2 text-sm">
              <li>
                <strong>{lang==='es'? '¿Cómo cuido mi hamaca?': 'How do I care for my hammock?'}</strong><br/>
                {lang==='es'? 'Lavar a mano y secar a la sombra. Evitar químicos fuertes.': 'Hand wash and dry in shade. Avoid harsh chemicals.'}
              </li>
              <li>
                <strong>{lang==='es'? '¿Hacen envíos?': 'Do you ship?'}</strong><br/>
                {lang==='es'? 'Sí, coordinamos envíos nacionales e internacionales.': 'Yes, we coordinate national and international shipping.'}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-light mb-2">{t("testimonials_title")}</h3>
            <p className="text-[#C9BBA9] text-sm">{lang==='es'? 'Próximamente: Historias de nuestros clientes alrededor del mundo.': 'Coming soon: Stories from clients around the world.'}</p>
          </div>
        </div>
      </section>

      <Reservation t={t} products={products} />
      <Footer t={t} />
    </div>
  );
}
