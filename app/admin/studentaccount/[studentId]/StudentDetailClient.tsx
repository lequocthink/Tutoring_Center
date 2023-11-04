'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { SafeUser, safeNews } from "@/app/types"
import ImageUpload from "@/app/(components)/Inputs/ImageUpload"
import Input from "@/app/(components)/Inputs/Input"
import Button from "@/app/(components)/Button"
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

interface StaffProps {
    data: SafeUser;
    currentUser: SafeUser | null;
    id: any
}

export default function StudentDetailClient({ data, id }: StaffProps) {


    const myId = String(JSON.parse(id).studentId);



    const user = data;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(user)
    const [password, setPassword] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [path, setPath] = useState(PATH.SPECS);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    // document.getElementById("myDate").defaultValue = "2014-02-09";

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
                router.replace('/admin/studentaccount')
            })
            .catch((err: any) => {
                throw new Error(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const changePassword = (e: FormEvent) => {

        if (state.hashedPassword !== password) {
            alert("Mật khẩu không trùng khớp");
            e.preventDefault();

        }
        else {

            e.preventDefault();
            axios.put(`/api/user/${myId}`, {
                ...state, pass: true
            })
                .then(() => {
                    router.refresh()
                    router.replace('/admin/studentaccount')
                })
                .catch((err: any) => {
                    throw new Error(err)
                })
                .finally(() => {
                    setLoading(false)
                })
        }

    }

    const onDelete = (e: FormEvent) => {
        setLoading(true)
        e.preventDefault();

        const isConfirmed = confirm('Bạn có chắc chắn muốn xóa tài khoản học viên ' + state.email + ' ?');

        if (isConfirmed) {

            axios.delete(`/api/user/${myId}`)
                .then(() => {
                    router.refresh();
                    // router.refresh()
                    router.replace('/admin/studentaccount')
                })
                .catch((error) => {
                    throw new Error(error)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
        else {
            setLoading(false);

            return;
        }

    }

    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substring(0, 10);


    return (

        <div className="">
            <Link href={'/admin/studentaccount/'} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center mt-4 ml-4 absolute">
                <BiArrowBack className="text-[25px]" />
            </Link>

            <form className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4" >
                <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-2 mb-[20px]">

                    <h1 className="text-center uppercase text-[20px]">Thông Tin Học Viên</h1>
                </div>
                <div className="grid grid-cols-12">

                    <div className="col-span-6 p-2 col-start-4">
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
                        <button type="submit" className="mb-[10px] block transition disabled:cursor-not-allowed relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded w-full" disabled={loading} onClick={onSubmit}>
                            Cập nhật thông tin
                        </button>
                        <p className="mb-[10px] text-[20px]">Mật khẩu:</p>
                        <Input big placeholder='' id='hashedPassword' type='password' name='hashedPassword' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Nhập lại mật khẩu:</p>
                        <Input big placeholder='' id='password' type='password' name='password' onChange={(event) => { setPassword(event.target.value) }} />
                        <button type="submit" className="mb-[10px] block transition disabled:cursor-not-allowed relative bg-yellow-400 hover:bg-yellow-700 text-white font-bold py-3 px-4 rounded w-full" disabled={loading} onClick={changePassword}>
                            Đổi mật khẩu
                        </button>
                        <button type="submit" className="block transition disabled:cursor-not-allowed relative bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-4 rounded w-full" disabled={loading} onClick={onDelete}>
                            Xóa học viên
                        </button>
                    </div>
                </div>


            </form>

        </div>
    )
}