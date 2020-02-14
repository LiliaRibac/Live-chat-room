// adding new chat documents
// seatting up real-time listener to get new chats
// updating the username
// updating the room

class Chatroom{
  constructor(room, userName){
    this.room = room;
    this.userName = userName;
    this.chats = db.collection('chats');
  }
  async addChat(message){
    // format a chat object
    const now = new Date();
    const chat ={
      message,
      userName: this.userName,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    };
    // save the chat document
    const response = await this.chats.add(chat)
    return response
  }
}

const chatroom = new Chatroom("gaming","Bob");
console.log(chatroom)

chatroom.addChat('Hello everyone')
  .then(() => console.log('Chat added'))
  .catch(err => console.log(err))