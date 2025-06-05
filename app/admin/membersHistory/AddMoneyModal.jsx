"use client";
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AddMoneyModal = ({ open, onClose, user }) => {
  const [amount, setAmount] = useState("")
  const [note, setNote] = useState("")
  const [service, setService] = useState("")
  const [transactionId, setTransactionId] = useState("")
  const [serviceDate, setServiceDate] = useState("")
  const [action, setAction] = useState("add") // add, remove
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [balance, setBalance] = useState(null)

  useEffect(() => {
    if (open && user) {
      axios.get(`/api/members/${user.userId}/balance`)
        .then(res => setBalance(res.data.balance))
        .catch(() => setBalance("N/A"))
    }
  }, [open, user])

  useEffect(() => {
    if ((action === "add" || action === "remove") && !transactionId) {
      const randomId = `TX-${Date.now()}-${Math.floor(Math.random() * 10000)}`
      setTransactionId(randomId)
    }
  }, [action, transactionId])

  if (!open || !user) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      let endpoint = "/api/members/transaction"
      let payload = {
        userId: user.userId,
        amount: Number(amount),
        note,
        service,
        transactionId,
        serviceDate,
        action
      }
      await axios.post(endpoint, payload)
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
        setAmount("")
        setNote("")
        setService("")
        setTransactionId("")
        setServiceDate("")
        setAction("add")
        onClose()
      }, 1200)
    } catch (err) {
      setError("Failed to process transaction. Please try again.")
    }
  }

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(0,0,0,0.4)"
    }}>
      <div style={{
        background: "#fff",
        borderRadius: "1rem",
        boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
        width: "100%",
        maxWidth: 400,
        padding: 24,
        position: "relative"
      }}>
        <button
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            color: "#9ca3af",
            fontSize: 28,
            background: "none",
            border: "none",
            cursor: "pointer"
          }}
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 style={{
          fontSize: 22,
          fontWeight: "bold",
          marginBottom: 8,
          textTransform: "capitalize"
        }}>
          {action === "add" && "Add Money to Wallet"}
          {action === "remove" && "Remove Money from Wallet"}
        </h2>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontWeight: "bold" }}>{user.name}</div>
          <div style={{ color: "#6b7280", fontSize: 14 }}>{user.email}</div>
          <div style={{ color: "#9ca3af", fontSize: 12 }}>{user.phone}</div>
          <div style={{ color: "#1d4ed8", fontSize: 14, fontWeight: "bold", marginTop: 4 }}>
            Current Balance: {user.amount !== null ? `₹${user.amount}` : "Loading..."}
          </div>
        </div>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              type="button"
              style={{
                flex: 1,
                padding: '0.5rem 0.75rem',
                borderRadius: '0.375rem',
                fontWeight: '600',
                border: action === 'add' ? '2px solid #1E40AF' : '2px solid #93C5FD',
                backgroundColor: action === 'add' ? '#2563EB' : '#FFFFFF',
                color: action === 'add' ? '#FFFFFF' : '#1D4ED8',
                boxShadow: action === 'add' ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer',
              }}
              onClick={() => setAction('add')}
            >
              Add Money
            </button>
            <button
              type="button"
              style={{
                flex: 1,
                padding: '0.5rem 0.75rem',
                borderRadius: '0.375rem',
                fontWeight: '600',
                border: action === 'remove' ? '2px solid #b91c1c' : '2px solid #fca5a5',
                backgroundColor: action === 'remove' ? '#dc2626' : '#FFFFFF',
                color: action === 'remove' ? '#FFFFFF' : '#dc2626',
                boxShadow: action === 'remove' ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer',
              }}
              onClick={() => setAction("remove")}
            >
              Remove Money
            </button>
          </div>
          <input
            type="number"
            min="1"
            required
            style={{ border: "1px solid #d1d5db", borderRadius: 6, padding: "8px 12px" }}
            placeholder="Enter amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
          <input
            type="text"
            style={{ border: "1px solid #d1d5db", borderRadius: 6, padding: "8px 12px" }}
            placeholder="Service Used"
            value={service}
            required
            onChange={e => setService(e.target.value)}
          />
          <input
            type="date"
            style={{ border: "1px solid #d1d5db", borderRadius: 6, padding: "8px 12px" }}
            placeholder="Service Date"
            value={serviceDate}
            required
            onChange={e => setServiceDate(e.target.value)}
          />
          <input
            type="text"
            style={{ border: "1px solid #d1d5db", borderRadius: 6, padding: "8px 12px" }}
            placeholder="Transaction ID"
            value={transactionId}
            required={action === "edit"}
            onChange={e => setTransactionId(e.target.value)}
          />
          <input
            type="text"
            style={{ border: "1px solid #d1d5db", borderRadius: 6, padding: "8px 12px" }}
            placeholder="Note (optional)"
            value={note}
            onChange={e => setNote(e.target.value)}
          />
          {error && <div style={{ color: "#dc2626", fontSize: 14 }}>{error}</div>}
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              borderRadius: 6,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              backgroundColor: action === "add"
                ? "#2563eb"
                : "#dc2626",
              color: "#fff",
              opacity: success ? 0.6 : 1,
              transition: "background-color 0.3s, color 0.3s"
            }}
            disabled={success}
          >
            {success
              ? "Success!"
              : action === "add"
              ? "Add Money"
              : "Remove Money"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddMoneyModal
