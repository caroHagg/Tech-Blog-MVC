const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit",e=>{
    e.preventDefault();
    
    const userObj = {
        username:document.querySelector("#login-username").value,
        password:document.querySelector("#login-password").value,
    }
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href = "/"
        } else {
            alert("Incorrect username or password")
        }
    })
});
//signup form
const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit",e=>{
    
    e.preventDefault();
    const userObj = {
        username:document.querySelector("#signup-username").value,
        password:document.querySelector("#signup-password").value,
    }
    fetch("/api/users",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href = "/"
        } else {
            alert("Incorrect username or password")
        }
    })
});