'use client'

import { ChangeEvent, FormEvent, useState } from "react"
import Button from "@/app/(components)/Button"
import Input from "@/app/(components)/Inputs/Input"
import axios from "axios"
import { useRouter } from "next/navigation"
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

interface InitialValue {
    title: string,
    deadline: string,
    salary: string,
    probationary: String,
    position: string,
    quantity: string,
    workingForm: String,
    degree: String,
    experience: String,
    description: String,
    required: String,
    benefit: String,
    location: String
}

const initialValue: InitialValue = {
    title: '',
    deadline: '',
    salary: '',
    probationary: '',
    position: '',
    quantity: '',
    workingForm: '',
    degree: '',
    experience: '',
    description: '',
    required: '',
    benefit: '',
    location: ''
}

export default function page() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(initialValue)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const onSubmit = (e: FormEvent) => {
        setLoading(true)
        e.preventDefault();
        axios.post('/api/recruitment', state)
            .then(() => {
                setState(initialValue);
                router.refresh()
                router.replace('/admin/create/recruitment')

            })
            .catch((err) => {
                throw new Error(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className="">
            <Link href={'/admin/recruitment/'} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center mt-4 ml-4 absolute">
                <BiArrowBack className="text-[25px]" />
            </Link>
            <form className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4" >
                <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-2 mb-[20px]">
                    <h1 className="text-center uppercase text-[20px]">Tạo tin tuyển dụng</h1>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12 p-2">
                        <p className="mb-[10px] text-[20px]">Tiêu đề:</p>
                        <Input big placeholder="Nhập tiêu đề tin tuyển dụng" id="title" type="text" value={state.title} name="title" onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Hạn nộp hồ sơ:</p>
                        <Input big placeholder='Nhập hạn nộp hồ sơ' id='deadline' type='text' value={state.deadline} name='deadline' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Lương:</p>
                        <Input big placeholder='Nhập lương' id='salary' type='text' value={state.salary} name='salary' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Thời gian thử việc</p>
                        <Input big placeholder='Nhập thời gian thử việc' id='probationary' type='text' value={state.probationary} name='probationary' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Vị trí:</p>
                        <Input big placeholder='Nhập vị trí tuyển dụng' id='position' type='text' value={state.position} name='position' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Số lượng tuyển dụng:</p>
                        <Input big placeholder='Nhập số lượng tuyển dụng' id='quantity' type='text' value={state.quantity} name='quantity' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Hình thức làm việc:</p>
                        <Input big placeholder='Nhập hình thức làm việc' id='workingForm' type='text' value={state.workingForm} name='workingForm' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Yêu cầu bằng cấp:</p>
                        <Input big placeholder='Nhập yêu cầu bằng cấp' id='degree' type='text' value={state.degree} name='degree' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Yêu cầu kinh nghiệm</p>
                        <Input big placeholder='Nhập yêu cầu kinh nghiệm' id='experience' type='text' value={state.experience} name='experience' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Mô tả công việc</p>
                        <Input big placeholder='Nhập mô tả công việc' id='description' type='text' value={state.description} name='description' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Yêu cầu công việc:</p>
                        <Input big placeholder='Nhập yêu cầu công việc' id='required' type='text' value={state.required} name='required' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Quyền lợi:</p>
                        <Input big placeholder='Nhập quyền lợi' id='benefit' type='text' value={state.benefit} name='benefit' onChange={handleChange} />
                        <p className="mb-[10px] text-[20px]">Địa điểm làm việc:</p>
                        <Input big placeholder='Nhập địa điểm làm việc' id='location' type='text' value={state.location} name='location' onChange={handleChange} />
                        <Button
                            label="Tạo"
                            onClick={onSubmit}
                            disabled={loading}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}