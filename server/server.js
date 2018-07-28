const path = require('path');
const http=require('http');
const express= require('express');

const socketIO = require ('socket.io');

const publicPath =path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
//console.log(__dirname + '/../public');
//console.log(publicPath);
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
        console.log(' new user connected');

//socket.emit from admin text welcom to the chat
 socket.emit('newMessage',{
     from: 'Admin',
     text: 'welcome to chat app'
 });
//socket.brodcast.emit from admin text new user joined
socket.broadcast.emit('newMessage',{
        from: 'Admin',
        text:'New user joined',
        createdAt: new Date().getTime()

});
    
        socket.on('createMessage',(message)=>{
            console.log('creatMessage',message);
            io.emit('newMessage',{
                from: message.from,
                text: message.text,
                createdAt:new Date().getTime()
            });
            // socket.broadcast.emit('newMessage',{
            //     from : message.from,
            //     text : message.text,
            //     createdAt:new Date().getTime()
            // });
        });
        
        socket.on('disconnect',()=>{
            console.log('client disconnected');
        });
});

server.listen(port,()=>{
console.log(`server  is  up on ${port}`);
});