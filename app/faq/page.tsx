'use client';

import { Header } from '@/widgets/header/ui/header';
import { Footer } from '@/widgets/footer/ui/footer';
import { useFaqFilter } from '@/app/faq/_hooks/useFaqFilter';
import { useFaqAccordion } from '@/app/faq/_hooks/useFaqAccordion';
import { FaqHeader } from '@/app/faq/_components/FaqHeader';
import { FaqCategoryFilter } from '@/app/faq/_components/FaqCategoryFilter';
import { FaqItem } from '@/app/faq/_components/FaqItem';
import { FaqListEmpty } from '@/app/faq/_components/FaqListEmpty';
import { FaqInquirySection } from '@/app/faq/_components/FaqInquirySection';

/**
 * FAQ 페이지
 */
export default function FaqPage() {
  const { selectedCategory, setSelectedCategory, filteredFaqs } =
    useFaqFilter();
  const { toggleItem, isOpen } = useFaqAccordion();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <FaqHeader />

        <FaqCategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                isOpen={isOpen(faq.id)}
                onToggle={() => toggleItem(faq.id)}
              />
            ))
          ) : (
            <FaqListEmpty />
          )}
        </div>

        <FaqInquirySection />
      </main>

      <Footer />
    </div>
  );
}
