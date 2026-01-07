import { describe, it, expect } from 'vitest';
import { getMinwonById, mockMinwons } from './mock';

describe('Minwon URL', () => {
  describe('민원별 URL 설정', () => {
    it('주민등록등본은 올바른 URL을 가져야 함', () => {
      const minwon = getMinwonById('minwon-001');
      expect(minwon?.url).toBeDefined();
      expect(minwon?.url).toContain('gov.kr');
    });

    it('가족관계증명서는 plus.gov.kr URL을 가져야 함', () => {
      const minwon = getMinwonById('minwon-003');
      expect(minwon?.url).toBeDefined();
      expect(minwon?.url).toContain('plus.gov.kr');
      expect(minwon?.url).toContain('srvcId=97400000004');
    });

    it('인감증명서는 올바른 URL을 가져야 함', () => {
      const minwon = getMinwonById('minwon-004');
      expect(minwon?.url).toBeDefined();
      expect(minwon?.url).toContain('gov.kr');
      expect(minwon?.url).toContain('CappBizCD=13100000025');
    });

    it('혼인관계증명서는 올바른 URL을 가져야 함', () => {
      const minwon = getMinwonById('minwon-009');
      expect(minwon?.url).toBeDefined();
      expect(minwon?.url).toContain('plus.gov.kr');
      expect(minwon?.url).toContain('typeSn=13');
    });

    it('여권 재발급은 올바른 URL을 가져야 함', () => {
      const minwon = getMinwonById('minwon-011');
      expect(minwon?.url).toBeDefined();
      expect(minwon?.url).toBe(
        'https://www.gov.kr/portal/service/serviceInfo/126200000030'
      );
    });
  });

  describe('URL 형식 검증', () => {
    it('모든 민원이 URL을 가지고 있거나 undefined여야 함', () => {
      mockMinwons.forEach((minwon) => {
        if (minwon.url) {
          expect(minwon.url).toMatch(/^https?:\/\//);
        }
      });
    });

    it('URL이 있는 민원은 유효한 URL 형식이어야 함', () => {
      const minwonsWithUrl = mockMinwons.filter((m) => m.url);
      minwonsWithUrl.forEach((minwon) => {
        expect(minwon.url).toMatch(/^https?:\/\//);
      });
    });
  });
});

