'use client'

import { ChangeEvent, FormEvent, useState } from "react"
import Button from "@/app/(components)/Button"
import Input from "@/app/(components)/Inputs/Input"
import ImageUpload from "@/app/(components)/Inputs/ImageUpload"
import axios from "axios"
import { useRouter } from "next/navigation"
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";


interface InitialValue {
    name: string,
    email: string,
    password: string,
    role: String,
}

const initialValue: InitialValue = {
    name: '',
    email: '',
    password: '',
    role: 'admin'

}

export default function page() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(initialValue)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false)



    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const setCustomValue = (id: any, value: any) => {
        setState((prevState) => ({
            ...prevState,
            [id]: value
        }))
    }


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()

    function onSubmit(event: FormEvent) {

        setLoading(true)
        event.preventDefault();


        axios.post('/api/register', state)
            .then(() => {
                router.refresh()
            })
            .then(() => {
                setTimeout(() => {
                    router.push('/admin/adminaccount')
                }, 2500)

            })

            .catch((error: any) => {
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
                        <p className="mb-[10px]">Admin password:</p>
                        <Input big placeholder='' id='password' type='password' name='password' onChange={handleChange} />
                        <Button
                            label="Thêm admin"
                            onClick={onSubmit}
                            disabled={loading}
                        />
                    </div>
                </div>


            </form>

        </div>
    )
}