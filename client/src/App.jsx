import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<h1 className="text-3xl font-bold text-center mt-20">Welcome to ChamazShop 🛒</h1>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App