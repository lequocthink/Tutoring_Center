"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import axios from 'axios';
import { useRouter } from 'next/navigation'



interface InitialStateProps {
    email: string,
    name: string,
    message: string
}

const initialState: InitialStateProps = {
    email: '',
    name: '',
    message: ''
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


        axios.post('/api/contact', state)
            .then(() => {
                router.refresh()
            })
            .then(() => {
                setTimeout(() => {
                    // router.push('/contact')
                    router.refresh()
                    setState(initialState)
                    router.replace('/contact')


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
        <div>
            <div>
                <Image
                    src="/contact_us_background.jpg"
                    alt="Logo"
                    width={1000}
                    height={10}
                    className="h-[350px] object-cover w-full"
                />
            </div>

            <div className="pt-[50px] pb-[10px]">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-medium uppercase text-[#063953] mb-[20px]">
                        Liên Hệ
                    </h1>
                    <h3 className="text-2xl font-medium mb-2 uppercase text-[#063953]">
                        Nếu bạn có vấn đề gì cần trao đổi hãy liên hệ với chúng tôi
                    </h3>
                </div>
                <div className="container m-auto pt-6 pb-6 grid grid-cols-2">
                    <div className="flex flex-col ml-[10%] pr-[5px]">
                        <section className="bg-white">
                            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                                <form action="#" className="space-y-8" onSubmit={onSubmit}>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#063953]">Email của bạn:</label>
                                        <input type="email" id="email" name="email" className="shadow-sm bg-black-50 border border-gray-600 text-black-900 text-sm rounded-lg block w-full p-2.5" placeholder="Hãy nhập email của bạn" required onChange={handleChange} value={state.email} />
                                    </div>
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#063953]">Tên của bạn:</label>
                                        <input type="text" id="name" name="name" className="shadow-sm bg-black-50 border border-gray-600 text-black-900 text-sm rounded-lg block w-full p-2.5" placeholder="Hãy nhập tên của bạn" required onChange={handleChange} value={state.name} />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#063953]">Nội dung:</label>
                                        <input type="text" id="message" name="message" className="shadow-sm bg-black-50 border border-gray-600 text-black-900 text-sm rounded-lg block w-full p-2.5" placeholder="Hãy nhập nội dung phản hồi" onChange={handleChange} value={state.message} />
                                    </div>
                                    <button type="submit" className="py-2 px-6 border-black border-[1px] rounded-[12px]">Gửi</button>
                                </form>
                            </div>
                        </section>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image src="/contact.png" alt="center" width={600} height={40} />
                    </div>
                </div>
            </div>

        </div>
    );
}
