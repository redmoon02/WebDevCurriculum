# Quest 00. 형상관리 시스템

## Introduction
* git은 2021년 현재 개발 생태계에서 가장 각광받고 있는 버전 관리 시스템입니다. 이번 퀘스트를 통해 git의 기초적인 사용법을 알아볼 예정입니다.

## Topics
* git
  * `git clone`, `git add`, `git commit`, `git push`, `git pull`, `git branch`, `git stash` 명령
  * `.git` 폴더
* GitHub

## Resources
* [Resources to learn Git](https://try.github.io)
* [Learn Git Branching](https://learngitbranching.js.org/?locale=ko)
* [Inside Git: .Git directory](https://githowto.com/git_internals_git_directory)

## Checklist

# 형상관리 시스템

형상관리는 어떤 문서나 파일이 변경되는 경우, 변경된 내용과 그 원인을 기록하였다가 나중에 찾아볼 수 있도록 관리하는 것.

# 형상관리 시스템의 종류

1. CVS(Concurrent Version System)

장점: 가장 오래 사용, 안정적임
단점: 아스키코드 지원, 유니코드는 제한적으로 지원하며 상대적으로 느림

2. SVN

중앙관리만을 지원
장점: change set을 사용하여 다른 사용자의 커밋과 엉키지 않고, 롤백을 지원함. cvs에 비해 처리 속도 빠름.
단점: 잦은 커밋은 리번호를 크게 증가시킬 수 있고, 개별 이력을 관리할 수 없음

3. Git

* 장점: 매우 빠르며 분산형 관리 시스템을 가지고 있음. 다양한 기능 지원. 로컬 관리와 중앙 관리 모두 가능.
* 단점: 사용법 숙지에 어려움.

* 형상관리 시스템은 왜 나오게 되었을까요?
* git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요? 분산형 형상관리 시스템이란 무엇일까요?
  * git은 어떻게 개발되게 되었을까요? git이 분산형 시스템을 채택한 이유는 무엇일까요?
리눅스 커널 관리에 사용하던 형상관리 시스템이 자유 이용을 철회했고, 당시의 다른 분산관리 시스템들을 개발자의 요구를 충족시키지 못함. 따라서 리눅스 자신이 분산형 관리 시스템을 만들게 됨.

* git과 GitHub은 어떻게 다를까요?

git은 버전관리시스템, github는 프로젝트를 저장해두는 사이트.

* git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?
* git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?
* 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?
log를 확인하고 commit을 되돌린다. 돌아온 사항을 다시 commit한다.
git revert --no-commit HEAD~n..

## Quest
* GitHub에 가입한 뒤, [이 커리큘럼의 GitHub 저장소](https://github.com/KnowRe-Dev/WebDevCurriculum)의 우상단의 Fork 버튼을 눌러 자신의 저장소에 복사해 둡니다.
* Windows의 경우 같이 설치된 git shell을, MacOSX의 경우 터미널을 실행시켜 커맨드라인에 들어간 뒤, 명령어를 이용하여 복사한 저장소를 clone합니다.
  * 앞으로의 git 작업은 되도록 커맨드라인을 통해 하는 것을 권장합니다.
* 이 문서가 있는 폴더 바로 밑에 있는 sandbox 폴더에 파일을 추가한 후 커밋해 보기도 하고, 파일을 삭제해 보기도 하고, 수정해 보기도 하면서 각각의 단계에서 커밋했을 때 어떤 것들이 저장되는지를 확인합니다.
* `clone`/`add`/`commit`/`push`/`pull`/`branch`/`stash` 명령을 충분히 익혔다고 생각되면, 자신의 저장소에 이력을 push합니다.

## Advanced
* Mercurial은 어떤 형상관리 시스템일까요? 어떤 장점이 있을까요?
* 실리콘밸리의 테크 대기업들은 어떤 형상관리 시스템을 쓰고 있을까요?
