'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react'
import Input from '../(components)/Inputs/Input'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from "next/image";


interface InitialStateProps {
    name: string,
    email: string,
    password: string,
    role: string
}

const initialState: InitialStateProps = {
    name: '',
    email: '',
    password: '',
    role: 'user'
}

export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(initialState)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    function onSubmit(event: FormEvent) {
        setLoading(true)
        event.preventDefault();


        axios.post('/api/register', state)
            .then(() => {
                router.refresh()
            })
            .then(() => {
                setTimeout(() => {
                    router.push('/login')
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
        <form onSubmit={onSubmit} className='text-center'>
            <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
                <Input placeholder='Name' id='name' type='text' name='name' onChange={handleChange} value={state.name} />
                <Input placeholder='Email' id='email' type='email' name='email' onChange={handleChange} value={state.email} />
                <Input placeholder='Password' id='password' type='password' name='password' onChange={handleChange} value={state.password} />

            </div>

            <button type='submit'>Submit</button>

            <div>
                <div>Do you have an account ? <Link href='/login'>Sign in</Link></div>
            </div>
        </form>
        // <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-[500px] m-auto my-[70px]">
        //     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        //         {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"> */}
        //         <div className="border-black border-[2px] p-3 rounded-full w-[150px] m-auto">
        //             <Image src="/logo.png" alt="Logo" width={120} height={120} />
        //         </div>
        //         <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Đăng Nhập</h2>
        //     </div>

        //     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        //         <form className="space-y-6" onSubmit={onSubmit}>
        //             <div>
        //                 <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
        //                 <div className="mt-2">
        //                     {/* <input id="email" name="email" type="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2" /> */}
        //                     {/* <input type="email" id="email" className="shadow-sm bg-black-50 border border-gray-600 text-black-900 text-sm rounded-lg block w-full p-2.5" placeholder="name@flowbite.com" required /> */}

        //                     <Input placeholder='Email' id='email' type='email' name='email' onChange={handleChange} value={state.email} />
        //                 </div>
        //             </div>

        //             <div>
        //                 <div className="flex items-center justify-between">
        //                     <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Mật khẩu</label>
        //                 </div>
        //                 <div className="mt-2">
        //                     {/* <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2" /> */}
        //                     <Input placeholder='Password' id='password' type='password' name='password' onChange={handleChange} value={state.password} />
        //                 </div>

        //                 <div className="flex items-center justify-between">
        //                     <label htmlFor="rePassword" className="block text-sm font-medium leading-6 text-gray-900">Nhập lại mật khẩu</label>
        //                 </div>
        //                 <div className="mt-2">
        //                     {/* <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2" /> */}
        //                     <Input placeholder='Password' id='rePassword' type='password' name='password' onChange={handleChange} value={state.password} />
        //                 </div>
        //             </div>

        //             <div>
        //                 <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Đăng nhập</button>
        //             </div>
        //         </form>

        //         <div className='text-center mt-3'>Bạn không có tài khoản ? <Link href='/register'>Đăng ký</Link></div>
        //     </div>
        // </div>
    )
}