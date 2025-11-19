import { useState } from "react";

export default function Reservation({ t, products }) {
  const [form, setForm] = useState({ name: "", color: "tabaco", hammock_type: products[0]?.id || "unipersonal", phone: "", message: "" });
  const [status, setStatus] = useState(null);
  const backend = import.meta.env.VITE_BACKEND_URL || "";

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${backend}/api/reservations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="reserve" className="bg-[#141311] text-[#E8E4D9]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-light mb-6">{t("reserve_title")}</h2>
        <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-sm text-[#C9BBA9] mb-1">{t("name")}</label>
            <input className="w-full bg-black/30 border border-[#3B2C23]/40 rounded-lg px-4 py-2" value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} required />
          </div>
          <div>
            <label className="block text-sm text-[#C9BBA9] mb-1">{t("color")}</label>
            <select className="w-full bg-black/30 border border-[#3B2C23]/40 rounded-lg px-4 py-2" value={form.color} onChange={(e)=>setForm({ ...form, color: e.target.value })}>
              {["tabaco","marfil","negro","blanco"].map(c=> <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm text-[#C9BBA9] mb-1">{t("type")}</label>
            <select className="w-full bg-black/30 border border-[#3B2C23]/40 rounded-lg px-4 py-2" value={form.hammock_type} onChange={(e)=>setForm({ ...form, hammock_type: e.target.value })}>
              {products.map(p=> <option key={p.id} value={p.id}>{p.name_es} / {p.name_en}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm text-[#C9BBA9] mb-1">{t("phone")}</label>
            <input className="w-full bg-black/30 border border-[#3B2C23]/40 rounded-lg px-4 py-2" value={form.phone} onChange={(e)=>setForm({ ...form, phone: e.target.value })} required />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-[#C9BBA9] mb-1">{t("message")}</label>
            <textarea className="w-full bg-black/30 border border-[#3B2C23]/40 rounded-lg px-4 py-2" rows={4} value={form.message} onChange={(e)=>setForm({ ...form, message: e.target.value })} />
          </div>
          <button className="sm:col-span-2 mt-2 inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#3B2C23] text-[#F2EDE4] hover:bg-[#4a382d] transition-colors">
            {t("send_reservation")}
          </button>
          <a href="https://wa.me/50576942865" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 rounded-full bg-[#25D366] text-white px-5 py-3 shadow-xl">WhatsApp +505 76942865</a>

          {status === "success" && <p className="sm:col-span-2 text-emerald-400">{t("success")}</p>}
          {status === "error" && <p className="sm:col-span-2 text-rose-400">{t("error")}</p>}
        </form>
      </div>
    </section>
  );
}
