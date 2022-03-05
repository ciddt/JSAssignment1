// Hàm thông báo chào mừng chương trình
function notify() {
  alert("Chào mừng bạn đến với chương trình javascript đầu tiên");

  //Kết thúc hàm alert thì button Bước tiếp theo hiển thị
  //bằng thay đổi thuộc tính display của thẻ div có id nextBtn từ none sang block
  let next = document.getElementById("nextBtn");
  next.style.display = "block";
}

// khi click vào button Bước Tiếp theo thì hàm next() được thực hiện
function next() {
  // Hiển thị yêu cầu nhập dữ liệu bằng hàm prompt
  let name = prompt("Hãy nhập tên của bạn");
  let city = prompt("Hãy nhập thành phố nơi bạn đang sống");
  let mobile = prompt("Hãy nhập số điện thoại của bạn");

  // Hàm tính tuổi
  age();

  // Yêu cầu nhập dữ liệu thêm
  let email = prompt("Hãy nhập email của bạn");
  let job = prompt("Hãy nhập công việc hiện tại của bạn");
  let gender = prompt("Hãy nhập giới tính của bạn");
  // \n: xuống dòng khi text quá dài
  let pet = prompt("Bạn có thích thú cưng không?\n* Trả lời có hoặc không");
  let numPet = prompt("Nếu có hãy nhập số lượng thú cưng bạn có");

  // Hiển thị kết quả trên html thông qua dom id selector
  // Đặt id cho <td> trong table thay vì <p> cho đẹp hơn
  document.getElementById("name").innerHTML = name;
  document.getElementById("city").innerHTML = city;
  document.getElementById("mobile").innerHTML = mobile;
  document.getElementById("email").innerHTML = email;
  document.getElementById("job").innerHTML = job;
  document.getElementById("gender").innerHTML = gender;
  document.getElementById("pet").innerHTML = pet;
  document.getElementById("numPet").innerHTML = numPet;

  // Sau khi nhập và hiển thị kết quả xong thì giá trị text của button chuyển thành "Kết thúc khảo sát"
  document.getElementById("nextStep").innerHTML = "Kết Thúc Khảo Sát";
}

// Hàm tính tuổi
function age() {
  // Phần nhập dữ liệu với năm sinh
  const currentYear = new Date().getFullYear(); //Lấy năm hiện tại bằng hàm Date().getFullYear()
  let yourBirthYear = prompt("Hãy nhập năm sinh của bạn");
  let age = currentYear - yourBirthYear; //Hàm tính số tuổi hiện tại bằng năm hiện tại trừ đi năm sinh user nhập vào
  // Vòng lặp điều kiện năm sinh nhỏ hơn năm hiện tại, nếu nhập sai hiển thị yêu cầu nhập đúng
  while (yourBirthYear > currentYear) {
    return prompt("Hãy nhập lại năm sinh của bạn");
  }
  document.getElementById("age").innerHTML = age;
}