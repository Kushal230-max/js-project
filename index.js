let username

document.getElementById("myButton").onclick=function(){

    username=document.getElementById("myInput").value

    document.getElementById("myH1").textContent = `Hello ${username}`;
}