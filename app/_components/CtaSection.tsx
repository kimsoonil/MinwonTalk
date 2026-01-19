import Link from 'next/link';
import { Button } from '@/shared/ui/button';

/**
 * CTA(Call to Action) 섹션 컴포넌트
 */
export function CtaSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          지금 바로 민원 서류를 발급받으세요
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          더 이상 주민센터에 방문하거나 보안 프로그램과 씨름하지 마세요.
        </p>
        <Link href="/chat">
          <Button size="lg" className="text-lg px-8">
            무료로 시작하기
          </Button>
        </Link>
      </div>
    </section>
  );
}

