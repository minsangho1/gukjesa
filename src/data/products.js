// 국제사 전체 제품 데이터 (PDF 카탈로그 2025 기준)
const products = [
  // === 원목패 ===
  { id: "KJ1", no: 1, name: "특별공로패", category: "원목패", material: "호두나무", size: "", price: "200,000원", page: 1, pos: "top", type: "공로패" },
  { id: "KJ2", no: 1, name: "재직기념패", category: "원목패", material: "호두나무, 원목", size: "", price: "180,000원", page: 1, pos: "bottom", type: "재직기념패" },
  { id: "KJ1-A", no: 1, name: "재직기념패 (은/금)", category: "원목패", material: "호두나무", size: "14×23×3.5cm", price: "120,000원", page: 2, pos: "top", type: "재직기념패" },

  // === 크리스탈+블랙패 ===
  { id: "KJ2-1", no: 2, name: "공로상", category: "크리스탈패", material: "크리스탈+블랙", size: "13×20.5×5.5cm", price: "120,000원", page: 3, pos: "top", type: "공로패" },
  { id: "KJ2-2", no: 2, name: "재직기념패", category: "크리스탈패", material: "크리스탈", size: "", price: "180,000원", page: 3, pos: "bottom", type: "재직기념패" },

  // === 원목+금속패 ===
  { id: "KJ3", no: 2, name: "추대패", category: "원목패", material: "원목+금속", size: "14×23×3.5cm", price: "120,000원", page: 4, pos: "top", type: "추대패" },
  { id: "KJ4", no: 2, name: "추대패 (소형)", category: "원목패", material: "원목+금속", size: "7×24×4.2cm", price: "80,000원", page: 4, pos: "bottom", type: "추대패" },
  { id: "KJ5", no: 3, name: "위촉패", category: "원목패", material: "금속+원목", size: "10×25×2cm", price: "80,000원", page: 5, pos: "top", type: "위촉패" },

  // === 원목+크리스탈 원형패 ===
  { id: "KJ6", no: 3, name: "표창패", category: "크리스탈패", material: "크리스탈+원목", size: "16.5×19×5cm", price: "80,000원", page: 5, pos: "bottom", type: "표창패" },
  { id: "KJ7", no: 4, name: "감사패", category: "크리스탈패", material: "크리스탈+원목", size: "16.5×19×5cm", price: "80,000원", page: 6, pos: "top", type: "감사패" },

  // === 상장케이스 ===
  { id: "KJ8", no: 4, name: "우승 상장케이스", category: "상장케이스", material: "가죽케이스", size: "대/중/소", price: "80,000원", page: 6, pos: "bottom", type: "우승패" },

  // === 크리스탈 트로피 ===
  { id: "KJ9", no: 5, name: "크리스탈 재직기념패", category: "크리스탈트로피", material: "크리스탈", size: "9×20×9cm", price: "150,000원", page: 7, pos: "top", type: "재직기념패", variants: "핑크/그린/화이트" },
  { id: "KJ10", no: 6, name: "크리스탈 재직기념패", category: "크리스탈트로피", material: "크리스탈+블랙", size: "6×18.5×6cm", price: "100,000원", page: 8, pos: "top", type: "재직기념패", variants: "투명/분홍/그린" },
  { id: "KJ13", no: 8, name: "감사패 크리스탈", category: "크리스탈트로피", material: "크리스탈", size: "5.5×22.5×5.5cm", price: "120,000원", page: 10, pos: "top", type: "감사패" },
  { id: "KJ14", no: 8, name: "재직기념패 크리스탈", category: "크리스탈트로피", material: "크리스탈", size: "6.8×24×5cm", price: "140,000원", page: 10, pos: "bottom", type: "재직기념패" },

  // === 블랙크리스탈패 ===
  { id: "KJ11", no: 7, name: "우정의 패", category: "블랙크리스탈", material: "블랙크리스탈", size: "10×15.5×2.3cm", price: "120,000원", page: 9, pos: "top", type: "우정의패" },
  { id: "KJ12", no: 7, name: "총재 감사패", category: "블랙크리스탈", material: "블랙크리스탈+금속", size: "12×15.5×6cm", price: "150,000원", page: 9, pos: "bottom", type: "감사패" },
  { id: "KJ19", no: 11, name: "감사패 (화이트/블루)", category: "블랙크리스탈", material: "블랙크리스탈+금속", size: "10×26×5cm", price: "90,000원", page: 13, pos: "top", type: "감사패", variants: "화이트/블루" },

  // === 금속트로피 ===
  { id: "KJ15", no: 9, name: "추대패 V형 트로피", category: "트로피", material: "금속+크리스탈", size: "9×24×6cm", price: "100,000원", page: 11, pos: "top", type: "추대패" },
  { id: "KJ16", no: 9, name: "추대패 별 트로피", category: "트로피", material: "금속+크리스탈", size: "10×23×7cm", price: "100,000원", page: 11, pos: "bottom", type: "추대패" },
  { id: "KJ17", no: 10, name: "우정의표창패 별", category: "트로피", material: "금속+크리스탈", size: "11×27×4cm", price: "100,000원", page: 12, pos: "top", type: "표창패" },

  // === 로타리/원형크리스탈 ===
  { id: "KJ18", no: 10, name: "개참상 (로타리)", category: "크리스탈패", material: "크리스탈+금속", size: "13.5×19×4.5cm", price: "90,000원", page: 12, pos: "bottom", type: "개참상" },
  { id: "KJ20", no: 12, name: "공로패 원형", category: "크리스탈패", material: "크리스탈+블랙", size: "15×18×4.5cm", price: "80,000원", page: 14, pos: "top", type: "공로패" },
  { id: "KJ21", no: 12, name: "위촉패 원형", category: "크리스탈패", material: "크리스탈+레인보우", size: "대/중/소", price: "80,000원", page: 14, pos: "bottom", type: "위촉패" },
  { id: "KJ22", no: 13, name: "공로패 대형원형", category: "크리스탈패", material: "크리스탈+레인보우", size: "17×18cm", price: "120,000원", page: 15, pos: "top", type: "공로패" },
  { id: "KJ23A", no: 13, name: "표창패 용각", category: "크리스탈패", material: "크리스탈", size: "16×15×4cm", price: "80,000원", page: 15, pos: "bottom", type: "표창패" },
  { id: "KJ23B", no: 13, name: "표창패 원형", category: "크리스탈패", material: "크리스탈", size: "17×16cm", price: "120,000원", page: 15, pos: "bottom", type: "표창패" },

  // === 블랙+금속 타워패 ===
  { id: "KJ24", no: 14, name: "위촉패 타워", category: "타워패", material: "블랙+금속", size: "7.5×22×3cm", price: "100,000원", page: 16, pos: "top", type: "위촉패" },
  { id: "KJ25", no: 14, name: "위촉패 타워+별", category: "타워패", material: "블랙+금속+별", size: "7.5×22×3cm", price: "110,000원", page: 16, pos: "bottom", type: "위촉패" },
  { id: "KJ26", no: 15, name: "추대패 타워", category: "타워패", material: "블랙+금속", size: "7×24×4.2cm", price: "120,000원", page: 17, pos: "top", type: "추대패" },
  { id: "KJ27", no: 15, name: "감사패 타워", category: "타워패", material: "블랙+금속+메달", size: "8.8×20×3.3cm", price: "100,000원", page: 17, pos: "bottom", type: "감사패" },

  // === 지구본/독수리 트로피 ===
  { id: "KJ28", no: 16, name: "추대패 지구본", category: "트로피", material: "금속+크리스탈지구본", size: "", price: "150,000원", page: 18, pos: "top", type: "추대패" },
  { id: "KJ29", no: 16, name: "독수리 트로피", category: "트로피", material: "금속", size: "", price: "150,000원", page: 18, pos: "bottom", type: "트로피" },

  // === 사자상 (라이온스) ===
  { id: "KJ30", no: 17, name: "크리스탈 사자상 (대)", category: "사자상", material: "크리스탈", size: "", price: "가격문의", page: 19, pos: "top", type: "감사패" },
  { id: "KJ31", no: 17, name: "크리스탈 사자상 (소)", category: "사자상", material: "크리스탈", size: "13.5×18.5×6.3cm", price: "150,000원", page: 19, pos: "bottom", type: "재직기념패" },
  { id: "KJ32", no: 18, name: "사자얼굴 추대패", category: "사자상", material: "크리스탈+블랙", size: "10×23×7cm", price: "100,000원", page: 20, pos: "top", type: "추대패" },
  { id: "KJ33", no: 18, name: "사자 재직기념패", category: "사자상", material: "크리스탈+금속+블랙", size: "15×22×5.5cm", price: "200,000원", page: 20, pos: "bottom", type: "재직기념패" },
  { id: "KJ-GOLD-LION", no: 19, name: "금사자상", category: "사자상", material: "금속(금도금)", size: "", price: "200,000원", page: 21, pos: "bottom", type: "감사패" },

  // === 크리스탈볼 ===
  { id: "KJ34", no: 19, name: "유공라이온상", category: "크리스탈패", material: "크리스탈볼", size: "10×15×10cm", price: "90,000원", page: 21, pos: "top", type: "유공상" },
  { id: "KJ35", no: 20, name: "추대패 원형 골드", category: "크리스탈패", material: "크리스탈+골드받침", size: "17×16.5×3cm", price: "85,000원", page: 22, pos: "top", type: "추대패" },
  { id: "KJ36", no: 20, name: "공로상 골드프레임", category: "크리스탈패", material: "크리스탈+골드프레임", size: "9×23×4cm", price: "90,000원", page: 22, pos: "bottom", type: "공로상" },

  // === 블루/디자인패 ===
  { id: "KJ37", no: 21, name: "표창패 블루웨이브", category: "디자인패", material: "크리스탈+컬러", size: "11×14×5.5cm", price: "120,000원", page: 23, pos: "top", type: "표창패" },
  { id: "KJ38", no: 21, name: "표창패 49주년", category: "디자인패", material: "블랙+골드", size: "11×17×5.5cm", price: "100,000원", page: 23, pos: "bottom", type: "표창패" },
  { id: "KJ39", no: 22, name: "추대패 골드/블랙", category: "디자인패", material: "크리스탈+골드", size: "6×23×6cm", price: "120,000원", page: 24, pos: "top", type: "추대패", variants: "골드/블랙" },

  // === 하트/별 트로피 ===
  { id: "KJ40", no: 23, name: "표창패 하트 트로피", category: "트로피", material: "금속하트+크리스탈", size: "6×30×6cm", price: "180,000원", page: 25, pos: "top", type: "표창패" },
  { id: "KJ41", no: 23, name: "봉사상 별", category: "트로피", material: "크리스탈별", size: "20×23×4cm", price: "80,000원", page: 25, pos: "bottom", type: "봉사상" },

  // === 크리스탈+원목 소형 ===
  { id: "KJ42", no: 24, name: "소형 크리스탈패", category: "크리스탈패", material: "크리스탈+원목", size: "6×12×5cm", price: "100,000원", page: 26, pos: "top", type: "감사패" },

  // === 금속 원형패 ===
  { id: "KJ43", no: 24, name: "크리스탈 원형+금속받침", category: "트로피", material: "크리스탈+금속", size: "", price: "150,000원", page: 26, pos: "bottom", type: "감사패" },

  // === 종/주물 ===
  { id: "KJ45", no: 25, name: "용종 우정의패", category: "전통공예", material: "주물+원목", size: "대/중/소", price: "가격문의", page: 27, pos: "top", type: "우정의패" },
  { id: "KJ46", no: 25, name: "주석접시 감사패", category: "전통공예", material: "주석+원목액자", size: "", price: "가격문의", page: 27, pos: "bottom", type: "감사패" },

  // === 자개패 ===
  { id: "KJ47", no: 26, name: "자개 감사패", category: "전통공예", material: "자개+원목", size: "", price: "가격문의", page: 28, pos: "top", type: "감사패" },

  // === 도자기/금관 ===
  { id: "KJ48", no: 27, name: "도자기/금관 액자", category: "전통공예", material: "도자기/금관", size: "", price: "가격문의", page: 29, pos: "top", type: "기념패" },

  // === 크리스탈시계 ===
  { id: "KJ49", no: 28, name: "크리스탈 시계 감사패", category: "크리스탈패", material: "크리스탈+시계", size: "40×17×4cm", price: "200,000원", page: 30, pos: "top", type: "감사패" },

  // === 재직기념패 액자 ===
  { id: "KJ50", no: 28, name: "재직기념패 액자형", category: "액자패", material: "금속액자", size: "", price: "150,000원", page: 30, pos: "bottom", type: "재직기념패" },

  // === 명패 ===
  { id: "KJ51", no: 29, name: "크리스탈사자 명패", category: "명패", material: "크리스탈+원목", size: "", price: "350,000원", page: 31, pos: "top", type: "명패" },
  { id: "KJ52", no: 29, name: "용 명패", category: "명패", material: "금속+원목", size: "", price: "200,000원", page: 31, pos: "bottom", type: "명패" },

  // === 메달액자 ===
  { id: "KJ53", no: 30, name: "신형메달 액자", category: "메달액자", material: "메달+액자", size: "", price: "350,000원", page: 32, pos: "top", type: "재직기념패" },
  { id: "KJ54", no: 31, name: "실사배경 액자", category: "메달액자", material: "실사+액자", size: "", price: "250,000원", page: 33, pos: "top", type: "재직기념패" },
  { id: "KJ55", no: 32, name: "V리본 액자", category: "메달액자", material: "리본+메달+액자", size: "", price: "150,000원", page: 34, pos: "top", type: "재직기념패" },
  { id: "KJ56", no: 33, name: "V메달 액자", category: "메달액자", material: "메달+액자", size: "", price: "200,000원", page: 35, pos: "top", type: "재직기념패" },
  { id: "KJ57", no: 34, name: "구형메달 액자", category: "메달액자", material: "메달+액자", size: "", price: "250,000원", page: 36, pos: "top", type: "재직기념패" },
  { id: "KJ58", no: 35, name: "9역 액자", category: "메달액자", material: "메달+액자(블루)", size: "", price: "가격문의", page: 37, pos: "top", type: "재직기념패" },
  { id: "KJ59", no: 36, name: "재직기념 액자", category: "메달액자", material: "메달+액자(레드)", size: "", price: "가격문의", page: 38, pos: "top", type: "재직기념패" },
];

