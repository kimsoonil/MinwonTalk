import { Card, CardContent } from '@/shared/ui/card';

/**
 * 채팅 로딩 인디케이터 컴포넌트
 */
export function ChatLoadingIndicator() {
  return (
    <div className="flex justify-start">
      <Card className="bg-muted">
        <CardContent className="p-4">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-foreground rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-foreground rounded-full animate-bounce"
              style={{ animationDelay: '0.2s' }}
            ></div>
            <div
              className="w-2 h-2 bg-foreground rounded-full animate-bounce"
              style={{ animationDelay: '0.4s' }}
            ></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

