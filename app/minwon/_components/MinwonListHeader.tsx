import Link from 'next/link';
import { Button } from '@/shared/ui/button';
import { ArrowLeft } from 'lucide-react';

/**
 * 민원 목록 페이지 헤더 컴포넌트
 */
export function MinwonListHeader() {
  return (
    <>
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            뒤로가기
          </Button>
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">민원 목록</h1>
        <p className="text-lg text-muted-foreground">
          필요한 민원 서류를 검색하거나 카테고리별로 찾아보세요.
        </p>
      </div>
    </>
  );
}

