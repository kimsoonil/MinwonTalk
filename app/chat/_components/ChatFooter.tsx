import { ChatInput } from '@/features/chat/ui/chat-input';

type ChatFooterProps = {
  onSend: (message: string) => void;
  disabled: boolean;
};

/**
 * 채팅 푸터 컴포넌트
 */
export function ChatFooter({ onSend, disabled }: ChatFooterProps) {
  return (
    <div className="border-t bg-background flex-shrink-0">
      <ChatInput onSend={onSend} disabled={disabled} />
      <div className="px-4 pb-4">
        <p className="text-xs text-center text-muted-foreground">
          민원똑똑 AI는 실수를 할 수 있습니다. 중요한 정보는 다시
          확인하세요.
        </p>
      </div>
    </div>
  );
}

