"use client";
import { Search } from "lucide-react";

const customers = [
  { name: "Ahmed Al-Rashidi", phone: "+971 50 123 4567", area: "Jumeirah", jobs: 8, spent: "AED 1,840", initials: "AA" },
  { name: "Sara Mohammed", phone: "+971 55 234 5678", area: "Business Bay", jobs: 3, spent: "AED 620", initials: "SM" },
  { name: "Khalid Yusuf", phone: "+971 52 345 6789", area: "Deira", jobs: 5, spent: "AED 1,120", initials: "KY" },
  { name: "Priya Nair", phone: "+971 56 456 7890", area: "Marina", jobs: 1, spent: "AED 200", initials: "PN" },
  { name: "Omar Farouk", phone: "+971 54 567 8901", area: "Karama", jobs: 4, spent: "AED 870", initials: "OF" },
  { name: "Fatima Al-Zahra", phone: "+971 58 678 9012", area: "Mirdif", jobs: 2, spent: "AED 390", initials: "FA" },
];

const colors = ["#E1F5EE","#E6F1FB","#FAEEDA","#FBEAF0","#EAF3DE","#FAECE7"];
const textColors = ["#0F6E56","#0C447C","#633806","#72243E","#27500A","#712B13"];

export default function AdminCustomersPage() {
  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 22, fontWeight: 700, marginBottom: 2 }}>Customers</h1>
        <p style={{ color: "#888", fontSize: 13 }}>{customers.length} registered customers</p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8, border: "1px solid #e0e0dc", borderRadius: 8, padding: "8px 12px", background: "#fff", marginBottom: 18, maxWidth: 320 }}>
        <Search size={13} color="#aaa" />
        <input type="text" placeholder="Search by name or phone…" style={{ border: "none", outline: "none", fontSize: 13, background: "transparent", width: "100%", color: "#1a1a18" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
        {customers.map((c, i) => (
          <div key={c.name} style={{ background: "#fff", border: "1px solid #e8ebe6", borderRadius: 12, padding: "18px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 42, height: 42, borderRadius: "50%", background: colors[i % colors.length], display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, color: textColors[i % textColors.length], flexShrink: 0 }}>
                {c.initials}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 1 }}>{c.name}</div>
                <div style={{ fontSize: 12, color: "#888" }}>{c.phone} · {c.area}</div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <div style={{ background: "#F7F8F6", borderRadius: 8, padding: "8px 12px" }}>
                <div style={{ fontSize: 11, color: "#aaa", marginBottom: 2 }}>Total jobs</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#0F6E56" }}>{c.jobs}</div>
              </div>
              <div style={{ background: "#F7F8F6", borderRadius: 8, padding: "8px 12px" }}>
                <div style={{ fontSize: 11, color: "#aaa", marginBottom: 2 }}>Total spent</div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{c.spent}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
