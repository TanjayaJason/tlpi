"use client";

import { ArrowUpRight, BookOpenText, CalendarDays, CheckCircle2, ChevronRight, Church, Clock3, Cross, Mail, MapPin, Menu, Music2, ScrollText, Sparkles, UsersRound, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Pilar Layanan", href: "#layanan" },
  { label: "Informasi Internal", href: "#informasi" },
];

const values = [
  { icon: CheckCircle2, title: "Ketertiban Liturgi", text: "Setiap petugas, ritus, dan tata perayaan berjalan selaras dengan pedoman Gereja." },
  { icon: Music2, title: "Keanggunan Musik", text: "Musik liturgi membantu umat berdoa, menyatu, dan menghayati misteri iman." },
  { icon: Sparkles, title: "Kesucian Suasana Ibadat", text: "Ruang, gerak, dan pelayanan dirawat agar menghadirkan suasana doa yang khidmat." },
];

const services = [
  { number: "01", icon: Music2, title: "Musica Liturgia", text: "Pengelolaan partitur, katalog lagu liturgi, dan panduan pelayanan bagi organis, pemazmur, serta tim koor.", button: "Akses dokumen", href: "#informasi", active: true },
  { number: "02", icon: UsersRound, title: "Tata Gerak Liturgi", text: "Panduan sikap tubuh, alur prosesi, serta pedoman tugas misdinar, lektor, pemandu, dan pelayan komuni.", button: "Akses panduan", href: "#informasi", active: true },
  { number: "03", icon: BookOpenText, title: "Misa & Ibadat Khusus", text: "Teks dan tata perayaan khusus untuk Natal, Pekan Suci, penerimaan Sakramen, pemberkatan, dan ibadat arwah.", button: "Segera hadir", href: "#layanan", active: false },
];

const notices = [
  { day: "12", month: "OKT", tag: "Koordinasi", title: "Briefing Petugas Misa Hari Minggu", text: "Seluruh lektor, pemazmur, misdinar, dan petugas tata laksana hadir 30 menit sebelum Misa.", time: "06.30 WIB" },
  { day: "18", month: "OKT", tag: "Musica Liturgia", title: "Latihan Gabungan Koor Lingkungan", text: "Persiapan lagu-lagu untuk Perayaan Ekaristi Hari Minggu Misi Sedunia di aula paroki.", time: "19.00 WIB" },
  { day: "25", month: "OKT", tag: "Formasi", title: "Pembekalan Lektor & Pemazmur", text: "Pendalaman spiritualitas pelayanan sabda dan latihan teknis pembacaan di gereja utama.", time: "09.00 WIB" },
];

