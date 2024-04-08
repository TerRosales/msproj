import React from 'react'
import { Card, Button } from "flowbite-react"
import "../global.css"

const LocationPage = () => {
    
  return (
    <div className='flex justify-center py-7'>    
        <Card
        className="max-w-sm"
        imgAlt="Product Image"
        imgSrc="./src/assets/testimg.jpg"
        >   
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Product Name / Number
        </h5>
        <div className="flex flex-col gap-2 font-normal text-gray-700 dark:text-gray-400">
            <span>Task:</span>
            <span>Touch Points:</span>
            <span>Training:</span>
        </div>
        </Card>
    </div>
    )
}

export default LocationPage