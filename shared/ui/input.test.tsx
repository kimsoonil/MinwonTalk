import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './input';

describe('Input', () => {
  it('렌더링되어야 함', () => {
    render(<Input placeholder="입력하세요" />);
    expect(screen.getByPlaceholderText('입력하세요')).toBeInTheDocument();
  });

  it('값을 입력할 수 있어야 함', async () => {
    const user = userEvent.setup();
    render(<Input placeholder="입력하세요" />);

    const input = screen.getByPlaceholderText('입력하세요');
    await user.type(input, '테스트 입력');
    expect(input).toHaveValue('테스트 입력');
  });

  it('onChange 이벤트를 처리해야 함', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Input onChange={handleChange} placeholder="입력하세요" />);

    const input = screen.getByPlaceholderText('입력하세요');
    await user.type(input, '테스트');
    expect(handleChange).toHaveBeenCalled();
  });

  it('disabled 상태일 때 입력할 수 없어야 함', () => {
    render(<Input disabled placeholder="입력하세요" />);
    const input = screen.getByPlaceholderText('입력하세요');
    expect(input).toBeDisabled();
  });

  it('type 속성을 지원해야 함', () => {
    render(<Input type="password" placeholder="비밀번호" />);
    const input = screen.getByPlaceholderText('비밀번호');
    expect(input).toHaveAttribute('type', 'password');
  });

  it('value 속성을 지원해야 함', () => {
    render(<Input value="고정값" readOnly />);
    const input = screen.getByDisplayValue('고정값');
    expect(input).toHaveValue('고정값');
  });

  it('추가 className을 적용해야 함', () => {
    render(<Input className="custom-class" placeholder="입력" />);
    const input = screen.getByPlaceholderText('입력');
    expect(input).toHaveClass('custom-class');
  });
});

