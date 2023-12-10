'use client'

import axios from "axios"
import { safeNews, safeCourse, SafeUser, safeRecruitment } from "../types"
import Button from "../(components)/Button"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { FormEvent, useState } from "react"
import Link from "next/link"

interface NewsProps {
    data: safeRecruitment;
}


export default function RecruitmentClient({ data }: NewsProps) {

    return (
        <div className="w-[600px] m-[20px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4">



            <div className="flex flex-row items-start gap-1">
                <div className="w-[300px] p-5">
                    <Image src="/recruitment.jpg" alt="Recruitment Image" width={500} height={100} className="
                        rounded-[10px]
                        w-[700px]
                        h-[150px]
                        border-black border-[1px]
                    "/>
                </div>
                <div className="w-[300px] flex flex-col font-light items-start p-5 justify-around my-auto">
                    <h3 className="text-[20px] mb-5 break-words capitalize">{data.title}</h3>
                    <Link href={'/recruitment/' + data.id} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Xem chi tiết
                    </Link>
                </div>


            </div>

        </div>

    )
}