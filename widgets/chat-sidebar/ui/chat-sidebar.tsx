'use client';

import { Card, CardContent } from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';
import {
  MessageCircle,
  FileText,
  Plane,
  Settings,
  History,
} from 'lucide-react';

type ChatSidebarProps = {
  onNewChat: () => void;
  currentChatId?: string;
};

const frequentMinwons = [
  { id: 'minwon-001', name: '주민등록등본', icon: FileText },
  { id: 'minwon-002', name: '여권 재발급', icon: Plane },
];

const recentChats = [
  { id: '1', title: '이사 전입신고 및 등본...', active: true },
  { id: '2', title: '소득금액증명원 발급 문의', active: false },
  { id: '3', title: '자동차세 납부 방법', active: false },
];

export function ChatSidebar({ onNewChat, currentChatId }: ChatSidebarProps) {
  return (
    <div className="hidden lg:flex flex-col w-64 border-r bg-background h-screen sticky top-0">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <MessageCircle className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold">민원똑똑</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-green-600 bg-green-50 rounded px-2 py-1">
          <div className="h-2 w-2 rounded-full bg-green-600"></div>
          <span>가상 브라우저 보안 연결됨</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <Button onClick={onNewChat} className="w-full" size="lg">
          + 새로운 민원 상담 시작
        </Button>

        <div>
          <h3 className="text-sm font-semibold mb-3 text-muted-foreground">
            자주 찾는 민원
          </h3>
          <div className="space-y-2">
            {frequentMinwons.map((minwon) => {
              const Icon = minwon.icon;
              return (
                <Card
                  key={minwon.id}
                  className="cursor-pointer hover:border-primary/50 transition-colors"
                >
                  <CardContent className="p-3">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">{minwon.name}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3 text-muted-foreground flex items-center gap-2">
            <History className="h-4 w-4" />
            최근 상담 내역
          </h3>
          <div className="space-y-1">
            {recentChats.map((chat) => (
              <button
                key={chat.id}
                className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                  chat.active
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted text-muted-foreground'
                }`}
              >
                {chat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <Settings className="h-4 w-4 mr-2" />
          설정
        </Button>
      </div>
    </div>
  );
}
