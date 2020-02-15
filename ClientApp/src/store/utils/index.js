import md5 from 'md5';
import axios from 'axios';

const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;

// Helper function that
// 1. generates necessary url and
// 2. fetches data from Marvel's API
export const fetchData = async (partialUrl) => {
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey);
  const url = partialUrl + `ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const response = await axios.get(url);
  return response;
}