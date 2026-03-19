# 국제사 모바일 웹 개발 스킬

## 프로젝트 개요
"국제사" 이름으로 **상패**, **상장**, **소개** 페이지를 제공하는 모바일 웹 애플리케이션 개발

## 주요 기능

### 1. 소개 페이지 (메인)
- 국제사 회사/브랜드 소개
- 연혁, 인사말, 위치/연락처
- 대표 제품(상패/상장) 갤러리 미리보기
- 모바일 최적화 레이아웃

### 2. 상패 (Award Plaque)
- 상패 제품 카탈로그 (카테고리별 분류)
- 상패 상세 페이지 (이미지, 규격, 소재, 가격)
- 상패 문구 미리보기/커스터마이징
- 주문/문의 기능

### 3. 상장 (Certificate)
- 상장 템플릿 목록
- 상장 미리보기 (이름, 내용 입력 시 실시간 프리뷰)
- 다양한 디자인 템플릿 제공
- 주문/문의 기능

## 기술 스택

### 프론트엔드
- **프레임워크**: React 18+ (Vite 빌드)
- **스타일링**: Tailwind CSS (모바일 퍼스트)
- **라우팅**: React Router v6
- **상태관리**: Zustand 또는 React Context (경량)
- **HTTP**: Axios
- **빌드도구**: Vite

### 프로젝트 구조
```
D:\workGuk\
├── .claude/
│   └── skills/
│       └── gukjesa-mobile-web/
│           └── skill.md
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── assets/          # 이미지, 폰트
│   ├── components/
│   │   ├── common/      # Header, Footer, Navigation, Loading
│   │   ├── home/        # 메인/소개 관련 컴포넌트
│   │   ├── plaque/      # 상패 관련 컴포넌트
│   │   └── certificate/ # 상장 관련 컴포넌트
│   ├── pages/
│   │   ├── HomePage.jsx        # 메인(소개)
│   │   ├── AboutPage.jsx       # 회사 상세 소개
│   │   ├── PlaquePage.jsx      # 상패 목록
│   │   ├── PlaqueDetailPage.jsx # 상패 상세
│   │   ├── CertificatePage.jsx  # 상장 목록
│   │   ├── CertificatePreviewPage.jsx # 상장 미리보기
│   │   └── ContactPage.jsx     # 문의/주문
│   ├── data/            # 정적 데이터 (JSON)
│   ├── hooks/           # 커스텀 훅
│   └── utils/           # 유틸리티
├── public/
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 페이지 라우팅
| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | HomePage | 메인 (국제사 소개 + 제품 하이라이트) |
| `/about` | AboutPage | 회사 상세 소개, 연혁, 위치 |
| `/plaque` | PlaquePage | 상패 카탈로그 |
| `/plaque/:id` | PlaqueDetailPage | 상패 상세 |
| `/certificate` | CertificatePage | 상장 템플릿 목록 |
| `/certificate/preview` | CertificatePreviewPage | 상장 미리보기 |
| `/contact` | ContactPage | 문의/주문 |

## 모바일 UX 가이드라인
- **뷰포트**: 모바일 퍼스트 (375px 기준), 태블릿/데스크탑 반응형
- **네비게이션**: 하단 탭 바 (홈, 상패, 상장, 문의)
- **터치**: 최소 터치 영역 44x44px
- **폰트**: 본고딕(Noto Sans KR) 기본
- **컬러**: 고급스러운 톤 (금색 #C8A951, 짙은 남색 #1B2A4A 등)
- **이미지**: lazy loading, WebP 포맷 우선
- **성능**: Lighthouse 모바일 90+ 목표

## 데이터 구조 (정적 JSON 예시)

### 상패 데이터
```json
{
  "id": "plaque-001",
  "name": "크리스탈 감사패",
  "category": "크리스탈",
  "material": "크리스탈 + 금속",
  "size": "200 x 150 x 30mm",
  "price": "50,000원~",
  "images": ["plaque-001-1.jpg", "plaque-001-2.jpg"],
  "description": "고급 크리스탈 소재의 감사패",
  "customizable": true
}
```

### 상장 데이터
```json
{
  "id": "cert-001",
  "name": "표창장 기본형",
  "category": "표창장",
  "size": "A4",
  "template": "classic",
  "fields": ["수여자명", "내용", "날짜", "수여기관"],
  "preview": "cert-001-preview.jpg"
}
```

## 개발 명령어
```bash
# 프로젝트 생성 (최초 1회)
npm create vite@latest . -- --template react
npm install
npm install -D tailwindcss @tailwindcss/vite
npm install react-router-dom axios

# 개발 서버
npm run dev

# 빌드
npm run build

# 미리보기
npm run preview
```

## 배포
- 정적 호스팅 (Vercel, Netlify, GitHub Pages 등)
- 또는 기존 서버에 빌드 결과물(`dist/`) 배포

## 개발 우선순위
1. 프로젝트 초기 세팅 (Vite + React + Tailwind)
2. 공통 컴포넌트 (Header, Footer, 하단 탭 바)
3. 메인(소개) 페이지
4. 상패 목록/상세 페이지
5. 상장 목록/미리보기 페이지
6. 문의/주문 페이지
7. 반응형/성능 최적화
