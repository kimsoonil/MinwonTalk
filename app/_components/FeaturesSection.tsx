import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { FEATURES } from '@/app/_constants/features';

/**
 * 주요 기능 섹션 컴포넌트
 */
export function FeaturesSection() {
  return (
    <section id="features" className="bg-muted/50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-2">KEY FEATURES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            민원똑똑만의 핵심 기능
          </h2>
          <p className="text-lg text-muted-foreground">
            복잡한 절차 없이 대화만으로 민원 처리를 완료하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

