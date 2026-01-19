import { Card, CardContent } from '@/shared/ui/card';

/**
 * FAQ 검색 결과가 없을 때 표시되는 빈 상태 컴포넌트
 */
export function FaqListEmpty() {
  return (
    <Card>
      <CardContent className="py-12 text-center">
        <p className="text-muted-foreground">
          선택한 카테고리에 해당하는 질문이 없습니다.
        </p>
      </CardContent>
    </Card>
  );
}

