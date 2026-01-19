import { Button } from '@/shared/ui/button';
import { FAQ_CATEGORIES, CATEGORY_ICONS } from '@/app/faq/_constants/categories';

type FaqCategoryFilterProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

/**
 * FAQ 카테고리 필터 컴포넌트
 */
export function FaqCategoryFilter({
  selectedCategory,
  onCategoryChange,
}: FaqCategoryFilterProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        {FAQ_CATEGORIES.map((category) => {
          const Icon =
            category.id !== 'all'
              ? CATEGORY_ICONS[category.id as keyof typeof CATEGORY_ICONS]
              : null;
          return (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => onCategoryChange(category.id)}
              size="sm"
              className="text-sm"
            >
              {Icon && <Icon className="h-4 w-4 mr-2" />}
              {category.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

