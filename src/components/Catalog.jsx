import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const currency = new Intl.NumberFormat("es-NI", { style: "currency", currency: "USD" });

export default function Catalog({ t, products }) {
  const [activeColor, setActiveColor] = useState({});

  const palette = [
    { key: "tabaco", hex: "#4a382d" },
    { key: "marfil", hex: "#E8E4D9" },
    { key: "negro", hex: "#111111" },
    { key: "blanco", hex: "#ffffff" },
  ];

  return (
    <section id="catalog" className="bg-[#141311] text-[#E8E4D9]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-light">{t("catalog_title")}</h2>
          <p className="text-[#C9BBA9] mt-2">{t("catalog_sub")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, idx) => {
            const selected = activeColor[p.id] || p.colors[0];
            const image = p.images[selected] || Object.values(p.images)[0];
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.03 }}
                className="rounded-2xl overflow-hidden border border-[#3B2C23]/40 bg-black/20 backdrop-blur-sm"
              >
                <div className="aspect-[4/3] bg-[#1b1917] flex items-center justify-center">
                  <img src={image} alt={p.name_es} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-light">{p.name_es} / {p.name_en}</h3>
                    <span className="text-[#C9BBA9]">{currency.format(p.base_price)}</span>
                  </div>
                  <p className="text-sm text-[#C9BBA9] mt-2">{p.description_es} {" "} <span className="opacity-70">{p.description_en}</span></p>

                  <div className="mt-4 flex items-center gap-3">
                    {palette.filter(c => p.colors.includes(c.key)).map(c => (
                      <button
                        key={c.key}
                        onClick={() => setActiveColor(prev => ({ ...prev, [p.id]: c.key }))}
                        aria-label={`Color ${c.key}`}
                        className={`w-7 h-7 rounded-full border transition-all ${selected === c.key ? 'ring-2 ring-[#C9BBA9]' : 'opacity-80 hover:opacity-100'}`}
                        style={{ backgroundColor: c.hex, borderColor: "#3B2C23" }}
                      />
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/50576942865?text=${encodeURIComponent(t("wa_message", { name: p.name_es, color: selected }))}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center justify-center w-full px-4 py-2 rounded-full bg-[#3B2C23] text-[#F2EDE4] hover:bg-[#4a382d] transition-colors"
                  >
                    {t("reserve_this")}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
