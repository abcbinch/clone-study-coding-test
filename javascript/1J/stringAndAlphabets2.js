function solution(my_string) {
  //막나가기
  let answer;

  let alpha = [];
  let strArr = [...my_string];

  let idxArr = Array(52).fill(0);

  //mystring 배열을 순회해야 한다.
  //그 안에 alpha의 원소가 들어있는지 검사한다. 이 때도 alpha 순회가 필요하다.
  //alpha와 idxStr는 길이가 52로 같다.

  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < alpha.length; j++) {
      strArr[i] === alpha[j] ? (idxArr[j] += 1) : "";
    }
  }

  console.log(Number(strArr[0]));
}

console.log(solution("Programmers"));
