// AIzaSyDcmI1OvYoYvrBeUunN9gcosWvSmCt-BPo
import dotenv from "dotenv";
import axios from 'axios';
import * as Debates from './data/debate.json';


dotenv.config();

const baseURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id={video IDs}&key=${process.env.API_KEY}`;

