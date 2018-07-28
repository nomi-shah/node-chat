var socket = io();
socket.on('connect',()=>{
    console.log ("connected to server");
});

socket.on ('disconnect',()=>{
    console.log("server disconnect");
});

socket.on('newMessage', (message)=>{
console.log('New Message' ,message);
});