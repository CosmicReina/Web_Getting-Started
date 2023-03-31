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
    }
    else{
        text.innerHTML = "✘ Không hợp lệ";
        text.style.color = "red";
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
        }
        else{
            text.innerHTML = "✘ Không trùng";
            text.style.color = "red";
        }
    }
    else{
        text.innerHTML = "✘ Nhập mật khẩu";
        text.style.color = "red";
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
}