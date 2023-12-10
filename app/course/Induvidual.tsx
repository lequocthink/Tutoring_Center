'use client'

import { SafeUser } from "../types"
import Button from "../(components)/Button"
import Image from "next/image"
import useBasket from "../hooks/useBasket"
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import { useState, FormEvent, ChangeEvent, JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, Key } from "react"
import { FaEye, FaAngleRight } from "react-icons/fa";
import Input from "@/app/(components)/Inputs/Input"
import ImageUpload from "@/app/(components)/Inputs/ImageUpload"
import axios from "axios"
import { useRouter } from "next/navigation"


import { CiLocationArrow1 } from "react-icons/ci";
import { StaticImport } from "next/dist/shared/lib/get-img-props"

interface notificationProp {
    courseId: string,
    teacherName: string,
    message: string,
    createdAt: string,
}

interface Props {
    location?: string,
    price?: string,
    imageSrc?: string,
    name?: string,
    description?: string | null
    courseId: any,
    currentUser: SafeUser | null,
    teacher: any,
    scheduleD: any,
    allNotification: any,
    allStudent: any,
    allDocument: any,
}

interface NotificationContentValue {
    courseId: string,
    teacherName: string,
    message: string,
}

interface DocumentValue {
    courseId: string,
    nameFile: string,
    urlFile: string,
}



