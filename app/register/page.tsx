import { Suspense } from 'react'
import RegistrationForm from './RegistrationForm'

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="registration-page">
        <div className="loading-state">
          <p>Loading registration form...</p>
        </div>
      </div>
    }>
      <RegistrationForm />
    </Suspense>
  )
}