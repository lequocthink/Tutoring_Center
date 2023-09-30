"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";

export default function page() {
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
                                <form action="#" className="space-y-8">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#063953]">Your email:</label>
                                        <input type="email" id="email" className="shadow-sm bg-black-50 border border-gray-600 text-black-900 text-sm rounded-lg block w-full p-2.5" placeholder="name@flowbite.com" required />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-[#063953]">Subject:</label>
                                        <input type="text" id="subject" className="shadow-sm bg-black-50 border border-gray-600 text-black-900 text-sm rounded-lg block w-full p-2.5" placeholder="Let us know how we can help you" required />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#063953]">Your message</label>
                                        <textarea id="message" rows={6} className="shadow-sm bg-black-50 border border-gray-600 text-black-900 text-sm rounded-lg block w-full p-2.5" placeholder="Leave a comment..."></textarea>
                                    </div>
                                    <button type="submit" className="py-2 px-6 border-black border-[1px] rounded-[12px]">Send message</button>
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
