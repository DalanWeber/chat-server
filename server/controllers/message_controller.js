let messageArr = [];
let id = 0;

module.exports = {
  createMessage: (req, res) => {
    const { text, time } = req.body;
    const messageToAdd = {
      text: text,
      time: time,
      id: id,
    };
    messageArr = [...messageArr, messageToAdd];
    id++;
    res.status(200).send(messageArr);
  },
  readMessage: (req, res) => {
    res.status(200).send(messageArr);
  },
  updateMessage: (req, res) => {
    const { id } = req.params;
    const { text, time } = req.body;
    const index = messageArr.findIndex((message) => message.id === +id);
    messageArr.splice(index, 1, {
      text: text || messageArr[index].text,
      time: time || messageArr[index].time,
      id: +messageArr[index].id,
    });
    res.status(200).send(messageArr);
  },
  deleteMessage: (req, res) => {
    const { id } = req.params;
    messageToDelete = messageArr.findIndex((message) => message.id === +id);
    messageArr.splice(messageToDelete, 1);
    res.status(200).send(messageArr);
  },
};
