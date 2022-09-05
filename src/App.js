import './App.css';
import axios from 'axios';
import {useEffect,useState} from 'react'
import MenuPage from './Components/MenuPage';

function App () {

  const [apiData, setApiData] = useState(null);


  const getApiData = async() =>{
    const response = await axios.get("https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099");
    setApiData(response.data[0]);
  }

  useEffect(()=>{
    getApiData()
  },[]) 



  return (
    <div className="App">
      <MenuPage apiData={apiData}/>
    </div>
  );
}

export default App;
