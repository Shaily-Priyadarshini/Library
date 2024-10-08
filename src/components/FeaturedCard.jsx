import clock from '../assets/clock.png'
import Modal from './Modal';
import { useState } from 'react';
 

const FeaturedCard = ({card}) => {
  const [isOpen,setIsOpen] = useState(false);

  const openModal=()=>{
    setIsOpen(true)
    

  }

    
  return (
    <>
    <div onClick={openModal} className='border-gray-100 border-2 bg-white w-96 h-24 mr-1 mb-1 p-2 rounded flex'>
        
        <img src={clock} className='w-18 h-18 bg-slate-200 rounded p-4'/>
        <div className='ml-2'>
            <h2 className='font-bold text-sm text-left'>{card.name}</h2>
            <p className='text-left text-slate-800'>{card.description}</p>
        </div>
    </div>
    {isOpen && <Modal card={card} setIsOpen={setIsOpen}/>}

    </>

  )
}

export default FeaturedCard


