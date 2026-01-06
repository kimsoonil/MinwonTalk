import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChatInput } from './chat-input';

describe('ChatInput', () => {
  it('렌더링되어야 함', () => {
    const onSend = vi.fn();
    render(<ChatInput onSend={onSend} />);
    expect(
      screen.getByPlaceholderText(/무엇을 도와드릴까요/)
    ).toBeInTheDocument();
  });

  it('메시지를 입력하고 전송할 수 있어야 함', async () => {
    const onSend = vi.fn();
    const user = userEvent.setup();
    render(<ChatInput onSend={onSend} />);

    const input = screen.getByPlaceholderText(/무엇을 도와드릴까요/);
    const submitButton = screen.getByRole('button');

    await user.type(input, '등본 발급해줘');
    await user.click(submitButton);

    expect(onSend).toHaveBeenCalledWith('등본 발급해줘');
    expect(input).toHaveValue('');
  });

  it('Enter 키로 전송할 수 있어야 함', async () => {
    const onSend = vi.fn();
    const user = userEvent.setup();
    render(<ChatInput onSend={onSend} />);

    const input = screen.getByPlaceholderText(/무엇을 도와드릴까요/);
    await user.type(input, '테스트 메시지{Enter}');

    expect(onSend).toHaveBeenCalledWith('테스트 메시지');
  });

  it('빈 메시지는 전송되지 않아야 함', async () => {
    const onSend = vi.fn();
    const user = userEvent.setup();
    render(<ChatInput onSend={onSend} />);

    const input = screen.getByPlaceholderText(/무엇을 도와드릴까요/);
    const submitButton = screen.getByRole('button');

    await user.type(input, '   ');
    await user.click(submitButton);

    expect(onSend).not.toHaveBeenCalled();
    expect(submitButton).toBeDisabled();
  });

  it('disabled 상태일 때 입력할 수 없어야 함', () => {
    const onSend = vi.fn();
    render(<ChatInput onSend={onSend} disabled />);

    const input = screen.getByPlaceholderText(/무엇을 도와드릴까요/);
    const submitButton = screen.getByRole('button');

    expect(input).toBeDisabled();
    expect(submitButton).toBeDisabled();
  });

  it('disabled 상태일 때 전송되지 않아야 함', async () => {
    const onSend = vi.fn();
    const user = userEvent.setup();
    render(<ChatInput onSend={onSend} disabled />);

    const input = screen.getByPlaceholderText(/무엇을 도와드릴까요/);
    await user.type(input, '테스트{Enter}');

    expect(onSend).not.toHaveBeenCalled();
  });

  it('공백만 있는 메시지는 전송되지 않아야 함', async () => {
    const onSend = vi.fn();
    const user = userEvent.setup();
    render(<ChatInput onSend={onSend} />);

    const input = screen.getByPlaceholderText(/무엇을 도와드릴까요/);
    await user.type(input, '   {Enter}');

    expect(onSend).not.toHaveBeenCalled();
  });
});

