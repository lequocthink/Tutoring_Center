'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"
import { SafeUser, safeNews } from "@/app/types"
import ImageUpload from "@/app/(components)/Inputs/ImageUpload"
import Input from "@/app/(components)/Inputs/Input"
import Button from "@/app/(components)/Button"
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

interface NewsProps {
    data: safeNews;
    currentUser: SafeUser | null;
    id: any
}

export default function NewsDetailClient({ data, id }: NewsProps) {

    const myId = String(JSON.parse(id).newsId);
    const news = data;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(news)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false)

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const setCustomValue = (id: any, value: any) => {
        setState((prevState) => ({
            ...prevState,
            [id]: value
        }))
    }

    const router = useRouter()

    const onSubmit = (e: FormEvent) => {

        e.preventDefault();
        axios.put(`/api/news/${myId}`, {
            ...state,
        })
            .then(() => {
                router.refresh()
                router.replace('/admin/news')
            })
            .catch((err: any) => {
                throw new Error(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const onDelete = (e: FormEvent) => {
        setLoading(true)
        e.preventDefault();
        axios.delete(`/api/news/${myId}`)
            .then(() => {
                router.refresh();
                router.replace('/admin/news')
            })
            .catch((error) => {
                throw new Error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className="">
            <Link href={'/admin/news/'} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center mt-4 ml-4 absolute">
                <BiArrowBack className="text-[25px]" />
            </Link>
            <form className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4" >
                <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-2 mb-[20px]">
                    <h1 className="text-center uppercase text-[20px]">Chi tiết tin tức</h1>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-6 p-2">
                        <p className="mb-[10px] text-[20px]">Chọn ảnh nền cho tin tức:</p>
                        <ImageUpload value={state.imageSrc} onChange={(value) => setCustomValue('imageSrc', value)} />
                    </div>
                    <div className="col-span-6 p-2">
                        <p className="mb-[10px] text-[20px]">Tiêu đề:</p>
                        <Input big placeholder="Nhập tiêu đề tin tức" id="mainTitle" type="text" value={state.mainTitle} name="mainTitle" onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Mục 1:</p>
                        <Input big placeholder='Nhập tên mục 1' id='titleOne' type='text' value={state.titleOne} name='titleOne' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Nội dung mục 1:</p>
                        <Input big placeholder='Nhập nội dung mục 1' id='contentOne' type='text' value={state.contentOne} name='contentOne' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Mục 2:</p>
                        <Input big placeholder='Nhập tên mục 2' id='titleTwo' type='text' value={state.titleTwo} name='titleTwo' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Nội dung mục 2:</p>
                        <Input big placeholder='Nhập nội dung mục 2' id='contentTwo' type='text' value={state.contentTwo} name='contentTwo' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Mục 3:</p>
                        <Input big placeholder='Nhập tên mục 3' id='titleThree' type='text' value={state.titleThree} name='titleThree' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Nội dung mục 3:</p>
                        <Input big placeholder='Nhập nội dung mục 3' id='contentThree' type='text' value={state.contentThree} name='contentThree' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Mục 4:</p>
                        <Input big placeholder='Nhập tên mục 4' id='titleFour' type='text' value={state.titleFour} name='titleFour' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Nội dung mục 4:</p>
                        <Input big placeholder='Nhập nội dung mục 4' id='contentFour' type='text' value={state.contentFour} name='contentFour' onChange={handleChange} />
                        <Button
                            label="Update"
                            onClick={onSubmit}
                            disabled={loading}
                        />
                        <Button
                            label="Delete"
                            onClick={onDelete}
                            disabled={loading}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}