export default function Induvidual({
    location,
    price,
    imageSrc,
    name,
    courseId,
    description,
    currentUser,
    teacher,
    scheduleD,
    allNotification,
    allStudent,
    allDocument
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

    // console.log("check data: ", allStudent)
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

    const router = useRouter()

    const documentValue: DocumentValue = {
        courseId: courseId,
        nameFile: '',
        urlFile: '',
    }

    const notificationContentValue: NotificationContentValue = {
        courseId: courseId,
        teacherName: teacher.name,
        message: '',
    }

    const [notificationContent, setNotificationContent] = useState(notificationContentValue)
    const [documentContent, setDocumentContent] = useState(documentValue)

    const setCustomValue = (id: any, value: any) => {
        setDocumentContent((prevState) => ({
            ...prevState,
            [id]: value
        }))
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setNotificationContent({ ...notificationContent, [event.target.name]: event.target.value })
    }

    function handleChangeDoc(event: ChangeEvent<HTMLInputElement>) {
        setDocumentContent({ ...documentContent, [event.target.name]: event.target.value })
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        axios.post('/api/notification', notificationContent)
            .then(() => {
                setNotificationContent(notificationContentValue);
                // router.push('/admin/news')
                router.refresh()
                // router.replace('/admin/create/news')

            })
            .catch((err) => {
                throw new Error(err)
            })
            .finally(() => {
                // setLoading(false)
            })
    }

    const onSubmitDoc = (e: FormEvent) => {
        e.preventDefault();
        axios.post('/api/document', documentContent)
            .then(() => {
                setDocumentContent(documentValue);
                // router.push('/admin/news')
                router.refresh()
                // router.replace('/admin/create/news')

            })
            .catch((err) => {
                throw new Error(err)
            })
            .finally(() => {
                // setLoading(false)
            })
    }


    let formatter = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        // hour: "numeric",
        // minute: "numeric",
        // second: "numeric",
    });

    const onDeleteNotification = (id: string) => {
        const isConfirmed = confirm('Bạn có chắc chắn muốn xóa thông báo ?');

        if (isConfirmed) {
            axios.delete(`/api/notification/${id}`)
                .then(() => {
                    router.refresh();
                    // router.replace('/admin/adminaccount')
                })
                .catch((error) => {
                    throw new Error(error)
                })
                .finally(() => {
                    // setLoading(false)
                })
        }
        else {
            // setLoading(false);
            return;
        }

    }

    const onDeleteDocument = (id: string) => {
        const isConfirmed = confirm('Bạn có chắc chắn muốn xóa tài liệu ?');

        if (isConfirmed) {
            axios.delete(`/api/document/${id}`)
                .then(() => {
                    router.refresh();
                    // router.replace('/admin/adminaccount')
                })
                .catch((error) => {
                    throw new Error(error)
                })
                .finally(() => {
                    // setLoading(false)
                })
        }
        else {
            // setLoading(false);
            return;
        }

    }


    return (

        <div className="container m-auto">
            <Link href={'/course/'} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center mt-4 absolute">
                <BiArrowBack className="text-[25px]" />
            </Link>
            {
                !hasBasket ? (
                    <div className="h-[110vh] flex justify-between text-white items-center">
                        <div className="w-[60%]">
                            <h1 className="text-[4rem] mb-[10px]">{name}</h1>
                            <p className="mb-[10px]">Giáo viên phụ trách: {teacher.name}</p>
                            <p className="mb-[10px] text-justify">Mô tả: {description}</p>
                            <p className="mb-[10px] text-justify">Địa chỉ: {location}</p>
                            <p className="mb-[10px]">Học phí: {Number(price).toLocaleString('en-US')} VND/Khóa</p>
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
                                                {scheduleD.monday[0] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.tuesday[0] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.wednesday[0] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.thursday[0] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.friday[0] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.saturday[0] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.sunday[0] == 0 ? '' : 'X'}
                                            </td>
                                        </tr>
                                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                09:30 - 11:00
                                            </th>
                                            <td className="px-6 py-4">
                                                {scheduleD.monday[1] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.tuesday[1] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.wednesday[1] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.thursday[1] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.friday[1] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.saturday[1] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.sunday[1] == 0 ? '' : 'X'}
                                            </td>
                                        </tr>
                                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                13:00 - 14:30
                                            </th>
                                            <td className="px-6 py-4">
                                                {scheduleD.monday[2] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.tuesday[2] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.wednesday[2] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.thursday[2] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.friday[2] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.saturday[2] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.sunday[2] == 0 ? '' : 'X'}
                                            </td>
                                        </tr>
                                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                14:30 - 16:00
                                            </th>
                                            <td className="px-6 py-4">
                                                {scheduleD.monday[3] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.tuesday[3] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.wednesday[3] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.thursday[3] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.friday[3] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.saturday[3] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.sunday[3] == 0 ? '' : 'X'}
                                            </td>
                                        </tr>
                                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                17:00 - 18:30
                                            </th>
                                            <td className="px-6 py-4">
                                                {scheduleD.monday[4] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.tuesday[4] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.wednesday[4] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.thursday[4] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.friday[4] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.saturday[4] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.sunday[4] == 0 ? '' : 'X'}
                                            </td>
                                        </tr>
                                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                18:30 - 20:00
                                            </th>
                                            <td className="px-6 py-4">
                                                {scheduleD.monday[5] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.tuesday[5] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.wednesday[5] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.thursday[5] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.friday[5] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.saturday[5] == 0 ? '' : 'X'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {scheduleD.sunday[5] == 0 ? '' : 'X'}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
                                                <Input big placeholder='Nhập nội dung thông báo' id='message' type='text' name='message' value={notificationContent.message} onChange={handleChange} />
                                            </div>
                                            <button type="submit" onClick={onSubmit}>
                                                <CiLocationArrow1 className="text-[25px] mr-[20px]" />
                                            </button>
                                        </form>

                                        {allNotification.map((i: { teacherName: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; id: string; message: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; createdAt: string }) => (
                                            // eslint-disable-next-line react/jsx-key

                                            <div key={i.id} className="w-[70%] m-auto border-[3px] border-[#ffffff] rounded-[10px] flex flex-row mb-[10px]">
                                                <div className="w-[350px] flex items-center p-[10px] border-r-[3px] border-[#ffffff]">
                                                    <div className="border-[2px] border-[#ffffff] w-[50px] h-[50px] p-[5px] rounded-full bg-black flex items-center justify-center text-white cursor-pointer">
                                                        <Image src="/logo.png" alt="Logo" width={40} height={40} />
                                                    </div>
                                                    <p className="ml-[7px] text-[25px] w-[200px]">{i.teacherName}</p>
                                                    <button onClick={() => onDeleteNotification(i.id)} className="relative right-0 bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-4 rounded">
                                                        Xóa
                                                    </button>
                                                </div>
                                                <div className="p-[10px] relative">
                                                    <p className="mb-[10px]">
                                                        Nội dung: {i.message}
                                                    </p>
                                                    <p className="text-[#686868] absolute w-[400px]">
                                                        {formatter.format(Date.parse(i.createdAt))}
                                                        {/* {formatter.format(Date.parse(i.createdAt))} */}
                                                    </p>
                                                </div>

                                            </div>
                                        ))}


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
                                                            {scheduleD.monday[0] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.tuesday[0] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.wednesday[0] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.thursday[0] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.friday[0] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.saturday[0] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.sunday[0] == 0 ? '' : 'X'}
                                                        </td>
                                                    </tr>
                                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            09:30 - 11:00
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.monday[1] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.tuesday[1] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.wednesday[1] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.thursday[1] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.friday[1] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.saturday[1] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.sunday[1] == 0 ? '' : 'X'}
                                                        </td>
                                                    </tr>
                                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            13:00 - 14:30
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.monday[2] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.tuesday[2] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.wednesday[2] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.thursday[2] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.friday[2] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.saturday[2] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.sunday[2] == 0 ? '' : 'X'}
                                                        </td>
                                                    </tr>
                                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            14:30 - 16:00
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.monday[3] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.tuesday[3] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.wednesday[3] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.thursday[3] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.friday[3] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.saturday[3] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.sunday[3] == 0 ? '' : 'X'}
                                                        </td>
                                                    </tr>
                                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            17:00 - 18:30
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.monday[4] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.tuesday[4] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.wednesday[4] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.thursday[4] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.friday[4] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.saturday[4] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.sunday[4] == 0 ? '' : 'X'}
                                                        </td>
                                                    </tr>
                                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            18:30 - 20:00
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.monday[5] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.tuesday[5] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.wednesday[5] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.thursday[5] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.friday[5] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.saturday[5] == 0 ? '' : 'X'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {scheduleD.sunday[5] == 0 ? '' : 'X'}
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

                                        {allStudent.map((i: { id: Key | null | undefined; avatar: string | StaticImport; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined }) => (
                                            // eslint-disable-next-line react/jsx-key


                                            <div key={i.id} className="w-[70%] m-auto border-[3px] border-[#ffffff] rounded-[10px] flex flex-row mb-[10px]">
                                                <div className="w-[250px] flex items-center p-[10px]">
                                                    <div className="border-[2px] border-[#ffffff] w-[50px] h-[50px] p-[5px] rounded-full bg-black flex items-center justify-center text-white cursor-pointer">
                                                        <Image src={i.avatar ? i.avatar : "/logo.png"} alt="Logo" width={40} height={40} />
                                                    </div>
                                                    <p className="ml-[7px] text-[25px] w-[170px]">{i.name}</p>
                                                </div>
                                            </div>
                                        ))}

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
                                                <p className="mb-[10px]">Giáo viên phụ trách: {teacher.name}</p>
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
                                                <Input big placeholder='Nhập tên tài liệu' id='nameFile' type='text' name='nameFile' value={documentContent.nameFile} onChange={handleChangeDoc} />

                                            </div>
                                            <div className="flex items-center ml-[10px]">

                                                <p className="text-white text-[25px] mr-[10px]">
                                                    Chọn file:
                                                </p>
                                                <div className="w-[50px] h-[50px] overflow-y-hidden bg-white">
                                                    <ImageUpload value={documentContent.urlFile} onChange={(value) => setCustomValue('urlFile', value)} />
                                                </div>
                                            </div>
                                            {/* <CiLocationArrow1 className="text-[25px] mr-[20px]" /> */}
                                            <button type="submit" onClick={onSubmitDoc} className="w-[100px] bg-white text-black relative left-[50%] translate-x-[-50%] mb-[10px]">Tải tệp lên</button>
                                        </form>
                                        {allDocument.map((i: { urlFile: { toString: () => string | undefined }; nameFile: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; id: string }) => (
                                            // eslint-disable-next-line react/jsx-key

                                            <div key={0} className="flex m-auto w-[70%] mb-[10px]" >

                                                <a className="mr-[5px] w-[100%] border-[3px] justify-between items-center border-[#ffffff] rounded-[10px] flex flex-row" href={i.urlFile.toString()} download="your-document-name.docx">

                                                    <div className="w-[100%] flex items-center p-[10px]">
                                                        <div className="w-[50px] h-[50px] p-[5px] rounded-[5px] bg-white flex items-center justify-center text-white cursor-pointer">
                                                            <Image src="/document.png" alt="Logo" width={40} height={40} />
                                                        </div>
                                                        <p className="ml-[7px] text-[25px]">{i.nameFile}</p>

                                                    </div>
                                                    <FaEye className="text-[25px] mr-[20px]" />
                                                </a>
                                                <button onClick={() => onDeleteDocument(i.id)} className="relative right-0 bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-4 rounded">
                                                    Xóa
                                                </button>
                                            </div>

                                        ))}
                                    </div>
                                )
                            }

                        </div>


                    )

            }
        </div>
    )
}