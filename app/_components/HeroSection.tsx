import Link from 'next/link';
import { Button } from '@/shared/ui/button';
import {
  Card,
  CardContent,
} from '@/shared/ui/card';
import { MessageCircle, CheckCircle, FileText, ArrowRight } from 'lucide-react';

/**
 * 히어로 섹션 컴포넌트
 */
export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              복잡한 민원 서류,
              <br />
              민원똑똑에게 물어보세요
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              &quot;전입신고 어디서 해요?&quot; AI가 3초 만에 답변하고 보안
              프로그램 설치 없이 서류 발급까지 도와드립니다.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/chat">
              <Button size="lg" className="text-lg px-8 w-full sm:w-auto">
                <MessageCircle className="mr-2 h-5 w-5" />
                상담 시작하기
              </Button>
            </Link>
            <Link href="/#how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 w-full sm:w-auto"
              >
                이용 가이드 보기
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Active-X 설치 없음</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>24시간 챗봇 대기</span>
            </div>
          </div>
        </div>

        {/* Chat Preview Card */}
        <div className="hidden lg:block">
          <Card className="shadow-xl">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">민원똑똑 AI</p>
                  <p className="text-xs text-muted-foreground">온라인</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm">
                    안녕하세요! 민원똑똑입니다. 👋
                    <br />
                    어떤 민원 처리를 도와드릴까요?
                  </p>
                </div>

                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground rounded-lg p-4 max-w-[80%]">
                    <p className="text-sm">
                      주민등록등본 떼려면 어떻게 해?
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">💡</div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold mb-1">
                          즉시 발급 가능해요
                        </p>
                        <p className="text-xs text-muted-foreground">
                          주민등록등본은 정부24에서 무료로 발급받으실 수
                          있습니다.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm font-semibold">
                            주민등록표등본 신청
                          </p>
                          <p className="text-xs text-muted-foreground">
                            정부24 바로가기
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

