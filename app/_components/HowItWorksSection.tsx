import { HOW_IT_WORKS_STEPS } from '@/app/_constants/howItWorks';

/**
 * 이용 방법 섹션 컴포넌트
 */
export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-2">HOW IT WORKS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            서비스 이용 방법
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {HOW_IT_WORKS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.stepNumber} className="text-center space-y-4">
                <div className="mx-auto h-20 w-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                  {step.stepNumber}
                </div>
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

