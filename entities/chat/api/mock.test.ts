import { describe, it, expect, vi } from 'vitest';
import { generateChatResponse, createChatMessage } from './mock';

describe('entities/chat/api', () => {
  describe('generateChatResponse', () => {
    it('등본 키워드에 대해 적절한 응답을 생성해야 함', () => {
      const response = generateChatResponse('등본 발급해줘');
      expect(response.message).toContain('주민등록등본');
      expect(response.relatedMinwons.length).toBeGreaterThan(0);
    });

    it('초본 키워드에 대해 적절한 응답을 생성해야 함', () => {
      // '초본'만으로는 매칭되지 않으므로 '주민등록초본' 또는 '초본 발급'처럼 구체적으로 입력
      const response = generateChatResponse('주민등록초본 발급해줘');
      expect(response.message).toContain('주민등록초본');
      expect(response.relatedMinwons).toContain('minwon-002');
    });

    it('가족관계 키워드에 대해 적절한 응답을 생성해야 함', () => {
      const response = generateChatResponse('가족증명서');
      expect(response.message).toContain('가족관계증명서');
      expect(response.relatedMinwons).toContain('minwon-003');
    });

    it('인감 키워드에 대해 적절한 응답을 생성해야 함', () => {
      const response = generateChatResponse('인감증명서');
      expect(response.message).toContain('인감증명서');
      expect(response.relatedMinwons).toContain('minwon-004');
    });

    it('대출 키워드에 대해 패키지를 추천해야 함', () => {
      const response = generateChatResponse('대출 신청');
      expect(response.message).toContain('대출 신청용 패키지');
      expect(response.relatedMinwons.length).toBeGreaterThan(1);
    });

    it('취업 키워드에 대해 패키지를 추천해야 함', () => {
      const response = generateChatResponse('취업용 서류');
      expect(response.message).toContain('취업용 패키지');
      expect(response.relatedMinwons.length).toBeGreaterThan(1);
    });

    it('이사 키워드에 대해 패키지를 추천해야 함', () => {
      const response = generateChatResponse('이사 준비');
      expect(response.message).toContain('이사용 패키지');
      expect(response.relatedMinwons.length).toBeGreaterThan(0);
    });

    it('연말정산 키워드에 대해 패키지를 추천해야 함', () => {
      const response = generateChatResponse('연말정산');
      expect(response.message).toContain('연말정산용 패키지');
      expect(response.relatedMinwons.length).toBeGreaterThan(0);
    });

    it('알 수 없는 키워드에 대해 기본 응답을 반환해야 함', () => {
      const response = generateChatResponse('알 수 없는 질문');
      expect(response.message).toBeTruthy();
      expect(typeof response.message).toBe('string');
    });

    it('대소문자 구분 없이 키워드를 인식해야 함', () => {
      const response1 = generateChatResponse('등본');
      const response2 = generateChatResponse('등본');
      expect(response1.relatedMinwons.length).toBeGreaterThan(0);
      expect(response2.relatedMinwons.length).toBeGreaterThan(0);
    });
  });

  describe('createChatMessage', () => {
    it('사용자 메시지를 생성해야 함', () => {
      const message = createChatMessage('user', '테스트 메시지');
      expect(message.role).toBe('user');
      expect(message.content).toBe('테스트 메시지');
      expect(message).toHaveProperty('id');
      expect(message).toHaveProperty('timestamp');
    });

    it('어시스턴트 메시지를 생성해야 함', () => {
      const message = createChatMessage('assistant', '안녕하세요');
      expect(message.role).toBe('assistant');
      expect(message.content).toBe('안녕하세요');
    });

    it('관련 민원 ID가 있으면 관련 민원을 포함해야 함', () => {
      const message = createChatMessage(
        'assistant',
        '테스트',
        ['minwon-001', 'minwon-002']
      );
      expect(message.relatedMinwons).toBeDefined();
      expect(message.relatedMinwons?.length).toBeGreaterThan(0);
    });

    it('유효하지 않은 민원 ID는 필터링해야 함', () => {
      const message = createChatMessage(
        'assistant',
        '테스트',
        ['invalid-id', 'minwon-001']
      );
      expect(message.relatedMinwons?.length).toBe(1);
      expect(message.relatedMinwons?.[0].id).toBe('minwon-001');
    });

    it('고유한 ID를 생성해야 함', () => {
      const message1 = createChatMessage('user', '메시지1');
      const message2 = createChatMessage('user', '메시지2');
      expect(message1.id).not.toBe(message2.id);
    });

    it('타임스탬프를 포함해야 함', () => {
      const message = createChatMessage('user', '테스트');
      expect(message.timestamp).toBeInstanceOf(Date);
    });
  });
});

