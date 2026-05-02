"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wind, LayoutDashboard, ClipboardList, CalendarPlus, PackageSearch, ShieldCheck, Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/",          label: "Home",        icon: Wind },
  { href: "/customer",  label: "Services",    icon: PackageSearch },
  { href: "/request",   label: "Book Service",icon: CalendarPlus },
  { href: "/dashboard", label: "My Orders",   icon: ClipboardList },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const path = usePathname();
  const isHome = path === "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const light = isHome && !scrolled;
  const solidBg   = "rgba(255,255,255,0.97)";
  const transpBg  = "transparent";

  return (
    <>
      <nav style={{
        position: "fixed", inset: "0 0 auto 0", zIndex: 100,
        background:     light ? transpBg : solidBg,
        backdropFilter: scrolled ? "blur(14px)" : "none",
        boxShadow:      light ? "none" : "0 1px 24px rgba(0,0,0,0.07)",
        borderBottom:   `1px solid ${light ? "transparent" : "rgba(212,232,224,0.7)"}`,
        transition:     "background 0.35s, box-shadow 0.35s, border-color 0.35s",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px", height: 70, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* ── Logo ── */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg,#0f6e56,#1a9e75)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(15,110,86,0.35)" }}>
              <Wind size={20} color="#fff" strokeWidth={2.2} />
            </div>
            <span style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 800, fontSize: 22, color: light ? "#fff" : "#0a4a35", letterSpacing: "-0.4px" }}>
              Cool<span style={{ color: "#1a9e75" }}>Desk</span>
            </span>
          </Link>

          {/* ── Desktop links ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {navLinks.map(({ href, label }) => {
              const active = path === href;
              return (
                <Link key={href} href={href} style={{
                  padding: "8px 16px", borderRadius: 9, fontSize: 14, fontWeight: 600,
                  textDecoration: "none", transition: "all 0.18s",
                  color:      active ? "#0f6e56" : light ? "rgba(255,255,255,0.88)" : "#3d5a4e",
                  background: active && !light ? "rgba(15,110,86,0.09)" : "transparent",
                  borderBottom: active ? "2px solid #0f6e56" : "2px solid transparent",
                }}>{label}</Link>
              );
            })}
          </div>

          {/* ── Right CTAs ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Link href="/request" style={{
              display: "flex", alignItems: "center", gap: 7,
              padding: "10px 22px", borderRadius: 50,
              background: "linear-gradient(135deg,#0f6e56,#1a9e75)",
              color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none",
              boxShadow: "0 4px 16px rgba(15,110,86,0.38)",
              transition: "transform 0.18s, box-shadow 0.18s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 22px rgba(15,110,86,0.45)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(15,110,86,0.38)"; }}
            >
              <CalendarPlus size={15} /> Book Now
            </Link>
            <Link href="/admin" style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "10px 18px", borderRadius: 50, fontSize: 13, fontWeight: 600,
              textDecoration: "none", transition: "all 0.18s",
              border: `1.5px solid ${light ? "rgba(255,255,255,0.45)" : "#0f6e56"}`,
              color: light ? "#fff" : "#0f6e56",
            }}>
              <ShieldCheck size={14} /> Admin
            </Link>
          </div>
        </div>
      </nav>

      {/* ── WhatsApp float ── */}
      <a href="https://wa.me/971500000000" className="whatsapp-float" aria-label="Chat on WhatsApp">
        <MessageCircle size={26} color="#fff" fill="#fff" />
      </a>
    </>
  );
}
