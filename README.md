# 민원똑똑 (MinwonTalk)

Next.js 14 / TypeScript 기반 대화형 민원 안내 UX 프로토타입입니다.

## 현재 구현 범위

- `entities/minwon/api/mock.ts`: 정적 민원·패키지 데이터, 이름·키워드·설명 검색
- `entities/chat/api/mock.ts`: 조건문을 사용한 키워드 기반 응답과 관련 민원 연결
- 기능·엔티티·위젯·공통 UI로 분리된 구조
- Zustand 상태 관리, TanStack Query, Zod, Tailwind CSS
- Vitest·React Testing Library 검색·응답·화면 테스트

## 구현되지 않은 기능

외부 LLM, 정부 사이트 크롤링, 간편 본인 인증, 가상 브라우저, 실제 서류 발급·PDF 보관·알림톡은 미구현입니다. 화면의 민원 비용·기간·필요 서류는 모의 데이터이며 실제 행정 안내로 사용하면 안 됩니다. 기존의 “탐색 시간 80% 단축”은 측정 근거가 없어 성과에서 제외했습니다.

## 실행

```sh
npm ci --legacy-peer-deps
npm run dev
npm test -- --run
npm run build
```

데모: https://minwontalk.netlify.app/

기존 Next.js 버전의 보안 업데이트와 행정 안내 링크·내용의 공식 출처 대조는 후속 과제입니다. 인증·발급 기능이 실제 구현되기 전까지 해당 기능을 제공하는 서비스로 설명하지 않습니다.
