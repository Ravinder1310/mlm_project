import React from 'react';
import { useNavigate } from 'react-router-dom';

function MyProfile({toggle}) {
    const navigate=useNavigate()
  return (
    <div className="bg-red-500 sm:w-2/5 mx-auto min-h-screen pb-16">
      {/* <div className="flex justify-between items-center px-4 py-2"> */}
       
      <div className="px-4 py-8">
        <div className="flex justify-between items-center">
          <div className="rounded-full overflow-hidden w-20 h-20">
            <img src="https://i.ibb.co/S3tF1zW/profile-picture.jpg" alt="profile" className="w-full h-full" />
          </div>
          <div>
            <p className="text-gray-700 font-bold text-2xl">9695546265</p>
            <p className="text-gray-700 text-sm">ID: 409321</p>
          </div>
          <div className="bg-red-500 text-white font-bold text-2xl px-4 py-2 rounded-full">LV4</div>
        </div>
      </div>
      <div className="px-4">
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-md p-4 shadow-md">
            <p className="text-gray-700 font-bold text-lg mb-2">Recharge Wallet</p>
            <p className="text-gray-700 text-2xl font-bold">0.75</p>
          </div>
          <div className="bg-white rounded-md p-4 shadow-md">
            <p className="text-gray-700 font-bold text-lg mb-2">Balance Wallet</p>
            <p className="text-gray-700 text-2xl font-bold">205.06</p>
          </div>
          <div className="bg-white rounded-md p-4 shadow-md">
            <p className="text-gray-700 font-bold text-lg mb-2">Products</p>
            <p className="text-gray-700 text-2xl font-bold text-center">6570</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-white rounded-md p-4 shadow-md">
            <p className="text-gray-700 font-bold text-lg mb-2">Earnings today</p>
            <p className="text-gray-700 text-2xl font-bold">711.32</p>
          </div>
          <div className="bg-white rounded-md p-4 shadow-md">
            <p className="text-gray-700 font-bold text-lg mb-2">Total earnings</p>
            <p className="text-gray-700 text-2xl font-bold">13303.93</p>
          </div>
          <div className="bg-white rounded-md p-4 shadow-md">
            <p className="text-gray-700 font-bold text-lg mb-2">Team income</p>
            <p className="text-gray-700 text-2xl font-bold">2001.23</p>
          </div>
          <div className="bg-white rounded-md p-4 shadow-md">
            <p className="text-gray-700 font-bold text-lg mb-2">Total points</p>
            <p className="text-gray-700 text-2xl font-bold">100.00</p>
          </div>
        </div>
      </div>
      <div className="px-4 mt-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white rounded-md p-4 shadow-md flex items-center">
            <div className="rounded-full bg-pink-200 p-2 mr-4">
              <img src="https://www.svgrepo.com/show/218445/customer-support.svg" alt="customer support" className="w-5 h-5" />
            </div>
            <p className="text-gray-700 font-bold text-lg">Contact Manager</p>
            <div className="ml-auto">
              <img src="https://www.svgrepo.com/show/338681/right-arrow.svg" alt="right arrow" className="w-5 h-5" />
            </div>
          </div>
          <div className="bg-white rounded-md p-4 shadow-md flex items-center">
            <div className="rounded-full bg-red-200 p-2 mr-4">
              <img src="https://www.svgrepo.com/show/314872/wine-bottle.svg" alt="wine bottle" className="w-5 h-5" />
            </div>
            <p className="text-gray-700 font-bold text-lg">My Wine Projects</p>
            <div className="ml-auto">
              <img src="https://www.svgrepo.com/show/338681/right-arrow.svg" alt="right arrow" className="w-5 h-5" />
            </div>
          </div>
          <div className="bg-white rounded-md p-4 shadow-md flex items-center cursor-pointer hover:bg-red-300 duration-200"  onClick={()=>{navigate('/invite-friends')}}>
            <div className="rounded-full bg-blue-200 p-2 mr-4 ">
              <img src="https://www.svgrepo.com/show/132808/user.svg" alt="user" className="w-5 h-5" />
            </div>
            <p className="text-gray-700 font-bold text-lg">Invite Friends</p>
            <div className="ml-auto">
              <img src="https://www.svgrepo.com/show/338681/right-arrow.svg" alt="right arrow" className="w-5 h-5" />
            </div>
          </div>
          <div className="bg-white rounded-md p-4 shadow-md flex items-center">
            <div className="rounded-full bg-green-200 p-2 mr-4">
              <img src="https://www.svgrepo.com/show/145882/percent-sign.svg" alt="percent sign" className="w-5 h-5" />
            </div>
            <p className="text-gray-700 font-bold text-lg">Discount Coupon</p>
            <div className="ml-auto">
              <img src="https://www.svgrepo.com/show/338681/right-arrow.svg" alt="right arrow" className="w-5 h-5" />
            </div>
          </div>
          <div onClick={()=>{navigate('/my-team')}} className="bg-white cursor-pointer hover:bg-red-300 duration-200 rounded-md p-4 shadow-md flex items-center">
            <div className="rounded-full bg-purple-200 p-2 mr-4">
              <img src="https://www.svgrepo.com/show/21006/user-group.svg" alt="user group" className="w-5 h-5" />
            </div>
            <p  className="text-gray-700 font-bold text-lg">My Teams</p>
            <div className="ml-auto">
              <img src="https://www.svgrepo.com/show/338681/right-arrow.svg" alt="right arrow" className="w-5 h-5" />
            </div>
          </div>
          <div className="bg-white rounded-md p-4 shadow-md flex items-center">
            <div className="rounded-full bg-green-200 p-2 mr-4">
              <img src="https://www.svgrepo.com/show/197343/document.svg" alt="document" className="w-5 h-5" />
            </div>
            <p className="text-gray-700 font-bold text-lg">Funding Details</p>
            <div className="ml-auto">
              <img src="https://www.svgrepo.com/show/338681/right-arrow.svg" alt="right arrow" className="w-5 h-5" />
            </div>
          </div>
          <div className="bg-white rounded-md p-4 shadow-md flex items-center">
            <div className="rounded-full bg-yellow-200 p-2 mr-4">
              <img src="https://www.svgrepo.com/show/118182/credit-card.svg" alt="credit card" className="w-5 h-5" />
            </div>
            <p className="text-gray-700 font-bold text-lg">Bank Account Info</p>
            <div className="ml-auto">
              <img src="https://www.svgrepo.com/show/338681/right-arrow.svg" alt="right arrow" className="w-5 h-5" />
            </div>
          </div>
          <div className="bg-white rounded-md p-4 shadow-md flex items-center">
            <div className="rounded-full bg-purple-200 p-2 mr-4">
              <img src="https://www.svgrepo.com/show/26140/padlock.svg" alt="padlock" className="w-5 h-5" />
            </div>
            <p className="text-gray-700 font-bold text-lg">Modify Sign in Password</p>
            <div className="ml-auto">
              <img src="https://www.svgrepo.com/show/338681/right-arrow.svg" alt="right arrow" className="w-5 h-5" />
            </div>
          </div>
          <div className="bg-white rounded-md p-4 shadow-md flex items-center  cursor-pointer hover:bg-red-300 duration-200" onClick={()=>{localStorage.clear();navigate('/'); toggle()}}>
            <div className="rounded-full bg-purple-200 p-2 mr-4">
              <img src="https://www.svgrepo.com/show/26140/padlock.svg" alt="padlock" className="w-5 h-5" />
            </div>
            <p className=" font-bold text-lg text-red-500">LogOut</p>
            <div className="ml-auto">
              <img src="https://www.svgrepo.com/show/338681/right-arrow.svg" alt="right arrow" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default MyProfile;