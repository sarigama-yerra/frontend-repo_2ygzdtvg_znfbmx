import { motion } from "framer-motion";

export default function About({ t }) {
  return (
    <section className="bg-[#0E0D0C] text-[#E8E4D9]">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-light mb-4">{t("legacy_title")}</h2>
          <p className="text-[#C9BBA9] leading-relaxed mb-4">{t("legacy_copy1")}</p>
          <p className="text-[#C9BBA9] leading-relaxed">{t("legacy_copy2")}</p>
        </motion.div>
        <motion.ul initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-4">
          <li className="border border-[#3B2C23]/50 rounded-xl p-4 bg-black/20">
            <span className="block text-sm text-[#C9BBA9]">2003</span>
            <span className="block">{t("award1")}</span>
          </li>
          <li className="border border-[#3B2C23]/50 rounded-xl p-4 bg-black/20">
            <span className="block text-sm text-[#C9BBA9]">2006</span>
            <span className="block">{t("award2")}</span>
          </li>
        </motion.ul>
      </div>
    </section>
  );
}
