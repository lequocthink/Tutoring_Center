'use client';
import { MdOutlineDashboardCustomize, MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaUserGraduate, FaUserTie, FaMailBulk } from "react-icons/fa";
import { HiNewspaper, HiOutlineCreditCard } from "react-icons/hi2";
import { LiaAddressCard, LiaMailBulkSolid } from "react-icons/lia";
import Link from "next/link";

export default function SideBar() {
    return (
        <div className="shadow-[0px_20px_20px_10px_#00000024] p-4">
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-6">

                <h1 className="text-center uppercase text-[25px]">Admin</h1>
            </div>
            <div>
                <div className="mb-3">

                    <Link href="/admin" className="flex flex-row items-center">
                        <MdOutlineDashboardCustomize className='text-[20px] mr-2' />
                        <p>
                            Dashboard
                        </p>
                    </Link>

                </div>
                <div className="mb-3">
                    <Link href="/admin/adminaccount" className="flex flex-row items-center">
                        <MdOutlineAdminPanelSettings className='text-[20px] mr-2' />
                        <p>

                            Admin Account
                        </p>
                    </Link>
                </div>
                <div className="mb-3">
                    <Link href="/admin/staffaccount" className="flex flex-row items-center">
                        <FaUserTie className='text-[20px] mr-2' />
                        <p>

                            Staff Account
                        </p>
                    </Link>
                </div>
                <div className="mb-3">
                    <Link href="/admin/studentaccount" className="flex flex-row items-center">
                        <FaUserGraduate className='text-[20px] mr-2' />
                        <p>

                            student Account
                        </p>
                    </Link>
                </div>

                <div className="mb-3">
                    <Link href="/admin/news" className="flex flex-row items-center">
                        <HiNewspaper className='text-[20px] mr-2' />
                        <p>
                            News
                        </p>
                    </Link>
                </div>

                <div className="mb-3">
                    <Link href="/admin/course" className="flex flex-row items-center">
                        <HiOutlineCreditCard className='text-[20px] mr-2' />
                        <p>
                            Course
                        </p>
                    </Link>
                </div>

                <div className="mb-3">
                    <Link href="/admin/recruitment" className="flex flex-row items-center">
                        <LiaAddressCard className='text-[20px] mr-2' />
                        <p>
                            Recruitment
                        </p>
                    </Link>
                </div>

                <div className="mb-3">
                    <Link href="/admin/contact" className="flex flex-row items-center">
                        <FaMailBulk className='text-[20px] mr-2' />
                        <p>
                            Contact
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}