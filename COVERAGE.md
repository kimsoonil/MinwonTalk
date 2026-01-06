# 테스트 커버리지 가이드

이 프로젝트는 Vitest의 v8 커버리지 프로바이더를 사용하여 테스트 커버리지를 측정합니다.

## 커버리지 확인 명령어

### 기본 커버리지 리포트 생성

```bash
# 커버리지 리포트 생성 (텍스트, JSON, HTML 형식)
npm run test:coverage
```

이 명령어는 다음을 수행합니다:
- 모든 테스트 실행
- 커버리지 데이터 수집
- `coverage/` 디렉토리에 리포트 생성
  - `coverage/index.html` - HTML 리포트 (브라우저에서 열기)
  - `coverage/coverage-final.json` - JSON 리포트
  - 터미널에 텍스트 요약 출력

### Watch 모드로 커버리지 확인

```bash
# 파일 변경 시 자동으로 커버리지 재계산
npm run test:coverage:watch
```

### UI 모드로 커버리지 확인

```bash
# 브라우저 UI에서 커버리지 확인
npm run test:coverage:ui
```

### 특정 파일/디렉토리만 커버리지 확인

```bash
# 특정 파일만 테스트하고 커버리지 확인
npm run test:coverage -- shared/lib/utils.ts

# 특정 디렉토리만 테스트하고 커버리지 확인
npm run test:coverage -- entities/
```

### 커버리지 임계값 설정

```bash
# 특정 커버리지 임계값을 만족해야 테스트 통과
npm run test:coverage -- --coverage.thresholds.lines=80 --coverage.thresholds.functions=80 --coverage.thresholds.branches=80 --coverage.thresholds.statements=80
```

## 커버리지 리포트 확인

### HTML 리포트

가장 상세한 커버리지 정보를 확인하려면 HTML 리포트를 열어보세요:

```bash
# macOS
open coverage/index.html

# Linux
xdg-open coverage/index.html

# Windows
start coverage/index.html
```

HTML 리포트에서:
- 파일별 커버리지 퍼센트 확인
- 라인별 커버리지 상태 확인 (초록색: 커버됨, 빨간색: 미커버)
- 브랜치 커버리지 확인
- 함수 커버리지 확인

### 터미널 출력

커버리지 명령어 실행 시 터미널에 다음과 같은 요약이 출력됩니다:

```
File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------|---------|----------|---------|---------|-------------------
All files          |   85.23 |    78.45 |   90.12 |   85.23 |
 shared            |   90.00 |    85.00 |   95.00 |   90.00 |
  lib/utils.ts     |  100.00 |   100.00 |  100.00 |  100.00 |
 entities          |   80.00 |    75.00 |   85.00 |   80.00 |
  minwon/api       |   80.00 |    75.00 |   85.00 |   80.00 |
```

## 커버리지 설정

커버리지 설정은 `vitest.config.ts`의 `coverage` 섹션에서 관리됩니다:

```typescript
coverage: {
  provider: 'v8',
  reporter: ['text', 'json', 'html'],
  exclude: [
    'node_modules/',
    'build/',
    'out/',
    '**/*.config.*',
    '**/types/**',
    '**/*.d.ts',
  ],
}
```

### 커버리지 임계값 설정

`vitest.config.ts`에 임계값을 추가할 수 있습니다:

```typescript
coverage: {
  // ... 기존 설정
  thresholds: {
    lines: 80,
    functions: 80,
    branches: 80,
    statements: 80,
  },
}
```

## 커버리지 개선 팁

1. **낮은 커버리지 파일 확인**: HTML 리포트에서 빨간색으로 표시된 파일 확인
2. **미커버 라인 확인**: 각 파일을 클릭하여 커버되지 않은 라인 확인
3. **에지 케이스 테스트**: 조건문의 모든 분기 테스트
4. **에러 케이스 테스트**: 에러 처리 로직 테스트

## CI/CD에서 커버리지 사용

GitHub Actions 등에서 커버리지를 확인하려면:

```yaml
- name: Run tests with coverage
  run: npm run test:coverage

- name: Upload coverage to Codecov
  uses: codecov/codecov-action@v3
  with:
    files: ./coverage/coverage-final.json
```

## 커버리지 목표

현재 프로젝트의 커버리지 목표:
- **Lines**: 80% 이상
- **Functions**: 80% 이상
- **Branches**: 75% 이상
- **Statements**: 80% 이상

