import { Link } from 'react-router-dom'
import products, { categories, getProductImage } from '../data/products'

const featuredIds = ['KJ1', 'KJ9', 'KJ11', 'KJ40', 'KJ53', 'KJ47']
const featured = featuredIds.map(id => products.find(p => p.id === id)).filter(Boolean)

const categoryShowcase = [
  { key: '원목패', icon: '🪵', desc: '따뜻한 호두나무 원목' },
  { key: '크리스탈패', icon: '💎', desc: '투명한 고급 크리스탈' },
  { key: '크리스탈트로피', icon: '🏆', desc: '화려한 크리스탈 트로피' },
  { key: '트로피', icon: '⭐', desc: '금속 트로피/별' },
  { key: '블랙크리스탈', icon: '🖤', desc: '모던 블랙 크리스탈' },
  { key: '타워패', icon: '🗼', desc: '세련된 타워형 패' },
  { key: '사자상', icon: '🦁', desc: '라이온스 사자상' },
  { key: '메달액자', icon: '🎖️', desc: '메달+액자 세트' },
  { key: '전통공예', icon: '🏺', desc: '자개/도자기/종' },
  { key: '명패', icon: '📛', desc: '회장 명패' },
]

export default function HomePage() {
  return (
    <div>
      {/* 히어로 */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white px-6 py-10 text-center">
        <h1 className="text-3xl font-bold mb-2">
          <span className="text-gold">국제사</span>
        </h1>
        <p className="text-gold-light text-lg mb-1">상패 · 상장 전문</p>
        <p className="text-sm text-gray-300 mb-6 leading-relaxed">
          라이온스 · 로타리 · 기업 · 단체<br />
          감사패, 공로패, 추대패, 재직기념패
        </p>
        <Link
          to="/products"
          className="inline-block bg-gold text-navy font-bold px-8 py-3 rounded-full text-sm no-underline hover:bg-gold-light transition-colors"
        >
          전체 제품 보기
        </Link>
      </section>

      {/* 인기 제품 */}
      <section className="px-4 py-6">
        <h2 className="text-lg font-bold text-navy mb-4">인기 제품</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {featured.map(product => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="flex-shrink-0 w-[140px] no-underline text-navy"
            >
              <div className="bg-warm-gray rounded-xl overflow-hidden aspect-square flex items-center justify-center">
                <img
                  src={getProductImage(product)}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-xs font-medium mt-2 truncate">{product.name}</p>
              <p className="text-xs text-gold-dark font-bold">{product.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 카테고리 */}
      <section className="px-4 py-6 bg-warm-gray">
        <h2 className="text-lg font-bold text-navy mb-4">제품 카테고리</h2>
        <div className="grid grid-cols-2 gap-3">
          {categoryShowcase.map(cat => (
            <Link
              key={cat.key}
              to={`/products?category=${cat.key}`}
              className="bg-white rounded-xl p-4 flex items-center gap-3 no-underline text-navy shadow-sm active:scale-[0.98] transition-transform"
            >
              <span className="text-2xl">{cat.icon}</span>
              <div>
                <p className="text-sm font-bold">{cat.key}</p>
                <p className="text-[11px] text-gray-500">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 회사 소개 */}
      <section className="px-6 py-8 text-center">
        <h2 className="text-lg font-bold text-navy mb-3">국제사 소개</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          국제사는 라이온스클럽, 로타리클럽 등 각종 단체 및 기업을 위한
          상패, 상장, 트로피, 메달액자를 전문 제작하고 있습니다.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          원목패, 크리스탈패, 블랙크리스탈, 금속트로피, 자개공예 등
          다양한 소재와 디자인으로 고객님의 소중한 순간을 빛내드립니다.
        </p>
        <div className="flex justify-center gap-8 mt-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-gold-dark">60+</p>
            <p className="text-xs text-gray-500">제품 종류</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gold-dark">10+</p>
            <p className="text-xs text-gray-500">카테고리</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gold-dark">100%</p>
            <p className="text-xs text-gray-500">맞춤 제작</p>
          </div>
        </div>
      </section>

      {/* 안내 배너 */}
      <section className="px-4 pb-6">
        <Link
          to="/contact"
          className="block bg-gradient-to-r from-gold-dark to-gold rounded-xl p-5 text-white no-underline"
        >
          <p className="font-bold text-base mb-1">주문 · 문의</p>
          <p className="text-sm opacity-90">전화 한 통이면 맞춤 제작 상담이 가능합니다</p>
        </Link>
      </section>
    </div>
  )
}
