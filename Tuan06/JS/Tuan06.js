function alertMessage() {
    alert("Hello World!");
}

function checkAccountName(){
    var regex = /^\w{6,18}$/;
    var accountName = document.getElementById("accInput").value.trim();
    var text = document.getElementById("errAcc");
    if(regex.test(accountName)){
        text.innerHTML = "✓ Hợp lệ";
        text.style.color = "green";
    }
    else{
        text.innerHTML = "✘ Không hợp lệ";
        text.style.color = "red";
    }
}

function checkPassword(){
    var regex = /^(.){6,}$/;
    var password = document.getElementById("passInput").value.trim();
    var text = document.getElementById("errPw");
    if(regex.test(password)){
        text.innerHTML = "✓ Hợp lệ";
        text.style.color = "green";
        return;
    }
    else{
        text.innerHTML = "✘ Không hợp lệ";
        text.style.color = "red";
        return;
    }
}

function recheckPassword(){
    var password = document.getElementById("passInput").value.trim();
    var repassword = document.getElementById("passReInput").value.trim();
    var text = document.getElementById("errRePw");
    if(!password == ""){
        if(password == repassword){
            text.innerHTML = "✓ Trùng";
            text.style.color = "green";
            return;
        }
        else{
            text.innerHTML = "✘ Không trùng";
            text.style.color = "red";
            return;
        }
    }
    else{
        text.innerHTML = "✘ Nhập mật khẩu";
        text.style.color = "red";
        return;
    }
}

function checkName(){
    var regex = /^(([A-Z])[a-z]+)(( )([A-Z])[a-z]+)+$/;
    var name = document.getElementById("nameInput").value.trim();
    var text = document.getElementById("errName");
    if(regex.test(name)){
        text.innerHTML = "✓ Hợp lệ";
        text.style.color = "green";
        return;
    }
    else{
        text.innerHTML = "✘ Tên phải có hai chữ trở lên và viết hoa đầu chữ";
        text.style.color = "red";
        return;
    }
}

function checkBirthday(){
    var birthDay = new Date(document.getElementById("dateInput").value);
    var today = new Date();
    var text = document.getElementById("errDate");
    if(birthDay.getFullYear < 1900)
    {
        text.innerHTML = "✘ Thời gian không hợp lệ";
        text.style.color = "red";
        return;
    }
    var age = today.getFullYear() - birthDay.getFullYear();
    if(age > 18){
        text.innerHTML = "✓ Hợp lệ";
        text.style.color = "green";
        return;
    }
    else{
        text.innerHTML = "✘ Chưa đủ 18 tuổi để đăng ký";
        text.style.color = "red";
        return;
    }
}

function checkAddress(){
    var address = document.getElementById("addressInput").value.trim();
    var text = document.getElementById("errAddress");
    if(address.length > 0){
        text.innerHTML = "✓ Hợp lệ";
        text.style.color = "green";
        return;
    }
    else{
        text.innerHTML = "✘ Không được để trống";
        text.style.color = "red";
        return;
    }
}

function checkPhoneNumber(){
    var regex = /^0[0-9]{9}$/;
    var phoneNumber = document.getElementById("phoneInput").value.trim();
    var text = document.getElementById("errPhone");
    if(regex.test(phoneNumber)){
        text.innerHTML = "✓ Hợp lệ";
        text.style.color = "green";
        return;
    }
    else{
        text.innerHTML = "✘ Số điện thoại phải bắt đầu bằng số 0 và có 10 chữ số";
        text.style.color = "red";
        return;
    }
}

function checkGender(){
    var radioNam = document.getElementById("radioNam");
    var radioNu = document.getElementById("radioNu");
    var text = document.getElementById("errGender");
    if(radioNam.checked || radioNu.checked){
        text.innerHTML = "✓ Hợp lệ";
        text.style.color = "green";
        return;
    }
}

function checkEmail(){
    var regex = /^(.+)(@)([a-zA-Z]+)(\.)([a-zA-Z]+)$/;
    var email = document.getElementById("emailInput").value.trim();
    var text = document.getElementById("errEmail");
    if(regex.test(email)){
        text.innerHTML = "✓ Hợp lệ";
        text.style.color = "green";
        return;
    }
    else
    {
        text.innerHTML = "✘ Email phải có dạng \"abc@omn.xyz\"";
        text.style.color = "red";
        return;
    }
}

function submit(){
    alert("Đăng ký thành công");
}

function resetForm(){
    document.getElementById("form").reset();
    document.getElementById("errAcc").innerHTML = "* Bắt buộc";
    document.getElementById("errAcc").style.color = "red";
    document.getElementById("errPw").innerHTML = "* Bắt buộc";
    document.getElementById("errPw").style.color = "red";
    document.getElementById("errRePw").innerHTML = "* Bắt buộc";
    document.getElementById("errRePw").style.color = "red";
    document.getElementById("errName").innerHTML = "* Bắt buộc";
    document.getElementById("errName").style.color = "red";
    document.getElementById("errDate").innerHTML = "* Bắt buộc";
    document.getElementById("errDate").style.color = "red";
    document.getElementById("errAddress").innerHTML = "* Bắt buộc";
    document.getElementById("errAddress").style.color = "red";
    document.getElementById("errPhone").innerHTML = "* Bắt buộc";
    document.getElementById("errPhone").style.color = "red";
    document.getElementById("errGender").innerHTML = "* Bắt buộc";
    document.getElementById("errGender").style.color = "red";
    document.getElementById("errEmail").innerHTML = "* Bắt buộc";
    document.getElementById("errEmail").style.color = "red";
    
}