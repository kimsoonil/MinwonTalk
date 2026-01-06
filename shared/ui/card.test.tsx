import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './card';

describe('Card', () => {
  it('렌더링되어야 함', () => {
    render(
      <Card>
        <CardContent>카드 내용</CardContent>
      </Card>
    );
    expect(screen.getByText('카드 내용')).toBeInTheDocument();
  });

  it('CardHeader와 CardTitle을 포함할 수 있어야 함', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>카드 제목</CardTitle>
        </CardHeader>
      </Card>
    );
    expect(screen.getByText('카드 제목')).toBeInTheDocument();
  });

  it('CardDescription을 포함할 수 있어야 함', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>제목</CardTitle>
          <CardDescription>설명</CardDescription>
        </CardHeader>
      </Card>
    );
    expect(screen.getByText('설명')).toBeInTheDocument();
  });

  it('CardContent를 포함할 수 있어야 함', () => {
    render(
      <Card>
        <CardContent>내용</CardContent>
      </Card>
    );
    expect(screen.getByText('내용')).toBeInTheDocument();
  });

  it('CardFooter를 포함할 수 있어야 함', () => {
    render(
      <Card>
        <CardContent>내용</CardContent>
        <CardFooter>푸터</CardFooter>
      </Card>
    );
    expect(screen.getByText('푸터')).toBeInTheDocument();
  });

  it('추가 className을 적용해야 함', () => {
    const { container } = render(
      <Card className="custom-class">
        <CardContent>내용</CardContent>
      </Card>
    );
    const card = container.querySelector('.custom-class');
    expect(card).toBeInTheDocument();
  });
});

