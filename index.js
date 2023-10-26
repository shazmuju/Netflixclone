function welcome(){
    let channel=document.getElementById("channel")
    if(channel.value===""){
        alert("Enter Your Username or Email Address")
    }else{
        alert("Welcome " +channel.value)
        channel.value=""
    }
}