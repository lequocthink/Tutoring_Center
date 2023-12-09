// "use client";
import Link from "next/link";
import { MdOutlineDashboardCustomize, MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaUserGraduate, FaUserTie, FaMailBulk } from "react-icons/fa";
import { HiNewspaper, HiOutlineCreditCard } from "react-icons/hi2";
import { LiaAddressCard, LiaMailBulkSolid } from "react-icons/lia";
import getAllAdmin from "@/app/actions/user/getAllAdmin";
import getAllStaff from "@/app/actions/user/getAllStaff";
import getAllStudent from "@/app/actions/user/getAllStudent";
import getAllNews from "@/app/actions/getAllNews";
import getAllCourses from "@/app/actions/getAllCourses";
import getAllRecruitment from "@/app/actions/recruitment/getAllRecruitment";
import getAllContact from "@/app/actions/contact/getAllContact";




export default async function page() {
    const admin = await getAllAdmin();
    const staff = await getAllStaff();
    const student = await getAllStudent();
    const news = await getAllNews();
    const courses = await getAllCourses("");
    const recruitment = await getAllRecruitment();
    const contact = await getAllContact();

    return (
        <div>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-3 mb-[40px]">

                <h1 className="text-center uppercase text-[25px]">Thống kê</h1>
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
                                {admin.length} Tài khoản
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

                                giáo viên
                            </h2>
                            <p>
                                {staff.length} Tài khoản
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

                                học viên
                            </h2>
                            <p>
                                {student.length} Tài khoản
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

                                Tin tức
                            </h2>
                            <p>
                                {news.length} Bài đăng
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
                                Khóa học
                            </h2>
                            <p>
                                {courses.length} Khóa học
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
                                Tuyển dụng
                            </h2>
                            <p>
                                {recruitment.length} Bài đăng
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
                                Phản hồi
                            </h2>
                            <p>
                                {contact.length} Tin nhắn
                            </p>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
}
