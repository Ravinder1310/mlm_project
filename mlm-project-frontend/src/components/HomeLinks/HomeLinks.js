import React from 'react'
import m1 from './recharge.png'
import m2 from './withdrawl.webp'
import m3 from './teams.png'
import m4 from './invitation.png'
function HomeLinks() {
    const data=[
        {
            img:m1,
            name:"Recharge",
            link:''
        },
        {
            img:m2,
            name:"Withdrawl",
            link:''
        },
        {
            img:m3,
            name:"Teams",
            link:''
        },
        {
            img:m4,
            name:"Invitation Link",
            link:''
        },
        {
            img:m1,
            name:"reedem Bonus",
            link:''
        },
        {
            img:m1,
            name:"user Center",
            link:''
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
    <div className=" flex p-2 flex-wrap justify-center">
            {
                data.map((item,idx)=>{
                    return(
                        <div key={idx} className="flex w-14 flex-col m-1 items-center ">
                            <img className="rounded-full h-10" src={item.img}/>
                            <p className="text-sm text-center" >{item.name}</p>
                        </div>
                    )
                })
            }
    </div>
  )
}

export default HomeLinks
