const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());


const mockData = {
  isSuccess: true,
  error: "",
  errorCode: "",
  message: "",
  data: [
    {
      userName: "mockUser",
      email: "mockserver@test.com",
      phoneMumber: "5331231112"
    }
  ]
};
app.post('/api/v1/user', (req, res) => {
  const requestData = req.body;
  /* const response = {
    meta: {
      messages: {
        success: ["İşlem başarılı POST isteği ile gerçekleşti."],
        warning: [],
        error: []
      }
    },
    payload: requestData
  }; */

  res.json(mockData);
});


app.listen(port, () => {
  console.log(`Mock server listening at http://localhost:${port}`);
});