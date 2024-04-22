import React from 'react'
import { Card, Button, Accordion, Carousel } from "flowbite-react"
import "../global.css"
import "../components/componentStyles/LocationPage.css"

const LocationPage = () => {
    
  return (
    <div className='flex flex-col justify-center py-7'>    
        <Card
        className="max-w-sm self-center my-5"
        imgAlt="Product Image"
        imgSrc="./src/assets/testimg.jpg"
        >   
        <h1>101512309</h1>
        </Card>
        <div className="flex flex-col gap-2 font-normal text-gray-700 dark:text-gray-400">
        <Accordion 
            className='accordion' >
            <Accordion.Panel>
                <Accordion.Title>
            Product Name / Number</Accordion.Title>
                <Accordion.Content>
                    <div className='text-left gap-4'>
                        <span className='font-semibold text-[20px]'>Sample Hypoid Pinion/Gear
                        </span>
                        <div className='flex flex-col gap-4 text-center'>
                            <p className='text-[18px]'>Short part descriptions and touch points basis
                            </p>
                            <div className="border-t-2 h-56 sm:h-64 xl:h-80 2xl:h-96">
                                <Carousel
                                    slideInterval={2700}>
                                    <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                                    <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                                    <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                                    <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                                    <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                                </Carousel>
                            </div>
                            <span className='rounded bg-red-300 border-2 p-1 font-semibold text-[22px]'>Touch Points</span>
                            <ol className='bg-blue-100 border-2 p-2 rounded text-[18px]'>

                                <li>Part Number</li>
                                <li>Threads</li>
                                <li>Nicks</li>
                                <li>2D Matrix</li>
                            </ol>
                        </div>
                    </div>
                    <Button className="justify-center my-5 mx-auto" color="blue" outline>Confirm Training</Button>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>Issue Refrences</Accordion.Title>
                <Accordion.Content>
                    <div>
                        <span>Part Number:&nbsp;
                        </span>
                        <span>
                        &nbsp;10161923
                        </span>
                        <div className='m-5'>
                        <img className="w-22" src="../src/assets/testImg02.jpg" alt="test img" />
                        </div>
                    </div>
                    <Button color="blue" 
                    className='mx-auto my-5'
                    outline>More References</Button>
                </Accordion.Content>
            </Accordion.Panel>
            </Accordion>
        </div>
    </div>
    )
}

export default LocationPage