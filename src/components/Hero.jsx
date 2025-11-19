import { motion } from "framer-motion";

export default function Hero({ t, onExplore, onWhatsApp }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.6),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.4),transparent_40%)]"></div>
      <div className="max-w-7xl mx-auto px-6 py-28 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white">
            Hamacas <span className="font-serif">Suazo</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-[#E8E4D9]">
            {t("slogan")}
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={onExplore}
              className="px-6 py-3 rounded-full bg-[#3B2C23] text-[#F2EDE4] hover:bg-[#4a382d] transition-colors"
            >
              {t("explore")}
            </button>
            <button
              onClick={onWhatsApp}
              className="px-6 py-3 rounded-full border border-[#C9BBA9] text-[#C9BBA9] hover:bg-white/5 transition-colors"
            >
              {t("reserve_whatsapp")}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
