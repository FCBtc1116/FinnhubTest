import axios from 'axios';
const api = axios.create({baseURL: 'http://localhost:3001'})

// A mock function to mimic making an async request for data
export async function fetchData(symbol: string) {
  let price:number = 0;
  let percentChange:number = 0;

  await api.post('/api', {
    symbol: symbol
  })
  .then(function (response) {
    price = response.data.price;
    percentChange = response.data.percentChange;
  })
  .catch(function (error) {
    console.log(error);
  });

  return {
    "price" : price,
    "percent" : percentChange
  }
}
