'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"
import { SafeUser, safeNews } from "@/app/types"
import ImageUpload from "@/app/(components)/Inputs/ImageUpload"
import Input from "@/app/(components)/Inputs/Input"
import Button from "@/app/(components)/Button"
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

interface AdminProps {
    data: SafeUser;
    currentUser: SafeUser | null;
    id: any
}

export default function AdminDetailClient({ data, id }: AdminProps) {


    const myId = String(JSON.parse(id).adminId);



    const news = data;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(news)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [path, setPath] = useState(PATH.SPECS);



    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const setCustomValue = (id: any, value: any) => {
        setState((prevState) => ({
            ...prevState,
            [id]: value
        }))
    }

    const router = useRouter()

    const onSubmit = (e: FormEvent) => {

        e.preventDefault();
        axios.put(`/api/user/${myId}`, {
            ...state, pass: false
        })
            .then(() => {
                router.refresh()
                router.replace('/admin/adminaccount')
            })
            .catch((err: any) => {
                throw new Error(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const changePassword = (e: FormEvent) => {

        e.preventDefault();
        axios.put(`/api/user/${myId}`, {
            ...state, pass: true
        })
            .then(() => {
                router.refresh()
                router.replace('/admin/adminaccount')
            })
            .catch((err: any) => {
                throw new Error(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const onDelete = (e: FormEvent) => {
        setLoading(true)
        e.preventDefault();

        axios.delete(`/api/user/${myId}`)
            .then(() => {
                router.refresh();
                // router.refresh()
                router.replace('/admin/adminaccount')
            })
            .catch((error) => {
                throw new Error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (

        <div className="">
            <Link href={'/admin/adminaccount/'} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center fixed mt-4 ml-4">
                <BiArrowBack className="text-[25px]" />
            </Link>

            <form className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4" >
                <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-2 mb-[20px]">

                    <h1 className="text-center uppercase text-[20px]">Admin Detail</h1>
                </div>
                <div className="grid grid-cols-12">

                    <div className="col-span-6 p-2 col-start-4">
                        <p className="mb-[10px]">Admin email:</p>
                        <Input big placeholder='' id='email' type='text' value={state.email} name='email' onChange={handleChange} />
                        <p className="mb-[10px]">Admin name:</p>
                        <Input big placeholder='' id='name' type='text' value={state.name} name='name' onChange={handleChange} />
                        <Button
                            label="Cập nhật thông tin"
                            onClick={onSubmit}
                            disabled={loading}
                        />
                        <p className="mb-[10px]">Admin password:</p>
                        <Input big placeholder='' id='hashedPassword' type='password' name='hashedPassword' onChange={handleChange} />
                        <Button
                            label="Đổi mật khẩu"
                            onClick={changePassword}
                            disabled={loading}
                        />

                        <Button
                            label="Xóa admin"
                            onClick={onDelete}
                            disabled={loading}
                        />
                    </div>
                </div>


            </form>

        </div>
    )
}