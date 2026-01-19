import { MessageCircle, HelpCircle, Shield, FileText, LucideIcon } from 'lucide-react';
import type { FaqCategory } from '@/app/faq/_types';

/**
 * FAQ 카테고리 표시명 매핑
 */
export const CATEGORY_LABELS: Record<FaqCategory, string> = {
  service: '서비스 안내',
  usage: '이용 방법',
  security: '보안 및 개인정보',
  payment: '요금 및 결제',
};

/**
 * FAQ 카테고리 아이콘 매핑
 */
export const CATEGORY_ICONS: Record<FaqCategory, LucideIcon> = {
  service: MessageCircle,
  usage: FileText,
  security: Shield,
  payment: HelpCircle,
};

/**
 * FAQ 카테고리 목록
 */
export const FAQ_CATEGORIES = [
  { id: 'all', label: '전체' },
  { id: 'service', label: CATEGORY_LABELS.service },
  { id: 'usage', label: CATEGORY_LABELS.usage },
  { id: 'security', label: CATEGORY_LABELS.security },
  { id: 'payment', label: CATEGORY_LABELS.payment },
] as const;

