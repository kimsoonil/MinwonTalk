import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import {
  MessageCircle,
  Fingerprint,
  Shield,
  CheckCircle,
  ArrowRight,
  FileText,
  Building2,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
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

        {/* Key Features Section */}
        <section id="features" className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-muted-foreground mb-2">KEY FEATURES</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                민원똑똑만의 핵심 기능
              </h2>
              <p className="text-lg text-muted-foreground">
                복잡한 절차 없이 대화만으로 민원 처리를 완료하세요.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>AI 챗봇 상담</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    자연어 처리 기술로 복잡한 민원 질문에도 정확하게 답변합니다.
                    어려운 행정 용어를 몰라도 괜찮습니다.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Fingerprint className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>무설치 간편 인증</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Active-X나 별도 보안 프로그램 설치 없이 간편하게 인증하세요.
                    브라우저에서 바로 처리됩니다.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>가상 브라우저 보안</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    샌드박스 형태의 가상 브라우저 기술로 개인정보를 안전하게
                    격리하여 보호하며 처리합니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-muted-foreground mb-2">HOW IT WORKS</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                서비스 이용 방법
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                <div className="mx-auto h-20 w-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">AI에게 질문하기</h3>
                <p className="text-muted-foreground">
                  &quot;가족관계증명서 발급해줘&quot; 처럼 자연스럽게
                  말해보세요. AI가 필요한 정보를 되묻고 절차를 안내합니다.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto h-20 w-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Fingerprint className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">간편 인증 진행</h3>
                <p className="text-muted-foreground">
                  카카오톡, PASS 등 사용 중인 간편 인증서로 본인 확인을
                  진행합니다. 복잡한 프로그램 설치는 필요 없습니다.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto h-20 w-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">서류 발급 완료</h3>
                <p className="text-muted-foreground">
                  발급된 문서를 미리보기로 확인하고 PDF로 저장하거나 바로
                  기관으로 전송하세요.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-8">
                민원똑똑은 주요 공공기관 서비스와 함께합니다
              </h3>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Building2 className="h-6 w-6" />
                <span className="text-sm font-medium">대한민국 정부24</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Building2 className="h-6 w-6" />
                <span className="text-sm font-medium">국세청 홈택스</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Building2 className="h-6 w-6" />
                <span className="text-sm font-medium">대법원 전자가족관계</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
      </main>

      <Footer />
    </div>
  );
}
