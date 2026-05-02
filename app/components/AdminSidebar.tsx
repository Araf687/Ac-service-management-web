"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ClipboardList, Users, UserCheck, Package, FileText, Wind } from "lucide-react";

const items = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/jobs", label: "All jobs", icon: ClipboardList },
  { href: "/admin/customers", label: "Customers", icon: Users },
  { href: "/admin/staff", label: "Staff", icon: UserCheck },
  { href: "/admin/inventory", label: "Inventory", icon: Package },
  { href: "/admin/invoices", label: "Invoices", icon: FileText },
];

export default function AdminSidebar() {
  const path = usePathname();
  return (
    <aside style={{ width: 220, background: "#fff", borderRight: "1px solid #e8ebe6", minHeight: "100vh", flexShrink: 0, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid #e8ebe6" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <div style={{ width: 28, height: 28, background: "var(--brand)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Wind size={15} color="#fff" />
          </div>
          <span style={{ fontFamily: "var(--font-display, Syne, sans-serif)", fontWeight: 700, fontSize: 16, color: "#1a1a18" }}>
            Cool<span style={{ color: "var(--brand)" }}>Desk</span>
          </span>
        </Link>
        <div style={{ marginTop: 4, fontSize: 11, color: "#888", paddingLeft: 2 }}>Admin panel</div>
      </div>
      <nav style={{ padding: "12px 8px", flex: 1 }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: "#aaa", letterSpacing: "0.08em", padding: "4px 12px 8px", textTransform: "uppercase" }}>Management</div>
        {items.map(({ href, label, icon: Icon }) => {
          const active = path === href;
          return (
            <Link key={href} href={href} style={{
              display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", borderRadius: 8, marginBottom: 2,
              textDecoration: "none", fontSize: 13, fontWeight: active ? 600 : 400,
              color: active ? "var(--brand)" : "#555",
              background: active ? "var(--brand-pale, #E1F5EE)" : "transparent",
              borderLeft: active ? "3px solid var(--brand)" : "3px solid transparent",
            }}>
              <Icon size={15} />
              {label}
            </Link>
          );
        })}
      </nav>
      <div style={{ padding: "12px 20px", borderTop: "1px solid #e8ebe6" }}>
        <Link href="/" style={{ fontSize: 12, color: "#888", textDecoration: "none" }}>← Back to website</Link>
      </div>
    </aside>
  );
}
