import { useState } from 'react';
import { FAQ_DATA } from '@/app/faq/_constants/faqData';
import type { FaqItem } from '@/app/faq/_types';

/**
 * FAQ 필터링을 위한 커스텀 훅
 */
export function useFaqFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFaqs =
    selectedCategory === 'all'
      ? FAQ_DATA
      : FAQ_DATA.filter((faq) => faq.category === selectedCategory);

  return {
    selectedCategory,
    setSelectedCategory,
    filteredFaqs,
  };
}

