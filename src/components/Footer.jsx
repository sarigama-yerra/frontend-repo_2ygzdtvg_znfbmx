export default function Footer({ t }) {
  return (
    <footer className="bg-black text-[#C9BBA9]">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 items-start">
        <div>
          <h4 className="text-white mb-2">Hamacas Suazo</h4>
          <p className="text-sm">Hogar San Antonio, 1c al norte (Casa color naranja)</p>
        </div>
        <div>
          <h4 className="text-white mb-2">{t("contact")}</h4>
          <ul className="space-y-1 text-sm">
            <li>Tel: +505 76942865</li>
            <li>WhatsApp: +505 76942865</li>
            <li>Email: info@hamacassuazo.com</li>
          </ul>
        </div>
        <div className="md:text-right text-sm">
          <a href="/catalogo.pdf" download className="inline-block px-4 py-2 rounded-full border border-[#C9BBA9] hover:bg-white/5">{t("download_catalog")}</a>
          <p className="mt-4 opacity-70">© {new Date().getFullYear()} Hamacas Suazo</p>
        </div>
      </div>
    </footer>
  );
}
