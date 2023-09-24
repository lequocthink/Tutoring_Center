'use client';
import Link from "next/link";
import Image from "next/image";
import { MdLocationOn, MdPhone, MdOutlineEmail, MdMoreTime, MdFacebook } from "react-icons/md";
import { AiFillLinkedin, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";


export default function Footer() {
  return (
    <footer className=" bg-[#289DCC]">
        <div className="container m-auto pt-6 pb-6 flex flex-row justify-between">
            <div>
                <h3 className="text-2xl font-medium mb-2">
                    Thông Tin Liên Hệ
                </h3>
                <p className="flex flex-row items-center mb-1">
                    <MdLocationOn className='text-[20px] mr-2'/> 3/2 Xuân Khánh, Ninh Kiều, Cần Thơ
                </p>
                <p className="flex flex-row items-center mb-1">
                    <MdPhone className='text-[20px] mr-2'/> 0123456789
                </p>
                <p className="flex flex-row items-center mb-1">
                    <MdOutlineEmail className='text-[20px] mr-2'/> abc@gmail.com
                </p>
                <p className="flex flex-row items-center mb-1">
                    <MdMoreTime className='text-[20px] mr-2'/> 7:00 – 21h, T2 – CN
                </p>
            </div>

            <div>
                <h3 className="text-2xl font-medium mb-2">
                    Liên Kết Nhanh
                </h3>

                <div className="mb-1"> 
                    <Link href="/">Trang Chủ</Link>
                </div>

                <div className="mb-1">
                    <Link href="/about">Giới Thiệu</Link>
                </div>

                <div className="mb-1">
                    <Link href="/course">Khóa Học</Link>
                </div>

                <div className="mb-1">
                    <Link href="/course">Liên Hệ</Link>
                </div>

                <div className="mb-1">
                    <Link href="/login">Đăng Nhập</Link>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-medium mb-2">
                    Liên Kết Xã Hội
                </h3>
                <p className="flex flex-row items-center mb-1">
                    <MdFacebook className='text-[20px] mr-2'/> https://www.facebook.com/abc
                </p>
                <p className="flex flex-row items-center mb-1">
                    <AiFillTwitterCircle className='text-[20px] mr-2'/> https://www.twitter.com/abc
                </p>
                <p className="flex flex-row items-center mb-1">
                    <AiFillLinkedin className='text-[20px] mr-2'/> linkedin.com/in/abc/
                </p>
                <p className="flex flex-row items-center mb-1">
                    <AiFillInstagram className='text-[20px] mr-2'/> https://www.instagram.com/abc
                </p>
            </div>

            <div>
                <Link href='/' className="flex flex-row items-center mb-2">
                    <Image src="/logo.png" alt="Logo" width={80} height={80}/>
                    <h3 className="text-3xl font-medium">Trung Tâm ABC</h3>
                </Link>
                <p className="mb-1">
                    Dịch vụ Gia Sư uy tín hàng đầu
                </p>
                <p className="mb-1">
                    Hợp tác với hơn 20.000 giáo viên giỏi, chất lượng.
                </p>
                <p className="mb-1">
                    Tư vấn tận tình 24/7, miễn phí mọi vấn đề.
                </p>
                <p className="mb-1">
                    UY TÍN – CHẤT LƯỢNG – PHỤC VỤ TẠI NHÀ.
                </p>
            </div>

        </div>

        <div className="bg-[#063953] flex justify-center p-4">
            <p className="text-white text-xl">
                Trung Tâm Dạy Thêm Học Thêm ABC
            </p>
        </div>
    </footer>
  )
}