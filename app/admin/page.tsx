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

                    <Link href="/admin" className="flex flex-row items-center w-[100%] justify-evenly">
                        <div className="w-[80px] h-[80px] flex items-center justify-center bg-orange-600 rounded-[40px] text-[#fff]">
                            <FaUserGraduate className='text-[40px]' />
                        </div>
                        <div>
                            <h2 className="text-center uppercase text-[30px]">

                                student
                            </h2>
                            <p>
                                150 Member
                            </p>
                        </div>
                    </Link>

                </div>

                <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[300px] h-[150px] flex items-center mb-[40px] col-span-4 mx-auto">

                    <Link href="/admin" className="flex flex-row items-center w-[100%] justify-evenly">
                        <div className="w-[80px] h-[80px] flex items-center justify-center bg-orange-600 rounded-[40px] text-[#fff]">
                            <FaUserGraduate className='text-[40px]' />
                        </div>
                        <div>
                            <h2 className="text-center uppercase text-[30px]">

                                student
                            </h2>
                            <p>
                                150 Member
                            </p>
                        </div>
                    </Link>

                </div>

                <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[300px] h-[150px] flex items-center mb-[40px] col-span-4 mx-auto">

                    <Link href="/admin" className="flex flex-row items-center w-[100%] justify-evenly">
                        <div className="w-[80px] h-[80px] flex items-center justify-center bg-orange-600 rounded-[40px] text-[#fff]">
                            <FaUserGraduate className='text-[40px]' />
                        </div>
                        <div>
                            <h2 className="text-center uppercase text-[30px]">

                                student
                            </h2>
                            <p>
                                150 Member
                            </p>
                        </div>
                    </Link>

                </div>

                <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[300px] h-[150px] flex items-center mb-[40px] col-span-4 mx-auto">

                    <Link href="/admin" className="flex flex-row items-center w-[100%] justify-evenly">
                        <div className="w-[80px] h-[80px] flex items-center justify-center bg-orange-600 rounded-[40px] text-[#fff]">
                            <FaUserGraduate className='text-[40px]' />
                        </div>
                        <div>
                            <h2 className="text-center uppercase text-[30px]">

                                student
                            </h2>
                            <p>
                                150 Member
                            </p>
                        </div>
                    </Link>

                </div>

                <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[300px] h-[150px] flex items-center mb-[40px] col-span-4 mx-auto">

                    <Link href="/admin" className="flex flex-row items-center w-[100%] justify-evenly">
                        <div className="w-[80px] h-[80px] flex items-center justify-center bg-orange-600 rounded-[40px] text-[#fff]">
                            <FaUserGraduate className='text-[40px]' />
                        </div>
                        <div>
                            <h2 className="text-center uppercase text-[30px]">

                                student
                            </h2>
                            <p>
                                150 Member
                            </p>
                        </div>
                    </Link>

                </div>
                <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[300px] h-[150px] flex items-center mb-[40px] col-span-4 mx-auto">

                    <Link href="/admin" className="flex flex-row items-center w-[100%] justify-evenly">
                        <div className="w-[80px] h-[80px] flex items-center justify-center bg-orange-600 rounded-[40px] text-[#fff]">
                            <FaUserGraduate className='text-[40px]' />
                        </div>
                        <div>
                            <h2 className="text-center uppercase text-[30px]">

                                student
                            </h2>
                            <p>
                                150 Member
                            </p>
                        </div>
                    </Link>

                </div>

                <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[300px] h-[150px] flex items-center mb-[40px] col-span-4 mx-auto">

                    <Link href="/admin" className="flex flex-row items-center w-[100%] justify-evenly">
                        <div className="w-[80px] h-[80px] flex items-center justify-center bg-orange-600 rounded-[40px] text-[#fff]">
                            <FaUserGraduate className='text-[40px]' />
                        </div>
                        <div>
                            <h2 className="text-center uppercase text-[30px]">

                                student
                            </h2>
                            <p>
                                150 Member
                            </p>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
}
