'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Shield, Lock } from 'lucide-react';

const authMethods = [
  {
    id: 'kakao',
    name: '카카오톡',
    description: '지갑 인증서',
    color: 'bg-yellow-400 hover:bg-yellow-500',
    textColor: 'text-black',
  },
  {
    id: 'naver',
    name: '네이버',
    description: '간편 인증서',
    color: 'bg-green-500 hover:bg-green-600',
    textColor: 'text-white',
  },
  {
    id: 'pass',
    name: 'PASS',
    description: '통신사 통합 인증',
    color: 'bg-blue-500 hover:bg-blue-600',
    textColor: 'text-white',
  },
  {
    id: 'toss',
    name: '토스',
    description: '토스 인증서',
    color: 'bg-blue-600 hover:bg-blue-700',
    textColor: 'text-white',
  },
  {
    id: 'samsung',
    name: '삼성패스',
    description: '생체 인증',
    color: 'bg-gray-800 hover:bg-gray-900',
    textColor: 'text-white',
  },
  {
    id: 'kb',
    name: 'KB국민인증서',
    description: '모바일 인증서',
    color: 'bg-yellow-600 hover:bg-yellow-700',
    textColor: 'text-white',
  },
];

export default function AuthPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header showLogin={false} />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              뒤로가기
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Authentication Options */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">간편 인증</h1>
              <p className="text-muted-foreground">
                민원 처리를 위해 간편 인증으로 로그인해주세요
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>간편 인증 수단 선택</CardTitle>
                <CardDescription>
                  ActiveX, 보안 프로그램 설치 없이 사용하시는 앱으로 즉시
                  인증됩니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {authMethods.map((method) => (
                    <Button
                      key={method.id}
                      className={`${method.color} ${method.textColor} h-auto py-6 flex flex-col items-center gap-2`}
                      variant="default"
                    >
                      <span className="font-semibold text-lg">
                        {method.name}
                      </span>
                      <span className="text-xs opacity-90">
                        {method.description}
                      </span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-green-900 mb-1">
                      클라우드 가상 브라우저 연결됨
                    </p>
                    <p className="text-sm text-green-700">
                      정부24 사이트와 안전하게 통신 중입니다.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <Lock className="h-4 w-4" />
                    <span className="text-xs">256-bit SSL 암호화 적용</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                * 본 서비스는 행정안전부의 비대면 자격확인 서비스 지침을
                준수하며, 개인정보는 클라우드 서버에 저장되지 않고 즉시
                파기됩니다.
              </p>
            </div>
          </div>

          {/* Right Side - Document Info */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">발급 서류 정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">서류명</p>
                  <p className="font-semibold">주민등록표등본(국문)</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    발급 대상
                  </p>
                  <p className="font-semibold">본인</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">수수료</p>
                  <p className="font-semibold text-green-600">무료</p>
                </div>
                <div className="pt-4 border-t space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>주민등록번호 뒷자리 포함</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>과거 주소 변동 포함</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            로그인 시{' '}
            <Link href="/terms" className="underline hover:text-foreground">
              이용약관
            </Link>
            {' 및 '}
            <Link href="/privacy" className="underline hover:text-foreground">
              개인정보처리방침
            </Link>
            에 동의하는 것으로 간주됩니다.
          </p>
        </div>
      </main>
    </div>
  );
}
