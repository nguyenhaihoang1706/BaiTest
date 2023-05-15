

const btn = document.querySelector('.btn');

function kiem_tra_snt(n) {
  // Biến cờ hiệu
  var flag = true;

  // Nếu n bé hơn 2 tức là không phải số nguyên tố
  if (n < 2) {
    flag = false;
  } else if (n == 2) {
    flag = true;
  } else if (n % 2 == 0) {
    flag = false;
  } else {
    // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
    for (var i = 3; i < n - 1; i += 2) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }

  // Kiểm tra biến flag
  if (flag == true) {
    return n;
  }

function sum() {
  let soA = document.getElementById("A").value;
  let soB = document.getElementById("B").value;
  let sum = 0;
  if (soA < 0 && soB < 0) {
    alert("Nhap so tu nhien");
  } else if (soA > soB) {
    alert('So A phai nho hon So B');
  } else {
    console.log(kiem_tra_snt(soA));
  }
  }
}