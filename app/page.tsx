import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Virtual Lab - Home',
  description: 'Welcome to Virtual Lab',
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Welcome to Virtual Lab</h1>
        <p className="text-center text-gray-600 mb-4">
          Please log in to access your dashboard
        </p>
        <div className="text-center">
          <a
            href="/login"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  )
} 