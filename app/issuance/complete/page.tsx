'use client';

import { Card, CardContent } from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';
import { Header } from '@/widgets/header/ui/header';
import Link from 'next/link';
import {
  CheckCircle,
  Download,
  Folder,
  Send,
  Eye,
  FileText,
  Lightbulb,
} from 'lucide-react';
import { formatDate } from '@/shared/lib/utils';

export default function IssuanceCompletePage() {
  const issuedDate = new Date();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header showLogin={false} />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="relative inline-block">
              <div className="h-24 w-24 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            주민등록등본 발급이 완료되었습니다!
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            신청하신 민원 서류 처리가 성공적으로 끝났습니다.
          </p>
          <p className="text-sm text-muted-foreground">
            가상 브라우저 세션이 안전하게 종료되었습니다.
          </p>
        </div>

        {/* Document Card */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-lg mb-1">
                    주민등록등본_
                    {issuedDate.toISOString().split('T')[0].replace(/-/g, '')}
                    .pdf
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>250KB</span>
                    <span>•</span>
                    <span>발급일: {formatDate(issuedDate)}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-600">
                      원본 확인 완료
                    </span>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                미리보기
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <Button size="lg" className="w-full">
            <Download className="h-5 w-5 mr-2" />내 PC에 다운로드
          </Button>
          <Button size="lg" variant="outline" className="w-full">
            <Folder className="h-5 w-5 mr-2" />내 보관함에 저장
          </Button>
        </div>

        {/* Next Step Suggestion */}
        <Card className="bg-muted mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">
                    가족관계증명서도 필요하신가요?
                  </p>
                  <p className="text-sm text-muted-foreground">
                    추가 민원 서류를 바로 신청하세요
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                추가 발급
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 text-sm">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground"
          >
            ← 메인으로 돌아가기
          </Link>
          <span className="text-muted-foreground">|</span>
          <Link href="/chat" className="text-primary hover:underline">
            + 다른 민원 신청하기
          </Link>
        </div>
      </main>
    </div>
  );
}
