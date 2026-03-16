import { Suspense } from "react"
import PaymentStatusClient from "./PaymentStatusClient"

export default function PaymentStatusPage() {
  return (
    <Suspense fallback={<div style={{textAlign:"center",marginTop:"100px"}}>Checking payment...</div>}>
      <PaymentStatusClient />
    </Suspense>
  )
}