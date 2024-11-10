'use client'
import React from 'react'
import { Tabs, Tab } from "@nextui-org/react";
import { PiPantsDuotone } from "react-icons/pi";
import { GiSkirt } from "react-icons/gi";
import { GiMonclerJacket } from "react-icons/gi";
import { Mail, ShirtIcon } from "lucide-react";

function CategoryTabs() {
    return (
        <div className="flex w-full flex-col ">
            <Tabs radius='none' size='lg' aria-label="Options" color="black" className='rounded-none' variant="bordered">
                <Tab
                    key="Shirt"
                    title={
                        <div className="flex items-center  space-x-2">
                            <ShirtIcon size={24} />
                            <span>Shirt</span>
                        </div>
                    }
                />
                <Tab
                    key="Pants"
                    title={
                        <div className="flex items-center space-x-2">
                            <PiPantsDuotone size={24} />
                            <span>Pants</span>
                        </div>
                    }
                />
                <Tab
                    key="Skirts"
                    title={
                        <div className="flex items-center space-x-2">
                            <GiSkirt size={24} />
                            <span>Skirts</span>
                        </div>
                    }
                />
                <Tab
                    key="Jackets"
                    title={
                        <div className="flex items-center space-x-2">
                            <GiMonclerJacket size={24} />
                            <span>Jackets</span>
                        </div>
                    }
                />
            </Tabs>
        </div>
    )
}

export default CategoryTabs