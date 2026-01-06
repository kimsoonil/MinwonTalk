import { describe, it, expect } from 'vitest';
import { cn, formatDate, formatNumber, formatCurrency } from './utils';

describe('utils', () => {
  describe('cn', () => {
    it('단일 클래스를 반환해야 함', () => {
      expect(cn('foo')).toBe('foo');
    });

    it('여러 클래스를 병합해야 함', () => {
      expect(cn('foo', 'bar')).toBe('foo bar');
    });

    it('조건부 클래스를 처리해야 함', () => {
      expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz');
    });

    it('Tailwind 클래스 충돌을 해결해야 함', () => {
      expect(cn('p-2', 'p-4')).toBe('p-4');
    });
  });

  describe('formatDate', () => {
    it('날짜를 한국어 형식으로 포맷해야 함', () => {
      const date = new Date('2024-01-15');
      const formatted = formatDate(date);
      expect(formatted).toContain('2024');
      expect(formatted).toContain('1월');
      expect(formatted).toContain('15');
    });

    it('다른 날짜도 올바르게 포맷해야 함', () => {
      const date = new Date('2024-12-25');
      const formatted = formatDate(date);
      expect(formatted).toContain('2024');
      expect(formatted).toContain('12월');
      expect(formatted).toContain('25');
    });
  });

  describe('formatNumber', () => {
    it('천 단위 구분자를 추가해야 함', () => {
      expect(formatNumber(1000)).toBe('1,000');
      expect(formatNumber(1000000)).toBe('1,000,000');
    });

    it('작은 숫자는 그대로 반환해야 함', () => {
      expect(formatNumber(123)).toBe('123');
      expect(formatNumber(0)).toBe('0');
    });

    it('음수도 처리해야 함', () => {
      expect(formatNumber(-1000)).toBe('-1,000');
    });
  });

  describe('formatCurrency', () => {
    it('금액을 원화 형식으로 포맷해야 함', () => {
      expect(formatCurrency(1000)).toBe('1,000원');
      expect(formatCurrency(500)).toBe('500원');
      expect(formatCurrency(0)).toBe('0원');
    });

    it('큰 금액도 올바르게 포맷해야 함', () => {
      expect(formatCurrency(1000000)).toBe('1,000,000원');
    });
  });
});

