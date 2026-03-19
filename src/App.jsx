import { Routes, Route } from 'react-router-dom'
import BottomNav from './components/common/BottomNav'
import Header from './components/common/Header'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <>
      <Header />
      <main className="pt-14">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <BottomNav />
    </>
  )
}

export default App
