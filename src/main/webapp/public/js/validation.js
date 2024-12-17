document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    const name = document.getElementById("floatingName").value.trim();
    const email = document.getElementById("floatingEmail").value.trim();
    const phone = document.getElementById("floatingPhone").value.trim();
    const password = document.querySelector("input[name='password']").value;

    // 이름 필드 검증
    if (!name) {
      alert("이름을 입력해 주세요.");
      event.preventDefault();
      return;
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("유효한 이메일 형식을 입력해 주세요.");
      event.preventDefault();
      return;
    }

    // 전화번호 검증
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(phone)) {
      alert("전화번호는 숫자 10~11자리여야 합니다.");
      event.preventDefault();
      return;
    }

    // 비밀번호 검증
    if (password.length < 6) {
      alert("비밀번호는 최소 6자 이상이어야 합니다.");
      event.preventDefault();
    }
  });
});
