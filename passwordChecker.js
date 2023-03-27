class User{
    constructor(userName , password){
        this.userName = userName
        this._password = password
    }
    //geter method
    get getPassword(){
        return this._password.replace(/./g, '*');
    }
    //set new password
    set setPassword(newPassword){
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(passwordRegex.test(newPassword)){
            this._password = newPassword
        }else{
            console.error('Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
        }
    }
}
const user = new User("username", "mypassword")
console.log(user.getPassword)
user.setPassword = "newpassword"
user.setPassword = "newPassword"
user.setPassword = "newPassword123"
console.log(user.getPassword)
