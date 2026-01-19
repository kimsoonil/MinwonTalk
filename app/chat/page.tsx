'use client';

import { ChatMessage } from '@/features/chat/ui/chat-message';
import { ChatSidebar } from '@/widgets/chat-sidebar/ui/chat-sidebar';
import { Header } from '@/widgets/header/ui/header';
import { useChat } from '@/app/chat/_hooks/useChat';
import { ChatHeader } from '@/app/chat/_components/ChatHeader';
import { ChatWelcomeCard } from '@/app/chat/_components/ChatWelcomeCard';
import { ChatLoadingIndicator } from '@/app/chat/_components/ChatLoadingIndicator';
import { ChatFooter } from '@/app/chat/_components/ChatFooter';

/**
 * 채팅 페이지
 */
export default function ChatPage() {
  const { messages, isLoading, messagesEndRef, handleSend, handleNewChat } =
    useChat();

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* 고정 헤더 */}
      <Header showLogin={false} />

      {/* 하단 영역: 사이드바 + 채팅 영역 */}
      <div className="flex-1 flex overflow-hidden">
        {/* 고정 사이드바 */}
        <ChatSidebar
          onNewChat={handleNewChat}
          onMinwonClick={(minwonId, minwonName) => {
            handleSend(minwonName + ' 발급해줘');
          }}
        />

        {/* 채팅 영역: 가운데 영역만 스크롤 */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Chat Header: 고정 */}
          <ChatHeader />

          {/* Chat Messages Area: 스크롤 가능 */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-muted/30">
            {messages.length === 1 && (
              <ChatWelcomeCard onQueryClick={handleSend} />
            )}

            <div className="max-w-3xl mx-auto space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}

              {isLoading && <ChatLoadingIndicator />}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Chat Input: 고정 */}
          <ChatFooter onSend={handleSend} disabled={isLoading} />
        </div>
      </div>
    </div>
  );
}
