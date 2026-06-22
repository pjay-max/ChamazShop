import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [cartCount] = useState(0)

  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex items-center justify-between shadow-md">
      <Link to="/" className="text-2xl font-bold tracking-wide">
        Chamaz<span className="text-yellow-300">Shop</span>
      </Link>

      <div className="flex items-center gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
        <Link to="/shop" className="hover:text-yellow-300 transition">Shop</Link>
        <Link to="/cart" className="hover:text-yellow-300 transition">
          🛒 Cart
          {cartCount > 0 && (
            <span className="ml-1 bg-yellow-400 text-green-900 text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
        <Link to="/login" className="hover:text-yellow-300 transition">Login</Link>
        <Link to="/register" className="bg-yellow-400 text-green-900 px-4 py-1.5 rounded-full hover:bg-yellow-300 transition">
          Register
        </Link>
      </div>
    </nav>
  )
}

export default Navbar