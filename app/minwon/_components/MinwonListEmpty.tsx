/**
 * 검색 결과가 없을 때 표시되는 빈 상태 컴포넌트
 */
export function MinwonListEmpty() {
  return (
    <div className="col-span-full text-center py-12">
      <p className="text-muted-foreground text-lg mb-4">
        검색 결과가 없습니다.
      </p>
      <p className="text-sm text-muted-foreground">
        다른 키워드로 검색해보세요.
      </p>
    </div>
  );
}

