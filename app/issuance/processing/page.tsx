'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';
import { Header } from '@/widgets/header/ui/header';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle,
  Shield,
  FileText,
  Building2,
  Clock,
  Lightbulb,
  Plane,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const steps = [
  { id: 1, label: '서류 확인', completed: true },
  { id: 2, label: '간편 인증', completed: true },
  { id: 3, label: '발급 처리', completed: false, current: true },
  { id: 4, label: '완료', completed: false },
];

const processingSteps = [
  { id: 1, label: '간편 인증 본인 확인 완료', completed: true },
  { id: 2, label: '정부24 로그인 성공', completed: true },
  {
    id: 3,
    label: '민원 신청 정보 전송 중...',
    completed: false,
    current: true,
  },
  { id: 4, label: '문서 생성 및 다운로드 대기', completed: false },
];

export default function IssuanceProcessingPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(50);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(timer);
          // 실제로는 API 응답을 기다려야 하지만, 여기서는 3초 후 완료 페이지로 이동
          setTimeout(() => {
            router.push('/issuance/complete');
          }, 2000);
          return 90;
        }
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header showLogin={false} />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-6">
          <Link href="/chat">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              뒤로가기
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Processing Status */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Steps */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-8">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center flex-1">
                      <div className="flex flex-col items-center flex-1">
                        <div
                          className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold ${
                            step.completed
                              ? 'bg-primary text-primary-foreground'
                              : step.current
                                ? 'bg-primary text-primary-foreground ring-4 ring-primary/20'
                                : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          {step.completed ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : (
                            step.id
                          )}
                        </div>
                        <span className="mt-2 text-xs text-center">
                          {step.label}
                        </span>
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={`h-0.5 flex-1 mx-2 ${
                            step.completed ? 'bg-primary' : 'bg-muted'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Processing Animation */}
            <Card>
              <CardContent className="p-12 text-center">
                <div className="mb-8">
                  <div className="relative inline-block">
                    <div className="h-32 w-32 rounded-full border-8 border-primary/20 border-t-primary animate-spin mx-auto"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FileText className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  서류를 발급받고 있습니다
                </h2>
                <p className="text-muted-foreground mb-6">
                  클라우드 가상 브라우저가 정부24 사이트에 안전하게 접속하여
                  요청하신 서류를 처리하고 있습니다.
                </p>

                <div className="space-y-3 text-left max-w-md mx-auto">
                  {processingSteps.map((step) => (
                    <div key={step.id} className="flex items-center gap-3">
                      {step.completed ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : step.current ? (
                        <div className="h-5 w-5 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                      ) : (
                        <div className="h-5 w-5 rounded-full bg-muted" />
                      )}
                      <span
                        className={`text-sm ${
                          step.completed
                            ? 'text-green-600 font-semibold'
                            : step.current
                              ? 'text-primary font-semibold'
                              : 'text-muted-foreground'
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-purple-900 mb-1">
                        알고 계셨나요?
                      </p>
                      <p className="text-sm text-purple-700">
                        발급받은 파일은 다운로드 후 클라우드 서버에서 즉시
                        파기되어 개인정보 유출 걱정이 없습니다.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Plane className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-orange-900 mb-1">
                        다른 서비스 보기
                      </p>
                      <p className="text-sm text-orange-700">
                        곧 만료되는 여권이 있나요? 민원똑똑에서 온라인 여권
                        재발급 신청도 간편하게 가능합니다.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Side - Document Info */}
          <div className="lg:col-span-1 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>발급 서류</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b">
                  <FileText className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">주민등록표등본(국문)</p>
                    <p className="text-sm text-muted-foreground">
                      발급 대상: 본인 | 수수료: 무료
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm bg-muted rounded px-2 py-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>주민등록번호 뒷자리 포함</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-muted rounded px-2 py-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>과거 주소 변동 포함</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-900 mb-1">
                      가상 브라우저 보안 작동 중
                    </p>
                    <p className="text-sm text-green-700">
                      개인정보는 서버에 저장되지 않으며, 암호화된 가상 환경에서
                      안전하게 처리됩니다.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-muted-foreground">
              <p>
                * 네트워크 상태에 따라 발급까지 최대 3분 정도 소요될 수
                있습니다. 창을 닫지 말고 기다려주세요.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

