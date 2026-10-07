import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets:["latin"], variable:"--font-manrope", display:"swap" });
const cormorant = Cormorant_Garamond({ subsets:["latin"], variable:"--font-cormorant", display:"swap", weight:["400","500","600","700"] });

export const metadata:Metadata = { title:"TLPI Bidang 4 | Tata Laksana Perayaan dan Ibadat", description:"Pusat informasi dan manajemen pelayanan liturgi Seksi Liturgi Bidang 4 TLPI.", icons:{ icon:"/favicon.svg", shortcut:"/favicon.svg" } };

export default function RootLayout({ children }:Readonly<{ children:React.ReactNode }>) { return <html lang="id"><body className={`${manrope.variable} ${cormorant.variable} antialiased`}>{children}</body></html>; }
