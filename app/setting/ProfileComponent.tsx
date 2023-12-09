'use client';

import Input from "../(components)/Inputs/Input";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../(components)/Button";
import { SafeUser } from "../types";
import ImageUpload from "@/app/(components)/Inputs/ImageUpload"


interface InitialStateProps {
    name: string,
    email: string,
    password: string
}

const initialState: InitialStateProps = {
    name: '',
    email: '',
    password: ''
}


interface ProfileProps {
    userId?: string | null,
    name?: string | null,
    email?: string | null,
    data: SafeUser

}


export default function ProfileComponent({ userId, name, email, data }: ProfileProps) {
    const userData = data;

    const router = useRouter()
    const [state, setState] = useState(userData)
    const [isLoading, setIsLoading] = useState(false)


    // function handleChange(event: any) {
    //     setState({ ...state, [event.target.name]: event.target.value });
    //     console.log(event.target.value)
    // }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setState({ ...state, [event.target.name]: event.target.value })
    }


    const onSubmit = (e: FormEvent) => {

        e.preventDefault();
        axios.put(`/api/user/${userData.id}`, {
            ...state, pass: false
        })
            .then(() => {
                router.refresh()
                router.replace('/setting')
            })
            .catch((err: any) => {
                throw new Error(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const setCustomValue = (id: any, value: any) => {
        setState((prevState) => ({
            ...prevState,
            [id]: value
        }))
    }

    return (
        <form onSubmit={onSubmit} className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] col-span-12 p-4'>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-3 mb-[40px]">

                <h1 className="text-center uppercase text-[25px]">Thông tin cá nhân</h1>
            </div>
            <div className="grid grid-cols-12">

                <div className="col-span-6 p-2 col-start-4">

                    <p className="mb-[10px] text-[20px] text-center">Ảnh đại diện người dùng:</p>

                    <div className="w-[300px] relative left-[50%] translate-x-[-50%]">
                        <ImageUpload value={state.avatar} onChange={(value) => setCustomValue('avatar', value)} />
                    </div>
                    <p className="mb-[10px] text-[20px]">Email:</p>
                    <Input big placeholder='' id='email' type='text' value={state.email} name='email' onChange={handleChange} />
                    <p className="mb-[10px] text-[20px]">Tên:</p>
                    <Input big placeholder='' id='name' type='text' value={state.name} name='name' onChange={handleChange} />
                    <p className="mb-[10px] text-[20px]">Số điện thoại:</p>
                    <Input big placeholder='' id='phone' type='text' value={state.phone} name='phone' onChange={handleChange} />
                    <p className="mb-[10px] text-[20px]">Địa chỉ:</p>
                    <Input big placeholder='' id='address' type='text' value={state.address} name='address' onChange={handleChange} />
                    <div className="flex flex-row mb-[10px]">
                        <div className="flex flex-row items-center mr-[40px]">
                            <input defaultChecked={state.gender == "nam" ? true : false} type="radio" id="male" name="gender" value="nam" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setState((prevState) => ({ ...prevState, "gender": "nam" }))} />
                            <label htmlFor="male" className="text-[20px]" onClick={() => setState((prevState) => ({ ...prevState, "gender": "nam" }))}>Nam</label>
                        </div>
                        <div className="flex flex-row items-center mr-[40px]">
                            <input defaultChecked={state.gender == "nữ" ? true : false} type="radio" id="female" name="gender" value="nữ" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setState((prevState) => ({ ...prevState, "gender": "nữ" }))} />
                            <label htmlFor="female" className="text-[20px]" onClick={() => setState((prevState) => ({ ...prevState, "gender": "nữ" }))}>Nữ</label>
                        </div>
                        <div className="flex flex-row items-center mr-[40px]">
                            <input defaultChecked={state.gender == "khác" ? true : false} type="radio" id="other" name="gender" value="Khác" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setState((prevState) => ({ ...prevState, "gender": "khác" }))} />
                            <label htmlFor="other" className="text-[20px]" onClick={() => setState((prevState) => ({ ...prevState, "gender": "khác" }))}>Khác</label>
                        </div>
                    </div>
                    <p className="mb-[10px] text-[20px]">Ngày sinh:</p>
                    <input type="date" id="birth" name="birth" defaultValue={state?.birth.toISOString().substring(0, 10)} className="mb-[10px] w-[300px] h-[40px] bg-black-50 border border-gray-600 text-black-900 rounded-lg p-2 text-[20px]" onChange={(event) => setState((prevState) => ({ ...prevState, [event.target.name]: new Date(`${event.target.value}T00:00:00Z`) }))} />
                    <button type="submit" className="mb-[10px] block transition disabled:cursor-not-allowed relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded w-full" disabled={isLoading} onClick={onSubmit}>
                        Cập nhật thông tin
                    </button>
                </div>
            </div>
            {/* <Button type='submit' label="Update" disabled={isLoading} /> */}
        </form>
    )
}