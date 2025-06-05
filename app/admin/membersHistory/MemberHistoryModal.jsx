import React, { useEffect, useState } from "react"
import axios from "axios"
import { motion, AnimatePresence } from "framer-motion"
import PersonIcon from "@mui/icons-material/Person"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone"
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee"
import HistoryIcon from "@mui/icons-material/History"

const typeColors = {
  credit: { background: "#d1fae5", color: "#047857" },
  debit: { background: "#fee2e2", color: "#b91c1c" }
}

const MemberHistoryModal = ({ open, onClose, user }) => {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    if (!open || !user) return
    setLoading(true)
    setError("")
    axios
      .get(`/api/members/seeHistory/${user.email}`)
      .then(res => {
        setTransactions(res.data.transactions || [])
        setBalance(res.data.balance || 0)
        setLoading(false)
      })
      .catch(() => {
        setError("Failed to load transactions.")
        setLoading(false)
      })
  }, [open, user])

  if (!open || !user) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,0,0,0.25)",
        }}
      >
        {/* Blur everything behind the modal */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backdropFilter: "blur(4px)",
            background: "rgba(0,0,0,0.15)",
            zIndex: 40,
          }}
        ></div>
        <motion.div
          initial={{ scale: 0.95, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 40 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 700,
            margin: "0 auto",
            background: "#fff",
            borderRadius: "2rem",
            boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
            padding: 36,
            border: "1px solid #dbeafe",
            zIndex: 50,
            minHeight: 500,
            maxHeight: "90vh",
            overflow: "auto"
          }}
        >
          <button
            style={{
              position: "absolute",
              top: 24,
              right: 32,
              color: "#9ca3af",
              fontSize: 32,
              fontWeight: "bold",
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.2s"
            }}
            onClick={onClose}
            aria-label="Close"
            onMouseOver={e => (e.currentTarget.style.color = "#2563eb")}
            onMouseOut={e => (e.currentTarget.style.color = "#9ca3af")}
          >
            &times;
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 32 }}>
            <div style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #dbeafe 0%, #fbcfe8 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
              color: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              position: "relative"
            }}>
              <PersonIcon fontSize="inherit" />
              <div style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                background: "#fbcfe8",
                borderRadius: "50%",
                padding: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <HistoryIcon style={{ color: "#ec4899", fontSize: 20 }} />
              </div>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 26, fontWeight: 700, color: "#1e40af" }}>{user.name}</span>
                <span style={{
                  background: "#2563eb",
                  color: "#fff",
                  borderRadius: 8,
                  padding: "2px 10px",
                  fontSize: 14,
                  fontWeight: 600,
                  marginLeft: 4
                }}>
                  {user.membershipType || "Member"}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#6b7280", marginTop: 4 }}>
                <EmailIcon fontSize="small" /> <span>{user.email}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#9ca3af", fontSize: 14, marginTop: 2 }}>
                <PhoneIphoneIcon fontSize="small" /> <span>{user.phone}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
                <CurrencyRupeeIcon fontSize="small" style={{ color: "#22c55e" }} />
                <span style={{ fontWeight: 600, color: "#047857" }}>Wallet Balance: ₹{balance}</span>
              </div>
            </div>
          </div>
          <div style={{
            maxHeight: 320,
            overflowY: "auto",
            borderRadius: 16,
            border: "1px solid #e5e7eb",
            background: "#f9fafb",
            marginBottom: 24
          }}>
            {loading ? (
              <div style={{ textAlign: "center", padding: "48px 0", color: "#60a5fa", fontSize: 18, fontWeight: 600 }}>Loading...</div>
            ) : error ? (
              <div style={{ textAlign: "center", padding: "48px 0", color: "#dc2626" }}>{error}</div>
            ) : transactions.length === 0 ? (
              <div style={{ textAlign: "center", padding: "48px 0", color: "#9ca3af" }}>No transactions found.</div>
            ) : (
              <table style={{ width: "100%", fontSize: 15, borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#dbeafe", color: "#1e40af" }}>
                    <th style={{ padding: "10px 8px", textAlign: "left" }}>Date & Time</th>
                    <th style={{ padding: "10px 8px", textAlign: "left" }}>Type</th>
                    <th style={{ padding: "10px 8px", textAlign: "right" }}>Amount</th>
                    <th style={{ padding: "10px 8px", textAlign: "left" }}>Service</th>
                    <th style={{ padding: "10px 8px", textAlign: "left" }}>Note</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map(txn => (
                    <tr key={txn.paymentId || txn._id} style={{
                      borderBottom: "1px solid #e5e7eb",
                      background: "#fff",
                      transition: "background 0.2s"
                    }}
                      onMouseOver={e => e.currentTarget.style.background = "#f1f5f9"}
                      onMouseOut={e => e.currentTarget.style.background = "#fff"}
                    >
                      <td style={{ padding: "10px 8px" }}>
                        {txn.dateTime
                          ? new Date(txn.dateTime).toLocaleString()
                          : "-"}
                      </td>
                      <td style={{ padding: "10px 8px" }}>
                        <span style={{
                          display: "inline-block",
                          padding: "3px 12px",
                          borderRadius: 12,
                          fontSize: 12,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          background: typeColors[txn.type]?.background || "#e5e7eb",
                          color: typeColors[txn.type]?.color || "#374151"
                        }}>
                          {txn.type}
                        </span>
                      </td>
                      <td style={{
                        padding: "10px 8px",
                        textAlign: "right",
                        fontWeight: 600,
                        color: txn.type === "credit" ? "#16a34a" : "#dc2626"
                      }}>
                        {txn.type === "credit" ? "+" : "-"}₹{Math.abs(txn.amount)}
                      </td>
                      <td style={{ padding: "10px 8px" }}>{txn.service || <span style={{ color: "#9ca3af" }}>-</span>}</td>
                      <td style={{ padding: "10px 8px" }}>{txn.note || <span style={{ color: "#d1d5db" }}>-</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <div style={{ marginTop: 24, display: "flex", justifyContent: "flex-end" }}>
            <button
              style={{
                padding: "10px 32px",
                background: "linear-gradient(90deg, #2563eb 0%, #ec4899 100%)",
                color: "#fff",
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 16,
                border: "none",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                cursor: "pointer",
                transition: "transform 0.2s"
              }}
              onClick={onClose}
              onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default MemberHistoryModal