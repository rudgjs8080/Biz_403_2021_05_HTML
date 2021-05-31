// JS에서의 true, false
console.log("a" == "b");
console.log("a" == "a");

let num = 3;
// Java와 같은 경우는 if() 문에서
// Single EQ(=)을 사용하면 syntax error가 발생한다
// 하지만 다음과 같은 코드는 논리적으로 문제가 없다
// if((num = method()) ==3 ) {}

// JS 에서는 다음과 같은 코드가 논리적으로는 문제가 될 수 있지만
// 문법적으로는 정당하다
// if( (num = 5) == true)
if ((num = 5)) {
  console.log("같은 값");
}

// js에서는 숫자 0, 문자열 "", false, null, undefined, NaN 를 제외한 모든 것은
// boolean 에서 true로 취급된다
// if(값) 명령을 사용할 때
// 값에 위에 나열한 type 데이터가 나타나면
// 논리적으로 false 인식되고
// 그 외는 무조건 true 이다

if (0) {
  console.log(true);
} else {
  console.log(false);
}

if (null) {
} else {
  console.log(false);
}

if ("") {
} else {
  console.log(false);
}

let num1 = 3;
let num2 = "3";

/*
    두 값이 같은지 비교하는 연산자들
    주로 if, while 등에서 사용
    동등연산자 (==) : 자동으로 형변환이 일어난다
        0 == "0" 을 비교하면 문자열 "0"을
        숫자 0 으로 자동형변환을 해버린다
        문자열과 숫자의 비교지만 내용만 같으면
        같은 것으로 true 값이 된다

    일치연산자 (===)
        무조건 자신의 형(type)을 유지하면서 비교
        0 === "0" 을 비교하면
        1. 두 값의 type이 일치하는지 비교 한 후
            같으면 일단 true, 다르면 무조건 false
        2. 두 값의 type이 같으면 실제 값을 비교하여
            같으면 true,  다르면 false

*/
console.log(num1 == num2);
console.log(num1 === num2);

// 문자열 ""과 문자열 "0"을 비교 => false
console.log("" == "0"); // false
// 문자열 ""을 숫자 0 으로 변환하고
// 0 == 0으로 비교 =>  true
console.log("" == 0); // true

console.log("true" == true); // false
console.log("false" == false); // false
console.log(0 == false); // true
console.log("0" == false); // ture

console.log(null == undefined); // true

// 어떤 변수에 담긴 값이 null인가 확인하고 싶을 때

let un1 = null;
// 1번 코드
if (un1) {
}
// 2번 코드
if (un1 == null) {
}

// 3번 코드
if (un1 == false) {
}

// 일반적으로 숫자형, 문자형의 데이터가
// 같은지(일치하는지) 알아보고 싶을 때는
// 일치 연산자를 사용하는 것이 좋다

console.log("3" === 3);

// parseInt() 문자열형 숫자를 실제 숫자로
// 변환하는 JS 함수
// type이 다른 두 값을 비교하고자 할때는
// 코드가 다소 복잡해 지지만
// 강제 형변환을 하고 일치연산자로 비교하는 것이
// 논리적 오류를 막을 수 있다
console.log(parseInt("3") === 3);

// isNaN(값)
// 값이 숫자로 변환할 수 없냐?
//      할 수 없으면 true
//      할 수 없으면 false
console.log(isNaN("3"));
console.log(isNaN(3));
if ("3" == NaN) {
  console.log(true);
} else {
  console.log(false);
}

console.log(isNaN("A")); // true
