import { Link } from 'react-router-dom'

const featuredProducts = [
  { id: 1, name: 'Fresh Tomatoes', price: 2.50, image: '🍅', category: 'Vegetables' },
  { id: 2, name: 'Cooking Oil 2L', price: 8.99, image: '🫙', category: 'Groceries' },
  { id: 3, name: 'Bread Loaf', price: 1.50, image: '🍞', category: 'Bakery' },
  { id: 4, name: 'Chicken Braai Pack', price: 12.99, image: '🍗', category: 'Meat' },
]

function Home() {
  return (
    <div>
      <div className="bg-green-700 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-yellow-300">ChamazShop</span>
        </h1>
        <p className="text-xl mb-8 text-green-100">
          Your one stop shop for everything Zimbabwe
        </p>
        <Link to="/shop" className="bg-yellow-400 text-green-900 font-bold px-8 py-3 rounded-full text-lg hover:bg-yellow-300 transition">
          Shop Now
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <div className="text-6xl text-center mb-4">{product.image}</div>
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{product.category}</p>
              <p className="text-green-700 font-bold text-xl">${product.price}</p>
              <Link to={`/product/${product.id}`} className="block mt-4 text-center bg-green-700 text-white py-2 rounded-full hover:bg-green-600 transition">
                View Product
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/shop" className="border-2 border-green-700 text-green-700 font-bold px-8 py-3 rounded-full hover:bg-green-700 hover:text-white transition">
            View All Products
          </Link>
        </div>
      </div>

      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why ChamazShop?</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
            <p className="text-gray-500 text-sm">Get your orders delivered across Zimbabwe quickly and safely.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="font-bold text-lg mb-2">Best Prices</h3>
            <p className="text-gray-500 text-sm">Competitive prices on all products. No hidden charges.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="font-bold text-lg mb-2">Secure Payments</h3>
            <p className="text-gray-500 text-sm">Your payments are safe and protected every time.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home