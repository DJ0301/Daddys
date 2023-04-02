//Server end which handles API requests
const express = require('express');
const OpenAI = require('openai');
const { Configuration, OpenAIApi } = require("openai");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
    apiKey: "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",
  });
const openai = new OpenAIApi(configuration);
  
app.post('/', async (req, res) => {
    const {message} = req.body ;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Act as my chatbot assistant 'V'. Your task is to help me search for colleges and list them based on my preferences. Your sole job in this conversation is to assist me in finding colleges based on the courses I am looking for, preferred location, cost of living, scholarship information, university rankings, tuition cost, acceptance rate, and other relevant criteria.Continue asking me if I need any other assistance until I indicate that I no longer require any help.Inquire about my preferences thoroughly until I express my satisfaction with the information provided. Once I indicate my satisfaction, direct me to the college application help section of the website to obtain assistance with my application. /n/nInput: ${message} /nOutput:   `,
        max_tokens: 200,
        temperature: 0.5,
      });
      console.log(response.data);
      res.json({message : response.data.choices[0].text });
});

app.listen(port,() => {
    console.log('listening at http://localhost:'+port);
});