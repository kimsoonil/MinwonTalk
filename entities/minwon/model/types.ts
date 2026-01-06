/**
 * 민원 엔티티 타입 정의
 */

export type Minwon = {
  id: string;
  name: string; // 정식 명칭
  category: MinwonCategory;
  institution: string; // 발급 기관
  description: string;
  keywords: string[]; // 검색 키워드
  requiredDocuments?: string[]; // 필요 서류
  processingTime: string; // 처리 시간
  fee: number; // 수수료
  onlineAvailable: boolean; // 온라인 발급 가능 여부
};

export type MinwonCategory =
  | '주민등록'
  | '가족관계'
  | '인감증명'
  | '세무'
  | '법원'
  | '병무'
  | '여권'
  | '기타';

export type MinwonPackage = {
  id: string;
  name: string;
  description: string;
  minwons: string[]; // 민원 ID 배열
  useCases: string[]; // 사용 사례
};

