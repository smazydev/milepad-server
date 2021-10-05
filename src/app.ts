const express = require("express");
const bodyParser = require("body-parser");
const spreadsheetInjection = require("./frameworks/injectionHandler/spreadsheetInjectionHandler");
const spreadsheetRouter = require("./controllers/spreadsheet/MongoDB/spreadsheetController");
const mongoose = require("./frameworks/database/mongoDB/mongoDB");
const cors = require("cors");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const PORT = process.env.PORT || 4000;
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(spreadsheetRouter);

const start = () => {
  server.listen(PORT, () => {
    console.log("Server listening on: ", PORT);
    spreadsheetInjection.SpreadsheetServiceSingleton.getInstance();
    // mongoose.connectToMongoDB();
  });
};

start();

//************SOCKET CODE STARTS FROM HERE WHICH IS ABSOLUTELY GARBAGE  *******************************/

io.on("connection", (socket) => {
  console.log("a user connected:", socket.id);
  console.log("user count: "+ socket.adapter.sids.size);
  

  socket.on("comments", ({ id, msg }) => {
    socket.to(id).emit("comments", {id:socket.id,msg: msg});
    console.log(id,msg, "Check Commit");
  });

  socket.on("room-id", (id) => {
    socket.join(id);
    console.log(id, "myId")
    console.log("BUGGA CHUGGA", io.sockets.adapter.rooms.get(id));
    io.to(id).emit("clients", io.sockets.adapter.rooms.get(id));
  });

  socket.on("cell-selected", (data) => {
    // console.log(data);
    socket.broadcast.emit("cell-selected", data);
  });

  socket.on("cells-selected", (data) => {
    // console.log(data);
    socket.broadcast.emit("cells-selected", data);
  });

  socket.on("cell-edited", (data) => {
    // console.log(data);
    socket.broadcast.emit("cell-edited", data);
  });

  socket.on("cell-style", (data) => {
    socket.broadcast.emit("cell-style", data);
  });

  socket.on("add-sheet", (data) => {
    socket.broadcast.emit("add-sheet", data);
  });

  socket.on("change", (sData) => {
    const { id, data } = sData;
    // console.log(data);
    // console.log(id)
    // io.to(id).emit("change", data);
    socket.to(id).emit("change", data);
  });

  /*   socket.on("update-cell-data", (data) => {
    console.log(data);
    socket.broadcast.emit("update-cell-data", data);
  }); */

  /*   socket.on("cell-styles", (data) => {
    console.log(data);
    socket.broadcast.emit("cell-styles", data);
  }); */

  socket.on("disconnect", () => {
    console.log("user disconnected");
    console.log("user count: "+ socket.adapter.sids.size);
  });
});

export {};
