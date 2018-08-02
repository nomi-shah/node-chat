//  import { isMoment } from "moment";

var socket = io();
socket.on('connect',()=>{
    console.log ("connected to server");
});

socket.on ('disconnect',()=>{
    console.log("server disconnect");
});

socket.on('newMessage', (message)=>{
//console.log('New Message' ,message);
var formattedTime = moment(message.createdAt).format('h:mm a');
var template =jQuery('#message-template').html(); 
var html = Mustache.render(template,{
    text:message.text,
    from:message.from,
    createdAt:formattedTime 

});
jQuery('#message').append(html);
 
// var li =jQuery('<li></li>');
//     li.text(`${message.from} ${formattedTime}: ${message.text}`);

//     jQuery('#message').append(li);

});
// socket.emit('createMessage',{
// from:'abc',
// text: 'hi'
// }, function (data){
// console.log('Got it',data);    
// });

jQuery('#message-form').on('submit', function(e){
e.preventDefault();

var messageTextBox =jQuery('[name=message]');

socket.emit('createMessage',{
    from:'user',
    text: messageTextBox.val()
},function(){
    messageTextBox.val('')

});
});