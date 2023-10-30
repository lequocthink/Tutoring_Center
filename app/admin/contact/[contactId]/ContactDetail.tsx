'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"
import { SafeUser, safeRecruitment, safeContact } from "@/app/types"
import Input from "@/app/(components)/Inputs/Input"
import Button from "@/app/(components)/Button"

import updateNews from "@/app/actions/updateNews"

interface RecruitmentProps {
    data: safeContact;
    currentUser: SafeUser | null;
    id: any
}


export default function ContactDetail({ data, id }: RecruitmentProps) {


    const recruitment = data;
    const [state, setState] = useState(recruitment)

    return (

        <div className="">

            <form className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4" >
                <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-2 mb-[20px]">

                    <h1 className="text-center uppercase text-[20px]">Nội dung liên hệ</h1>
                </div>
                <div className="grid grid-cols-12">

                    <div className="col-span-12 p-2">
                        <p className="mb-[10px]">Email: {state.email}</p>
                        <p className="mb-[10px]">Tên người gửi: {state.name}</p>
                        <p className="mb-[10px]">Nội dung: {state.message}</p>
                    </div>
                </div>


            </form>

        </div>
    )
}