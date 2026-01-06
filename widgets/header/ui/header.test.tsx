import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './header';

// Next.js Link 모킹
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe('Header', () => {
  it('렌더링되어야 함', () => {
    render(<Header />);
    expect(screen.getByText('민원똑똑')).toBeInTheDocument();
  });

  it('로고 링크가 홈으로 연결되어야 함', () => {
    render(<Header />);
    const logoLink = screen.getByText('민원똑똑').closest('a');
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('네비게이션 링크들이 표시되어야 함', () => {
    render(<Header />);
    expect(screen.getByText('서비스 소개')).toBeInTheDocument();
    expect(screen.getByText('이용 방법')).toBeInTheDocument();
    expect(screen.getByText('자주 묻는 질문')).toBeInTheDocument();
  });

  it('showLogin이 true일 때 로그인 버튼이 표시되어야 함', () => {
    render(<Header showLogin={true} />);
    expect(screen.getByText('로그인')).toBeInTheDocument();
  });

  it('showLogin이 false일 때 로그인 버튼이 표시되지 않아야 함', () => {
    render(<Header showLogin={false} />);
    expect(screen.queryByText('로그인')).not.toBeInTheDocument();
  });

  it('기본적으로 showLogin은 true여야 함', () => {
    render(<Header />);
    expect(screen.getByText('로그인')).toBeInTheDocument();
  });

  it('로그인 버튼이 /auth로 연결되어야 함', () => {
    render(<Header />);
    const loginLink = screen.getByText('로그인').closest('a');
    expect(loginLink).toHaveAttribute('href', '/auth');
  });
});

