import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react';
import { useState } from 'react';
import path from 'path'
import fsPromises from 'fs/promises';

const inter = Inter({ subsets: ['latin'] })
const correctimageNames = ['emirolympics8.png', 'emirolympics12.png', 'emirolympics16.JPG', 'emirolympics17.JPG',];


export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/json/data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}

export default function Home(props) {

  const [isShown, setIsShown] = useState(false);

  const images = props.images;
  return (
    <>
    
      <div class="flex flex-row px-5 py-2 sm:(mx-20 my-10) h-300 fixed backdrop-filter backdrop-brightness-100 w-[calc(100%_-_10rem)] top-5 left-1/2 transform -translate-x-1/2  backdrop-filter	backdrop-blur bg-gray-100		justify-self-start rounded-full py-2 px-2">
          <Image class="blur-none"
            src={"/images/olympicslogo.png"}
            width={50}
            height={30}
          />
      </div>
    
    <div class=" flex flex-col py-40 gap-10 sm:py-30">
    
    <div class="px-10 sm:px-40">
      <h3 class="text-3xl	pb-5">Emir Olympics</h3>
      <p><span class="inline-flex text-gray-400		">Date: </span> 22 April 2023</p>
      <p><span class="inline-flex text-gray-400		">Location: </span> Tappan Middle School & Elbel</p>
      <p><span class="inline-flex text-gray-400		">Time: </span> 10 am - 6pm</p>
    </div>
    <div class="pl-10 sm:pl-40">
        <button class="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
          Sign up
        </button>
    </div>
    <p class="inline-flex text-gray-400 text-2xl pt-10 pl-10 sm:pl-40">Schedule</p>
    <div class="flex flex-row flex-nowrap overflow-x-auto py-2 pl-10 sm:pl-40 lg:pr-40 gap-10 w-100%">
      <div class="group bg-stone-950 hover:bg-green-600 rounded-[20px] py-10 px-10 w-full sm:w-auto flex flex-col transform transition duration-300 hover:-translate-y-1 min-w-300" style={{minWidth:300}}>
        <h1 class="text-white text-3xl mb-10 min-w-200">Football ⚽️</h1>
        <p class="text-gray-400 group-hover:text-white text-sm mb-4">Will be played with 8 players on each team, using the mid-size goals in the field</p>
        <p class="text-white text-md group-hover:text-black">60 minutes</p>
      </div>
      <div class="group bg-stone-950 hover:bg-orange-600 rounded-[20px] py-10 px-10 w-full sm:w-auto flex flex-col transform transition duration-300 hover:-translate-y-1" style={{minWidth:300}}>
        <h1 class="text-white text-3xl mb-10">Basketball 🏀</h1>
        <p class="text-gray-400 group-hover:text-white text-sm mb-4">Will be played with 4 players on each team. Ends when a team reaches 31 points</p>
        <p class="text-white text-md group-hover:text-black">60 minutes</p>
      </div>
      <div class="group bg-stone-950 hover:bg-stone-100 rounded-[20px] py-10 px-10 w-full sm:w-auto flex flex-col transform transition duration-300 hover:-translate-y-1" style={{minWidth:300}}>
        <h1 class="text-white group-hover:text-black text-3xl mb-10">Lunch break 🥗</h1>
        <p class="text-gray-400 group-hover:text-black text-sm mb-4">We'll go back to the Yard for lunch at the courtyard.</p>
        <p class="text-white group-hover:text-black text-md">60 minutes</p>
      </div>
      <div class="group bg-stone-950 hover:bg-yellow-300 rounded-[20px] py-10 px-10 w-full sm:w-auto flex flex-col transform transition duration-300 hover:-translate-y-1 mr-4" style={{minWidth:370}}>
        <h1 class="text-white group-hover:text-black text-3xl mb-10">Beach Volleyball 🏐 🏖</h1>
        <p class="text-gray-400 group-hover:text-black text-sm mb-4">Will be played with 4 players on each team. Ends when a team reaches 31 points</p>
        <p class="text-white group-hover:text-black text-md">60 minutes</p>
      </div>
</div>

    
    {/* <div class="flex flex-row flex-wrap gap-10">
    {images.map(image =>
                <Image class="object-cover"
                    src={"/images/"+image.filename}
                    alt="olympics images"
                    width={300}
                    height={300}
                    className={correctimageNames.includes(image.filename) ? '' : 'display-none'}
                />
      ) }
    </div> */}
    </div>
    </>
  )
}
