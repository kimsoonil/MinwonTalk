'use client';

import { useState } from 'react';
import { Header } from '@/widgets/header/ui/header';
import { Footer } from '@/widgets/footer/ui/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';
import { ChevronDown, HelpCircle, MessageCircle, Shield, FileText } from 'lucide-react';
import Link from 'next/link';

type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: 'service' | 'usage' | 'security' | 'payment';
};

const faqData: FaqItem[] = [
  {
    id: 'faq-001',
    question: '민원똑똑은 어떤 서비스인가요?',
    answer:
      '민원똑똑은 AI 챗봇을 통해 복잡한 민원 서류 발급 절차를 간편하게 도와주는 서비스입니다. Active-X나 별도 보안 프로그램 설치 없이 브라우저에서 바로 민원 서류를 발급받을 수 있습니다.',
    category: 'service',
  },
  {
    id: 'faq-002',
    question: '어떤 민원 서류를 발급받을 수 있나요?',
    answer:
      '주민등록등본, 가족관계증명서, 인감증명서, 소득금액증명원, 등기부등본 등 정부24에서 발급 가능한 대부분의 민원 서류를 발급받을 수 있습니다. 챗봇에게 필요한 서류를 말씀해주시면 자동으로 안내해드립니다.',
    category: 'usage',
  },
  {
    id: 'faq-003',
    question: '보안 프로그램 설치가 필요한가요?',
    answer:
      '아니요, 민원똑똑은 Active-X나 별도 보안 프로그램 설치가 필요 없습니다. 가상 브라우저 기술을 사용하여 브라우저에서 바로 안전하게 인증하고 서류를 발급받을 수 있습니다.',
    category: 'security',
  },
  {
    id: 'faq-004',
    question: '서비스 이용은 무료인가요?',
    answer:
      '네, 민원똑똑 서비스 자체는 무료입니다. 다만 각 민원 서류 발급 시 정부24에서 요구하는 수수료(예: 주민등록등본 500원)는 별도로 발생할 수 있습니다.',
    category: 'payment',
  },
  {
    id: 'faq-005',
    question: '어떻게 인증하나요?',
    answer:
      '카카오톡, 네이버, PASS 등 사용 중인 간편 인증서로 본인 확인을 진행합니다. 복잡한 인증서 등록 절차 없이 기존에 사용하시는 인증 수단으로 바로 인증할 수 있습니다.',
    category: 'usage',
  },
  {
    id: 'faq-006',
    question: '개인정보는 안전한가요?',
    answer:
      '네, 민원똑똑은 가상 브라우저 기술을 사용하여 개인정보를 안전하게 격리하여 보호합니다. 샌드박스 형태의 보안 환경에서 처리되며, 민감한 정보는 암호화되어 전송됩니다.',
    category: 'security',
  },
  {
    id: 'faq-007',
    question: '발급받은 서류는 어떻게 확인하나요?',
    answer:
      '서류 발급이 완료되면 미리보기로 확인할 수 있으며, PDF 파일로 다운로드하거나 필요한 기관으로 바로 전송할 수 있습니다. 발급 내역은 MyGOV에서도 확인 가능합니다.',
    category: 'usage',
  },
  {
    id: 'faq-008',
    question: '24시간 이용 가능한가요?',
    answer:
      '네, AI 챗봇은 24시간 언제든지 이용 가능합니다. 다만 실제 민원 서류 발급은 정부24 시스템 운영 시간에 따라 제한될 수 있습니다.',
    category: 'service',
  },
  {
    id: 'faq-009',
    question: '모바일에서도 이용할 수 있나요?',
    answer:
      '네, 민원똑똑은 반응형 웹으로 제작되어 스마트폰, 태블릿, PC 등 모든 기기에서 이용 가능합니다. 모바일 브라우저에서도 동일하게 서비스를 이용하실 수 있습니다.',
    category: 'usage',
  },
  {
    id: 'faq-010',
    question: '문제가 발생하면 어떻게 문의하나요?',
    answer:
      '서비스 이용 중 문제가 발생하시면 고객센터(1588-2188)로 문의하시거나, 챗봇을 통해 실시간으로 상담받으실 수 있습니다. 또한 1:1 문의 게시판을 통해서도 문의하실 수 있습니다.',
    category: 'service',
  },
];

const categoryLabels = {
  service: '서비스 안내',
  usage: '이용 방법',
  security: '보안 및 개인정보',
  payment: '요금 및 결제',
};

const categoryIcons = {
  service: MessageCircle,
  usage: FileText,
  security: Shield,
  payment: HelpCircle,
};

export default function FaqPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFaqs =
    selectedCategory === 'all'
      ? faqData
      : faqData.filter((faq) => faq.category === selectedCategory);

  const categories = [
    { id: 'all', label: '전체' },
    { id: 'service', label: categoryLabels.service },
    { id: 'usage', label: categoryLabels.usage },
    { id: 'security', label: categoryLabels.security },
    { id: 'payment', label: categoryLabels.payment },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">자주 묻는 질문</h1>
          <p className="text-lg text-muted-foreground">
            민원똑똑 서비스 이용에 대해 자주 묻는 질문들을 모았습니다.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon =
                category.id !== 'all'
                  ? categoryIcons[category.id as keyof typeof categoryIcons]
                  : null;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  size="sm"
                  className="text-sm"
                >
                  {Icon && <Icon className="h-4 w-4 mr-2" />}
                  {category.label}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openItems.has(faq.id);
              const Icon = categoryIcons[faq.category];
              return (
                <Card
                  key={faq.id}
                  className="transition-all hover:shadow-md"
                >
                  <CardHeader
                    className="cursor-pointer"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg font-semibold">
                          {faq.question}
                        </CardTitle>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                          isOpen ? 'transform rotate-180' : ''
                        }`}
                      />
                    </div>
                  </CardHeader>
                  {isOpen && (
                    <CardContent className="pt-0">
                      <div className="pl-13">
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">
                  선택한 카테고리에 해당하는 질문이 없습니다.
                </p>
              </CardContent>
            </Card>
          )}
        </div>

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
      </main>

      <Footer />
    </div>
  );
}


