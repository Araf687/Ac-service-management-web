"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import {
  Wind, Wrench, Refrigerator, Zap, Sparkles, CalendarCheck2,
  ClipboardList, PhoneCall, Truck, BadgeCheck,
  ShieldCheck, Clock, Star, MapPin, ChevronDown,
  ArrowRight, Phone, Users, ThumbsUp
} from "lucide-react";

/* ── Scroll-triggered fade ────────────────────────────────────────── */
function useFade(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [threshold]);
  return { ref, v };
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, v } = useFade();
  return (
    <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(34px)", transition: `opacity .7s ${delay}s ease, transform .7s ${delay}s ease` }}>
      {children}
    </div>
  );
}
function FadeLeft({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, v } = useFade();
  return (
    <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateX(-38px)", transition: `opacity .75s ${delay}s ease, transform .75s ${delay}s ease` }}>
      {children}
    </div>
  );
}
function FadeRight({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, v } = useFade();
  return (
    <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateX(38px)", transition: `opacity .75s ${delay}s ease, transform .75s ${delay}s ease` }}>
      {children}
    </div>
  );
}

/* ── Data ─────────────────────────────────────────────────────────── */
const IMGS = {
  hero:      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&q=85&auto=format&fit=crop",
  acRepair:  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format&fit=crop",
  fridge:    "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=700&q=80&auto=format&fit=crop",
  install:   "https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?w=700&q=80&auto=format&fit=crop",
  cleaning:  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=80&auto=format&fit=crop",
  team:      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80&auto=format&fit=crop",
  tech:      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80&auto=format&fit=crop",
  customer:  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80&auto=format&fit=crop",
};

const services = [
  { Icon: Wind,         img: IMGS.acRepair, name: "AC Gas Refill",        price: "From AED 150", desc: "R22 & R410A top-up. Full pressure check and leak test included." },
  { Icon: Wrench,       img: IMGS.fridge,   name: "Refrigerator Repair",  price: "On inspection", desc: "Cooling failure, compressor, thermostat, ice buildup. All brands." },
  { Icon: Refrigerator, img: IMGS.install,  name: "AC Installation",      price: "From AED 200", desc: "Split, cassette & ducted units. Piping and electrical included." },
  { Icon: Sparkles,     img: IMGS.cleaning, name: "AC Deep Cleaning",     price: "From AED 120", desc: "Coil wash, filter clean, drain flush and full sanitisation." },
];

const steps = [
  { Icon: ClipboardList,  num: "01", title: "Book Online",   desc: "Fill our quick form with your details and issue in under 2 minutes." },
  { Icon: PhoneCall,      num: "02", title: "We Confirm",    desc: "Our team calls within 30 minutes to lock in your appointment." },
  { Icon: Truck,          num: "03", title: "Tech Arrives",  desc: "Certified technician arrives with all tools and genuine spare parts." },
  { Icon: BadgeCheck,     num: "04", title: "Job Done",      desc: "Work completed, digital invoice sent. Cash, card or bank transfer." },
];

const trusts = [
  { Icon: ShieldCheck,    label: "Certified technicians" },
  { Icon: Star,           label: "4.9 ★ average rating" },
  { Icon: Clock,          label: "Same-day availability" },
  { Icon: MapPin,         label: "All Dubai areas" },
  { Icon: BadgeCheck,     label: "Genuine parts only" },
  { Icon: ThumbsUp,       label: "100% satisfaction" },
];

const reviews = [
  { name: "Mohammed Al-Rashidi", area: "Jumeirah",       stars: 5, text: "Technician arrived within 2 hours, fixed our AC perfectly. Very professional and clean work." },
  { name: "Sarah K.",            area: "Business Bay",   stars: 5, text: "Best AC service in Dubai. Refilled the gas, deep cleaned — works like brand new. Fair pricing." },
  { name: "Priya Nair",          area: "Dubai Marina",   stars: 5, text: "Quick response, transparent pricing and real-time tracking. Will definitely use again." },
];

