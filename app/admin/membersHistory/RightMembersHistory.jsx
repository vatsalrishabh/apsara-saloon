"use client"
import React, { useEffect, useState } from 'react'
import AdminBreadCrumbs from '@/app/components/Admin/AdminBreadCrumbs'
import AddMoneyModal from './AddMoneyModal'
import MemberHistoryModal from './MemberHistoryModal'
import Button from '@mui/material/Button'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import HistoryIcon from '@mui/icons-material/History'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CardMembershipIcon from '@mui/icons-material/CardMembership'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'

const RightMembersHistory = () => {
  const [search, setSearch] = useState("")
  const [searchBy, setSearchBy] = useState("name")
  const [selectedUser, setSelectedUser] = useState(null)
  const [openAddMoney, setOpenAddMoney] = useState(false)
  const [openHistory, setOpenHistory] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get('/api/members')
        setUsers(response.data.users || [])
      } catch (error) {
        console.error("Failed to fetch users:", error)
      }
    }
    fetchAllUsers()
  }, [])

  const filteredUsers = users.filter(user => {
    if (!search) return true
    const value = user[searchBy]?.toLowerCase() || ""
    return value.includes(search.toLowerCase())
  })

  const breadcrumbLinks = [
    { label: "Admin", href: "/admin" },
  ]

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 p-6">
      <AdminBreadCrumbs links={breadcrumbLinks} name="Admin Dashboard" />

      <div className="mt-6">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-blue-700">
          <CardMembershipIcon fontSize="large" className="text-blue-500" />
          Members History
        </h2>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center gap-4 mb-8"
        >
          <select
            className="border rounded px-2 py-2 shadow-sm focus:ring-2 focus:ring-blue-300 transition"
            value={searchBy}
            onChange={e => setSearchBy(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
          </select>
          <input
            type="search"
            className="border rounded px-3 py-2 w-full md:w-64 shadow-sm focus:ring-2 focus:ring-blue-300 transition"
            placeholder={`Search by ${searchBy}`}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredUsers.map(user => (
              <motion.div
                key={user.userId}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.35 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-4 border-b pb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-200 to-pink-200 flex items-center justify-center shadow text-white text-2xl">
                    <PersonIcon fontSize="inherit" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{user.name}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <EmailIcon fontSize="small" /> {user.email}
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <PhoneIphoneIcon fontSize="small" /> {user.mobileNumber}
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <CardMembershipIcon className="text-blue-400" fontSize="small" />
                    <span className="font-medium">Membership:</span>
                    <span>{user.membershipType}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500">Start:</span>
                    <span>{new Date(user.startDate).toLocaleDateString("en-IN")}</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-500">End:</span>
                    <span>{new Date(user.endDate).toLocaleDateString("en-IN")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CurrencyRupeeIcon className="text-green-500" fontSize="small" />
                    <span>Paid:</span>
                    <span className="font-semibold text-green-700">₹{user.amount}</span>
                    <span className="text-gray-400 mx-2">|</span>
                    <span>Remaining:</span>
                    <span className="font-semibold text-red-600">₹{user.remaining}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <LocationOnIcon className="text-pink-400" fontSize="small" />
                    <span className="truncate">{user.address}</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AccountBalanceWalletIcon />}
                    className="!bg-gradient-to-r !from-blue-500 !to-blue-700 !shadow-lg !text-white !font-semibold"
                    style={{ borderRadius: "0.75rem", minWidth: 0 }}
                    onClick={() => { setSelectedUser(user); setOpenAddMoney(true); }}
                  >
                    Add Money
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<HistoryIcon />}
                    className="!border-pink-400 !text-pink-600 !font-semibold"
                    style={{ borderRadius: "0.75rem", minWidth: 0 }}
                    onClick={() => { setSelectedUser(user); setOpenHistory(true); }}
                  >
                    See History
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {openAddMoney && selectedUser && (
          <motion.div
            key="add-money-modal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            <AddMoneyModal
              open={openAddMoney}
              onClose={() => setOpenAddMoney(false)}
              user={selectedUser}
            />
          </motion.div>
        )}
        {openHistory && selectedUser && (
          <motion.div
            key="history-modal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            <MemberHistoryModal
              open={openHistory}
              onClose={() => setOpenHistory(false)}
              user={selectedUser}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default RightMembersHistory
