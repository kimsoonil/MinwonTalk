'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

type HeaderProps = {
  showLogin?: boolean;
};

export function Header({ showLogin = true }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <MessageCircle className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold text-foreground">민원똑똑</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            서비스 소개
          </Link>
          <Link
            href="/#how-it-works"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            이용 방법
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            자주 묻는 질문
          </Link>
        </nav>

        {showLogin && (
          <div className="flex items-center space-x-4">
            <Link href="/auth">
              <Button>로그인</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
