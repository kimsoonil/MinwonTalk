'use client';

import type { ChatMessage as ChatMessageType } from '@/entities/chat/model/types';
import { Card, CardContent } from '@/shared/ui/card';
import { formatDate } from '@/shared/lib/utils';
import { MessageCircle, FileText, ArrowRight, MapPin } from 'lucide-react';

type ChatMessageProps = {
  message: ChatMessageType;
};

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 gap-3`}
    >
      {!isUser && (
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <MessageCircle className="h-4 w-4 text-primary" />
        </div>
      )}

      <div className={`max-w-[80%] ${isUser ? 'order-2' : 'order-1'}`}>
        <div className="mb-1 px-1">
          <span className="text-xs text-muted-foreground">
            {!isUser && '민원똑똑 AI'}
            {isUser && '나'}
            {' · '}
            {new Date(message.timestamp).toLocaleTimeString('ko-KR', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        </div>

        <Card
          className={`${
            isUser
              ? 'bg-primary text-primary-foreground'
              : 'bg-background border'
          }`}
        >
          <CardContent className="p-4">
            <p className="whitespace-pre-wrap text-sm">{message.content}</p>

            {message.relatedMinwons && message.relatedMinwons.length > 0 && (
              <div className="mt-4 pt-4 border-t border-border/50 space-y-2">
                {message.relatedMinwons.map((minwon) => (
                  <Card
                    key={minwon.id}
                    className={`${
                      isUser
                        ? 'bg-background/10 border-background/20'
                        : 'bg-muted border-border'
                    } hover:opacity-90 transition-opacity cursor-pointer`}
                    onClick={() =>
                      window.open(
                        minwon.url || 'https://www.gov.kr',
                        '_blank'
                      )
                    }
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 flex-1">
                          <div
                            className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                              isUser
                                ? 'bg-background/20'
                                : 'bg-primary/10'
                            }`}
                          >
                            {minwon.category === '주민등록' ? (
                              <MapPin className="h-5 w-5 text-primary" />
                            ) : (
                              <FileText className="h-5 w-5 text-primary" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-sm mb-1">
                              {minwon.name}
                            </p>
                            <p className="text-xs opacity-80">
                              {minwon.institution}
                            </p>
                            {minwon.description && (
                              <p className="text-xs opacity-70 mt-1 line-clamp-2">
                                {minwon.description}
                              </p>
                            )}
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 opacity-50 flex-shrink-0 mt-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {isUser && (
        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
          <span className="text-xs text-primary-foreground">나</span>
        </div>
      )}
    </div>
  );
}
