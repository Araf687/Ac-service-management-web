"use client";
import Badge from "../../components/Badge";
import { Download, Search } from "lucide-react";

const invoices = [
  { id: "INV-2051", job: "JOB-2051", customer: "Ahmed Al-Rashidi", service: "AC repair", date: "28 Apr 2026", amount: "AED 378", status: "unpaid" as const },
  { id: "INV-2050", job: "JOB-2050", customer: "Sara Mohammed", service: "Gas refill", date: "28 Apr 2026", amount: "AED 210", status: "paid" as const },
  { id: "INV-2049", job: "JOB-2049", customer: "Khalid Yusuf", service: "Fridge repair", date: "27 Apr 2026", amount: "AED 462", status: "paid" as const },
  { id: "INV-2048", job: "JOB-2048", customer: "Priya Nair", service: "AC installation", date: "27 Apr 2026", amount: "AED 210", status: "unpaid" as const },
  { id: "INV-2047", job: "JOB-2047", customer: "Ahmed Al-Rashidi", service: "Gas refill", date: "15 Apr 2026", amount: "AED 220", status: "paid" as const },
  { id: "INV-2046", job: "JOB-2046", customer: "Omar Farouk", service: "AC repair", date: "25 Apr 2026", amount: "AED 315", status: "paid" as const },
];

const totalRevenue = "AED 1,795";
const unpaidTotal = "AED 588";

export default function AdminInvoicesPage() {
  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 22, fontWeight: 700, marginBottom: 2 }}>Invoices</h1>
        <p style={{ color: "#888", fontSize: 13 }}>{invoices.length} invoices</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 24, maxWidth: 600 }}>
        {[
          { label: "Total invoiced", val: totalRevenue, color: "#EAF3DE", text: "#27500A" },
          { label: "Outstanding", val: unpaidTotal, color: "#FCEBEB", text: "#791F1F" },
          { label: "Paid invoices", val: "4 / 6", color: "#E1F5EE", text: "#0F6E56" },
        ].map(s => (
          <div key={s.label} style={{ background: s.color, borderRadius: 10, padding: "14px 16px" }}>
            <div style={{ fontSize: 11, color: s.text, opacity: 0.8, marginBottom: 4 }}>{s.label}</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: s.text }}>{s.val}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, border: "1px solid #e0e0dc", borderRadius: 8, padding: "7px 12px", background: "#fff", flex: "1 1 200px" }}>
          <Search size={13} color="#aaa" />
          <input type="text" placeholder="Search customer or invoice…" style={{ border: "none", outline: "none", fontSize: 13, background: "transparent", width: "100%", color: "#1a1a18" }} />
        </div>
        <select style={{ padding: "7px 12px", border: "1px solid #e0e0dc", borderRadius: 8, fontSize: 13, background: "#fff", color: "#1a1a18" }}>
          <option>All payments</option>
          <option>Paid</option><option>Unpaid</option>
        </select>
      </div>

      <div style={{ background: "#fff", border: "1px solid #e8ebe6", borderRadius: 12, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: "#F7F8F6" }}>
              {["Invoice","Job","Customer","Service","Date","Amount","Status",""].map(h => (
                <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 500, color: "#888", fontSize: 11, borderBottom: "1px solid #e8ebe6", whiteSpace: "nowrap" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {invoices.map(inv => (
              <tr key={inv.id} style={{ borderBottom: "1px solid #f0f0ec" }}>
                <td style={{ padding: "11px 14px", fontWeight: 700, color: "#0F6E56", whiteSpace: "nowrap" }}>{inv.id}</td>
                <td style={{ padding: "11px 14px", color: "#888", fontSize: 12, whiteSpace: "nowrap" }}>{inv.job}</td>
                <td style={{ padding: "11px 14px", color: "#333", whiteSpace: "nowrap" }}>{inv.customer}</td>
                <td style={{ padding: "11px 14px", color: "#555", whiteSpace: "nowrap" }}>{inv.service}</td>
                <td style={{ padding: "11px 14px", color: "#aaa", fontSize: 12, whiteSpace: "nowrap" }}>{inv.date}</td>
                <td style={{ padding: "11px 14px", fontWeight: 700, whiteSpace: "nowrap" }}>{inv.amount}</td>
                <td style={{ padding: "11px 14px" }}><Badge variant={inv.status} /></td>
                <td style={{ padding: "11px 14px" }}>
                  <button style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, padding: "4px 10px", border: "1px solid #e0e0dc", borderRadius: 6, background: "transparent", cursor: "pointer", color: "#555" }}>
                    <Download size={11} /> PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
