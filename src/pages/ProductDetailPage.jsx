import { useParams, Link, useNavigate } from 'react-router-dom'
import products, { getProductImage } from '../data/products'

export default function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.id === id)

  if (!product) {
    return (
      <div className="text-center py-20">
        <p className="text-4xl mb-4">😢</p>
        <p className="text-gray-500 mb-4">제품을 찾을 수 없습니다</p>
        <Link to="/products" className="text-gold-dark underline text-sm">전체 제품 보기</Link>
      </div>
    )
  }

  // 같은 카테고리 다른 제품
  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const pageImage = `/products/page_${String(product.page).padStart(2, '0')}_full.webp`

  return (
    <div>
      {/* 뒤로가기 */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-16 left-3 z-30 bg-white/80 backdrop-blur rounded-full w-9 h-9 flex items-center justify-center shadow border-none cursor-pointer"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B2A4A" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* 제품 이미지 (전체 페이지) */}
      <div className="bg-warm-gray">
        <img
          src={pageImage}
          alt={product.name}
          className="w-full"
          onError={(e) => {
            e.target.src = getProductImage(product)
          }}
        />
      </div>

      {/* 제품 정보 */}
      <div className="px-5 py-5">
        <div className="flex items-start justify-between mb-1">
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{product.id}</span>
          <span className="text-xs text-white bg-navy px-2 py-0.5 rounded">{product.category}</span>
        </div>

        <h1 className="text-xl font-bold text-navy mt-2 mb-1">{product.name}</h1>

        <p className="text-2xl font-bold text-gold-dark mb-4">{product.price}</p>

        <div className="space-y-3 border-t border-gray-100 pt-4">
          <InfoRow label="소재" value={product.material} />
          {product.size && <InfoRow label="사이즈" value={product.size} />}
          <InfoRow label="용도" value={product.type} />
          {product.variants && <InfoRow label="색상" value={product.variants} />}
        </div>

        {/* 주문/문의 버튼 */}
        <div className="mt-6 flex gap-3">
          <a
            href="tel:010-0000-0000"
            className="flex-1 bg-navy text-white py-3.5 rounded-xl text-center text-sm font-bold no-underline flex items-center justify-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            전화 주문
          </a>
          <Link
            to="/contact"
            className="flex-1 bg-gold text-navy py-3.5 rounded-xl text-center text-sm font-bold no-underline"
          >
            문의하기
          </Link>
        </div>
      </div>

      {/* 관련 제품 */}
      {related.length > 0 && (
        <section className="px-4 py-6 bg-warm-gray">
          <h2 className="text-base font-bold text-navy mb-3">같은 카테고리 제품</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {related.map(p => (
              <Link
                key={p.id}
                to={`/products/${p.id}`}
                className="flex-shrink-0 w-[120px] no-underline text-navy"
              >
                <div className="bg-white rounded-lg overflow-hidden aspect-square">
                  <img
                    src={getProductImage(p)}
                    alt={p.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs font-medium mt-1.5 truncate">{p.name}</p>
                <p className="text-xs text-gold-dark font-bold">{p.price}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function InfoRow({ label, value }) {
  return (
    <div className="flex">
      <span className="text-xs text-gray-400 w-16 flex-shrink-0">{label}</span>
      <span className="text-sm text-navy">{value}</span>
    </div>
  )
}
