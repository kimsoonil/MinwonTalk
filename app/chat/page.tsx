'use client';

import { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '@/components/chat/chat-message';
import { ChatInput } from '@/components/chat/chat-input';
import { ChatSidebar } from '@/components/chat/chat-sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { generateChatResponse, createChatMessage } from '@/mock/chat';
import type { ChatMessage as ChatMessageType } from '@/types/minwon';
import { MessageCircle, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessageType[]>([
    createChatMessage(
      'assistant',
      "안녕하세요! 민원똑똑 챗봇입니다. 어떤 민원 서류가 필요하신가요? 예를 들어 '등본', '가족증명서', '인감증명서', '대출 신청', '취업용' 등을 말씀해주세요."
    ),
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
    setMessages([
      createChatMessage(
        'assistant',
        '안녕하세요! 새로운 상담을 시작합니다. 어떤 민원이 필요하신가요?'
      ),
    ]);
  };

  const suggestedQueries = [
    '이사가는데 전입신고 어떻게 해?',
    '여권 재발급 받고 싶어',
    '주민등록등본 발급해줘',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header showLogin={false} />

      <div className="flex flex-1 overflow-hidden">
        <ChatSidebar onNewChat={handleNewChat} />

        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="border-b bg-background px-4 md:px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold">AI 상담 내역</h1>
                <p className="text-sm text-muted-foreground">
                  주민등록등본 발급 요청
                </p>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <Link
                  href="/#features"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  서비스 소개
                </Link>
                <Link
                  href="/faq"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  자주 묻는 질문
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-sm">안녕하세요, 김민원님</span>
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-muted/30">
            {messages.length === 1 && (
              <div className="max-w-3xl mx-auto mb-8">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <MessageCircle className="h-12 w-12 mx-auto text-primary mb-4" />
                      <h2 className="text-2xl font-bold mb-2">
                        무엇을 도와드릴까요?
                      </h2>
                      <p className="text-muted-foreground">
                        복잡한 행정 용어 대신, 일상어로 편하게 질문해주세요.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-3 mt-6">
                      {suggestedQueries.map((query, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="justify-start text-left h-auto py-3 px-4 whitespace-normal"
                          onClick={() => handleSend(query)}
                        >
                          {query}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            <div className="max-w-3xl mx-auto space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <Card className="bg-muted">
                    <CardContent className="p-4">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-foreground rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-foreground rounded-full animate-bounce"
                          style={{ animationDelay: '0.2s' }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-foreground rounded-full animate-bounce"
                          style={{ animationDelay: '0.4s' }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Chat Input */}
          <div className="border-t bg-background">
            <ChatInput onSend={handleSend} disabled={isLoading} />
            <div className="px-4 pb-4">
              <p className="text-xs text-center text-muted-foreground">
                민원똑똑 AI는 실수를 할 수 있습니다. 중요한 정보는 다시
                확인하세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
