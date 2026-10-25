
function register(){
let username=document.getElementById("registerUsername").value.trim(),email=document.getElementById("registerEmail").value.trim(),password=document.getElementById("registerPassword").value,users=JSON.parse(localStorage.getItem("users")||"[]"),msg=document.getElementById("registerMsg")
if(username.length<3){msg.textContent="Username must have at least 3 characters";return}
if(password.length<6){msg.textContent="Password must have at least 6 characters";return}
if(users.find(u=>u.email==email)){msg.textContent="Email already exists";return}
users.push({username,email,password});localStorage.setItem("users",JSON.stringify(users));msg.style.color="green";msg.textContent="Register successful!";setTimeout(()=>location.href="login.html",700)
}
function login(){
let email=document.getElementById("loginEmail").value.trim(),password=document.getElementById("loginPassword").value,users=JSON.parse(localStorage.getItem("users")||"[]"),user=users.find(u=>u.email==email&&u.password==password),msg=document.getElementById("loginMsg")
if(!user){msg.textContent="Email or password is incorrect";return}
localStorage.setItem("currentUser",JSON.stringify(user));msg.style.color="green";msg.textContent="Login successful!";setTimeout(()=>location.href="index.html",700)
}
