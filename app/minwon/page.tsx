'use client';

import { Header } from '@/widgets/header/ui/header';
import { Footer } from '@/widgets/footer/ui/footer';
import { useMinwonFilter } from '@/app/minwon/_hooks/useMinwonFilter';
import { MinwonListHeader } from '@/app/minwon/_components/MinwonListHeader';
import { MinwonListFilter } from '@/app/minwon/_components/MinwonListFilter';
import { MinwonCard } from '@/app/minwon/_components/MinwonCard';
import { MinwonListEmpty } from '@/app/minwon/_components/MinwonListEmpty';

/**
 * 민원 목록 페이지
 */
export default function MinwonListPage() {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredMinwons,
  } = useMinwonFilter();

  return (
    <div className="min-h-screen flex flex-col">
      <Header showLogin={false} />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        <MinwonListHeader />

        <MinwonListFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredMinwons.length > 0 ? (
            filteredMinwons.map((minwon) => (
              <MinwonCard key={minwon.id} minwon={minwon} />
            ))
          ) : (
            <MinwonListEmpty />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
