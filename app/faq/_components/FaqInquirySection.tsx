import Link from 'next/link';
import { Button } from '@/shared/ui/button';
import { MessageCircle } from 'lucide-react';

/**
 * FAQ 문의 섹션 컴포넌트
 */
export function FaqInquirySection() {
  return (
    <div className="mt-12 p-6 bg-muted/50 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">더 궁금한 점이 있으신가요?</h2>
      <p className="text-muted-foreground mb-4">
        원하는 답변을 찾지 못하셨다면 챗봇을 통해 실시간으로 상담받으시거나
        1:1 문의를 남겨주세요.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/chat">
          <Button className="w-full sm:w-auto">
            <MessageCircle className="h-4 w-4 mr-2" />
            챗봇으로 상담받기
          </Button>
        </Link>
        <Link href="/">
          <Button variant="outline" className="w-full sm:w-auto">
            1:1 문의하기
          </Button>
        </Link>
      </div>
    </div>
  );
}

