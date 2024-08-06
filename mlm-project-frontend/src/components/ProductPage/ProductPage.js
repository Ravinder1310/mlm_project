import React from 'react'
import p from './indri.jpg'
import { useNavigate } from 'react-router-dom'

function ProductPage() {
        const navigate=useNavigate();
    const cards = [
        {
            img: '',
            name: 'hello',
            description: 'This is a brief description of the card content. It should not exceed 30 words.',
            photo: p
        },
        {
            img: '',
            name: 'hello',
            description: 'This is a brief description of the card content. It should not exceed 30 words.',
            photo: p
        },
        {
            img: '',
            name: 'hello',
            description: 'This is a brief description of the card content. It should not exceed 30 words.',
            photo: p
        },
        {
            img: '',
            name: 'hello',
            description: 'This is a brief description of the card content. It should not exceed 30 words.',
            photo: p
        },
        {
            img: '',
            name: 'hello',
            description: 'This is a brief description of the card content. It should not exceed 30 words.',
            photo: p
        },
        {
            img: '',
            name: 'hello',
            description: 'This is a brief description of the card content. It should not exceed 30 words.',
            photo: p
        },
    ]

    return (
        <div className='sm:w-2/5 mx-auto p-4 pb-16 bg-red-500'>
            <div className="flex justify-between">
                <div className="cursor-pointer text-white">◀️ Back</div>
                <div className='text-white'>All Products</div>
                <div className="font-bold w-9"></div>
            </div>
            <div className="grid grid-cols-2 gap-4  mx-auto m-4">
                {
                    cards.map((item, idx) => {
                        return (
                            <div key={idx} onClick={()=>{navigate('/single-product')}} className=" text-white hover:border-black text-center cursor-pointer hover:shadow-2xl hover:bg-slate-200 rounded-lg duration-500 hover:text-blue-700 shadow-red-000 flex flex-col items-center border p-4">
                                <div 
                                    className="bg-white h-20 w-20 rounded-lg"
                                    style={{ 
                                        backgroundImage: `url(${item.photo})`, 
                                        backgroundSize: 'cover', 
                                        backgroundPosition: 'center' 
                                    }}
                                ></div>
                                <div className=''>{item.name}</div>
                                <div className='text-sm'>{item.description}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductPage
