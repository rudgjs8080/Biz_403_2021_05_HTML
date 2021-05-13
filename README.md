# Biz_403_2021_05_HTML

git bash 열고

code 눌러서 주소 복사 

git bash 와서 git clone 주소 복사 enter

폴더하나가 생성됨 관련 창을 모두 닫고 html 폴더의 이름을 복서한 후 biz 폴더의 이름에 붙여놓고 폴더를 합칠까요 yes 

git bash 에서 cd html
git add . 
git commit -m index
git push

리포지토리 와서 새로고침


ls -al 을 입력
파일들의 목록을 보여줌

vi README.md 

readme 파일이 열림

i 를 누르면 하단에 insert라는 표식이 나타남
그 상태에서 # HTML 코드 실습 enter 뒤의 내용들은 delete로 삭제
## 2021-05-13
* HTML 코드 실습을 시작한다

esc 입력하면 하단의 insert사라짐 

:w 입력하고 enter 누르고

i 입력 후 
* p tag, table tag 간단한 style 설정
esc 입력후 :w 입력하고 enter 누름

:q 누르고 enter 누르면 prompt로 나옴

그 상태로 폴더에 가서 sublimetext로 README.md를 열기

git bash로 와서 다시 
 vi. README.md 입력

 i 는 입력상태로 전환
 esc 입력은 명령상태로 전환
 명령상태에서는 :을 입력하고 명령을 입력한는것
 w  저장하기
 q 는 끝내기 

 저장을 안하고 나서는 나갈수 없다
 :q!를 하면 저장을 안하고 종료

## 덤으로 vi 사용해보기 
 * 파일열기 : vi파일이름
 * insert(편집) mode 진입하기는 : vi 처음화면에서 i
 * Overwrite(편집) mode 진입하기는 : vi  처음화면에서 o

 * 편집 >> 명령 mode 전환 : esc 키 (1~2)
 * vi 종료하기 :q
 * 편집내용 저장하기 :w
 * 편집내용 저장안하고 끝내기 :q!
 * 편집한 내용 저장하면서 끝내기 :wq

