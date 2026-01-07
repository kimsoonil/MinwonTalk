'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import type { Minwon } from '@/entities/minwon/model/types';
import { formatCurrency } from '@/shared/lib/utils';

type MinwonCardProps = {
  minwon: Minwon;
};

export function MinwonCard({ minwon }: MinwonCardProps) {
  return (
    <Card
      className="cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() =>
        window.open(minwon.url || 'https://www.gov.kr', '_blank')
      }
    >
      <CardHeader>
        <CardTitle>{minwon.name}</CardTitle>
        <CardDescription>{minwon.institution}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {minwon.description}
        </p>
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">
            수수료: {formatCurrency(minwon.fee)}
          </span>
          <span
            className={
              minwon.onlineAvailable
                ? 'text-green-600'
                : 'text-red-600'
            }
          >
            {minwon.onlineAvailable
              ? '온라인 발급 가능'
              : '온라인 발급 불가'}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

