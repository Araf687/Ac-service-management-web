const staff = [
  { name: "Rajan Kumar", role: "Senior technician", initials: "RK", jobs: 52, revenue: "AED 16,200", avgDuration: "1.8h", rating: 4.9, recurring: 2 },
  { name: "Sami Hassan", role: "Technician", initials: "SH", jobs: 42, revenue: "AED 12,250", avgDuration: "2.1h", rating: 4.7, recurring: 1 },
];

export default function AdminStaffPage() {
  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 22, fontWeight: 700, marginBottom: 2 }}>Staff performance</h1>
        <p style={{ color: "#888", fontSize: 13 }}>April 2026</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 16 }}>
        {staff.map(s => (
          <div key={s.name} style={{ background: "#fff", border: "1px solid #e8ebe6", borderRadius: 14, padding: "22px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#E1F5EE", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 16, color: "#0F6E56" }}>
                {s.initials}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16 }}>{s.name}</div>
                <div style={{ fontSize: 12, color: "#888" }}>{s.role}</div>
                <div style={{ fontSize: 12, color: "#BA7517", marginTop: 2 }}>{"★".repeat(Math.floor(s.rating))} {s.rating}</div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 14 }}>
              {[
                { label: "Jobs done", val: s.jobs.toString() },
                { label: "Revenue", val: s.revenue },
                { label: "Avg duration", val: s.avgDuration },
              ].map(m => (
                <div key={m.label} style={{ background: "#F7F8F6", borderRadius: 9, padding: "10px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#0F6E56", marginBottom: 2 }}>{m.val}</div>
                  <div style={{ fontSize: 10, color: "#aaa" }}>{m.label}</div>
                </div>
              ))}
            </div>
            {s.recurring > 0 && (
              <div style={{ background: "#FBEAF0", borderRadius: 8, padding: "8px 12px", fontSize: 12, color: "#72243E" }}>
                {s.recurring} recurring job{s.recurring > 1 ? "s" : ""} this month — review recommended
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
