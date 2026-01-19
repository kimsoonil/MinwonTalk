import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import { MessageCircle } from 'lucide-react';
import { SUGGESTED_QUERIES } from '@/app/chat/_constants/suggestedQueries';

type ChatWelcomeCardProps = {
  onQueryClick: (query: string) => void;
};

/**
 * 채팅 환영 카드 컴포넌트
 */
export function ChatWelcomeCard({ onQueryClick }: ChatWelcomeCardProps) {
  return (
    <div className="max-w-3xl mx-auto mb-8">
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6 text-center">
          <div className="mb-4">
            <MessageCircle className="h-12 w-12 mx-auto text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-2">무엇을 도와드릴까요?</h2>
            <p className="text-muted-foreground">
              복잡한 행정 용어 대신, 일상어로 편하게 질문해주세요.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 mt-6">
            {SUGGESTED_QUERIES.map((query, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-start text-left h-auto py-3 px-4 whitespace-normal"
                onClick={() => onQueryClick(query)}
              >
                {query}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

