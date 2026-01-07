import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FaqPage from './page';

// Next.js Link 모킹
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe('FaqPage', () => {
  it('FAQ 페이지가 렌더링되어야 함', () => {
    render(<FaqPage />);
    expect(
      screen.getByRole('heading', { name: /자주 묻는 질문/i })
    ).toBeInTheDocument();
  });

  it('FAQ 목록이 표시되어야 함', () => {
    render(<FaqPage />);
    expect(
      screen.getByText(/민원똑똑은 어떤 서비스인가요?/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/어떤 민원 서류를 발급받을 수 있나요?/)
    ).toBeInTheDocument();
  });

  it('카테고리 필터 버튼이 표시되어야 함', () => {
    render(<FaqPage />);
    expect(screen.getByRole('button', { name: /전체/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /서비스 안내/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /이용 방법/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /보안 및 개인정보/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /요금 및 결제/i })
    ).toBeInTheDocument();
  });

  it('카테고리 필터링이 작동해야 함', async () => {
    const user = userEvent.setup();
    render(<FaqPage />);

    // 서비스 안내 카테고리 클릭
    const serviceButton = screen.getByRole('button', { name: /서비스 안내/i });
    await user.click(serviceButton);

    // 서비스 카테고리 FAQ만 표시되는지 확인
    expect(
      screen.getByText(/민원똑똑은 어떤 서비스인가요?/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/24시간 이용 가능한가요?/)
    ).toBeInTheDocument();

    // 다른 카테고리 FAQ는 보이지 않아야 함
    expect(
      screen.queryByText(/어떻게 인증하나요?/)
    ).not.toBeInTheDocument();
  });

  it('FAQ 항목을 클릭하면 답변이 표시되어야 함', async () => {
    const user = userEvent.setup();
    render(<FaqPage />);

    // 첫 번째 FAQ 클릭
    const firstFaq = screen.getByText(/민원똑똑은 어떤 서비스인가요?/);
    await user.click(firstFaq);

    // 답변이 표시되는지 확인
    expect(
      screen.getByText(/AI 챗봇을 통해 복잡한 민원 서류 발급/)
    ).toBeInTheDocument();
  });

  it('FAQ 항목을 다시 클릭하면 답변이 닫혀야 함', async () => {
    const user = userEvent.setup();
    render(<FaqPage />);

    const firstFaq = screen.getByText(/민원똑똑은 어떤 서비스인가요?/);

    // 첫 클릭: 열기
    await user.click(firstFaq);
    expect(
      screen.getByText(/AI 챗봇을 통해 복잡한 민원 서류 발급/)
    ).toBeInTheDocument();

    // 두 번째 클릭: 닫기
    await user.click(firstFaq);
    expect(
      screen.queryByText(/AI 챗봇을 통해 복잡한 민원 서류 발급/)
    ).not.toBeInTheDocument();
  });

  it('여러 FAQ 항목을 동시에 열 수 있어야 함', async () => {
    const user = userEvent.setup();
    render(<FaqPage />);

    const firstFaq = screen.getByText(/민원똑똑은 어떤 서비스인가요?/);
    const secondFaq = screen.getByText(
      /어떤 민원 서류를 발급받을 수 있나요?/
    );

    await user.click(firstFaq);
    await user.click(secondFaq);

    expect(
      screen.getByText(/AI 챗봇을 통해 복잡한 민원 서류 발급/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/주민등록등본, 가족관계증명서/)
    ).toBeInTheDocument();
  });

  it('챗봇으로 상담받기 버튼이 있어야 함', () => {
    render(<FaqPage />);
    const chatButton = screen.getByRole('link', { name: /챗봇으로 상담받기/i });
    expect(chatButton).toBeInTheDocument();
    expect(chatButton).toHaveAttribute('href', '/chat');
  });

  it('1:1 문의하기 버튼이 있어야 함', () => {
    render(<FaqPage />);
    const inquiryButton = screen.getByRole('link', { name: /1:1 문의하기/i });
    expect(inquiryButton).toBeInTheDocument();
    expect(inquiryButton).toHaveAttribute('href', '/');
  });

  it('FAQ 설명 텍스트가 표시되어야 함', () => {
    render(<FaqPage />);
    expect(
      screen.getByText(/민원똑똑 서비스 이용에 대해 자주 묻는 질문들을 모았습니다/)
    ).toBeInTheDocument();
  });

  it('더 궁금한 점 섹션이 표시되어야 함', () => {
    render(<FaqPage />);
    expect(
      screen.getByText(/더 궁금한 점이 있으신가요?/)
    ).toBeInTheDocument();
  });
});

