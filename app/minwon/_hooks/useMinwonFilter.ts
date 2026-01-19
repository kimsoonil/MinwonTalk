import { useState, useMemo } from 'react';
import { mockMinwons } from '@/entities/minwon/api';
import type { Minwon } from '@/entities/minwon/model/types';

/**
 * 민원 필터링을 위한 커스텀 훅
 */
export function useMinwonFilter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredMinwons = useMemo(() => {
    let filtered: Minwon[] = mockMinwons;

    // 카테고리 필터
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((m) => m.category === selectedCategory);
    }

    // 검색 필터
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (m) =>
          m.name.toLowerCase().includes(query) ||
          m.keywords.some((k) => k.toLowerCase().includes(query)) ||
          m.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredMinwons,
  };
}

