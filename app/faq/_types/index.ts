/**
 * FAQ 관련 타입 정의
 */
export type FaqCategory = 'service' | 'usage' | 'security' | 'payment';

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
};

