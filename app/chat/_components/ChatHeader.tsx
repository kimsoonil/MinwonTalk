import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

/**
 * 채팅 헤더 컴포넌트
 */
export function ChatHeader() {
  return (
    <div className="border-b bg-background px-4 md:px-6 py-4 flex-shrink-0">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">AI 상담 내역</h1>
          <p className="text-sm text-muted-foreground">
            주민등록등본 발급 요청
          </p>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/#features"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            서비스 소개
          </Link>
          <Link
            href="/faq"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            자주 묻는 질문
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-sm">안녕하세요, 김민원님</span>
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageCircle className="h-4 w-4 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

