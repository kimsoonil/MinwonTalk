import { Building2 } from 'lucide-react';
import { PARTNERS } from '@/app/_constants/partners';

/**
 * 파트너십 섹션 컴포넌트
 */
export function PartnershipSection() {
  return (
    <section className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold mb-8">
            민원똑똑은 주요 공공기관 서비스와 함께합니다
          </h3>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {PARTNERS.map((partner) => (
            <div
              key={partner}
              className="flex items-center gap-3 text-muted-foreground"
            >
              <Building2 className="h-6 w-6" />
              <span className="text-sm font-medium">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

