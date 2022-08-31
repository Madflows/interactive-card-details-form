import React from 'react'

const CardSection = () => {
  return (
    <div className='grid grid-cols-1 w-full md:translate-x-[50%]'>
        <FirstCard />
        <SecondCard />
    </div>
  )
}

function FirstCard() {
    return (
        <div className='w-full flex flex-col items-center justify-between shadow-md bg-[url("/images/bg-card-front.png")] bg-cover bg-no-repeat z-20 max-w-sm h-[200px] p-4 rounded-md'>
            
        </div>
    )
}
function SecondCard() {
    return (
        <div className='w-full float-right md:translate-x-10 shadow-md -translate-y-14 p-4 bg-[url("/images/bg-card-back.png")] bg-cover bg-no-repeat max-w-sm h-[200px] rounded-md'>
            <h1>Card 2</h1>
        </div>
    )
}

export default CardSection