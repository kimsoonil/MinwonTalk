import { MessageCircle, Fingerprint, Shield } from 'lucide-react';

/**
 * 주요 기능 데이터
 */
export type Feature = {
  icon: typeof MessageCircle;
  title: string;
  description: string;
};

export const FEATURES: Feature[] = [
  {
    icon: MessageCircle,
    title: 'AI 챗봇 상담',
    description:
      '자연어 처리 기술로 복잡한 민원 질문에도 정확하게 답변합니다. 어려운 행정 용어를 몰라도 괜찮습니다.',
  },
  {
    icon: Fingerprint,
    title: '무설치 간편 인증',
    description:
      'Active-X나 별도 보안 프로그램 설치 없이 간편하게 인증하세요. 브라우저에서 바로 처리됩니다.',
  },
  {
    icon: Shield,
    title: '가상 브라우저 보안',
    description:
      '샌드박스 형태의 가상 브라우저 기술로 개인정보를 안전하게 격리하여 보호하며 처리합니다.',
  },
];

