import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { ChevronDown } from 'lucide-react';
import type { FaqItem as FaqItemType } from '@/app/faq/_types';
import { CATEGORY_ICONS } from '@/app/faq/_constants/categories';

type FaqItemProps = {
  faq: FaqItemType;
  isOpen: boolean;
  onToggle: () => void;
};

/**
 * 개별 FAQ 아이템 컴포넌트
 */
export function FaqItem({ faq, isOpen, onToggle }: FaqItemProps) {
  const Icon = CATEGORY_ICONS[faq.category];

  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="cursor-pointer" onClick={onToggle}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-lg font-semibold">
              {faq.question}
            </CardTitle>
          </div>
          <ChevronDown
            className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </div>
      </CardHeader>
      {isOpen && (
        <CardContent className="pt-0">
          <div className="pl-13">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {faq.answer}
            </p>
          </div>
        </CardContent>
      )}
    </Card>
  );
}

