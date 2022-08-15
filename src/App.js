import Header from './components/Header';
import './App.css';
import Container from '@mui/material/Container';
import { BrowserRouter,  Route, Switch } from 'react-router-dom';
import Trending from './components/pages/Trending';
import Movies from './components/pages/Movies';
import Search from './components/pages/Search';
import Series from './components/pages/Series';
import SimpleBottomNavigation from './components/MainNav';


function App() {
  return (
    <BrowserRouter>
   <Header/>
    <div className="App">
    
      <Container>
      
        <Switch>
          <Route path="/" component={Trending} exact />
          <Route path="/Movies" component={Movies} />
          <Route path="/Series" component={Series} />
          <Route path="/search" component={Search} />
          </Switch>
        

      </Container>
    </div>
    <SimpleBottomNavigation/>
    </BrowserRouter>

    
    
    
  )};


export default App;
