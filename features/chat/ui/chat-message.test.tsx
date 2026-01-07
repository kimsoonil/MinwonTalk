import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ChatMessage } from './chat-message';
import type { ChatMessage as ChatMessageType } from '@/entities/chat/model/types';
import { createChatMessage } from '@/entities/chat/api';

// window.open 모킹
Object.defineProperty(window, 'open', {
  writable: true,
  value: vi.fn(),
});

describe('ChatMessage', () => {
  it('사용자 메시지를 렌더링해야 함', () => {
    const message: ChatMessageType = createChatMessage(
      'user',
      '테스트 메시지'
    );
    render(<ChatMessage message={message} />);

    expect(screen.getByText('테스트 메시지')).toBeInTheDocument();
    expect(screen.getByText('나')).toBeInTheDocument();
  });

  it('어시스턴트 메시지를 렌더링해야 함', () => {
    const message: ChatMessageType = createChatMessage(
      'assistant',
      '안녕하세요'
    );
    render(<ChatMessage message={message} />);

    expect(screen.getByText('안녕하세요')).toBeInTheDocument();
    // 텍스트가 "민원똑똑 AI · 시간" 형식으로 나뉘어져 있으므로 정규식 사용
    expect(screen.getByText(/민원똑똑 AI/)).toBeInTheDocument();
  });

  it('관련 민원이 있으면 표시해야 함', () => {
    const message: ChatMessageType = createChatMessage(
      'assistant',
      '관련 민원입니다',
      ['minwon-001']
    );
    render(<ChatMessage message={message} />);

    expect(screen.getByText('주민등록등본')).toBeInTheDocument();
  });

  it('관련 민원 카드를 클릭하면 새 창이 열려야 함', async () => {
    const message: ChatMessageType = createChatMessage(
      'assistant',
      '테스트',
      ['minwon-001']
    );
    render(<ChatMessage message={message} />);

    const minwonCard = screen.getByText('주민등록등본').closest('div');
    if (minwonCard) {
      minwonCard.click();
      expect(window.open).toHaveBeenCalled();
    }
  });

  it('여권 재발급 관련 민원을 표시해야 함', () => {
    const message: ChatMessageType = createChatMessage(
      'assistant',
      '여권 재발급 안내',
      ['minwon-011']
    );
    render(<ChatMessage message={message} />);

    expect(screen.getByText('여권 재발급')).toBeInTheDocument();
  });

  it('타임스탬프를 표시해야 함', () => {
    const message: ChatMessageType = createChatMessage(
      'user',
      '테스트'
    );
    render(<ChatMessage message={message} />);

    // 타임스탬프 형식 확인 (시간:분 형식)
    const timestamp = screen.getByText(/나 ·/);
    expect(timestamp).toBeInTheDocument();
  });

  it('여러 관련 민원을 표시해야 함', () => {
    const message: ChatMessageType = createChatMessage(
      'assistant',
      '여러 민원',
      ['minwon-001', 'minwon-002', 'minwon-003']
    );
    render(<ChatMessage message={message} />);

    expect(screen.getByText('주민등록등본')).toBeInTheDocument();
    expect(screen.getByText('주민등록초본')).toBeInTheDocument();
    expect(screen.getByText('가족관계증명서')).toBeInTheDocument();
  });

  it('사용자 메시지와 어시스턴트 메시지의 스타일이 다르게 표시되어야 함', () => {
    const userMessage: ChatMessageType = createChatMessage(
      'user',
      '사용자'
    );
    const assistantMessage: ChatMessageType = createChatMessage(
      'assistant',
      '어시스턴트'
    );

    const { rerender } = render(<ChatMessage message={userMessage} />);
    expect(screen.getByText('사용자')).toBeInTheDocument();

    rerender(<ChatMessage message={assistantMessage} />);
    expect(screen.getByText('어시스턴트')).toBeInTheDocument();
  });
});

