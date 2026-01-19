import { MessageCircle, Fingerprint, FileText } from 'lucide-react';

/**
 * 이용 방법 단계 데이터
 */
export type HowItWorksStep = {
  stepNumber: number;
  icon: typeof MessageCircle;
  title: string;
  description: string;
};

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    stepNumber: 1,
    icon: MessageCircle,
    title: 'AI에게 질문하기',
    description:
      '"가족관계증명서 발급해줘" 처럼 자연스럽게 말해보세요. AI가 필요한 정보를 되묻고 절차를 안내합니다.',
  },
  {
    stepNumber: 2,
    icon: Fingerprint,
    title: '간편 인증 진행',
    description:
      '카카오톡, PASS 등 사용 중인 간편 인증서로 본인 확인을 진행합니다. 복잡한 프로그램 설치는 필요 없습니다.',
  },
  {
    stepNumber: 3,
    icon: FileText,
    title: '서류 발급 완료',
    description:
      '발급된 문서를 미리보기로 확인하고 PDF로 저장하거나 바로 기관으로 전송하세요.',
  },
];

