import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});

let onlineUser = [];

const addUser = (userId, socketId) => {
  const userExits = onlineUser.find((user) => user.userId === userId);
  if (!userExits) {
    onlineUser.push({ userId, socketId });
  }
};

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  // ADDING YOUR USERID TO THE ONLINEUSER , EVERY TIME YOU OPEN THE WEBSITE
  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser(receiverId);
    // SEND YOUR MESSAGE(DATA) TO RECEIVER 
    io.to(receiver.socketId).emit("getMessage", data);
  });

  // DISCONNECT YOUR REAL TIME CONNECTION , REMOVE YOUR USERID FROM ONLINE USER
  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

io.listen("4000");
console.log("started")