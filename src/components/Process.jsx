import { motion } from "framer-motion";

export default function Process({ t, steps }) {
  return (
    <section className="bg-[#0E0D0C] text-[#E8E4D9]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-light mb-10">{t("process_title")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl overflow-hidden border border-[#3B2C23]/40 bg-black/20"
            >
              <div className="aspect-[4/3] bg-[#1b1917] flex items-center justify-center">
                <img src={s.image} alt="process" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 text-[#C9BBA9]">{s.copy}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
