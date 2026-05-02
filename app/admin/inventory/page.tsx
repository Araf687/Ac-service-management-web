"use client";
import { Search, Plus } from "lucide-react";
import Badge from "../../components/Badge";

const parts = [
  { name: "R410A refrigerant gas (1kg)", sku: "REF-001", price: "AED 85", stock: 2, min: 5 },
  { name: "Capacitor 45/5 MFD", sku: "CAP-045", price: "AED 35", stock: 14, min: 5 },
  { name: "PCB control board", sku: "PCB-002", price: "AED 220", stock: 6, min: 3 },
  { name: "Fan motor (indoor)", sku: "FAN-101", price: "AED 120", stock: 1, min: 3 },
  { name: "Thermostat sensor", sku: "THS-007", price: "AED 45", stock: 9, min: 4 },
  { name: "Compressor 1.5 ton", sku: "CMP-150", price: "AED 650", stock: 3, min: 2 },
  { name: "Drain pump motor", sku: "DPM-001", price: "AED 90", stock: 5, min: 3 },
  { name: "Filter drier", sku: "FLD-003", price: "AED 40", stock: 11, min: 5 },
];

export default function AdminInventoryPage() {
  const lowCount = parts.filter(p => p.stock <= p.min).length;
  return (
    <div style={{ padding: "32px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div>
          <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 22, fontWeight: 700, marginBottom: 2 }}>Parts inventory</h1>
          <p style={{ color: "#888", fontSize: 13 }}>{parts.length} parts · {lowCount} low stock</p>
        </div>
        <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "9px 18px", background: "#0F6E56", color: "#fff", border: "none", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
          <Plus size={14} /> Add part
        </button>
      </div>

      {lowCount > 0 && (
        <div style={{ background: "#FCEBEB", border: "1px solid #F7C1C1", borderRadius: 10, padding: "12px 16px", marginBottom: 20, fontSize: 13, color: "#791F1F", display: "flex", gap: 8 }}>
          ⚠ {lowCount} parts are below minimum stock level. Reorder recommended.
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: 8, border: "1px solid #e0e0dc", borderRadius: 8, padding: "8px 12px", background: "#fff", marginBottom: 16, maxWidth: 300 }}>
        <Search size={13} color="#aaa" />
        <input type="text" placeholder="Search parts…" style={{ border: "none", outline: "none", fontSize: 13, background: "transparent", width: "100%", color: "#1a1a18" }} />
      </div>

      <div style={{ background: "#fff", border: "1px solid #e8ebe6", borderRadius: 12, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: "#F7F8F6" }}>
              {["Part name","SKU","Unit price","In stock","Min. level","Status",""].map(h => (
                <th key={h} style={{ padding: "10px 16px", textAlign: "left", fontWeight: 500, color: "#888", fontSize: 11, borderBottom: "1px solid #e8ebe6" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {parts.map(p => (
              <tr key={p.sku} style={{ borderBottom: "1px solid #f0f0ec" }}>
                <td style={{ padding: "12px 16px", fontWeight: 600, color: "#1a1a18" }}>{p.name}</td>
                <td style={{ padding: "12px 16px", color: "#888", fontFamily: "monospace", fontSize: 12 }}>{p.sku}</td>
                <td style={{ padding: "12px 16px", color: "#333" }}>{p.price}</td>
                <td style={{ padding: "12px 16px", fontWeight: 700, color: p.stock <= p.min ? "#A32D2D" : "#27500A" }}>{p.stock}</td>
                <td style={{ padding: "12px 16px", color: "#aaa" }}>{p.min}</td>
                <td style={{ padding: "12px 16px" }}><Badge variant={p.stock <= p.min ? "low" : "ok"} label={p.stock <= p.min ? "Low stock" : "In stock"} /></td>
                <td style={{ padding: "12px 16px" }}>
                  <button style={{ fontSize: 12, padding: "4px 10px", border: "1px solid #e0e0dc", borderRadius: 6, background: "transparent", cursor: "pointer", color: "#555" }}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
