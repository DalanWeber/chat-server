const express = require("express");
const mc = require("./controllers/message_controller");
const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

app.post("/api/messages", mc.createMessage);
app.get("/api/messages", mc.readMessage);
app.put("/api/messages/:id", mc.updateMessage);
app.delete("/api/messages/:id", mc.deleteMessage);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`One day we will have a 3080 but today, it's a ${PORT}`);
});
