var socket = io();
socket.on('connect',()=>{
    console.log ("connected to server");

    socket.emit('createMessage', {
        from:'ali@example',
        text:'hey  this is nomi'
    });
});

socket.on ('disconnect',()=>{
    console.log("server disconnect");
});

socket.on('newMessage', (message)=>{
console.log('New Message' ,message);
});