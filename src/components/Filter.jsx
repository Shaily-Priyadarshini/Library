import  { useState } from 'react'
import featured from '../utils/featured';

const Filter = ({filteredList,setFilteredList}) => {
    const [inputText, setInputText] = useState();
    const [originalList,setOriginalList] = useState(featured);


    const handleSearch = (e) => {

        setInputText(e.target.value);
      };
      const clearSearch = () => {
        setInputText('');
      };
      const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log("yes")
          let filterListing= originalList.filter((res)=>res.name.toLowerCase().includes(inputText));
          setFilteredList(filterListing);


        }
      }
    


  return (
    <div>
        <div className="search-bar-container">
        
      <input
        type="text"
        value={inputText}
        onChange={handleSearch}
        placeholder="Search..."
        className="w-5/6 m-2 p-2"
        onKeyDown={handleKeyDown}
        
      />
   

      {inputText && (
        <button className="bg-white mt-2 p-2" onClick={clearSearch}>
          &times; 
        </button>
      )}
    </div>
    </div>
  )
}

export default Filter;