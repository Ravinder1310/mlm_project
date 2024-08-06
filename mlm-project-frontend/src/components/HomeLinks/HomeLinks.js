import React from 'react'
import m1 from './recharge.png'
import m2 from './withdrawl.webp'
import m3 from './teams.png'
import m4 from './invitation.png'
import { useNavigate } from 'react-router-dom'
function HomeLinks() {

const navigate = useNavigate();

    const data=[
        {
            img:m1,
            name:"Recharge",
            link:'/login'
        },
        {
            img:m2,
            name:"Withdrawl",
            link:'/register'
        },
        {
            img:m3,
            name:"Teams",
            link:'/bonus'
        },
        {
            img:m4,
            name:"Invitation Link",
            link:'/myteam'
        },
        {
            img:m1,
            name:"reedem Bonus",
            link:'/bindBankCard'
        },
        {
            img:m1,
            name:"user Center",
            link:'/invitation'
        },
        {
            img:m1,
            name:"My Projects",
            link:''
        },{
            img:m1,
            name:"Games",
            link:''
        },
    ]
  return (
    <div className="  grid grid-cols-4  ">
            {
                data.map((item,idx)=>{
                    return(
                        <div key={idx} onClick={() => navigate(`${item.link}`)} className="flex cursor-pointer  flex-col m-2 justify-center  items-center  ">
                            {/* <a  href={${item.link}}> */}
                            <img className="rounded-full h-10" src={item.img}/>
                            <p className="text-sm text-white text-center" >{item.name}</p>
                            {/* </a> */}
                        </div>
                    )
                })
            }
    </div>
  )
}

export default HomeLinks