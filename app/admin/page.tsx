"use client";
import Link from "next/link";
import { MdOutlineDashboardCustomize, MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaUserGraduate, FaUserTie, FaMailBulk } from "react-icons/fa";
import { HiNewspaper, HiOutlineCreditCard } from "react-icons/hi2";
import { LiaAddressCard, LiaMailBulkSolid } from "react-icons/lia";

export default function page() {
    return (
        <div>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-3 mb-[40px]">

                <h1 className="text-center uppercase text-[25px]">Dashboard</h1>
            </div>
            <div className="grid grid-cols-12">
                <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[300px] h-[150px] flex items-center mb-[40px] col-span-4 mx-auto">

                    <Link href="/admin/adminaccount" className="flex flex-row items-center w-[100%] justify-evenly">
                        <div className="w-[80px] h-[80px] flex items-center justify-center bg-green-600 rounded-[40px] text-[#fff]">
                            <MdOutlineAdminPanelSettings className='text-[40px]' />
                        </div>
                        <div>
                            <h2 className="text-center uppercase text-[20px]">

                                Admin
                            </h2>
                            <p>
                                2 Member
                            </p>
                        </div>
                    </Link>

                </div>

                <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[300px] h-[150px] flex items-center mb-[40px] col-span-4 mx-auto">

                    <Link href="/admin/staffaccount" className="flex flex-row items-center w-[100%] justify-evenly">
                        <div className="w-[80px] h-[80px] flex items-center justify-center bg-blue-600 rounded-[40px] text-[#fff]">
                            <FaUserTie className='text-[40px]' />
                        </div>
                        <div>
                            <h2 className="text-center uppercase text-[20px]">

                                Staff
                            </h2>
                            <p>
                                50 Member
                            </p>
                        </div>
                    </Link>

                </div>

                <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[300px] h-[150px] flex items-center mb-[40px] col-span-4 mx-auto">

                    <Link href="/admin/studentaccount" className="flex flex-row items-center w-[100%] justify-evenly">
                        <div className="w-[80px] h-[80px] flex items-center justify-center bg-orange-600 rounded-[40px] text-[#fff]">
                            <FaUserGraduate className='text-[40px]' />
                        </div>
                        <div>
                            <h2 className="text-center uppercase text-[20px]">

                                student
                            </h2>
                            <p>
                                150 Member
                            </p>
                        </div>
                    </Link>

                </div>

                <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[300px] h-[150px] flex items-center mb-[40px] col-span-4 mx-auto">

                    <Link href="/admin/news" className="flex flex-row items-center w-[100%] justify-evenly">
                        <div className="w-[80px] h-[80px] flex items-center justify-center bg-emerald-400 rounded-[40px] text-[#fff]">
                            <HiNewspaper className='text-[40px]' />
                        </div>
                        <div>
                            <h2 className="text-center uppercase text-[20px]">

                                News
                            </h2>
                            <p>
                                8 posts
                            </p>
                        </div>
                    </Link>

                </div>

                <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[300px] h-[150px] flex items-center mb-[40px] col-span-4 mx-auto">

                    <Link href="/admin/course" className="flex flex-row items-center w-[100%] justify-evenly">
                        <div className="w-[80px] h-[80px] flex items-center justify-center bg-indigo-600 rounded-[40px] text-[#fff]">
                            <HiOutlineCreditCard className='text-[40px]' />
                        </div>
                        <div>
                            <h2 className="text-center uppercase text-[20px]">
                                Courses
                            </h2>
                            <p>
                                8 Course
                            </p>
                        </div>
                    </Link>

                </div>
                <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[300px] h-[150px] flex items-center mb-[40px] col-span-4 mx-auto">

                    <Link href="/admin/recruitment" className="flex flex-row items-center w-[100%] justify-evenly">
                        <div className="w-[80px] h-[80px] flex items-center justify-center bg-amber-500 rounded-[40px] text-[#fff]">
                            <LiaAddressCard className='text-[40px]' />
                        </div>
                        <div>
                            <h2 className="text-center uppercase text-[20px]">
                                Recruitment
                            </h2>
                            <p>
                                4 posts
                            </p>
                        </div>
                    </Link>

                </div>

                <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[300px] h-[150px] flex items-center mb-[40px] col-span-4 mx-auto">

                    <Link href="/admin/contact" className="flex flex-row items-center w-[100%] justify-evenly">
                        <div className="w-[80px] h-[80px] flex items-center justify-center bg-purple-950 rounded-[40px] text-[#fff]">
                            <FaMailBulk className='text-[40px]' />
                        </div>
                        <div>
                            <h2 className="text-center uppercase text-[20px]">
                                Contact
                            </h2>
                            <p>
                                4 messages
                            </p>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
}
