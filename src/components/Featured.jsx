import { useState } from "react";

import FeaturedCard from "./FeaturedCard";
import Pagination from "./Pagination";
import Filter from "./Filter";
import featured from "../utils/featured";
import NavigationBar from "./NavigationBar";

const Featured = () => {
    const [filteredList, setFilteredList] = useState(featured) 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredList.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    



    return (
        <>
        {console.log(filteredList)}
            <NavigationBar />
            <Filter filteredList={filteredList} setFilteredList={setFilteredList}/>
            <h2 className="text-left font-bold text-2xl m-auto mt-4 w-5/6">Featured</h2>
            <p className="text-slate-500 text-left m-auto mb-6 w-5/6">Curated top picks from this week</p>
            
      
            <div className="flex flex-wrap justify-evenly w-5/6 m-auto">
                {currentItems.map((card) => (
                    <FeaturedCard card={card} key={card.id} />
                ))}
            </div>

            {filteredList.length ?
            <Pagination 
                totalItems={filteredList.length} 
                itemsPerPage={itemsPerPage} 
                currentPage={currentPage} 
                onPageChange={handlePageChange} 
                
            /> : <h1 className="w-5/6 m-auto border-8 text-slate-800 text-xl font-bold p-20"> No Item found</h1>
}
        </>
    );
};

export default Featured;

