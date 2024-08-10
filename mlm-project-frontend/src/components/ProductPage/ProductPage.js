import React from 'react'
import p from './indri.jpg'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout';

function ProductPage() {
        const navigate=useNavigate();
    const cards = [
        {
            id: 1,
            img1: '/images/c5701.jpg',
            img2: '/images/c5702.jpg',
            name: 'C570',
            price: 570,
            income: 23,
            cycle: 45,
            description: 'Cocktail Sparkling Health Drink Competitive price vs product value.  Canned bottle production base---10000 tons/month PET bottle production base---10000 tons per month QC LAB--20 professional QC team',
            supply:"300 Twenty-Foot Container/Month. Good service from 'Before order' to 'After sale' . Always focus on product quality, make them good health & good taste"
        },
        {
            id: 2,
            img1: '/images/j15501.jpg',
            img2: '/images/j15502.jpg',
            name: 'J1550',
            price: 1550,
            income: 62,
            cycle: 45,
            description: 'Natural Orange Juice All the beverage production lines are imported from Germany, combined production research and development, and sales together. We can supply various types of drinks (OEM/ODM).',
            supply:"200 Twenty-Foot Container per Month Canned bottle production base---10000 tons/month PET bottle production base---10000 tons per month QC LAB--20 professional QC team"
        },
        {
            id: 3,
            img1: '/images/g35501.jpg',
            img2: '/images/g35502.jpg',
            name: 'G3550',
            price: 3550,
            income: 142,
            cycle: 45,
            description: 'Each year we supply more than 30.000 tons of products to the market. Besides the worldwide market, RITA Food & Drink Co., Ltd has been exported to more than 100 countries and regions worldwide. RITA is also a reliable partner in OEM and ODM manufacturing cooperation with diverse products',
            supply:"300 Twenty-Foot Container/Month"
        },
        {
            id: 4,
            img1: '/images/e75001.jpg',
            img2: '/images/e75002.jpg',
            name: 'E7500',
            price: 7500,
            income: 317,
            cycle: 45,
            description: 'Energy Ginseng Drink RITA is the perfect choice for you. We offer a wide variety of high-quality products at competitive prices, making us a valuable partner for your business.',
            supply:"300 Twenty-Foot Container/Month. Good service from 'Before order' to 'After sale' . Always focus on product quality, make them good health & good taste."
        },
        {
            id: 5,
            img1: '/images/c121501.jpg',
            img2: '/images/c121502.jpg',
            name: 'C12150',
            price: 12150,
            income: 540,
            cycle: 45,
            description: 'Choose Rita Coco Plus Tropical Flavor, a delicious and health-enhancing option that embraces the benefits of coconut water. Enjoy its full spectrum of advantages as it supports your overall well-being and leaves you refreshed, replenished, and revitalized.',
            supply:"300 Twenty-Foot Container/Month"
        },
        {
            id: 6,
            img1: '/images/s288001.jpg',
            img2: '/images/s28800.jpg',
            name: 'S28800',
            price: 28800,
            income: 1280,
            cycle: 45,
            description: 'We committed to providing people in line with the constitution of green food, in order to balance the peoples diet, strong national physique.Health-based,happy for the soul ,the responsibility for the day,and constantly research and development and production of RITA series of innovative fashion drinks to continue to meet the growing consumer demand.',
            supply:"200 Twenty-Foot Container per Month Canned bottle production base---10000 tons/month PET bottle production base---10000 tons per month QC LAB--20 professional QC team"
        },
    ]

    return (
        <Layout title={"Packages - Rita Drinks"}>
        <div className='sm:w-2/5 mx-auto p-4 pb-16 bg-red-500'>
            <div className="flex justify-between">
                <div className="cursor-pointer text-white">◀️ Back</div>
                <div className='text-white'>All Products</div>
                <div className="font-bold w-9"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  mx-auto m-4">
                {
                    cards.map((item, idx) => {
                        return (
                            <div key={idx} onClick={()=>{navigate('/users/user/single-product',{state:item})}} className=" text-white hover:border-black  cursor-pointer hover:shadow-2xl hover:bg-slate-200 rounded-lg duration-500 hover:text-blue-700 shadow-red-000 flex flex-col  border p-4">
                                <img className='h-[250px] w-[100%] rounded-lg sm:w-[90%] sm:h-[250px]' src={`${item.img1}`}/>
                                <div className='mt-3 font-bold'>Package Name:- {item.name}</div>
                                <div className='flex gap-4'>
                                    <p className='mt-1 font-bold'>Price:- <span className='mt-1 font-normal'>Rs. {item.price}</span></p>
                                    <p className='mt-1 font-bold'>Cycle:- <span className='mt-1 font-normal'>{item.cycle} days</span></p>
                                </div>
                                <p className='mt-1 font-bold'>Total revenue:- <span className='mt-1 font-normal'>Rs. {item.income * item.cycle}</span></p>
                                <div className='text-sm mt-2'>{item.description.substring(0, 37)}...</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </Layout>
    )
}

export default ProductPage
