var socket = io();
socket.on('connect',()=>{
    console.log ("connected to server");
});

socket.on ('disconnect',()=>{
    console.log("server disconnect");
});

socket.on('newMessage', (message)=>{
console.log('New Message' ,message);
    var li =jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#message').append(li);

});
// socket.emit('createMessage',{
// from:'abc',
// text: 'hi'
// }, function (data){
// console.log('Got it',data);    
// });

jQuery('#message-form').on('submit', function(e){
e.preventDefault();
socket.emit('createMessage',{
    from:'user',
    text: jQuery('[name=message]').val()
},function(){

});
});