import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './button';

describe('Button', () => {
  it('렌더링되어야 함', () => {
    render(<Button>클릭</Button>);
    expect(screen.getByRole('button', { name: '클릭' })).toBeInTheDocument();
  });

  it('클릭 이벤트를 처리해야 함', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={handleClick}>클릭</Button>);

    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disabled 상태일 때 클릭되지 않아야 함', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(
      <Button onClick={handleClick} disabled>
        비활성화
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('다양한 variant를 지원해야 함', () => {
    const { rerender } = render(<Button variant="default">기본</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();

    rerender(<Button variant="outline">아웃라인</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();

    rerender(<Button variant="ghost">고스트</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('다양한 size를 지원해야 함', () => {
    const { rerender } = render(<Button size="sm">작은 버튼</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();

    rerender(<Button size="lg">큰 버튼</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('추가 className을 적용해야 함', () => {
    render(<Button className="custom-class">커스텀</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('type 속성을 지원해야 함', () => {
    render(<Button type="submit">제출</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });
});

