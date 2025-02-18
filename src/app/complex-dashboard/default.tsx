//페이지 reload시, default.tsx로 로드 되고 프레임워크가 현재 url에서 슬롯을 찾지 못할 때(children slot에서 오류) 폴백역할
export default function ComplexDashboardPage() {
  return <h1>Default Complex dashboard</h1>;
}
