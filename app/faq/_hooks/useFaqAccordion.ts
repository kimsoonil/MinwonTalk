import { useState } from 'react';

/**
 * FAQ 아코디언 상태 관리를 위한 커스텀 훅
 */
export function useFaqAccordion() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const isOpen = (id: string) => openItems.has(id);

  return {
    toggleItem,
    isOpen,
  };
}

