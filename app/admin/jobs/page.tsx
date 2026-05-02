"use client";
import Badge from "../../components/Badge";
import { Search, Plus } from "lucide-react";

const jobs = [
  { id: "JOB-2051", customer: "Ahmed Al-Rashidi", phone: "+971 50 123 4567", service: "AC repair", area: "Jumeirah 1", tech: "Rajan Kumar", date: "28 Apr", status: "inprogress" as const },
  { id: "JOB-2050", customer: "Sara Mohammed", phone: "+971 55 234 5678", service: "Gas refill", area: "Business Bay", tech: "Sami Hassan", date: "28 Apr", status: "completed" as const },
  { id: "JOB-2049", customer: "Khalid Yusuf", phone: "+971 52 345 6789", service: "Fridge repair", area: "Deira", tech: "Rajan Kumar", date: "27 Apr", status: "completed" as const },
  { id: "JOB-2048", customer: "Priya Nair", phone: "+971 56 456 7890", service: "AC installation", area: "Marina", tech: "Sami Hassan", date: "27 Apr", status: "pending" as const },
  { id: "JOB-2047", customer: "Ahmed Al-Rashidi", phone: "+971 50 123 4567", service: "AC gas refill", area: "Jumeirah 1", tech: "Rajan Kumar", date: "26 Apr", status: "recurring" as const },
  { id: "JOB-2046", customer: "Omar Farouk", phone: "+971 54 567 8901", service: "AC repair", area: "Karama", tech: "Sami Hassan", date: "25 Apr", status: "completed" as const },
];

export default function AdminJobsPage() {
  return (
    <div style={{ padding: "32px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <div>
          <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 22, fontWeight: 700, marginBottom: 2 }}>All jobs</h1>
          <p style={{ color: "#888", fontSize: 13 }}>{jobs.length} records</p>
        </div>
        <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "9px 18px", background: "#0F6E56", color: "#fff", border: "none", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
          <Plus size={14} /> New job
        </button>
      </div>

      <div style={{ display: "flex", gap: 10, marginBottom: 18, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, border: "1px solid #e0e0dc", borderRadius: 8, padding: "7px 12px", background: "#fff", flex: "1 1 200px" }}>
          <Search size={13} color="#aaa" />
          <input type="text" placeholder="Search customer or job ID…" style={{ border: "none", outline: "none", fontSize: 13, background: "transparent", width: "100%", color: "#1a1a18" }} />
        </div>
        <select style={{ padding: "7px 12px", border: "1px solid #e0e0dc", borderRadius: 8, fontSize: 13, background: "#fff", color: "#1a1a18" }}>
          <option>All statuses</option>
          <option>Pending</option><option>In progress</option><option>Completed</option><option>Recurring</option>
        </select>
        <select style={{ padding: "7px 12px", border: "1px solid #e0e0dc", borderRadius: 8, fontSize: 13, background: "#fff", color: "#1a1a18" }}>
          <option>All technicians</option>
          <option>Rajan Kumar</option><option>Sami Hassan</option>
        </select>
      </div>

      <div style={{ background: "#fff", border: "1px solid #e8ebe6", borderRadius: 12, overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: "#F7F8F6" }}>
                {["Job ID","Customer","Phone","Service","Area","Technician","Date","Status",""].map(h => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 500, color: "#888", fontSize: 11, borderBottom: "1px solid #e8ebe6", whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {jobs.map(j => (
                <tr key={j.id} style={{ borderBottom: "1px solid #f0f0ec" }}>
                  <td style={{ padding: "11px 14px", fontWeight: 700, color: "#0F6E56", whiteSpace: "nowrap" }}>{j.id}</td>
                  <td style={{ padding: "11px 14px", color: "#333", whiteSpace: "nowrap" }}>{j.customer}</td>
                  <td style={{ padding: "11px 14px", color: "#888", fontSize: 12, whiteSpace: "nowrap" }}>{j.phone}</td>
                  <td style={{ padding: "11px 14px", color: "#555", whiteSpace: "nowrap" }}>{j.service}</td>
                  <td style={{ padding: "11px 14px", color: "#888", whiteSpace: "nowrap" }}>{j.area}</td>
                  <td style={{ padding: "11px 14px", color: "#555", whiteSpace: "nowrap" }}>{j.tech}</td>
                  <td style={{ padding: "11px 14px", color: "#aaa", fontSize: 12, whiteSpace: "nowrap" }}>{j.date}</td>
                  <td style={{ padding: "11px 14px" }}><Badge variant={j.status} /></td>
                  <td style={{ padding: "11px 14px" }}>
                    <button style={{ fontSize: 12, padding: "4px 10px", border: "1px solid #e0e0dc", borderRadius: 6, background: "transparent", cursor: "pointer", color: "#555" }}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
