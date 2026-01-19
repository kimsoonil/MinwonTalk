import { useState, useEffect, useRef } from 'react';
import { generateChatResponse, createChatMessage } from '@/entities/chat/api';
import type { ChatMessage as ChatMessageType } from '@/entities/chat/model/types';
import { INITIAL_MESSAGES } from '@/app/chat/_constants/messages';

/**
 * 채팅 관련 로직을 관리하는 커스텀 훅
 */
export function useChat() {
  const [messages, setMessages] = useState<ChatMessageType[]>([
    createChatMessage('assistant', INITIAL_MESSAGES.first),
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (userMessage: string) => {
    const userMsg = createChatMessage('user', userMessage);
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    setTimeout(() => {
      const response = generateChatResponse(userMessage);
      const assistantMsg = createChatMessage(
        'assistant',
        response.message,
        response.relatedMinwons
      );
      setMessages((prev) => [...prev, assistantMsg]);
      setIsLoading(false);
    }, 500);
  };

  const handleNewChat = () => {
    setMessages([createChatMessage('assistant', INITIAL_MESSAGES.new)]);
  };

  return {
    messages,
    isLoading,
    messagesEndRef,
    handleSend,
    handleNewChat,
  };
}

