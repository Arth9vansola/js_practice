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