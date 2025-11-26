import { decodeAmp } from '@/utils/helper'
import React from 'react'

function ProductIntro({data}) {
  return (
    <section className="relative w-full  text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-14 md:py-22">
        <p className="text-blue font-semibold leading-none text-sm sm:text-base tracking-wide">{decodeAmp(data?.blocks?.[0]?.text) || 'Industries We Servessss'}</p>

        <h1 className="mt-3 font-semibold text-black-two leading-tight text-2xl sm:text-3xl md:text-4xl tracking-tight">
          {decodeAmp(data?.blocks?.[1]?.text) || 'Banking Solutionsssssss'}
        </h1>

        <p className="text-accent mx-auto mt-4 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed">
          {decodeAmp(data?.blocks?.[2]?.text) || 'Wavetec helps banks enhance customer experiences using queue management, self-service kiosks, ATMs, analytics, and AI to streamline operationssssssss.'}
        </p>
      </div>
    </section>
  )
}

export default ProductIntro