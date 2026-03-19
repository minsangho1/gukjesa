export default function ContactPage() {
  return (
    <div className="px-5 py-6">
      <h1 className="text-xl font-bold text-navy mb-6">주문 · 문의</h1>

      {/* 연락처 카드 */}
      <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-6 text-white mb-6">
        <h2 className="text-gold text-lg font-bold mb-4">국제사</h2>
        <div className="space-y-3">
          <ContactRow icon={<PhoneIcon />} label="전화" value="010-0000-0000" href="tel:010-0000-0000" />
          <ContactRow icon={<MessageIcon />} label="문자" value="010-0000-0000" href="sms:010-0000-0000" />
        </div>
      </div>

      {/* 안내 사항 */}
      <div className="space-y-4">
        <InfoCard
          title="맞춤 제작 안내"
          items={[
            '모든 상패, 상장에 원하시는 문구를 새겨드립니다',
            '단체 로고, 사진 삽입 가능합니다',
            '대량 주문 시 할인 가능합니다',
          ]}
        />
        <InfoCard
          title="주문 방법"
          items={[
            '1. 전화 또는 문자로 제품번호와 수량을 알려주세요',
            '2. 새길 문구(이름, 내용, 날짜 등)를 보내주세요',
            '3. 시안 확인 후 제작을 시작합니다',
            '4. 제작 완료 후 택배 발송 (3~5일 소요)',
          ]}
        />
        <InfoCard
          title="참고 사항"
          items={[
            '"가격문의" 제품은 전화로 확인해주세요',
            '자개상패, 도자기, 금관은 별도 문의',
            '메달액자는 다양한 디자인 선택 가능',
            '급행 제작도 가능합니다 (별도 상담)',
          ]}
        />
      </div>

      {/* 바로 전화 버튼 */}
      <a
        href="tel:010-0000-0000"
        className="block mt-6 bg-gold text-navy py-4 rounded-2xl text-center text-base font-bold no-underline shadow-lg"
      >
        지금 바로 전화하기
      </a>
    </div>
  )
}

function ContactRow({ icon, label, value, href }) {
  return (
    <a href={href} className="flex items-center gap-3 no-underline text-white">
      <span className="text-gold-light">{icon}</span>
      <span className="text-xs text-gray-300 w-10">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </a>
  )
}

function InfoCard({ title, items }) {
  return (
    <div className="bg-warm-gray rounded-xl p-5">
      <h3 className="text-sm font-bold text-navy mb-3">{title}</h3>
      <ul className="space-y-2 list-none p-0 m-0">
        {items.map((item, i) => (
          <li key={i} className="text-xs text-gray-600 leading-relaxed flex gap-2">
            <span className="text-gold-dark mt-0.5">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MessageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
