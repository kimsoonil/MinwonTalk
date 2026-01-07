import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from './page';

// Next.js Link 모킹
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe('HomePage', () => {
  it('메인 페이지가 렌더링되어야 함', () => {
    render(<HomePage />);
    expect(screen.getByText(/복잡한 민원 서류/)).toBeInTheDocument();
  });

  it('Hero 섹션이 표시되어야 함', () => {
    render(<HomePage />);
    expect(
      screen.getByText(/복잡한 민원 서류,/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/민원똑똑에게 물어보세요/)
    ).toBeInTheDocument();
  });

  it('상담 시작하기 버튼이 있어야 함', () => {
    render(<HomePage />);
    const chatButton = screen.getByRole('link', { name: /상담 시작하기/i });
    expect(chatButton).toBeInTheDocument();
    expect(chatButton).toHaveAttribute('href', '/chat');
  });

  it('이용 가이드 보기 버튼이 있어야 함', () => {
    render(<HomePage />);
    const guideButton = screen.getByRole('link', { name: /이용 가이드 보기/i });
    expect(guideButton).toBeInTheDocument();
    expect(guideButton).toHaveAttribute('href', '/#how-it-works');
  });

  it('주요 기능 섹션이 표시되어야 함', () => {
    render(<HomePage />);
    expect(screen.getByText(/KEY FEATURES/)).toBeInTheDocument();
    expect(screen.getByText(/민원똑똑만의 핵심 기능/)).toBeInTheDocument();
    expect(screen.getByText(/AI 챗봇 상담/)).toBeInTheDocument();
    expect(screen.getByText(/무설치 간편 인증/)).toBeInTheDocument();
    expect(screen.getByText(/가상 브라우저 보안/)).toBeInTheDocument();
  });

  it('이용 방법 섹션이 표시되어야 함', () => {
    render(<HomePage />);
    expect(screen.getByText(/HOW IT WORKS/)).toBeInTheDocument();
    expect(screen.getByText(/서비스 이용 방법/)).toBeInTheDocument();
    expect(screen.getByText(/AI에게 질문하기/)).toBeInTheDocument();
    expect(screen.getByText(/간편 인증 진행/)).toBeInTheDocument();
    expect(screen.getByText(/서류 발급 완료/)).toBeInTheDocument();
  });

  it('CTA 섹션이 표시되어야 함', () => {
    render(<HomePage />);
    expect(
      screen.getByText(/지금 바로 민원 서류를 발급받으세요/)
    ).toBeInTheDocument();
    const ctaButton = screen.getByRole('link', { name: /무료로 시작하기/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '/chat');
  });

  it('특징 배지가 표시되어야 함', () => {
    render(<HomePage />);
    expect(screen.getByText(/Active-X 설치 없음/)).toBeInTheDocument();
    expect(screen.getByText(/24시간 챗봇 대기/)).toBeInTheDocument();
  });

  it('파트너 섹션이 표시되어야 함', () => {
    render(<HomePage />);
    expect(
      screen.getByText(/민원똑똑은 주요 공공기관 서비스와 함께합니다/)
    ).toBeInTheDocument();
  });
});

