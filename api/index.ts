import dotenv from "dotenv";
import axios from 'axios';
import * as Debates from './data/debate.json';
import express from 'express';
import { debateList } from './data';
import cors from 'cors';

const app = express();
dotenv.config();

app.use(cors());


let allDebateID = debateList.join(',');

const endpoint = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${allDebateID}&key=${process.env.API_KEY}`;

app.get('/api', (req, res) => {
  axios.get(endpoint)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
})

app.listen(7901, () => {
  console.log('Server is running on port 7901');
});
