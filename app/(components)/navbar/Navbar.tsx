'use client'

import { SafeUser } from "@/app/types";
import Link from "next/link"
import { FormEvent, useState } from "react";
import { MdOutlineShoppingCart } from 'react-icons/md'
import UserMenu from "./UserMenu";
import { useSearchParams } from "next/navigation";
import qs from 'query-string'
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

interface UserMenuProps {
    myUser: SafeUser | null;
    basketItems: any;
}

export default function Navbar({ myUser, basketItems }: UserMenuProps) {

    const [userMenuOpen, setUserMenuOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')


    const router = useRouter();

    const params = useSearchParams();

    const closeUserMenu = () => {
        setUserMenuOpen(false)
    }

    const onSearch = (e: FormEvent) => {
        e.preventDefault();

        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString())
        }
        const updatedQuery: any = {
            ...currentQuery,
            result: searchQuery
        }

        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, { skipNull: true })
        router.push(`/search/${url}`)
    }

    return (
        <div className="shadow-xl bg-white z-[99999] sticky">
            <div className="p-3 px-4 container m-auto">
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-6 flex-1 relative">
                        <Link href='/'><Image src="/logo.png" alt="Logo" width={40} height={40} /></Link>

                        <div>
                            <Link href="/">Trang Chủ</Link>
                        </div>


                        <div>
                            <Link href="/course">Khóa Học</Link>
                        </div>

                        <div>
                            <Link href="/news">Bản Tin</Link>
                        </div>

                        <div>
                            <Link href="/about">Giới Thiệu</Link>
                        </div>
                        <div>
                            <Link href="/contact">Liên Hệ</Link>
                        </div>

                        <div>
                            <Link href="/recruitment">Tuyển dụng</Link>
                        </div>



                        <form className="lg:flex-1 lg:flex font-light bg-black rounded-full border-black border-[1px] outline-none" onSubmit={onSearch}>
                            <input type="text"
                                placeholder="Nhập tên khóa học cần tìm..."
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="
                        w-full p-3 font-light bg-white rounded-l-full border-black border-[1px] outline-none
                        "
                            />

                            <button type="submit" className="text-white w-[60px] flex justify-center items-center">
                                <FaSearch />
                            </button>
                        </form>
                    </div>


                    <div className="items-center gap-4 text-[.8rem] px-2 hidden lg:flex">
                        {/* <div>
                        <Link href="#">Udemy Business</Link>
                    </div> */}

                        {/* <div>
                        <a href={myUser ?  "/create" : '/login'}>Teach on Udemy</a>
                    </div> */}

                        {/* <div className="relative">
                       <Link href='/basket'><MdOutlineShoppingCart className='h-6 w-10'/></Link>
                        <div className="absolute -right-1 -bottom-2 bg-blue-500 rounded-full w-6 h-6 flex justify-center items-center text-white">
                            {basketItems.length}
                        </div>
                    </div> */}
                    </div>


                    <div className="flex items-center gap-3">
                        {!myUser && (
                            <>
                                <div>
                                    <Link href='/login' className='py-2 px-6 border-black border-[1px]'>Đăng nhập</Link>
                                </div>

                                {/* <div>
                               <Link href='/register' className='py-2 px-6 bg-black text-white border-[1px] border-black '>Sign up</Link>
                            </div> */}
                            </>
                        )}

                        {myUser && (
                            <div className="w-[40px] h-[40px] rounded-full bg-black flex items-center justify-center text-white cursor-pointer" onClick={() => setUserMenuOpen(prev => !prev)}>
                                {/* <span>{myUser.name.at(0)?.toUpperCase()}</span> */}
                                {/* <span>{myUser.name.at(1)?.toUpperCase()}</span> */}
                                {
                                    myUser.avatar !== '' ?

                                        <Image src={myUser?.avatar} alt="Logo" width={50} height={50} />
                                        :
                                        <Image src="/logo.png" alt="Logo" width={50} height={50} />

                                }
                            </div>
                        )}


                        {userMenuOpen && (
                            <div className="absolute bottom-0 top-20 right-20">
                                <UserMenu
                                    currentUser={myUser}
                                    closeUserMenu={closeUserMenu}
                                />
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </div>
    )
}