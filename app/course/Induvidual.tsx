'use client'

import { SafeUser } from "../types"
import Button from "../(components)/Button"
import Image from "next/image"
import useBasket from "../hooks/useBasket"
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import { useState } from "react"
import { FaEye, FaAngleRight } from "react-icons/fa";
import Input from "@/app/(components)/Inputs/Input"
import ImageUpload from "@/app/(components)/Inputs/ImageUpload"


import { CiLocationArrow1 } from "react-icons/ci";



interface Props {
    location?: string,
    price?: string,
    imageSrc?: string,
    name?: string,
    description?: string | null
    courseId: any,
    currentUser: SafeUser | null
}

export default function Induvidual({
    location,
    price,
    imageSrc,
    name,
    courseId,
    description,
    currentUser
}: Props) {


    const { hasBasket, toggleBasket } = useBasket({
        currentUser, courseId
    })

    // const notification = us
    const [notification, setNotification] = useState(true);
    const [schedule, setSchedule] = useState(false);
    const [list, setList] = useState(false);
    const [information, setInformation] = useState(false);
    const [document, setDocument] = useState(false);

    const notificationDetail = () => {
        setNotification(true);
        setSchedule(false);
        setList(false);
        setInformation(false);
        setDocument(false);
    }
    const scheduleDetail = () => {
        setNotification(false);
        setSchedule(true);
        setList(false)
        setInformation(false);
        setDocument(false);
    }
    const listDetail = () => {
        setNotification(false);
        setSchedule(false);
        setList(true);
        setDocument(false);
        setInformation(false);
    }

    const informationDetail = () => {
        setNotification(false);
        setSchedule(false);
        setList(false);
        setDocument(false);
        setInformation(true);
    }

    const documentDetail = () => {
        setNotification(false);
        setSchedule(false);
        setList(false);
        setDocument(true);
        setInformation(false);
    }


    return (

        <div className="container m-auto">
            <Link href={'/course/'} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center mt-4 absolute">
                <BiArrowBack className="text-[25px]" />
            </Link>
            {
                !hasBasket ? (
                    <div className="h-[90vh] flex justify-between text-white items-center">
                        <div className="w-[60%]">
                            <h1 className="text-[4rem] mb-[10px]">{name}</h1>
                            <p className="mb-[10px]">Giáo viên phụ trách: {location}</p>
                            <p className="mb-[10px] text-justify">Mô tả: {description}</p>
                            <p className="mb-[10px] text-justify">Địa chỉ: {location}</p>
                            <p className="mb-[10px]">Học phí: {Number(price).toLocaleString('en-US')} VND/Khóa</p>
                        </div>
                        <div className="w-[400px] bg-white p-1 text-black">
                            <img src={imageSrc} alt="Image" width={200} height={200} className="w-full object-cover" />
                            <div>
                                {/* <p className="mb-[10px]">Học phí: {Number(price).toLocaleString('en-US')} VND/Khóa</p> */}
                                <div className="flex flex-col gap-1 mt-4">
                                    <Button onClick={toggleBasket} type='button' label={`${hasBasket ? 'Remove from basket' : 'Đăng ký'}`} />
                                    {/* <Button type='button' label="Đăng ký" outline /> */}
                                    {/* <p className="text-[12px] text-gray-700 text-center border-t-2 py-2">30 day money back guarantee</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )
                    : (
                        <div className="flex flex-col text-white min-h-[90vh]">
                            <div className="mt-[80px] mb-[20px]">
                                <button onClick={() => notificationDetail()} className={`w-[150px] mx-[10px] ` + `${notification ? 'border-b-[3px] text-[#289DCC] border-[#289DCC]' : ''}`}>Thông báo</button>
                                <button onClick={() => listDetail()} className={`w-[150px] mx-[10px] ` + `${list ? 'border-b-[3px] text-[#289DCC] border-[#289DCC]' : ''}`}>Học viên</button>
                                <button onClick={() => documentDetail()} className={`w-[150px] mx-[10px] ` + `${document ? 'border-b-[3px] text-[#289DCC] border-[#289DCC]' : ''}`}>Tài liệu</button>
                                <button onClick={() => scheduleDetail()} className={`w-[150px] mx-[10px] ` + `${schedule ? 'border-b-[3px] text-[#289DCC] border-[#289DCC]' : ''}`}>Lịch học</button>
                                <button onClick={() => informationDetail()} className={`w-[150px] mx-[10px] ` + `${information ? 'border-b-[3px] text-[#289DCC] border-[#289DCC]' : ''}`}>Thông tin khóa học</button>
                            </div>
                            <hr />
                            {
                                notification && (
                                    <div className="mt-[50px]">
                                        <form className="w-[70%] m-auto border-[3px] justify-between items-center border-[#ffffff] rounded-[10px] flex flex-row mb-[10px]">
                                            <div className="w-[100%] flex items-center p-[10px] pb-[0]">
                                                <Input big placeholder='Nhập nội dung thông báo' id='contentThree' type='text' name='contentThree' />
                                            </div>
                                            <CiLocationArrow1 className="text-[25px] mr-[20px]" />
                                        </form>


                                        <div className="w-[70%] m-auto border-[3px] border-[#ffffff] rounded-[10px] flex flex-row mb-[10px]">
                                            <div className="w-[250px] flex items-center p-[10px] border-r-[3px] border-[#ffffff]">
                                                <div className="border-[2px] border-[#ffffff] w-[50px] h-[50px] p-[5px] rounded-full bg-black flex items-center justify-center text-white cursor-pointer">
                                                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                                                </div>
                                                <p className="ml-[7px] text-[25px] w-[170px]">Giáo viên A</p>

                                            </div>
                                            <div className="p-[10px] relative">
                                                <p className="mb-[10px]">
                                                    Mô tả: Khóa học Anh Văn Giao Tiếp của chúng tôi là hành trình học tập mang đến sự tự tin và khả năng giao tiếp mạch lạc trong ngôn ngữ tiếng Anh. Với sự tập trung đặc biệt vào kỹ năng nghe, nói, đọc, và viết, khóa học này không chỉ giúp học viên nâng cao khả năng sử dụng tiếng Anh một cách linh hoạt mà còn tạo cơ hội để họ thực hành và áp dụng trong các tình huống thực tế.
                                                </p>
                                                <p className="text-[#686868] absolute right-[10px] translate-y-[-15px]">
                                                    30/11/2023
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-[70%] m-auto border-[3px] border-[#ffffff] rounded-[10px] flex flex-row mb-[10px]">
                                            <div className="w-[250px] flex items-center p-[10px] border-r-[3px] border-[#ffffff]">
                                                <div className="border-[2px] border-[#ffffff] w-[50px] h-[50px] p-[5px] rounded-full bg-black flex items-center justify-center text-white cursor-pointer">
                                                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                                                </div>
                                                <p className="ml-[7px] text-[25px] w-[170px]">Giáo viên A</p>

                                            </div>
                                            <div className="p-[10px] relative">
                                                <p className="mb-[10px]">
                                                    Mô tả: Khóa học Anh Văn Giao Tiếp của chúng tôi là hành trình học tập mang đến sự tự tin và khả năng giao tiếp mạch lạc trong ngôn ngữ tiếng Anh. Với sự tập trung đặc biệt vào kỹ năng nghe, nói, đọc, và viết, khóa học này không chỉ giúp học viên nâng cao khả năng sử dụng tiếng Anh một cách linh hoạt mà còn tạo cơ hội để họ thực hành và áp dụng trong các tình huống thực tế.
                                                </p>
                                                <p className="text-[#686868] absolute right-[10px] translate-y-[-15px]">
                                                    29/11/2023
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                schedule && (
                                    <div>


                                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                            <table className="w-full text-center text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3">
                                                            Thời gian
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Thứ hai
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Thứ ba
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Thứ tư
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Thứ năm
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Thứ sáu
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Thứ bảy
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Chủ nhật
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            08:00 - 09:30
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            X
                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                    </tr>
                                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            09:30 - 11:00
                                                        </th>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                    </tr>
                                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            13:00 - 14:30
                                                        </th>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                    </tr>
                                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            14:30 - 16:00
                                                        </th>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">
                                                            X
                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                    </tr>
                                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            17:00 - 18:30
                                                        </th>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">
                                                            X
                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                    </tr>
                                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            18:30 - 20:00
                                                        </th>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                        <td className="px-6 py-4">

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                )
                            }
                            {
                                list && (
                                    <div className="mt-[50px]">
                                        <div className="w-[70%] m-auto border-[3px] border-[#ffffff] rounded-[10px] flex flex-row mb-[10px]">
                                            <div className="w-[250px] flex items-center p-[10px]">
                                                <div className="border-[2px] border-[#ffffff] w-[50px] h-[50px] p-[5px] rounded-full bg-black flex items-center justify-center text-white cursor-pointer">
                                                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                                                </div>
                                                <p className="ml-[7px] text-[25px] w-[170px]">Học viên A</p>
                                            </div>
                                        </div>

                                        <div className="w-[70%] m-auto border-[3px] border-[#ffffff] rounded-[10px] flex flex-row mb-[10px]">
                                            <div className="w-[250px] flex items-center p-[10px]">
                                                <div className="border-[2px] border-[#ffffff] w-[50px] h-[50px] p-[5px] rounded-full bg-black flex items-center justify-center text-white cursor-pointer">
                                                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                                                </div>
                                                <p className="ml-[7px] text-[25px] w-[170px]">Học viên B</p>
                                            </div>
                                        </div>

                                        <div className="w-[70%] m-auto border-[3px] border-[#ffffff] rounded-[10px] flex flex-row mb-[10px]">
                                            <div className="w-[250px] flex items-center p-[10px]">
                                                <div className="border-[2px] border-[#ffffff] w-[50px] h-[50px] p-[5px] rounded-full bg-black flex items-center justify-center text-white cursor-pointer">
                                                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                                                </div>
                                                <p className="ml-[7px] text-[25px] w-[170px]">Học viên C</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                information && (
                                    <div className="mt-[50px]">
                                        <div className="w-[70%] m-auto border-[3px] border-[#ffffff] rounded-[10px] flex flex-row mb-[10px]">
                                            <div className="w-[100%] flex flex-col  p-[10px]">

                                                <img src={imageSrc} alt="Image" width={200} height={200} className="w-full object-cover" />
                                                {/* <p className="ml-[7px] text-[25px] w-[170px]">Học viên A</p> */}
                                                <h1 className="text-[4rem] mb-[10px] text-center">{name}</h1>
                                                <p className="mb-[10px]">Giáo viên phụ trách: Giáo viên A</p>
                                                <p className="mb-[10px] text-justify">Mô tả: {description}</p>
                                                <p className="mb-[10px] text-justify">Địa chỉ: {location}</p>
                                                <p className="mb-[10px]">Học phí: {Number(price).toLocaleString('en-US')} VND/Khóa</p>
                                                <Button onClick={toggleBasket} type='button' label={`${hasBasket ? 'Rời khỏi lớp' : 'Đăng ký'}`} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                document && (
                                    <div className="mt-[50px]">
                                        <form className="w-[70%] m-auto border-[3px] justify-between border-[#ffffff] rounded-[10px] flex flex-col mb-[10px]">
                                            <div className="w-[100%] flex items-center p-[10px] pb-[0]">
                                                <Input big placeholder='Nhập tên tài liệu' id='contentThree' type='text' name='contentThree' />

                                            </div>
                                            <div className="flex items-center ml-[10px]">

                                                <p className="text-white text-[25px] mr-[10px]">
                                                    Chọn file:
                                                </p>
                                                <div className="w-[50px] h-[50px] overflow-y-hidden bg-white">
                                                    <ImageUpload value="" onChange={() => console.log("aa")} />
                                                </div>
                                            </div>
                                            {/* <CiLocationArrow1 className="text-[25px] mr-[20px]" /> */}
                                            <button className="w-[100px] bg-white text-black relative left-[50%] translate-x-[-50%] mb-[10px]">Tải tệp lên</button>
                                        </form>
                                        <a className="w-[70%] m-auto border-[3px] justify-between items-center border-[#ffffff] rounded-[10px] flex flex-row mb-[10px]" href="https://res.cloudinary.com/dfsebjtvu/raw/upload/v1701356361/vbxeegqhbug8mzgy22nh.docx" download="your-document-name.docx">

                                            <div className="w-[100%] flex items-center p-[10px]">
                                                <div className="w-[50px] h-[50px] p-[5px] rounded-[5px] bg-white flex items-center justify-center text-white cursor-pointer">
                                                    <Image src="/document.png" alt="Logo" width={40} height={40} />
                                                </div>
                                                <p className="ml-[7px] text-[25px]">Tài liệu tham khảo A</p>

                                            </div>
                                            <FaEye className="text-[25px] mr-[20px]" />
                                        </a>

                                        <a className="w-[70%] m-auto border-[3px] justify-between items-center border-[#ffffff] rounded-[10px] flex flex-row mb-[10px]" href="https://res.cloudinary.com/dfsebjtvu/raw/upload/v1701356361/vbxeegqhbug8mzgy22nh.docx" download="your-document-name.docx">

                                            <div className="w-[100%] flex items-center p-[10px]">
                                                <div className="w-[50px] h-[50px] p-[5px] rounded-[5px] bg-white flex items-center justify-center text-white cursor-pointer">
                                                    <Image src="/document.png" alt="Logo" width={40} height={40} />
                                                </div>
                                                <p className="ml-[7px] text-[25px]">Tài liệu tham khảo B</p>

                                            </div>
                                            <FaEye className="text-[25px] mr-[20px]" />
                                        </a>

                                        <a className="w-[70%] m-auto border-[3px] justify-between items-center border-[#ffffff] rounded-[10px] flex flex-row mb-[10px]" href="https://res.cloudinary.com/dfsebjtvu/raw/upload/v1701356361/vbxeegqhbug8mzgy22nh.docx" download="your-document-name.docx">

                                            <div className="w-[100%] flex items-center p-[10px]">
                                                <div className="w-[50px] h-[50px] p-[5px] rounded-[5px] bg-white flex items-center justify-center text-white cursor-pointer">
                                                    <Image src="/document.png" alt="Logo" width={40} height={40} />
                                                </div>
                                                <p className="ml-[7px] text-[25px]">Tài liệu tham khảo C</p>

                                            </div>
                                            <FaEye className="text-[25px] mr-[20px]" />
                                        </a>
                                    </div>
                                )
                            }

                        </div>


                    )

            }
        </div>
    )
}