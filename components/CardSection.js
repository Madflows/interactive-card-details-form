import React from 'react'

const CardSection = () => {
  return (
    <div className='grid grid-cols-1 mx-auto w-full md:translate-x-[30%] lg:translate-x-[50%]'>
        <FirstCard />
        <SecondCard />
    </div>
  )
}

function FirstCard() {
    return (
        <div className='w-full flex flex-col items-center justify-between shadow-md bg-[url("/images/bg-card-front.png")] bg-cover bg-no-repeat z-20 max-w-sm h-[200px] p-4 rounded-md'>
            <div className='w-full'>
                <img src="/images/card-logo.svg" alt="mastercard" />
            </div>
            <div className='w-full'>
                <h2 className='text-lg font-bold text-white text-center'>0000 0000 0000 0000</h2>
            </div>
            <div className='w-full text-white text-xs font-bold flex items-center justify-between uppercase'>
                <p>Jane Appleseed</p>
                <span>00/00</span>
            </div>
        </div>
    )
}
function SecondCard() {
    return (
        <div className='w-full float-right md:translate-x-10 shadow-md flex items-center justify-end px-10 -translate-y-14 p-4 bg-[url("/images/bg-card-back.png")] bg-cover bg-no-repeat max-w-sm h-[200px] rounded-md'>
            <p className='mt-2 text-lightviolet font-bold tracking-wider'>123</p>
        </div>
    )
}

export default CardSection