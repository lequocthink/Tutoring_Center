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
    fpassword: string,
    role: String,
    gender: String,
    phone: String,
    address: String,
    birth: Date,
    status: String,
}

const initialValue: InitialValue = {
    name: '',
    email: '',
    password: '',
    fpassword: '',
    role: 'admin',
    gender: '',
    phone: '',
    address: '',
    birth: new Date('2001-01-01'),
    status: '',
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
        if (state.password !== state.fpassword) {
            event.preventDefault();
            alert("Mật khẩu không trùng khớp");
        }
        else {
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

    }

    return (
        <div className="">
            <Link href={'/admin/adminaccount/'} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center mt-4 ml-4 absolute">
                <BiArrowBack className="text-[25px]" />
            </Link>

            <form className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4" >
                <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-2 mb-[20px]">

                    <h1 className="text-center uppercase text-[20px]">Tạo Admin</h1>
                </div>
                <div className="grid grid-cols-12">

                    <div className="col-span-6 p-2 col-start-4">
                        <p className="mb-[10px] text-[20px]">Email:</p>
                        <Input big placeholder='Hãy nhập email...' id='email' type='text' value={state.email} name='email' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Tên người dùng:</p>
                        <Input big placeholder='Hãy nhập tên admin...' id='name' type='text' value={state.name} name='name' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Mật khẩu:</p>
                        <Input big placeholder='Hãy nhập mật khẩu' id='fpassword' type='password' name='fpassword' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Nhập lại mật khẩu:</p>
                        <Input big placeholder='Hãy nhập lại mật khẩu' id='password' type='password' name='password' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Số điện thoại:</p>
                        <Input big placeholder='Hãy nhập số điện thoại' id='phone' type='text' name='phone' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Địa chỉ:</p>
                        <Input big placeholder='Hãy nhập địa chỉ' id='address' type='text' name='address' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Giới tính:</p>
                        <div className="flex flex-row mb-[10px]">
                            <div className="flex flex-row items-center mr-[40px]">
                                <input type="radio" id="male" name="gender" value="nam" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setState((prevState) => ({ ...prevState, "gender": "nam" }))} />
                                <label htmlFor="male" className="text-[20px]" onClick={() => setState((prevState) => ({ ...prevState, "gender": "nam" }))}>Nam</label>
                            </div>
                            <div className="flex flex-row items-center mr-[40px]">
                                <input type="radio" id="female" name="gender" value="nữ" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setState((prevState) => ({ ...prevState, "gender": "nữ" }))} />
                                <label htmlFor="female" className="text-[20px]" onClick={() => setState((prevState) => ({ ...prevState, "gender": "nữ" }))}>Nữ</label>
                            </div>
                            <div className="flex flex-row items-center mr-[40px]">
                                <input type="radio" id="other" name="gender" value="Khác" className="w-[20px] h-[20px] mr-[10px]" onClick={() => setState((prevState) => ({ ...prevState, "gender": "khác" }))} />
                                <label htmlFor="other" className="text-[20px]" onClick={() => setState((prevState) => ({ ...prevState, "gender": "khác" }))}>Khác</label>
                            </div>
                        </div>
                        <p className="mb-[10px] text-[20px]">Ngày sinh:</p>
                        <input type="date" id="birth" name="birth" className="mb-[10px] w-[300px] h-[40px] bg-black-50 border border-gray-600 text-black-900 rounded-lg p-2 text-[20px]" onChange={(event) => setState((prevState) => ({ ...prevState, [event.target.name]: new Date(`${event.target.value}T00:00:00Z`) }))} />
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