import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChatSidebar } from './chat-sidebar';

describe('ChatSidebar', () => {
  it('렌더링되어야 함', () => {
    const onNewChat = vi.fn();
    render(<ChatSidebar onNewChat={onNewChat} />);
    expect(screen.getByText('민원똑똑')).toBeInTheDocument();
  });

  it('새로운 상담 시작 버튼이 표시되어야 함', () => {
    const onNewChat = vi.fn();
    render(<ChatSidebar onNewChat={onNewChat} />);
    expect(screen.getByText('+ 새로운 민원 상담 시작')).toBeInTheDocument();
  });

  it('새로운 상담 시작 버튼 클릭 시 onNewChat이 호출되어야 함', async () => {
    const onNewChat = vi.fn();
    const user = userEvent.setup();
    render(<ChatSidebar onNewChat={onNewChat} />);

    const button = screen.getByText('+ 새로운 민원 상담 시작');
    await user.click(button);

    expect(onNewChat).toHaveBeenCalledTimes(1);
  });

  it('자주 찾는 민원 섹션이 표시되어야 함', () => {
    const onNewChat = vi.fn();
    render(<ChatSidebar onNewChat={onNewChat} />);
    expect(screen.getByText('자주 찾는 민원')).toBeInTheDocument();
    expect(screen.getByText('주민등록등본')).toBeInTheDocument();
  });

  it('최근 상담 내역 섹션이 표시되어야 함', () => {
    const onNewChat = vi.fn();
    render(<ChatSidebar onNewChat={onNewChat} />);
    expect(screen.getByText('최근 상담 내역')).toBeInTheDocument();
    expect(screen.getByText('이사 전입신고 및 등본...')).toBeInTheDocument();
  });

  it('설정 버튼이 표시되어야 함', () => {
    const onNewChat = vi.fn();
    render(<ChatSidebar onNewChat={onNewChat} />);
    expect(screen.getByText('설정')).toBeInTheDocument();
  });

  it('가상 브라우저 보안 연결 상태가 표시되어야 함', () => {
    const onNewChat = vi.fn();
    render(<ChatSidebar onNewChat={onNewChat} />);
    expect(screen.getByText('가상 브라우저 보안 연결됨')).toBeInTheDocument();
  });

  it('currentChatId prop을 받을 수 있어야 함', () => {
    const onNewChat = vi.fn();
    render(<ChatSidebar onNewChat={onNewChat} currentChatId="chat-1" />);
    expect(screen.getByText('민원똑똑')).toBeInTheDocument();
  });
});

