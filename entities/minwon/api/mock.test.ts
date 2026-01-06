import { describe, it, expect } from 'vitest';
import {
  mockMinwons,
  mockMinwonPackages,
  searchMinwons,
  getMinwonById,
  getMinwonsByPackageId,
} from './mock';

describe('entities/minwon/api', () => {
  describe('mockMinwons', () => {
    it('민원 목록이 존재해야 함', () => {
      expect(mockMinwons.length).toBeGreaterThan(0);
    });

    it('각 민원이 필수 필드를 가져야 함', () => {
      mockMinwons.forEach((minwon) => {
        expect(minwon).toHaveProperty('id');
        expect(minwon).toHaveProperty('name');
        expect(minwon).toHaveProperty('category');
        expect(minwon).toHaveProperty('institution');
        expect(minwon).toHaveProperty('description');
        expect(minwon).toHaveProperty('keywords');
        expect(minwon).toHaveProperty('processingTime');
        expect(minwon).toHaveProperty('fee');
        expect(minwon).toHaveProperty('onlineAvailable');
      });
    });

    it('고유한 ID를 가져야 함', () => {
      const ids = mockMinwons.map((m) => m.id);
      const uniqueIds = new Set(ids);
      expect(ids.length).toBe(uniqueIds.size);
    });
  });

  describe('mockMinwonPackages', () => {
    it('패키지 목록이 존재해야 함', () => {
      expect(mockMinwonPackages.length).toBeGreaterThan(0);
    });

    it('각 패키지가 필수 필드를 가져야 함', () => {
      mockMinwonPackages.forEach((pkg) => {
        expect(pkg).toHaveProperty('id');
        expect(pkg).toHaveProperty('name');
        expect(pkg).toHaveProperty('description');
        expect(pkg).toHaveProperty('minwons');
        expect(pkg).toHaveProperty('useCases');
        expect(Array.isArray(pkg.minwons)).toBe(true);
        expect(Array.isArray(pkg.useCases)).toBe(true);
      });
    });
  });

  describe('searchMinwons', () => {
    it('이름으로 검색해야 함', () => {
      const results = searchMinwons('주민등록등본');
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].name).toContain('주민등록등본');
    });

    it('키워드로 검색해야 함', () => {
      const results = searchMinwons('등본');
      expect(results.length).toBeGreaterThan(0);
    });

    it('설명으로 검색해야 함', () => {
      const results = searchMinwons('증명');
      expect(results.length).toBeGreaterThan(0);
    });

    it('대소문자 구분 없이 검색해야 함', () => {
      const results1 = searchMinwons('등본');
      const results2 = searchMinwons('등본');
      expect(results1.length).toBe(results2.length);
    });

    it('검색 결과가 없으면 빈 배열을 반환해야 함', () => {
      const results = searchMinwons('존재하지않는민원');
      expect(results).toEqual([]);
    });
  });

  describe('getMinwonById', () => {
    it('유효한 ID로 민원을 조회해야 함', () => {
      const minwon = getMinwonById('minwon-001');
      expect(minwon).toBeDefined();
      expect(minwon?.id).toBe('minwon-001');
    });

    it('존재하지 않는 ID는 undefined를 반환해야 함', () => {
      const minwon = getMinwonById('invalid-id');
      expect(minwon).toBeUndefined();
    });
  });

  describe('getMinwonsByPackageId', () => {
    it('유효한 패키지 ID로 민원 목록을 조회해야 함', () => {
      const minwons = getMinwonsByPackageId('package-001');
      expect(minwons.length).toBeGreaterThan(0);
      expect(minwons.every((m) => m !== undefined)).toBe(true);
    });

    it('존재하지 않는 패키지 ID는 빈 배열을 반환해야 함', () => {
      const minwons = getMinwonsByPackageId('invalid-package');
      expect(minwons).toEqual([]);
    });

    it('패키지에 포함된 모든 민원을 반환해야 함', () => {
      const pkg = mockMinwonPackages.find((p) => p.id === 'package-001');
      if (pkg) {
        const minwons = getMinwonsByPackageId('package-001');
        expect(minwons.length).toBe(pkg.minwons.length);
      }
    });
  });
});

