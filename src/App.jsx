import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const [watches, setWatches] = useState([]);
  // useEffect(()=>{
  //   fetch ('watches.json')
  //   .then (res => res.json())
  //   .then(data =>setWatches(data));
  // },[])
  useEffect(()=>{
    fetch ('https://raw.githubusercontent.com/robiulislam8726/this-second-react/main/watches.json')
    .then (res => res.json())
    .then(data =>setWatches(data));
  },[])
  // const [count, setCount] = useState(0)
  // const watches = [
  //   {id:1, name: 'Apple watch', price: 200},
  //   {id:2, name: 'Samsung watch', price: 300},
  //   {id:3, name: 'Tommy watch', price: 400},
  //   {id:4, name: 'Mi watch', price: 500},
  // ]
  //  const watches =[
  //   {
  //     "id": 1,
  //     "name": "Apple Watch Series 8",
  //     "price": 399
  //   },
  //   {
  //     "id": 2,
  //     "name": "Samsung Galaxy Watch 6",
  //     "price": 349
  //   },
  //   {
  //     "id": 3,
  //     "name": "Garmin Fenix 7",
  //     "price": 699
  //   },
  //   {
  //     "id": 4,
  //     "name": "Fitbit Sense 2",
  //     "price": 299
  //   },
  //   {
  //     "id": 5,
  //     "name": "Amazfit GTR 4",
  //     "price": 199
  //   }
  // ]
  

  return (
    <>
     <h1>Sunglass and Watch</h1>
     {
      watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
     }
  
    </>
  )
}

export default App