/* ── Page ─────────────────────────────────────────────────────────── */
export default function Home() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCount(c => (c < 500 ? c + 9 : 500)), 14);
    return () => clearInterval(t);
  }, []);

  const tag = (label: string, bg = "#e8f5f0", color = "#0f6e56") => (
    <div style={{ display: "inline-block", background: bg, color, fontSize: 11, fontWeight: 700, padding: "5px 16px", borderRadius: 50, marginBottom: 16, letterSpacing: "0.09em", textTransform: "uppercase" as const }}>{label}</div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#fff", overflowX: "hidden" }}>
      <Navbar />

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src={IMGS.hero} alt="AC repair technician at work in Dubai" fill priority style={{ objectFit: "cover", objectPosition: "center 30%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(6,43,31,0.93) 0%, rgba(10,74,53,0.78) 55%, rgba(15,110,86,0.38) 100%)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "140px 32px 100px", width: "100%" }}>
          <div style={{ maxWidth: 620 }}>
            {/* pill */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.13)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 50, padding: "6px 18px 6px 8px", marginBottom: 28 }}>
              <span style={{ background: "#e8a045", borderRadius: 50, padding: "3px 10px", fontSize: 11, fontWeight: 800, color: "#fff", letterSpacing: "0.05em" }}>DUBAI</span>
              <span style={{ color: "rgba(255,255,255,0.88)", fontSize: 13, fontWeight: 500 }}>Certified AC & Refrigerator Specialists</span>
            </div>

            <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 64, fontWeight: 900, color: "#fff", lineHeight: 1.06, marginBottom: 22, letterSpacing: "-1px" }}>
              Your Cooling<br />
              <span style={{ color: "#4dd6a8" }}>Fixed Today.</span>
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 40, maxWidth: 480, fontWeight: 400 }}>
              Same-day AC and refrigerator repair, maintenance, and installation across all Dubai areas. Certified technicians, transparent pricing — no surprises.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 60 }}>
              <Link href="/request" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 34px", borderRadius: 50, fontWeight: 700, fontSize: 15, background: "linear-gradient(135deg,#e8a045,#f5c060)", color: "#fff", textDecoration: "none", boxShadow: "0 8px 28px rgba(232,160,69,0.5)", transition: "transform .2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "scale(1)"}
              >
                <CalendarCheck2 size={17} /> Book a Service <ArrowRight size={15} />
              </Link>
              <Link href="/customer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 30px", borderRadius: 50, fontWeight: 600, fontSize: 15, background: "rgba(255,255,255,0.13)", backdropFilter: "blur(8px)", color: "#fff", textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.33)" }}>
                <Wind size={16} /> View Services
              </Link>
            </div>

            {/* stat row */}
            <div style={{ display: "flex", gap: 0, flexWrap: "wrap" }}>
              {[
                { val: `${count}+`, label: "Customers Served" },
                { val: "4.9 ★",    label: "Average Rating" },
                { val: "2 hrs",    label: "Avg Response" },
                { val: "All Dubai",label: "Areas Covered" },
              ].map((s, i) => (
                <div key={s.label} style={{ paddingRight: 28, marginRight: 28, borderRight: i < 3 ? "1px solid rgba(255,255,255,0.18)" : "none", marginBottom: 10 }}>
                  <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 28, fontWeight: 800, color: "#fff" }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 3, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div style={{ position: "absolute", bottom: 30, left: "50%", zIndex: 1, animation: "scrollBounce 2s infinite" }}>
          <ChevronDown size={28} color="rgba(255,255,255,0.45)" />
        </div>
      </section>

      {/* ══ SERVICES WITH IMAGES ══════════════════════════════════════ */}
      <section style={{ padding: "100px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              {tag("Our Services")}
              <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 48, fontWeight: 800, marginBottom: 14 }}>What We Fix &amp; Install</h2>
              <p style={{ color: "#7a9b8e", fontSize: 17, maxWidth: 500, margin: "0 auto" }}>Professional cooling solutions for homes and businesses across all Dubai areas.</p>
            </div>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 22 }}>
            {services.map(({ Icon, img, name, price, desc }, i) => (
              <FadeUp key={name} delay={i * 0.09}>
                <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid #d4e8e0", background: "#fff", cursor: "pointer", transition: "transform .28s, box-shadow .28s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-8px)"; el.style.boxShadow = "0 22px 52px rgba(10,74,53,0.14)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = ""; el.style.boxShadow = ""; }}
                >
                  <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                    <Image src={img} alt={name} fill style={{ objectFit: "cover", transition: "transform .5s" }}
                      onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = "scale(1.07)"}
                      onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(6,43,31,0.62) 0%,transparent 58%)" }} />
                    {/* icon badge */}
                    <div style={{ position: "absolute", top: 14, left: 14, width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.25)" }}>
                      <Icon size={18} color="#fff" strokeWidth={1.8} />
                    </div>
                    <div style={{ position: "absolute", bottom: 14, left: 16, fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontWeight: 700, color: "#fff" }}>{name}</div>
                  </div>
                  <div style={{ padding: "18px 20px 22px" }}>
                    <p style={{ fontSize: 14, color: "#7a9b8e", lineHeight: 1.65, marginBottom: 16 }}>{desc}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 15, fontWeight: 700, color: "#0f6e56" }}>{price}</span>
                      <Link href="/request" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 13, fontWeight: 600, color: "#0f6e56", textDecoration: "none", background: "#e8f5f0", padding: "7px 14px", borderRadius: 50 }}>
                        Book <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <div style={{ textAlign: "center", marginTop: 44 }}>
              <Link href="/customer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 34px", borderRadius: 50, border: "1.5px solid #0f6e56", color: "#0f6e56", fontWeight: 700, fontSize: 15, textDecoration: "none", transition: "all .2s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#0f6e56"; el.style.color = "#fff"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = ""; el.style.color = "#0f6e56"; }}
              >
                View All 6 Services <ArrowRight size={15} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ ABOUT / WHY US ════════════════════════════════════════════ */}
      <section style={{ padding: "100px 32px", background: "#f5faf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 70, alignItems: "center" }}>
          <FadeLeft>
            <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", height: 500 }}>
              <Image src={IMGS.tech} alt="CoolDesk certified technician" fill style={{ objectFit: "cover" }} />
              {/* floating card */}
              <div style={{ position: "absolute", bottom: 24, left: 20, right: 20, background: "rgba(255,255,255,0.96)", backdropFilter: "blur(12px)", borderRadius: 16, padding: "16px 18px", display: "flex", alignItems: "center", gap: 14, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
                <div style={{ width: 46, height: 46, borderRadius: 13, background: "linear-gradient(135deg,#0f6e56,#1a9e75)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Zap size={22} color="#fff" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#0f1a15" }}>Same-day service available</div>
                  <div style={{ fontSize: 13, color: "#7a9b8e", marginTop: 2 }}>Book before 2 pm — we arrive today</div>
                </div>
              </div>
            </div>
          </FadeLeft>

          <FadeRight>
            <div>
              {tag("Why Choose Us")}
              <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 44, fontWeight: 800, lineHeight: 1.13, marginBottom: 18 }}>Dubai&apos;s Most Trusted Cooling Specialists</h2>
              <p style={{ color: "#7a9b8e", fontSize: 16, lineHeight: 1.78, marginBottom: 32 }}>From the first call to the final invoice, we guarantee professional service, fair pricing, and a fully working appliance — or we come back at no charge.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 34 }}>
                {trusts.map(({ Icon, label }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 34, height: 34, borderRadius: 10, background: "#e8f5f0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={16} color="#0f6e56" strokeWidth={2} />
                    </div>
                    <span style={{ fontSize: 14, color: "#3d5a4e", fontWeight: 500 }}>{label}</span>
                  </div>
                ))}
              </div>
              <Link href="/request" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", borderRadius: 50, background: "linear-gradient(135deg,#0f6e56,#1a9e75)", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 15, boxShadow: "0 6px 22px rgba(15,110,86,0.35)" }}>
                <CalendarCheck2 size={16} /> Book a Service Now
              </Link>
            </div>
          </FadeRight>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══════════════════════════════════════════════ */}
      <section style={{ padding: "100px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              {tag("How It Works", "#fef3e2", "#c77d12")}
              <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 48, fontWeight: 800 }}>Simple 4-Step Process</h2>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
            {steps.map(({ Icon, num, title, desc }, i) => (
              <FadeUp key={num} delay={i * 0.11}>
                <div style={{ position: "relative" }}>
                  {i < 3 && <div style={{ position: "absolute", top: 42, left: "64%", right: "-36%", height: 2, background: "linear-gradient(90deg,#0f6e56,#d4e8e0)", zIndex: 0 }} />}
                  <div style={{ background: "#f5faf8", borderRadius: 20, padding: "32px 22px", textAlign: "center", position: "relative", zIndex: 1, transition: "box-shadow .25s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 36px rgba(10,74,53,0.10)"}
                    onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.boxShadow = ""}
                  >
                    <div style={{ width: 66, height: 66, borderRadius: "50%", background: "linear-gradient(135deg,#0f6e56,#1a9e75)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", boxShadow: "0 8px 24px rgba(15,110,86,0.32)" }}>
                      <Icon size={28} color="#fff" strokeWidth={1.8} />
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#7a9b8e", letterSpacing: "0.1em", marginBottom: 8, textTransform: "uppercase" as const }}>Step {num}</div>
                    <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{title}</h3>
                    <p style={{ fontSize: 14, color: "#7a9b8e", lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEAM BANNER ═══════════════════════════════════════════════ */}
      <section style={{ position: "relative", padding: "100px 32px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src={IMGS.team} alt="CoolDesk professional team Dubai" fill style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(6,43,31,0.95) 38%,rgba(6,43,31,0.55) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <FadeLeft>
            <div>
              {tag("Our Team", "rgba(255,255,255,0.12)", "rgba(255,255,255,0.85)")}
              <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 44, fontWeight: 800, color: "#fff", marginBottom: 16 }}>Certified Experts Behind Every Job</h2>
              <p style={{ color: "rgba(255,255,255,0.62)", fontSize: 16, lineHeight: 1.78, marginBottom: 38 }}>Our technicians are trained, background-checked, and equipped with professional tools. They arrive in uniform, respect your home, and leave only when the job is perfect.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {[
                  { Icon: Users,      val: "500+", label: "Jobs completed" },
                  { Icon: Clock,      val: "2hrs",  label: "Avg response" },
                  { Icon: Star,       val: "4.9★",  label: "Customer rating" },
                  { Icon: ThumbsUp,   val: "100%",  label: "Satisfaction" },
                ].map(({ Icon, val, label }) => (
                  <div key={label} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: "20px 16px", textAlign: "center" }}>
                    <Icon size={20} color="rgba(255,255,255,0.5)" style={{ marginBottom: 8 }} />
                    <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 28, fontWeight: 800, color: "#fff" }}>{val}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeLeft>
          <div />
        </div>
      </section>

      {/* ══ REVIEWS ═══════════════════════════════════════════════════ */}
      <section style={{ padding: "100px 32px", background: "#f5faf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              {tag("Reviews")}
              <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 48, fontWeight: 800 }}>What Customers Say</h2>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
            {reviews.map(({ name, area, stars, text }, i) => (
              <FadeUp key={name} delay={i * 0.1}>
                <div style={{ background: "#fff", border: "1px solid #d4e8e0", borderRadius: 20, padding: "30px 26px" }}>
                  <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                    {Array.from({ length: stars }).map((_, j) => <Star key={j} size={16} color="#e8a045" fill="#e8a045" />)}
                  </div>
                  <p style={{ fontSize: 15, color: "#3d5a4e", lineHeight: 1.75, marginBottom: 22, fontStyle: "italic" }}>&ldquo;{text}&rdquo;</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#0f6e56,#1a9e75)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "'Fraunces',serif", fontWeight: 800, fontSize: 18, flexShrink: 0 }}>
                      {name[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{name}</div>
                      <div style={{ fontSize: 12, color: "#7a9b8e", marginTop: 2 }}>{area}, Dubai</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ═════════════════════════════════════════════════ */}
      <section style={{ position: "relative", padding: "110px 32px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src={IMGS.customer} alt="Happy customer after service" fill style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(6,43,31,0.90)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <FadeUp>
            {tag("Get In Touch", "rgba(255,255,255,0.12)", "rgba(255,255,255,0.85)")}
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 50, fontWeight: 900, color: "#fff", marginBottom: 16 }}>Need Urgent Help?</h2>
            <p style={{ color: "rgba(255,255,255,0.62)", fontSize: 17, marginBottom: 42, lineHeight: 1.72 }}>
              Call us or book online — we respond in 30 minutes and can be at your door the same day, anywhere in Dubai.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/request" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 36px", borderRadius: 50, fontWeight: 700, fontSize: 15, background: "linear-gradient(135deg,#e8a045,#f5c060)", color: "#fff", textDecoration: "none", boxShadow: "0 8px 28px rgba(232,160,69,0.45)" }}>
                <CalendarCheck2 size={17} /> Book Online Now
              </Link>
              <a href="tel:+971500000000" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 28px", borderRadius: 50, fontWeight: 600, fontSize: 15, background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", color: "#fff", textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.28)" }}>
                <Phone size={16} /> +971 50 000 0000
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════════════════ */}
      <footer style={{ background: "#062b1f", padding: "60px 32px 28px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#0f6e56,#1a9e75)", display: "flex", alignItems: "center", justifyContent: "center" }}><Wind size={18} color="#fff" /></div>
                <span style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 800, fontSize: 22, color: "#fff" }}>Cool<span style={{ color: "#1a9e75" }}>Desk</span></span>
              </div>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.42)", lineHeight: 1.75, maxWidth: 260, marginBottom: 20 }}>Professional AC &amp; refrigerator repair, maintenance, and installation across all Dubai areas.</p>
            </div>
            {[
              { title: "Services",  links: ["AC Gas Refill","AC Repair","Fridge Repair","AC Installation","Deep Cleaning","Annual Contract"] },
              { title: "Company",   links: ["About Us","Our Team","Blog","Careers","Contact"] },
              { title: "Contact",   links: ["+971 50 000 0000","info@cooldesk.ae","Dubai, UAE","Mon–Sat 8am–8pm","Sun 10am–6pm"] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.32)", letterSpacing: "0.12em", marginBottom: 18, textTransform: "uppercase" as const }}>{col.title}</div>
                {col.links.map(l => <div key={l} style={{ fontSize: 14, color: "rgba(255,255,255,0.52)", marginBottom: 10 }}>{l}</div>)}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.28)" }}>© 2026 CoolDesk. All rights reserved.</span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.28)" }}>AC &amp; Refrigerator Services Dubai, UAE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
