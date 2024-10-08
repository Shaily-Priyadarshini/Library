import React, { useState } from 'react'

const Modal = ({card,setIsOpen}) => {
 
    if (!card) return null;
    console.log(card);
     const onClose=()=>{
        setIsOpen((curr)=>!curr)
     }

  

    return (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 w-1/3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{card.name}</h2>
            <button onClick={onClose} className="text-gray-500 text-2xl">
              &times;
            </button>
          </div>
          <p className="text-gray-700"><strong>Description:</strong> {card.description}</p>
          <p className="text-gray-700"><strong>Last Updated:</strong> {card.last_updated}</p>
          <p className="text-gray-700"><strong>Page No:</strong> {card.page_no}</p>
          <p className="text-gray-700"><strong>Type:</strong> {card.type}</p>
          <p className="text-gray-700"><strong>Used:</strong> {card.used}</p>
          <p className="text-gray-700"><strong>Hashtags:</strong> {card.hashtags}</p>
        </div>
      </div>
    );
}

export default Modal