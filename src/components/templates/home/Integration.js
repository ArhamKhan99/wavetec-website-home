import Image from 'next/image'
import React from 'react'

function Integration() {
  return (
    <div className=' bg-black pb-16'>
        <div className='w-full flex flex-col items-center justify-center gap-5'>
            <h1 className='font-normal text-[50px] text-[#B7BFC7]'>Integrations</h1>
            <Image src="/assets/integrations-icons.png" alt="Integration" width={1104} height={70} />

        </div>

    </div>
  )
}

export default Integration