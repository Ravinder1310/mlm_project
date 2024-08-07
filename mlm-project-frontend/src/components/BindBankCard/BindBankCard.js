import React from 'react'
import { useLocation } from 'react-router-dom'

function BindBankCard() {
    const location = useLocation()
    const item = location.state;
    console.log("card detail",item);
    
    return (
        <div className="sm:w-2/5 mx-auto p-4 pb-16  bg-red-500 text-white">
            <div className="flex justify-between">
                <div className="cursor-pointer">◀️ Back</div>
                <div className="font-bold">Make Payment</div>
                <div className="font-bold w-9"></div>
            </div>
            <div className='my-4 flex justify-between text-red-600'>
                <div className='h-28 w-1/4 rounded-lg bg-white'  style={{ 
                                        backgroundImage: `url(${item.photo})`, 
                                        backgroundSize: 'cover', 
                                        backgroundPosition: 'center' 
                                    }}>
                </div>
                <div className='h-28 w-3/5 rounded-lg bg-white p-2'>
                <div>Product Price:({item.price})INR</div>
                <div>Product Code:{item.productCode}</div>
                <div>Terms:{item.term}days</div>
                <div>Daily Income:({item.dailyIncome})INR</div>
                </div>
            </div>
            <div className="bg-white p-4 mt-4 rounded-lg">
                <div className="border-b flex justify-between items-center" >
                    <label className="font-bold text-left text-slate-500 text-sm w-2/5 sm:w-1/4 sm:text-right">Real Name:</label><input type="text" placeholder="Demo Kumar" className="outline-none border-none w-3/5 sm:w-3/4" />
                </div>
                <div className="border-b  flex justify-between items-center">
                    <label className="font-bold text-left text-slate-500  text-sm w-2/5 sm:w-1/4 sm:text-right ">Bank:</label><input type="text" placeholder="State Bank o India" className="outline-none  border-none w-3/5 sm:w-3/4" />
                </div>
                <div className="border-b  flex justify-between items-center" >
                    <label className="font-bold text-left text-slate-500 text-sm w-2/5 sm:w-1/4 sm:text-right">Account:</label><input type="text" placeholder="00000000000" className="outline-none  border-none w-3/5 sm:w-3/4" />
                </div>
                <div className="border-b  flex justify-between items-center" >
                    <label className="font-bold text-left text-slate-500 text-sm w-2/5 sm:w-1/4 sm:text-right">IFSC:</label><input type="text" placeholder="IYAVB&88767" className="outline-none  border-none w-3/5 sm:w-3/4" />
                </div>
                <div className="border-b  flex justify-between items-center" >
                    <label className="font-bold text-left text-slate-500 text-sm w-2/5 sm:w-1/4 sm:text-right">Mobile:</label><input type="text" placeholder="+91xxxxxxxxxx" className="outline-none  border-none w-3/5 sm:w-3/4" />
                </div>
                <div className="border-b  flex  sm:justify-between items-center" >
                   <div className="flex flex-wrap items-center w-full">
                    <label className="font-bold text-left text-slate-500 text-sm w-2/5 sm:w-1/4 sm:text-right">SMS:</label><input type="text" placeholder="Verification Code " className="outline-none  border-none w-3/5 sm:w-2/4" />
                   <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        <span class="relative px-2 py-1  sm:px-5 sm:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            get
                        </span>
                    </button>
                   </div>
                </div>
                <div className=" flex w-full justify-center"><button className="rounded-full w-4/5 bg-red-900 text-white p-3  mt-4">Submit</button></div>

            </div>

        </div>
    )
}

export default BindBankCard
