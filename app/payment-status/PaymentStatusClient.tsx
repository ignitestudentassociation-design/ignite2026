'use client'

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Header from "@/components/Header"

export default function PaymentStatusClient() {

  const params = useSearchParams()
  const orderId = params.get("order_id")

  const [status, setStatus] = useState("Checking payment...")

  useEffect(() => {
    if (!orderId) return

    verifyPayment()
  }, [orderId])

  const verifyPayment = async () => {
    try {

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/payments/verify?order_id=${orderId}`
      )

      const data = await res.json()

      if (data.success) {
        setStatus("Payment successful 🎉")
      } else {
        setStatus("Payment failed ❌")
      }

    } catch (error) {
      setStatus("Unable to verify payment")
    }
  }

  return (
    <>
      <Header />
      <div style={{textAlign:"center",marginTop:"120px"}}>
        <h1>{status}</h1>
      </div>
    </>
  )
}