# 배포 가이드

## GitHub Pages 배포

이 프로젝트는 `gh-pages`를 사용하여 GitHub Pages에 배포됩니다.

### 배포 전 설정

GitHub에 푸시하기 위한 인증이 필요합니다. 다음 중 하나의 방법을 선택하세요:

#### 방법 1: Personal Access Token 사용 (권장)

1. GitHub에서 Personal Access Token 생성:
   - GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - `repo` 권한을 포함한 토큰 생성

2. 토큰을 Git credential에 저장:
   ```bash
   git config --global credential.helper store
   ```
   
   또는 매번 입력하려면:
   ```bash
   git config --global credential.helper cache
   ```

3. 배포 시 토큰을 비밀번호로 사용:
   ```bash
   npm run deploy
   # Username: your-github-username
   # Password: your-personal-access-token
   ```

#### 방법 2: SSH 키 사용

1. SSH 키 생성 (이미 있다면 생략):
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

2. SSH 키를 GitHub에 추가:
   - `~/.ssh/id_ed25519.pub` 파일 내용을 GitHub → Settings → SSH and GPG keys에 추가

3. Git remote를 SSH로 변경:
   ```bash
   git remote set-url origin git@github.com:kimsoonil/MinwonTalk.git
   ```

#### 방법 3: GitHub CLI 사용

```bash
# GitHub CLI 설치 (Homebrew)
brew install gh

# GitHub CLI 인증
gh auth login

# 배포
npm run deploy
```

### 배포 실행

```bash
npm run deploy
```

이 명령어는 다음을 수행합니다:
1. `npm run build` - 정적 사이트 빌드
2. `gh-pages -d build` - `build` 디렉토리를 `gh-pages` 브랜치에 배포

### 배포 확인

배포 후 다음 URL에서 사이트를 확인할 수 있습니다:
- https://kimsoonil.github.io/MinwonTalk/

몇 분 후에 변경사항이 반영됩니다.

### 주의사항

- GitHub Pages는 서브디렉토리(`/MinwonTalk/`)에서 호스팅되므로 `next.config.js`에 `basePath`가 설정되어 있습니다.
- 로컬 개발 환경(`npm run dev`)에서는 `basePath`가 적용되지 않아 정상 작동합니다.
- 프로덕션 빌드(`npm run build`) 시에만 `basePath`가 적용됩니다.

