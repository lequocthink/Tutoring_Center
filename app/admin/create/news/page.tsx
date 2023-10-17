'use client'

import { ChangeEvent, FormEvent, useState } from "react"
import Button from "@/app/(components)/Button"
import Input from "@/app/(components)/Inputs/Input"
import ImageUpload from "@/app/(components)/Inputs/ImageUpload"
import axios from "axios"
import { useRouter } from "next/navigation"


interface InitialValue {
    mainTitle: string,
    imageSrc: string,
    titleOne: string,
    titleTwo: String,
    titleThree: string,
    titleFour: string,
    contentOne: String,
    contentTwo: String,
    contentThree: String,
    contentFour: String
}

const initialValue: InitialValue = {
    mainTitle: '',
    imageSrc: '',
    titleOne: '',
    titleTwo: '',
    titleThree: '',
    titleFour: '',
    contentOne: '',
    contentTwo: '',
    contentThree: '',
    contentFour: ''

}

export default function page() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(initialValue)
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


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()

    const onSubmit = (e: FormEvent) => {

        setLoading(true)
        e.preventDefault();

        axios.post('/api/news', state)
            .then(() => {
                setState(initialValue);
                // router.push('/admin/news')
                router.refresh()
                router.replace('/admin/create/news')

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

            <form className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4" >
                <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-2 mb-[20px]">

                    <h1 className="text-center uppercase text-[20px]">Create News</h1>
                </div>
                <div className="grid grid-cols-12">

                    <div className="col-span-6 p-2">
                        <p className="mb-[10px]">Chọn ảnh nền cho tin tức:</p>
                        <ImageUpload value={state.imageSrc} onChange={(value) => setCustomValue('imageSrc', value)} />
                    </div>

                    <div className="col-span-6 p-2">
                        <p className="mb-[10px]">Tiêu đề:</p>
                        <Input big placeholder="Nhập tiêu đề tin tức" id="mainTitle" type="text" value={state.mainTitle} name="mainTitle" onChange={handleChange} />
                        <p className="mb-[10px]">Mục 1:</p>
                        <Input big placeholder='Nhập tên mục 1' id='titleOne' type='text' value={state.titleOne} name='titleOne' onChange={handleChange} />
                        <p className="mb-[10px]">Nội dung mục 1:</p>
                        <Input big placeholder='Nhập nội dung mục 1' id='contentOne' type='text' value={state.contentOne} name='contentOne' onChange={handleChange} />
                        <p className="mb-[10px]">Mục 2:</p>
                        <Input big placeholder='Nhập tên mục 2' id='titleTwo' type='text' value={state.titleTwo} name='titleTwo' onChange={handleChange} />
                        <p className="mb-[10px]">Nội dung mục 2:</p>
                        <Input big placeholder='Nhập nội dung mục 2' id='contentTwo' type='text' value={state.contentTwo} name='contentTwo' onChange={handleChange} />
                        <p className="mb-[10px]">Mục 3:</p>
                        <Input big placeholder='Nhập tên mục 3' id='titleThree' type='text' value={state.titleThree} name='titleThree' onChange={handleChange} />
                        <p className="mb-[10px]">Nội dung mục 3:</p>
                        <Input big placeholder='Nhập nội dung mục 3' id='contentThree' type='text' value={state.contentThree} name='contentThree' onChange={handleChange} />
                        <p className="mb-[10px]">Mục 4:</p>
                        <Input big placeholder='Nhập tên mục 4' id='titleFour' type='text' value={state.titleFour} name='titleFour' onChange={handleChange} />
                        <p className="mb-[10px]">Nội dung mục 4:</p>
                        <Input big placeholder='Nhập nội dung mục 4' id='contentFour' type='text' value={state.contentFour} name='contentFour' onChange={handleChange} />
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