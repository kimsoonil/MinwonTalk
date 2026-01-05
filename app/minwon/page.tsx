'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { mockMinwons } from '@/mock/minwons';
import type { Minwon } from '@/types/minwon';
import { formatCurrency } from '@/lib/utils';
import { Search, ArrowLeft } from 'lucide-react';

export default function MinwonListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'all',
    '주민등록',
    '가족관계',
    '인감증명',
    '세무',
    '법원',
    '병무',
    '여권',
    '기타',
  ];

  const filteredMinwons = useMemo(() => {
    let filtered: Minwon[] = mockMinwons;

    // 카테고리 필터
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((m) => m.category === selectedCategory);
    }

    // 검색 필터
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (m) =>
          m.name.toLowerCase().includes(query) ||
          m.keywords.some((k) => k.toLowerCase().includes(query)) ||
          m.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header showLogin={false} />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              뒤로가기
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">민원 목록</h1>
          <p className="text-lg text-muted-foreground">
            필요한 민원 서류를 검색하거나 카테고리별로 찾아보세요.
          </p>
        </div>

        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="민원명, 키워드로 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                size="sm"
                className="text-sm"
              >
                {category === 'all' ? '전체' : category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredMinwons.length > 0 ? (
            filteredMinwons.map((minwon) => (
              <Card
                key={minwon.id}
                className="hover:shadow-lg transition-shadow flex flex-col"
              >
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="text-lg line-clamp-1">
                    {minwon.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {minwon.institution}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-shrink-0">
                    {minwon.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
                    {minwon.keywords.slice(0, 3).map((keyword) => (
                      <span
                        key={keyword}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 border-t space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">
                        수수료: {formatCurrency(minwon.fee)}
                      </span>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          minwon.onlineAvailable
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {minwon.onlineAvailable
                          ? '온라인 발급 가능'
                          : '온라인 발급 불가'}
                      </span>
                    </div>
                    <Link href={`/chat?minwon=${minwon.id}`} className="w-full">
                      <Button variant="outline" className="w-full mt-2" size="sm">
                        신청하기
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">
                검색 결과가 없습니다.
              </p>
              <p className="text-sm text-muted-foreground">
                다른 키워드로 검색해보세요.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
