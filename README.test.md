# 테스트 가이드

이 프로젝트는 Vitest와 React Testing Library를 사용하여 단위 테스트를 작성합니다.

## 테스트 실행

```bash
# 모든 테스트 실행
npm run test

# Watch 모드로 실행
npm run test -- --watch

# UI 모드로 실행
npm run test:ui

# 커버리지 리포트 생성
npm run test:coverage
```

## 테스트 구조

FSD(Feature-Sliced Design) 아키텍처에 따라 테스트 파일도 동일한 구조로 구성됩니다:

```
shared/
  lib/
    utils.test.ts
  ui/
    button.test.tsx
    input.test.tsx
    card.test.tsx

entities/
  minwon/
    api/
      mock.test.ts
  chat/
    api/
      mock.test.ts

features/
  chat/
    ui/
      chat-input.test.tsx
      chat-message.test.tsx

widgets/
  header/
    ui/
      header.test.tsx
  footer/
    ui/
      footer.test.tsx
  chat-sidebar/
    ui/
      chat-sidebar.test.tsx
```

## 테스트 작성 가이드

### 유틸리티 함수 테스트

```typescript
import { describe, it, expect } from 'vitest';
import { formatDate } from './utils';

describe('formatDate', () => {
  it('날짜를 올바르게 포맷해야 함', () => {
    const date = new Date('2024-01-15');
    const formatted = formatDate(date);
    expect(formatted).toContain('2024');
  });
});
```

### 컴포넌트 테스트

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './button';

describe('Button', () => {
  it('렌더링되어야 함', () => {
    render(<Button>클릭</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('클릭 이벤트를 처리해야 함', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={handleClick}>클릭</Button>);
    
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## 모킹

### Next.js Link 모킹

```typescript
vi.mock('next/link', () => ({
  default: ({ children, href }) => <a href={href}>{children}</a>,
}));
```

### window 객체 모킹

```typescript
Object.defineProperty(window, 'open', {
  writable: true,
  value: vi.fn(),
});
```

## 커버리지

테스트 커버리지는 `coverage/` 디렉토리에 생성됩니다. HTML 리포트를 열어 상세한 커버리지 정보를 확인할 수 있습니다.