// 카테고리 목록
export const categories = [
  { key: "all", label: "전체" },
  { key: "원목패", label: "원목패" },
  { key: "크리스탈패", label: "크리스탈패" },
  { key: "크리스탈트로피", label: "크리스탈트로피" },
  { key: "블랙크리스탈", label: "블랙크리스탈" },
  { key: "트로피", label: "트로피" },
  { key: "타워패", label: "타워패" },
  { key: "디자인패", label: "디자인패" },
  { key: "사자상", label: "사자상" },
  { key: "상장케이스", label: "상장케이스" },
  { key: "전통공예", label: "전통공예" },
  { key: "명패", label: "명패" },
  { key: "메달액자", label: "메달액자" },
  { key: "액자패", label: "액자패" },
];

// 용도별 분류
export const usageTypes = [
  { key: "all", label: "전체" },
  { key: "감사패", label: "감사패" },
  { key: "공로패", label: "공로패" },
  { key: "추대패", label: "추대패" },
  { key: "재직기념패", label: "재직기념패" },
  { key: "표창패", label: "표창패" },
  { key: "위촉패", label: "위촉패" },
  { key: "우정의패", label: "우정의패" },
  { key: "명패", label: "명패" },
  { key: "트로피", label: "트로피" },
  { key: "봉사상", label: "봉사상" },
];

export function getProductImage(product) {
  return `/products/page_${String(product.page).padStart(2, '0')}_${product.pos}.webp`;
}

export default products;
