import React from 'react'

function Tasks() {
    const cards =[
        {
            img:'',
            name:'hello'
        },
        {
            img:'',
            name:'hello'
        },
        {
            img:'',
            name:'hello'
        },
        {
            img:'',
            name:'hello'
        },
    ]
  return (
    <>
    <div className="flex justify-between bg-orange-300  p-4 ">
      <div>TASK</div>
      <div className="text-sm p-2  rounded-full  bg-red-500 text-white">MY TASK</div>
    </div>
    <div className="flex justify-evenly">
    {
        cards.map((item,idx)=>{
            return(
                <div className="text-center">
                    <div className="bg-white h-20 w-20"></div>
                    <div>{item.name}</div>
                </div>
            )
        })
    }
    </div>
    </>
  )
}

export default Tasks
