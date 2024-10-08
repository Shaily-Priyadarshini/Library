import './App.css'
import Heading from './components/Heading';
import Filter from './components/Filter';
import Button from './components/Button';
import NavigationBar from './components/NavigationBar';
import Featured from './components/Featured';
import Trending from './components/Trending';
import featured from './utils/featured';
import { useState } from 'react';

function App() {
  const [filteredList, setFilteredList] = useState(featured)

  return (
    <div className='app text-center'>
      <Button name={'Request'}/>
      <Heading />
      <Filter filteredList={filteredList} setFilteredList={setFilteredList}/>
      <NavigationBar/>
      <Featured filteredList={filteredList}/>
      <Trending />

    </div>
  )
}

export default App
