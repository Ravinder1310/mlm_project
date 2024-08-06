import React from 'react';
import p from './indri.jpg';

const SingleProduct = () => {
    const item = {
        photo: p,
        productCode: "T8768",
        price: "570",
        term: "45",
        dailyIncome: '23',
        totalRevenue: '1035',
        totalReturn: '207',
        purchaseLevel: 'unlimited'
    }

    return (
        <div className='sm:w-2/5 mx-auto p-4 pb-16  bg-red-500 text-white'>
            <div className="flex justify-between">
                <div className="cursor-pointer text-white">◀️ Back</div>
                <div className='text-white text-lg'>Single Product</div>
                <div className="font-bold w-9"></div>
            </div>
            <div className='h-60 rounded-lg  mt-4' style={{
                backgroundImage: `url(${item.photo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}></div>
            <div className='font-bold text-2xl mb-4'>Product Code: {item.productCode}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 gap-4 bg-white rounded-lg">
                <div className="bg-red-200 text-blue-500 p-4 rounded-lg shadow-md flex flex-col text-center">
                    <div className='font-bold text-xl text-red-500'>INR:{item.price}</div>
                    <div>Price</div>
                </div>
                <div className="bg-red-200 text-blue-500 p-4 rounded-lg shadow-md flex flex-col text-center">
                    <div className='font-bold text-xl text-red-500'>{item.term}days</div>
                    <div>Term</div>
                </div>
                <div className="bg-red-200 text-blue-500 p-4 rounded-lg shadow-md flex flex-col text-center">
                    <div className='font-bold text-xl text-red-500'>INR:{item.dailyIncome}</div>
                    <div>Daily Income</div>
                </div>
                <div className="bg-red-200 text-blue-500 p-4 rounded-lg shadow-md flex flex-col text-center">
                    <div className='font-bold text-xl text-red-500'>INR:{item.totalRevenue}</div>
                    <div>Total Revenue</div>
                </div>
                <div className="bg-red-200 text-blue-500 p-4 rounded-lg shadow-md flex flex-col text-center">
                    <div className='font-bold text-xl text-red-500'>{item.totalReturn}%</div>
                    <div>Total Return</div>
                </div>
                <div className="bg-red-200 text-blue-500 p-4 rounded-lg shadow-md flex flex-col text-center">
                    <div className='font-bold text-xl text-red-500'>{item.purchaseLevel}</div>
                    <div>Purchase Level</div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;
