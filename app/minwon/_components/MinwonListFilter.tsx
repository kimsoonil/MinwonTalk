import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { Search } from 'lucide-react';
import { MINWON_CATEGORIES, CATEGORY_LABELS } from '@/app/minwon/_constants/categories';

type MinwonListFilterProps = {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

/**
 * 민원 목록 검색 및 필터 컴포넌트
 */
export function MinwonListFilter({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}: MinwonListFilterProps) {
  return (
    <div className="mb-6 space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          placeholder="민원명, 키워드로 검색..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 h-12"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {MINWON_CATEGORIES.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => onCategoryChange(category)}
            size="sm"
            className="text-sm"
          >
            {CATEGORY_LABELS[category]}
          </Button>
        ))}
      </div>
    </div>
  );
}

