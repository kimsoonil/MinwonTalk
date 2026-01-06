import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { mockMinwonPackages, getMinwonsByPackageId } from '@/mock/minwons';
import { formatCurrency } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';

type PackagePageProps = {
  params: { id: string };
};

export function generateStaticParams() {
  return mockMinwonPackages.map((pkg) => ({
    id: pkg.id,
  }));
}

export default function PackagePage({ params }: PackagePageProps) {
  const { id } = params;
  const pkg = mockMinwonPackages.find((p) => p.id === id);
  const minwons = pkg ? getMinwonsByPackageId(id) : [];

  if (!pkg) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>패키지를 찾을 수 없습니다</CardTitle>
          </CardHeader>
          <CardContent>
            <Link href="/">
              <Button>홈으로 돌아가기</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              뒤로가기
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl">{pkg.name}</CardTitle>
              <CardDescription className="text-base">
                {pkg.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">사용 사례:</p>
                <div className="flex flex-wrap gap-2">
                  {pkg.useCases.map((useCase) => (
                    <span
                      key={useCase}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">포함 서류</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {minwons.map((minwon) => (
                <Card 
                  key={minwon.id}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => window.open('https://plus.gov.kr/', '_blank')}
                >
                  <CardHeader>
                    <CardTitle>{minwon.name}</CardTitle>
                    <CardDescription>{minwon.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {minwon.description}
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">
                        수수료: {formatCurrency(minwon.fee)}
                      </span>
                      <span
                        className={
                          minwon.onlineAvailable
                            ? 'text-green-600'
                            : 'text-red-600'
                        }
                      >
                        {minwon.onlineAvailable
                          ? '온라인 발급 가능'
                          : '온라인 발급 불가'}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="flex-1">
              패키지 발급 신청
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              챗봇으로 상담받기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
