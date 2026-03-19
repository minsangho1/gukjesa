import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import products, { categories, usageTypes, getProductImage } from '../data/products'

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedUsage, setSelectedUsage] = useState('all')
  const [filterMode, setFilterMode] = useState('category') // 'category' | 'usage'

  const filtered = useMemo(() => {
    return products.filter(p => {
      const catMatch = selectedCategory === 'all' || p.category === selectedCategory
      const usageMatch = selectedUsage === 'all' || p.type === selectedUsage
      return catMatch && usageMatch
    })
  }, [selectedCategory, selectedUsage])

  const handleCategoryChange = (key) => {
    setSelectedCategory(key)
    setSelectedUsage('all')
    if (key === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category: key })
    }
  }

  const handleUsageChange = (key) => {
    setSelectedUsage(key)
    setSelectedCategory('all')
    setSearchParams({})
  }

  return (
    <div>
      {/* 필터 모드 토글 */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => { setFilterMode('category'); setSelectedUsage('all') }}
          className={`flex-1 py-3 text-sm font-medium border-none cursor-pointer ${
            filterMode === 'category' ? 'text-gold-dark border-b-2 border-gold bg-white' : 'text-gray-400 bg-warm-gray'
          }`}
        >
          소재별
        </button>
        <button
          onClick={() => { setFilterMode('usage'); setSelectedCategory('all'); setSearchParams({}) }}
          className={`flex-1 py-3 text-sm font-medium border-none cursor-pointer ${
            filterMode === 'usage' ? 'text-gold-dark border-b-2 border-gold bg-white' : 'text-gray-400 bg-warm-gray'
          }`}
        >
          용도별
        </button>
      </div>

      {/* 카테고리/용도 필터 */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide bg-white sticky top-14 z-40">
        {filterMode === 'category'
          ? categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => handleCategoryChange(cat.key)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium border cursor-pointer transition-colors ${
                  selectedCategory === cat.key
                    ? 'bg-navy text-white border-navy'
                    : 'bg-white text-gray-600 border-gray-300'
                }`}
              >
                {cat.label}
              </button>
            ))
          : usageTypes.map(u => (
              <button
                key={u.key}
                onClick={() => handleUsageChange(u.key)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium border cursor-pointer transition-colors ${
                  selectedUsage === u.key
                    ? 'bg-navy text-white border-navy'
                    : 'bg-white text-gray-600 border-gray-300'
                }`}
              >
                {u.label}
              </button>
            ))
        }
      </div>

      {/* 결과 수 */}
      <div className="px-4 py-2 text-xs text-gray-500">
        {filtered.length}개 제품
      </div>

      {/* 제품 그리드 */}
      <div className="grid grid-cols-2 gap-3 px-4 pb-6">
        {filtered.map(product => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="bg-white rounded-xl overflow-hidden shadow-sm no-underline text-navy active:scale-[0.98] transition-transform"
          >
            <div className="bg-warm-gray aspect-square flex items-center justify-center overflow-hidden">
              <img
                src={getProductImage(product)}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <p className="text-[11px] text-gray-400 mb-0.5">{product.id}</p>
              <p className="text-sm font-medium truncate">{product.name}</p>
              <p className="text-xs text-gray-500 mt-0.5">{product.material}</p>
              <p className="text-sm font-bold text-gold-dark mt-1">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-sm">해당 조건의 제품이 없습니다</p>
        </div>
      )}
    </div>
  )
}
