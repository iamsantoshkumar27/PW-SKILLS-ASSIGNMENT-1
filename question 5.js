function login ( username , password){
    if ( username=="admin" & password == 12345){
             console.log("Login Successful")
    }
    else{
        console.log("invalid credentials")
    }
}
user="admin"
pass=12345
login(user,pass)