import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import {Typography} from '@mui/material'

function App() {
  return (
    <div>
      <NavBar/>
      <div className='header'>
       <div>
       <Typography sx={{color:'white'}} variant="h1" component="h2">
         World News
</Typography>;
       </div>
      
      </div>
      <News></News>
    </div>
  );
}

export default App;
