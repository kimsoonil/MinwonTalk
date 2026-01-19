import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';
import type { Minwon } from '@/entities/minwon/model/types';
import { formatCurrency } from '@/shared/lib/utils';

type MinwonCardProps = {
  minwon: Minwon;
};

/**
 * 개별 민원 카드 컴포넌트
 */
export function MinwonCard({ minwon }: MinwonCardProps) {
  const handleCardClick = () => {
    window.open(minwon.url || 'https://www.gov.kr', '_blank');
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Card
      className="hover:shadow-lg transition-shadow flex flex-col cursor-pointer"
      onClick={handleCardClick}
    >
      <CardHeader className="flex-shrink-0">
        <CardTitle className="text-lg line-clamp-1">{minwon.name}</CardTitle>
        <CardDescription className="text-sm">
          {minwon.institution}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-shrink-0">
          {minwon.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
          {minwon.keywords.slice(0, 3).map((keyword) => (
            <span
              key={keyword}
              className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
            >
              {keyword}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 border-t space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">
              수수료: {formatCurrency(minwon.fee)}
            </span>
            <span
              className={`px-2 py-1 rounded text-xs ${
                minwon.onlineAvailable
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {minwon.onlineAvailable ? '온라인 발급 가능' : '온라인 발급 불가'}
            </span>
          </div>
          <Link
            href={`/chat?minwon=${minwon.id}`}
            className="w-full"
            onClick={handleButtonClick}
          >
            <Button variant="outline" className="w-full mt-2" size="sm">
              신청하기
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

