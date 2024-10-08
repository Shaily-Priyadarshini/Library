import { useState } from "react";

import FeaturedCard from "./FeaturedCard";
import Pagination from "./Pagination";

const Featured = ({filteredList}) => {
    const [list,setList] = useState(filteredList); // Full list of items
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Calculate the indices for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredList.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <h2 className="text-left font-bold text-2xl m-auto mt-4 w-5/6">Featured</h2>
            <p className="text-slate-500 text-left m-auto mb-6 w-5/6">Curated top picks from this week</p>
            
      
            <div className="flex flex-wrap justify-evenly w-5/6 m-auto">
                {currentItems.map((card) => (
                    <FeaturedCard card={card} key={card.id} />
                ))}
            </div>

            
            <Pagination 
                totalItems={list.length} 
                itemsPerPage={itemsPerPage} 
                currentPage={currentPage} 
                onPageChange={handlePageChange} 
            />
        </>
    );
};

export default Featured;

// import { useState } from "react";
// import featured from "../utils/featured";
// import FeaturedCard from "./FeaturedCard";

// const Featured = () => {
//     const [list,setList] =useState(featured)
    
//   return (
//     <>
//         <h2 className="text-left font-bold text-2xl  m-auto mt-4 w-5/6">Featured</h2>
//         <p  className="text-slate-500 text-left m-auto  mb-6 w-5/6">Curated top picks from this week</p>
//         <div className="flex flex-wrap justify-evenly w-5/6 m-auto">{list.map((card)=><FeaturedCard card={card} key={card.id}/>)}</div>
//     </>
//   )
// }

// export default Featured