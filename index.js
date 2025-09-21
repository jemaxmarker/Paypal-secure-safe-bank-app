import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 shadow-md bg-white">
        <div className="flex items-center space-x-2">
          <Image
            src="/paypal-logo.png" // <-- you will put this image in /public folder
            alt="PayPal Logo"
            width={120}
            height={40}
          />
        </div>
        <div className="flex space-x-4">
          <a href="/login" className="text-blue-600 font-medium">
            Login
          </a>
          <a href="/signup" className="text-blue-600 font-medium">
            Sign Up
          </a>
        </div>
      </nav>

      {/* Main Section */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to PayPal Clone
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Secure payments made simple. Get started today.
        </p>
        <a
          href="/get-started"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Get Started
        </a>
      </main>
    </div>
  );
}
