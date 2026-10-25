
function sendMessage(){let n=document.getElementById("contactName").value.trim(),e=document.getElementById("contactEmail").value.trim(),m=document.getElementById("contactMessage").value.trim(),msg=document.getElementById("contactMsg");if(!n||!e||!m){msg.textContent="Please fill in all fields";return}msg.style.color="green";msg.textContent="Thank you! Your message has been sent."}
