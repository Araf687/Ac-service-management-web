"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import {
  Wind, Wrench, Refrigerator, Sparkles, Package, CalendarCheck2,
  Clock, ArrowRight, CheckCircle2
} from "lucide-react";

function useFade() {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.08 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return { ref, v };
}
function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, v } = useFade();
  return <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(28px)", transition: `opacity .65s ${delay}s ease, transform .65s ${delay}s ease` }}>{children}</div>;
}

const services = [
  { Icon: Wind,         img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80&auto=format&fit=crop", name: "AC Gas Refill",        price: "From AED 150", time: "1–2 hrs", popular: true,  desc: "R22 & R410A refrigerant top-up. Full pressure check, leak test and performance verification included." },
  { Icon: Wrench,       img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop", name: "AC Repair",            price: "On inspection", time: "1–3 hrs", popular: false, desc: "Full diagnostic — compressor, PCB, fan motor, capacitor, thermostat. All major brands." },
  { Icon: Refrigerator, img: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80&auto=format&fit=crop", name: "Refrigerator Repair",  price: "On inspection", time: "1–3 hrs", popular: false, desc: "Cooling failure, compressor noise, ice buildup, water leaks. LG, Samsung, Bosch and more." },
  { Icon: Package,      img: "https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?w=600&q=80&auto=format&fit=crop", name: "AC Installation",      price: "From AED 200", time: "2–4 hrs", popular: false, desc: "Split, cassette & ducted units. Copper piping, electrical connection and commissioning." },
  { Icon: Sparkles,     img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80&auto=format&fit=crop", name: "AC Deep Cleaning",     price: "From AED 120", time: "1–2 hrs", popular: true,  desc: "Full coil wash, filter clean, drain flush and sanitisation. Improves efficiency and air quality." },
  { Icon: CalendarCheck2, img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&auto=format&fit=crop", name: "Annual Contract (AMC)", price: "From AED 800/yr", time: "Scheduled", popular: false, desc: "2–4 planned maintenance visits per year. Priority response, discounted parts, ideal for villas." },
];

const brands = ["Samsung","LG","Gree","Carrier","Midea","Daikin","Panasonic","Hitachi","Toshiba","Fujitsu","Haier","Sharp"];

const includes = ["Free call-out within Dubai","Genuine OEM spare parts","5% VAT invoice issued","WhatsApp job updates","Digital signature receipt","Recurring issue covered free"];

export default function ServicesPage() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? services : services.filter(s => s.popular);

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: "relative", padding: "130px 32px 90px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1400&q=85&auto=format&fit=crop" alt="AC service professional Dubai" fill style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(6,43,31,0.94) 0%,rgba(10,74,53,0.78) 60%,rgba(15,110,86,0.50) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.14)", backdropFilter: "blur(8px)", color: "rgba(255,255,255,0.9)", fontSize: 11, fontWeight: 700, padding: "5px 16px", borderRadius: 50, marginBottom: 20, letterSpacing: "0.09em", textTransform: "uppercase" as const }}>All Services</div>
          <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 56, fontWeight: 900, color: "#fff", marginBottom: 16, letterSpacing: "-0.5px" }}>What We Can Fix</h1>
          <p style={{ color: "rgba(255,255,255,0.68)", fontSize: 17, marginBottom: 36, lineHeight: 1.72 }}>Professional AC and refrigerator solutions for homes and businesses. Certified technicians, transparent pricing.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
            {[{ val: "all", label: "All Services" }, { val: "popular", label: "⭐ Most Popular" }].map(f => (
              <button key={f.val} onClick={() => setFilter(f.val)} style={{ padding: "10px 24px", borderRadius: 50, fontSize: 14, fontWeight: 600, cursor: "pointer", border: "none", transition: "all .2s", background: filter === f.val ? "#e8a045" : "rgba(255,255,255,0.14)", color: "#fff" }}>
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding: "80px 32px", background: "#f5faf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))", gap: 24 }}>
            {filtered.map(({ Icon, img, name, price, time, popular, desc }, i) => (
              <FadeUp key={name} delay={i * 0.08}>
                <div style={{ background: "#fff", borderRadius: 22, overflow: "hidden", border: popular ? "2px solid #0f6e56" : "1px solid #d4e8e0", position: "relative", transition: "transform .28s, box-shadow .28s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-8px)"; el.style.boxShadow = "0 24px 56px rgba(10,74,53,0.14)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = ""; el.style.boxShadow = ""; }}
                >
                  {popular && <div style={{ position: "absolute", top: 0, right: 20, background: "linear-gradient(135deg,#0f6e56,#1a9e75)", color: "#fff", fontSize: 10, fontWeight: 700, padding: "4px 14px", borderRadius: "0 0 12px 12px", letterSpacing: "0.06em", zIndex: 2 }}>POPULAR</div>}
                  <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                    <Image src={img} alt={name} fill style={{ objectFit: "cover", transition: "transform .5s" }}
                      onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = "scale(1.07)"}
                      onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = ""}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(6,43,31,0.65) 0%,transparent 55%)" }} />
                    <div style={{ position: "absolute", top: 14, left: 14, width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.25)" }}>
                      <Icon size={18} color="#fff" strokeWidth={1.8} />
                    </div>
                  </div>
                  <div style={{ padding: "22px 24px 26px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 21, fontWeight: 700 }}>{name}</h3>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, color: "#7a9b8e", whiteSpace: "nowrap", marginLeft: 8, marginTop: 4 }}><Clock size={12} />{time}</span>
                    </div>
                    <p style={{ fontSize: 14, color: "#7a9b8e", lineHeight: 1.65, marginBottom: 18 }}>{desc}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 17, fontWeight: 700, color: "#0f6e56" }}>{price}</span>
                      <Link href="/request" style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "9px 18px", borderRadius: 50, background: popular ? "linear-gradient(135deg,#0f6e56,#1a9e75)" : "#e8f5f0", color: popular ? "#fff" : "#0f6e56", textDecoration: "none", fontWeight: 600, fontSize: 13, boxShadow: popular ? "0 4px 14px rgba(15,110,86,0.32)" : "none" }}>
                        Book Now <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section style={{ padding: "80px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <FadeUp>
            <div style={{ display: "inline-block", background: "#e8f5f0", color: "#0f6e56", fontSize: 11, fontWeight: 700, padding: "5px 16px", borderRadius: 50, marginBottom: 16, letterSpacing: "0.09em", textTransform: "uppercase" as const }}>Every Service Includes</div>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 38, fontWeight: 800, marginBottom: 40 }}>What You Always Get</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
              {includes.map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, background: "#f5faf8", borderRadius: 12, padding: "14px 16px", textAlign: "left" }}>
                  <CheckCircle2 size={18} color="#0f6e56" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 14, fontWeight: 500, color: "#3d5a4e" }}>{item}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: "60px 32px", background: "#f5faf8" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <FadeUp>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#7a9b8e", letterSpacing: "0.12em", marginBottom: 28, textTransform: "uppercase" as const }}>Brands We Service</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              {brands.map(b => (
                <div key={b} style={{ padding: "9px 22px", border: "1px solid #d4e8e0", borderRadius: 50, fontSize: 14, color: "#3d5a4e", fontWeight: 500, background: "#fff", cursor: "default", transition: "all .18s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.background = "#e8f5f0"; el.style.borderColor = "#0f6e56"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.background = "#fff"; el.style.borderColor = "#d4e8e0"; }}
                >{b}</div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: "relative", padding: "90px 32px", overflow: "hidden", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80&auto=format&fit=crop" alt="Book a service" fill style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(6,43,31,0.91)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 560, margin: "0 auto" }}>
          <FadeUp>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 44, fontWeight: 800, color: "#fff", marginBottom: 14 }}>Not Sure What You Need?</h2>
            <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 16, marginBottom: 32, lineHeight: 1.72 }}>Describe your problem and our team will advise you — free consultation, no obligation.</p>
            <Link href="/request" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 40px", borderRadius: 50, fontWeight: 700, fontSize: 15, background: "linear-gradient(135deg,#e8a045,#f5c060)", color: "#fff", textDecoration: "none", boxShadow: "0 8px 28px rgba(232,160,69,0.45)" }}>
              <CalendarCheck2 size={17} /> Request Free Consultation
            </Link>
          </FadeUp>
        </div>
      </section>

      <footer style={{ background: "#062b1f", padding: "24px 32px", textAlign: "center" }}>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.28)" }}>© 2026 CoolDesk · AC &amp; Refrigerator Services Dubai</div>
      </footer>
    </div>
  );
}
