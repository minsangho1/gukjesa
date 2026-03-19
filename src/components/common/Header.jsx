import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50 bg-navy text-white h-14 flex items-center justify-center shadow-md">
      <Link to="/" className="flex items-center gap-2 no-underline text-white">
        <span className="text-gold text-xl font-bold tracking-wide">국제사</span>
        <span className="text-xs text-gold-light opacity-80">상패 · 상장 전문</span>
      </Link>
    </header>
  )
}
