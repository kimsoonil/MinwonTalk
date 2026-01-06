import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

// Next.js Link 모킹
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe('Footer', () => {
  it('렌더링되어야 함', () => {
    render(<Footer />);
    expect(screen.getByText('민원똑똑')).toBeInTheDocument();
  });

  it('서비스 섹션 링크들이 표시되어야 함', () => {
    render(<Footer />);
    expect(screen.getByText('기능 소개')).toBeInTheDocument();
    expect(screen.getByText('요금제')).toBeInTheDocument();
    expect(screen.getByText('자주 묻는 질문')).toBeInTheDocument();
  });

  it('회사 섹션 링크들이 표시되어야 함', () => {
    render(<Footer />);
    expect(screen.getByText('팀 소개')).toBeInTheDocument();
    expect(screen.getByText('이용약관')).toBeInTheDocument();
    expect(screen.getByText('개인정보처리방침')).toBeInTheDocument();
  });

  it('고객지원 섹션 링크들이 표시되어야 함', () => {
    render(<Footer />);
    expect(screen.getByText('1:1 문의')).toBeInTheDocument();
    expect(screen.getByText('공지사항')).toBeInTheDocument();
  });

  it('저작권 정보가 표시되어야 함', () => {
    render(<Footer />);
    expect(
      screen.getByText(/© 2024 MinwonTtokttok. All rights reserved./)
    ).toBeInTheDocument();
  });

  it('서비스 설명이 표시되어야 함', () => {
    render(<Footer />);
    expect(
      screen.getByText(/누구나 쉽고 빠르게 공공 서비스를 이용할 수 있도록/)
    ).toBeInTheDocument();
  });
});

