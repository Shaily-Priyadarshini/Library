// import { useState } from "react";
import trendingList from "../utils/trending";
import FeaturedCard from "./FeaturedCard";

const Trending = () => {
  return (
    <div>
        <h2 className="text-left font-bold text-2xl m-auto mt-4 w-5/6">Trending</h2>
        <p className="text-slate-500 text-left m-auto mb-6 w-5/6">Most popular by Community</p>
        <div className="flex flex-wrap justify-evenly w-5/6 m-auto">
                {trendingList.map((card) => (
                    <FeaturedCard card={card} key={card.id} />
                ))}
            </div>

    </div>
  )
}

export default Trending