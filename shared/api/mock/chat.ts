import type { ChatMessage } from '@/shared/types/minwon';
import { searchMinwons } from './minwons';

/**
 * 챗봇 응답 생성 (Mock)
 */
export function generateChatResponse(userMessage: string): {
  message: string;
  relatedMinwons: string[];
} {
  const lowerMessage = userMessage.toLowerCase();

  // 키워드 기반 매칭
  if (
    lowerMessage.includes('등본') ||
    lowerMessage.includes('주민등록')
  ) {
    if (lowerMessage.includes('초본')) {
      return {
        message:
          '주민등록초본이 필요하시는군요! 주민센터나 정부24에서 즉시 발급받을 수 있습니다. 초본은 등본과 달리 세대원 정보만 포함되어 있어요.',
        relatedMinwons: ['minwon-002'],
      };
    }
    return {
      message:
        '주민등록등본이 필요하시는군요! 주민센터나 정부24에서 즉시 발급받을 수 있습니다.',
      relatedMinwons: ['minwon-001'],
    };
  }

  if (lowerMessage.includes('가족') || lowerMessage.includes('가족관계')) {
    return {
      message:
        '가족관계증명서가 필요하시는군요! 주민센터나 정부24에서 즉시 발급받을 수 있습니다.',
      relatedMinwons: ['minwon-003'],
    };
  }

  if (lowerMessage.includes('인감') || lowerMessage.includes('도장')) {
    return {
      message:
        '인감증명서가 필요하시는군요! 주민센터나 정부24에서 즉시 발급받을 수 있습니다.',
      relatedMinwons: ['minwon-004'],
    };
  }

  if (
    lowerMessage.includes('대출') ||
    lowerMessage.includes('주택') ||
    lowerMessage.includes('자금')
  ) {
    return {
      message:
        '대출 신청용 패키지를 추천드려요! 주민등록등본, 소득금액증명원, 등기부등본이 필요합니다.',
      relatedMinwons: ['minwon-001', 'minwon-007', 'minwon-008'],
    };
  }

  if (lowerMessage.includes('취업') || lowerMessage.includes('입사')) {
    return {
      message:
        '취업용 패키지를 추천드려요! 주민등록등본, 가족관계증명서, 기본증명서가 필요합니다.',
      relatedMinwons: ['minwon-001', 'minwon-003', 'minwon-005'],
    };
  }

  if (lowerMessage.includes('이사') || lowerMessage.includes('전입신고')) {
    return {
      message:
        '이사용 패키지를 추천드려요! 전입신고와 함께 주민등록등본이나 초본이 필요할 수 있습니다.',
      relatedMinwons: ['minwon-001', 'minwon-002'],
    };
  }

  if (lowerMessage.includes('연말정산')) {
    return {
      message:
        '연말정산용 패키지를 추천드려요! 소득금액증명원과 사업자등록증명원이 필요합니다.',
      relatedMinwons: ['minwon-007', 'minwon-006'],
    };
  }

  // 검색 시도
  const searchResults = searchMinwons(userMessage);
  if (searchResults.length > 0) {
    return {
      message: `${searchResults.length}개의 관련 민원을 찾았어요. 어떤 서류가 필요하신가요?`,
      relatedMinwons: searchResults.map((m) => m.id),
    };
  }

  // 기본 응답
  return {
    message:
      "무엇을 도와드릴까요? 예를 들어 '등본', '가족증명서', '인감증명서' 등을 말씀해주시면 관련 민원을 안내해드려요!",
    relatedMinwons: [],
  };
}

/**
 * 챗봇 메시지 생성
 */
export function createChatMessage(
  role: 'user' | 'assistant',
  content: string,
  relatedMinwonIds?: string[]
): ChatMessage {
  const { getMinwonById } = require('./minwons');

  return {
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    role,
    content,
    timestamp: new Date(),
    relatedMinwons: relatedMinwonIds
      ?.map((id) => getMinwonById(id))
      .filter(
        (minwon): minwon is NonNullable<typeof minwon> =>
          minwon !== undefined
      ),
  };
}
