function numberOneTriangle(x) {
    let soN = document.getElementById("soN").value;
  for (let i = 1; i <= soN; i++) {
    let canh = "";
    for (let j = 1; j <= i; j++) {
      canh += "*";
    }
    return canh
  }
    
}
let kq = document.querySelector("#result");
kq.innerHTML = numberOneTriangle(6);