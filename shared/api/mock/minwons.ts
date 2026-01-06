import { Minwon, MinwonPackage } from '@/shared/types/minwon';

/**
 * TOP 10 민원 Mock 데이터
 */
export const mockMinwons: Minwon[] = [
  {
    id: 'minwon-001',
    name: '주민등록등본',
    category: '주민등록',
    institution: '주민센터 / 정부24',
    description: '주민등록표에 기록된 등록사항 전부를 증명하는 서류입니다.',
    keywords: ['등본', '주민등록등본', '등본 발급', '주소 증명'],
    processingTime: '즉시 발급',
    fee: 500,
    onlineAvailable: true,
  },
  {
    id: 'minwon-002',
    name: '주민등록초본',
    category: '주민등록',
    institution: '주민센터 / 정부24',
    description:
      '주민등록표에 기록된 등록사항 일부(본인, 세대주, 세대원 관계)를 증명하는 서류입니다.',
    keywords: ['초본', '주민등록초본', '초본 발급'],
    processingTime: '즉시 발급',
    fee: 500,
    onlineAvailable: true,
  },
  {
    id: 'minwon-003',
    name: '가족관계증명서',
    category: '가족관계',
    institution: '주민센터 / 정부24',
    description: '가족관계등록부에 기록된 사항을 증명하는 서류입니다.',
    keywords: ['가족관계증명서', '가족증명서', '가족관계 등록부'],
    processingTime: '즉시 발급',
    fee: 500,
    onlineAvailable: true,
  },
  {
    id: 'minwon-004',
    name: '인감증명서',
    category: '인감증명',
    institution: '주민센터 / 정부24',
    description:
      '인감(도장)이 인감등록부에 등록되어 있음을 증명하는 서류입니다.',
    keywords: ['인감증명서', '인감증명', '도장 증명'],
    processingTime: '즉시 발급',
    fee: 500,
    onlineAvailable: true,
  },
  {
    id: 'minwon-005',
    name: '기본증명서',
    category: '가족관계',
    institution: '주민센터 / 정부24',
    description:
      '출생, 사망, 혼인, 이혼, 입양, 친양자 입양, 성(姓)·본(本) 변경 및 혼인외 출생자 신고, 국적이탈 등 기본사항을 증명하는 서류입니다.',
    keywords: ['기본증명서', '기본 증명서'],
    processingTime: '즉시 발급',
    fee: 500,
    onlineAvailable: true,
  },
  {
    id: 'minwon-006',
    name: '사업자등록증명원',
    category: '세무',
    institution: '세무서 / 홈택스',
    description: '사업자등록번호와 사업자 정보를 증명하는 서류입니다.',
    keywords: ['사업자등록증명원', '사업자증명', '사업자등록증'],
    processingTime: '즉시 발급',
    fee: 0,
    onlineAvailable: true,
  },
  {
    id: 'minwon-007',
    name: '소득금액증명원',
    category: '세무',
    institution: '세무서 / 홈택스',
    description: '연간 소득금액을 증명하는 서류입니다.',
    keywords: ['소득증명', '소득금액증명원', '소득 증명'],
    processingTime: '즉시 발급',
    fee: 0,
    onlineAvailable: true,
  },
  {
    id: 'minwon-008',
    name: '등기부등본',
    category: '법원',
    institution: '법원 / 등기소',
    description: '부동산 소유권 및 권리 관계를 증명하는 서류입니다.',
    keywords: ['등기부등본', '등기부', '부동산 등기'],
    processingTime: '즉시 발급',
    fee: 600,
    onlineAvailable: true,
  },
  {
    id: 'minwon-009',
    name: '혼인관계증명서',
    category: '가족관계',
    institution: '주민센터 / 정부24',
    description: '혼인 관계를 증명하는 서류입니다.',
    keywords: ['혼인증명서', '혼인관계증명서', '결혼 증명'],
    processingTime: '즉시 발급',
    fee: 500,
    onlineAvailable: true,
  },
  {
    id: 'minwon-010',
    name: '주민등록표 등본 교부',
    category: '주민등록',
    institution: '주민센터 / 정부24',
    description: '주민등록표 전체를 복사한 서류입니다.',
    keywords: ['주민등록표', '등록표 등본'],
    processingTime: '즉시 발급',
    fee: 500,
    onlineAvailable: true,
  },
];

/**
 * 맞춤형 서류 패키지 Mock 데이터
 */
export const mockMinwonPackages: MinwonPackage[] = [
  {
    id: 'package-001',
    name: '연말정산용 패키지',
    description:
      '연말정산 제출에 필요한 모든 서류를 한 번에 발급받을 수 있습니다.',
    minwons: ['minwon-007', 'minwon-006'],
    useCases: ['연말정산', '근로소득', '사업소득'],
  },
  {
    id: 'package-002',
    name: '대출 신청용 패키지',
    description:
      '대출 신청 시 필요한 신분 증명 및 소득 증명 서류 패키지입니다.',
    minwons: ['minwon-001', 'minwon-007', 'minwon-008'],
    useCases: ['대출 신청', '주택 구매', '자금 조달'],
  },
  {
    id: 'package-003',
    name: '취업용 패키지',
    description: '취업 서류 제출에 필요한 기본 서류 패키지입니다.',
    minwons: ['minwon-001', 'minwon-003', 'minwon-005'],
    useCases: ['취업', '채용', '입사 서류'],
  },
  {
    id: 'package-004',
    name: '이사용 패키지',
    description: '전입신고 및 이사 관련 서류 패키지입니다.',
    minwons: ['minwon-001', 'minwon-002'],
    useCases: ['전입신고', '이사', '주소 변경'],
  },
];

/**
 * 민원 검색 함수 (Mock)
 */
export function searchMinwons(query: string): Minwon[] {
  const lowerQuery = query.toLowerCase();
  return mockMinwons.filter((minwon) => {
    return (
      minwon.name.toLowerCase().includes(lowerQuery) ||
      minwon.keywords.some((keyword) =>
        keyword.toLowerCase().includes(lowerQuery)
      ) ||
      minwon.description.toLowerCase().includes(lowerQuery)
    );
  });
}

/**
 * ID로 민원 조회
 */
export function getMinwonById(id: string): Minwon | undefined {
  return mockMinwons.find((minwon) => minwon.id === id);
}

/**
 * 패키지 ID로 민원 목록 조회
 */
export function getMinwonsByPackageId(packageId: string): Minwon[] {
  const pkg = mockMinwonPackages.find((p) => p.id === packageId);
  if (!pkg) return [];
  return pkg.minwons
    .map((id) => getMinwonById(id))
    .filter((minwon): minwon is Minwon => minwon !== undefined);
}
