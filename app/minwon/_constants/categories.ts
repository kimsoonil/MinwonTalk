/**
 * 민원 카테고리 상수
 */
export const MINWON_CATEGORIES = [
  'all',
  '주민등록',
  '가족관계',
  '인감증명',
  '세무',
  '법원',
  '병무',
  '여권',
  '기타',
] as const;

export type MinwonCategory = (typeof MINWON_CATEGORIES)[number];

/**
 * 카테고리 표시명 매핑
 */
export const CATEGORY_LABELS: Record<string, string> = {
  all: '전체',
  주민등록: '주민등록',
  가족관계: '가족관계',
  인감증명: '인감증명',
  세무: '세무',
  법원: '법원',
  병무: '병무',
  여권: '여권',
  기타: '기타',
};

