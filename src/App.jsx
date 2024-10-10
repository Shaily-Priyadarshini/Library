import './App.css'
import Heading from './components/Heading';
import Button from './components/Button';
import Featured from './components/Featured';
import Trending from './components/Trending';
import Error from './components/Error'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Kpi from './components/Kpi';
import Layouts from './components/Layouts';
import Storyboards from './components/Storyboards';

function App() {
  
  return (
    <main className='app text-center'>
      <Button name={'Request'}/>
      <Heading />
      
      
      <BrowserRouter>
        <Routes>
        
          <Route path='/' element={<Featured  />} />
          <Route path='kpi' element={<Kpi />} />
          <Route path='layouts' element={<Layouts />} />
          <Route path='storyboards' element={<Storyboards />} />
          <Route path='*' element={<Error />} />

        </Routes>
      </BrowserRouter>
      <Trending />

    </main>
  )
}


export default App
