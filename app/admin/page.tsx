import Badge from "../components/Badge";
import { TrendingUp, Users, ClipboardList, DollarSign } from "lucide-react";

const stats = [
  { label: "Jobs today", val: "12", sub: "+3 from yesterday", icon: ClipboardList, color: "#E1F5EE", iconColor: "#0F6E56" },
  { label: "This month", val: "94", sub: "+18% vs March", icon: TrendingUp, color: "#E6F1FB", iconColor: "#185FA5" },
  { label: "Revenue (AED)", val: "28,450", sub: "+22% vs March", icon: DollarSign, color: "#EAF3DE", iconColor: "#3B6D11" },
  { label: "Pending jobs", val: "7", sub: "2 recurring", icon: Users, color: "#FAEEDA", iconColor: "#854F0B" },
];

const jobs = [
  { id: "JOB-2051", customer: "Ahmed Al-Rashidi", service: "AC repair", area: "Jumeirah 1", tech: "Rajan K.", status: "inprogress" as const },
  { id: "JOB-2050", customer: "Sara Mohammed", service: "Gas refill", area: "Business Bay", tech: "Sami H.", status: "completed" as const },
  { id: "JOB-2049", customer: "Khalid Yusuf", service: "Fridge repair", area: "Deira", tech: "Rajan K.", status: "completed" as const },
  { id: "JOB-2048", customer: "Priya Nair", service: "AC install", area: "Marina", tech: "Sami H.", status: "pending" as const },
  { id: "JOB-2047", customer: "Ahmed Al-Rashidi", service: "Gas refill", area: "Jumeirah 1", tech: "Rajan K.", status: "recurring" as const },
];

export default function AdminDashboard() {
  return (
    <div style={{ padding: "32px 32px 40px" }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 22, fontWeight: 700, marginBottom: 4 }}>Dashboard</h1>
        <p style={{ color: "#888", fontSize: 14 }}>Overview — April 2026</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14, marginBottom: 32 }}>
        {stats.map(s => (
          <div key={s.label} style={{ background: "#fff", border: "1px solid #e8ebe6", borderRadius: 12, padding: "18px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
            <div style={{ width: 40, height: 40, background: s.color, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <s.icon size={18} color={s.iconColor} />
            </div>
            <div>
              <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1, marginBottom: 4 }}>{s.val}</div>
              <div style={{ fontSize: 11, color: "#0F6E56" }}>{s.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: "#fff", border: "1px solid #e8ebe6", borderRadius: 12, overflow: "hidden" }}>
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #e8ebe6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 15, fontWeight: 700 }}>Recent jobs</h2>
          <a href="/admin/jobs" style={{ fontSize: 12, color: "#0F6E56", textDecoration: "none", fontWeight: 600 }}>View all →</a>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: "#F7F8F6" }}>
                {["Job ID","Customer","Service","Area","Technician","Status"].map(h => (
                  <th key={h} style={{ padding: "10px 16px", textAlign: "left", fontWeight: 500, color: "#888", fontSize: 12, borderBottom: "1px solid #e8ebe6" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {jobs.map(j => (
                <tr key={j.id} style={{ borderBottom: "1px solid #f0f0ec" }}>
                  <td style={{ padding: "12px 16px", fontWeight: 700, color: "#0F6E56" }}>{j.id}</td>
                  <td style={{ padding: "12px 16px", color: "#333" }}>{j.customer}</td>
                  <td style={{ padding: "12px 16px", color: "#555" }}>{j.service}</td>
                  <td style={{ padding: "12px 16px", color: "#888" }}>{j.area}</td>
                  <td style={{ padding: "12px 16px", color: "#555" }}>{j.tech}</td>
                  <td style={{ padding: "12px 16px" }}><Badge variant={j.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
