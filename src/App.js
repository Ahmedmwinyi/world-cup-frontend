import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderComponent } from './Component/HeaderComponent';
import FooterComponent from './Component/FooterComponent';
import TeamList from './Component/TeamList';
import Team from './Component/Team';
import UpdateTeam from './Component/UpdateTeam';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route path='/' element = { <TeamList/> } ></Route>
            <Route path='/teams' element = { <TeamList/> } ></Route>
            <Route path='/add-team' element = { <Team/> } ></Route>
            <Route path='/edit-team/${id}' element = { <UpdateTeam/> } ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
