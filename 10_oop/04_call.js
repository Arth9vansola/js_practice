const setUserName = function (username) {
    this.username = username;
    console.log("called")
}

const setUserdetails = function(username,email,password){
    setUserName.call(this, username);
    this.email = email;
    this.password = password;
}

const avi = new setUserdetails("avi", "car@gmail.com", "1234")
console.log(avi);

// here call use current functions's "this" instead of another one in this case setUserName's "this" is replaced by setUserdetails's "this"