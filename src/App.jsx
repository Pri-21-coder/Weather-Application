import './App.css'
/*import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';*/
//import SearchBox from "./SearchBox";
//import InfoBox from './InfoBox';
import WeatherInfo from './WeatherApp';
function App() {
  /*let handleClick=()=>{
    console.log("button was clicked!");
  };
  return (
    <>
      <h1>Material UI Demo</h1>
      <Button variant="contained" startIcon={<DeleteIcon />} onClick={handleClick} >Click me!</Button>
      <Alert severity="error">Delete option is given!</Alert>
    </>
  )*/
  return(
    <>
      {/*<SearchBox/>
      <InfoBox/>*/}
      <WeatherInfo/>
    </>
  )
}

export default App