function LogoMark() {
  return <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-t-full rounded-b-xl border border-[#d6b76e]/45 bg-[#102b45] text-[#e6c97d] shadow-[inset_0_0_18px_rgba(230,201,125,.08)]"><Cross size={20} strokeWidth={1.7} aria-hidden="true" /></span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f6f0] text-[#16283a]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b2238]/95 text-white backdrop-blur-xl">
        <div className="page-shell flex h-20 items-center justify-between">
          <a href="#beranda" className="flex items-center gap-3" aria-label="TLPI Bidang 4, kembali ke beranda"><LogoMark /><div className="leading-none"><span className="block font-serif text-[1.05rem] font-semibold tracking-wide">TLPI Bidang 4</span><span className="mt-1.5 block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#d6b76e]">Seksi Liturgi</span></div></a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigasi utama">{navItems.map((item) => <a key={item.href} href={item.href} className="nav-link">{item.label}</a>)}</nav>
          <div className="hidden lg:block"><a href="#informasi" className="button-gold"><UsersRound size={17} aria-hidden="true" />Portal Petugas</a></div>
          <button type="button" className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 lg:hidden" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Tutup menu" : "Buka menu"}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
        {menuOpen && <nav id="mobile-menu" className="border-t border-white/10 bg-[#0b2238] px-5 py-5 lg:hidden" aria-label="Navigasi seluler"><div className="mx-auto flex max-w-7xl flex-col gap-1">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white">{item.label}</a>)}<a href="#informasi" onClick={() => setMenuOpen(false)} className="button-gold mt-3 justify-center"><UsersRound size={17} aria-hidden="true" /> Portal Petugas</a></div></nav>}
      </header>

      <section id="beranda" className="relative isolate min-h-[750px] overflow-hidden bg-[#0b2238] pb-20 pt-32 text-white sm:pt-40 lg:min-h-[790px] lg:pb-28 lg:pt-48">
        <div className="hero-grid absolute inset-0 -z-20 opacity-30" />
        <div className="absolute -right-32 top-24 -z-10 h-[560px] w-[560px] rounded-full border border-[#d6b76e]/15 sm:right-[-80px]" />
        <div className="absolute -right-16 top-40 -z-10 h-[440px] w-[440px] rounded-full border border-[#d6b76e]/10 sm:right-[-18px]" />
        <div className="absolute bottom-0 right-[-50px] -z-10 hidden h-[560px] w-[430px] rounded-t-full border border-[#d6b76e]/25 bg-[#0e2a44]/70 xl:block"><div className="absolute inset-x-16 bottom-0 top-24 rounded-t-full border border-[#d6b76e]/30" /><Cross className="absolute left-1/2 top-28 -translate-x-1/2 text-[#d6b76e]/70" size={64} strokeWidth={1} /></div>
        <div className="page-shell grid items-center gap-14 lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,.62fr)]">
          <div className="max-w-4xl"><div className="eyebrow-light"><span /> Selamat datang di pusat layanan liturgi</div><h1 className="mt-6 max-w-[920px] font-serif text-[clamp(2.65rem,6vw,5.35rem)] font-medium leading-[1.02] tracking-[-0.035em]">Pusat Informasi &amp; Manajemen <em className="font-normal text-[#e3c575]">Tata Laksana</em> Perayaan dan Ibadat</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">Mewujudkan perayaan liturgi yang benar, indah, hidup dan memerdekakan.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="#layanan" className="button-gold justify-center sm:justify-start">Eksplorasi Layanan <ChevronRight size={17} aria-hidden="true" /></a><a href="#informasi" className="button-outline justify-center sm:justify-start"><CalendarDays size={17} aria-hidden="true" /> Jadwal Petugas</a></div></div>
          <div className="relative mx-auto w-full max-w-md lg:mt-14"><div className="rounded-t-[10rem] border border-[#d6b76e]/35 bg-white/[0.055] px-7 pb-8 pt-24 backdrop-blur-sm sm:px-9 sm:pt-28"><Church className="absolute left-1/2 top-9 -translate-x-1/2 text-[#d6b76e]" size={40} strokeWidth={1.2} aria-hidden="true" /><p className="font-serif text-2xl leading-snug text-white">“Hendaklah segala sesuatu berlangsung dengan sopan dan teratur.”</p><div className="mt-6 h-px w-12 bg-[#d6b76e]" /><p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#d6b76e]">1 Korintus 14:40</p></div></div>
        </div>
        <div className="page-shell mt-16 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/45 lg:mt-20"><span className="h-px w-10 bg-[#d6b76e]/60" /> Melayani dengan tertib, anggun, dan penuh hormat</div>
      </section>

      <section id="tentang" className="scroll-mt-20 py-20 sm:py-28"><div className="page-shell"><div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20"><div><div className="eyebrow-dark"><span /> Tentang kami</div><h2 className="section-title mt-5">Melayani altar,<br /><em>menyertai umat.</em></h2></div><div className="max-w-3xl lg:pt-3"><p className="text-xl leading-9 text-[#2e4050] sm:text-2xl sm:leading-10">Seksi Liturgi Bidang 4 TLPI hadir untuk menata, mendampingi, dan mengembangkan seluruh pelayanan perayaan iman di paroki.</p><p className="mt-5 leading-7 text-slate-600">Bersama para imam, pengurus lingkungan, koor, lektor, pemazmur, misdinar, serta seluruh petugas liturgi, kami memastikan setiap perayaan menjadi ruang perjumpaan yang tertib, hangat, dan sungguh membantu umat berdoa.</p></div></div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[#d8d2c4] bg-[#d8d2c4] md:grid-cols-3">{values.map((value) => { const Icon = value.icon; return <article key={value.title} className="group bg-[#fffdf8] p-7 transition-colors hover:bg-white sm:p-9"><div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-full bg-[#102b45] text-[#e0c374]"><Icon size={22} strokeWidth={1.7} aria-hidden="true" /></span><span className="font-serif text-2xl text-[#d6b76e]/60">✦</span></div><h3 className="mt-7 font-serif text-2xl font-semibold text-[#102b45]">{value.title}</h3><p className="mt-3 leading-7 text-slate-600">{value.text}</p></article>; })}</div></div></section>

      <section id="layanan" className="scroll-mt-20 bg-[#e9edf0] py-20 sm:py-28"><div className="page-shell"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><div className="eyebrow-dark"><span /> Pilar utama</div><h2 className="section-title mt-5">Tiga poros pelayanan<br /><em>liturgi paroki.</em></h2></div><p className="max-w-md leading-7 text-slate-600">Sumber daya praktis untuk membantu setiap pelayan mempersiapkan tugas dengan jelas dan penuh penghayatan.</p></div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">{services.map((service) => { const Icon = service.icon; return <article key={service.title} className="service-card group"><div className="flex items-start justify-between"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#102b45] text-[#e0c374] transition-transform duration-300 group-hover:-translate-y-1"><Icon size={26} strokeWidth={1.5} aria-hidden="true" /></span><span className="font-serif text-4xl text-[#102b45]/12">{service.number}</span></div><h3 className="mt-10 font-serif text-[1.7rem] font-semibold text-[#102b45]">{service.title}</h3><p className="mt-4 min-h-[112px] leading-7 text-slate-600">{service.text}</p><a href={service.href} aria-disabled={!service.active} className={service.active ? "service-link" : "service-link cursor-default opacity-50"}>{service.button} {service.active && <ArrowUpRight size={17} aria-hidden="true" />}</a></article>; })}</div></div></section>

      <section id="informasi" className="scroll-mt-20 bg-[#102b45] py-20 text-white sm:py-28"><div className="page-shell"><div className="grid gap-10 lg:grid-cols-[.58fr_1.42fr] lg:gap-16"><div><div className="eyebrow-light"><span /> Papan informasi</div><h2 className="mt-5 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl">Tetap terhubung dengan pelayanan.</h2><p className="mt-5 max-w-md leading-7 text-slate-300">Informasi singkat untuk koordinasi petugas, latihan, dan agenda pembinaan liturgi.</p><a href="#footer" className="button-gold mt-8 inline-flex">Lihat semua agenda <ChevronRight size={17} aria-hidden="true" /></a></div>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045]">{notices.map((notice, index) => <article key={notice.title} className={`grid gap-5 p-6 sm:grid-cols-[82px_1fr_auto] sm:items-center sm:p-7 ${index !== notices.length - 1 ? "border-b border-white/10" : ""}`}><div className="flex h-[76px] w-[76px] shrink-0 flex-col items-center justify-center rounded-2xl border border-[#d6b76e]/35 bg-[#d6b76e]/10"><span className="font-serif text-3xl leading-none text-[#e3c575]">{notice.day}</span><span className="mt-1 text-[0.68rem] font-bold tracking-[0.16em] text-white/55">{notice.month}</span></div><div><span className="text-xs font-bold uppercase tracking-[0.16em] text-[#d6b76e]">{notice.tag}</span><h3 className="mt-2 font-serif text-xl font-semibold sm:text-[1.35rem]">{notice.title}</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">{notice.text}</p></div><div className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-white/70 sm:self-start sm:pt-1"><Clock3 size={15} className="text-[#d6b76e]" aria-hidden="true" /> {notice.time}</div></article>)}</div></div></div></section>

      <section className="border-b border-[#d8d2c4] bg-[#fffdf8] py-12"><div className="page-shell flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div className="flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-full bg-[#f2ead7] text-[#9d7932]"><ScrollText size={22} aria-hidden="true" /></span><div><p className="font-serif text-xl font-semibold">Butuh panduan untuk pelayanan?</p><p className="mt-1 text-sm text-slate-500">Hubungi koordinator TLPI untuk arahan dan dokumen terbaru.</p></div></div><a href="mailto:liturgi@parokiteladan.org" className="inline-flex items-center gap-2 text-sm font-bold text-[#102b45] underline decoration-[#d6b76e] decoration-2 underline-offset-8">Hubungi Seksi Liturgi <ArrowUpRight size={16} /></a></div></section>

      <footer id="footer" className="bg-[#071a2b] py-14 text-white"><div className="page-shell grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr]"><div className="max-w-md"><div className="flex items-center gap-3"><LogoMark /><div><p className="font-serif text-lg font-semibold">TLPI Bidang 4</p><p className="text-xs uppercase tracking-[0.17em] text-[#d6b76e]">Seksi Liturgi Paroki</p></div></div><p className="mt-6 text-sm leading-7 text-slate-400">Mendukung pelayanan liturgi yang tertib, indah, hidup, dan berakar pada semangat persekutuan umat.</p></div><div><h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#d6b76e]">Tautan Cepat</h3><div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">{navItems.slice(1).map((item) => <a key={item.href} href={item.href} className="hover:text-white">{item.label}</a>)}</div></div><div><h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#d6b76e]">Kontak</h3><div className="mt-5 space-y-4 text-sm leading-6 text-slate-300"><p className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-[#d6b76e]" /> Sekretariat Paroki<br />Jl. Gereja No. 12, Jakarta</p><a href="mailto:liturgi@parokiteladan.org" className="flex gap-3 hover:text-white"><Mail size={18} className="shrink-0 text-[#d6b76e]" /> liturgi@parokiteladan.org</a></div></div></div><div className="page-shell mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Bidang 4 — Tata Laksana Perayaan dan Ibadat.</p><p>Ad Maiorem Dei Gloriam</p></div></footer>
    </main>
  );
}
