'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"
import { SafeUser, safeRecruitment } from "@/app/types"
import Input from "@/app/(components)/Inputs/Input"
import Button from "@/app/(components)/Button"

import updateNews from "@/app/actions/updateNews"

interface RecruitmentProps {
    data: safeRecruitment;
    currentUser: SafeUser | null;
    id: any
}


export default function RecruitmentDetail({ data, id }: RecruitmentProps) {

    const recruitmentId = String(JSON.parse(id).recruitmentId);

    const recruitment = data;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(recruitment)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false)



    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const router = useRouter()

    const onSubmit = (e: FormEvent) => {

        e.preventDefault();

        axios.put(`/api/recruitment/${recruitmentId}`, {
            ...state,
        })
            .then(() => {
                router.refresh()
                // router.push('/')
                // router.refresh()
                router.replace('/admin/recruitment')
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

        axios.delete(`/api/recruitment/${recruitmentId}`)
            .then(() => {
                router.refresh();
                // router.refresh()
                router.replace('/admin/recruitment')
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

            <form className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4" >
                <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-2 mb-[20px]">

                    <h1 className="text-center uppercase text-[20px]">Chi tiết tin tuyển dụng</h1>
                </div>
                <div className="grid grid-cols-12">

                    <div className="col-span-12 p-2">
                        <p className="mb-[10px]">Tiêu đề:</p>
                        <Input big placeholder="Nhập tiêu đề tin tuyển dụng" id="title" type="text" value={state.title} name="title" onChange={handleChange} />
                        <p className="mb-[10px]">Hạn nộp hồ sơ:</p>
                        <Input big placeholder='Nhập hạn nộp hồ sơ' id='deadline' type='text' value={state.deadline} name='deadline' onChange={handleChange} />
                        <p className="mb-[10px]">Lương:</p>
                        <Input big placeholder='Nhập lương' id='salary' type='text' value={state.salary} name='salary' onChange={handleChange} />
                        <p className="mb-[10px]">Thời gian thử việc</p>
                        <Input big placeholder='Nhập thời gian thử việc' id='probationary' type='text' value={state.probationary} name='probationary' onChange={handleChange} />
                        <p className="mb-[10px]">Vị trí:</p>
                        <Input big placeholder='Nhập vị trí tuyển dụng' id='position' type='text' value={state.position} name='position' onChange={handleChange} />
                        <p className="mb-[10px]">Số lượng tuyển dụng:</p>
                        <Input big placeholder='Nhập số lượng tuyển dụng' id='quantity' type='text' value={state.quantity} name='quantity' onChange={handleChange} />
                        <p className="mb-[10px]">Hình thức làm việc:</p>
                        <Input big placeholder='Nhập hình thức làm việc' id='workingForm' type='text' value={state.workingForm} name='workingForm' onChange={handleChange} />
                        <p className="mb-[10px]">Yêu cầu bằng cấp:</p>
                        <Input big placeholder='Nhập yêu cầu bằng cấp' id='degree' type='text' value={state.degree} name='degree' onChange={handleChange} />
                        <p className="mb-[10px]">Yêu cầu kinh nghiệm</p>
                        <Input big placeholder='Nhập yêu cầu kinh nghiệm' id='experience' type='text' value={state.experience} name='experience' onChange={handleChange} />
                        <p className="mb-[10px]">Mô tả công việc</p>
                        <Input big placeholder='Nhập mô tả công việc' id='description' type='text' value={state.description} name='description' onChange={handleChange} />
                        <p className="mb-[10px]">Yêu cầu công việc:</p>
                        <Input big placeholder='Nhập yêu cầu công việc' id='required' type='text' value={state.required} name='required' onChange={handleChange} />
                        <p className="mb-[10px]">Quyền lợi:</p>
                        <Input big placeholder='Nhập quyền lợi' id='benefit' type='text' value={state.benefit} name='benefit' onChange={handleChange} />
                        <p className="mb-[10px]">Địa điểm làm việc:</p>
                        <Input big placeholder='Nhập địa điểm làm việc' id='location' type='text' value={state.location} name='location' onChange={handleChange} />
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