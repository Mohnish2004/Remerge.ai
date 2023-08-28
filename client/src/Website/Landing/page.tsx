import { useState } from 'react'
import React from 'react'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  return (
    <><head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap');
      </style>

    </head><section>
        <div className="bg-white">
        <div className="overlay">
          <div className="flex items-center justify-center">
    <div className="w-[1318px] h-[995px] bg-zinc-100 rounded-3xl">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            ></div>
            <div className="mx-auto max-w-2xl py-1 sm:py-1 lg:py-1">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                {"We just reached 20M users 🎉 "}
                  <a href="#" className="font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more<span aria-hidden="true"></span>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-regular tracking-tight text-gray-900 sm:text-6xl">
                  Revolutionize Your Job Search with Resume Version Control
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Allowing you to tailor your professional story for every opportunity while staying focused on what truly matters—navigating your path to success.
                </p>
                <div className="mt-5 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <br></br>
              <div className="w-[1241.19px] h-[626.82px] right-[340px] relative">
                <img className="w-[1000px] h-[518px] left-[168px] top-0 absolute " src="/images/Landing/image529.png" />
                <img className="w-[360.59px] h-[250.54px] left-[890.60px] top-[269.29px] absolute" src="/images/Landing/image533.png" />
                <img className="w-[505.67px] h-[206.01px] left-[70.60px] top-[259px] absolute" src="/images/Landing/image531.png" />
                </div>
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
      </section></>
  )
}
