import type { Minwon } from '@/entities/minwon/model/types';

/**
 * 채팅 메시지 엔티티 타입 정의
 */
export type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  relatedMinwons?: Minwon[]; // 관련 민원 목록
};

