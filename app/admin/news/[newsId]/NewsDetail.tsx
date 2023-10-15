'use client'

import axios from "axios"
// import { SafeUser,safeCourse } from "../types"
// import Button from "../(components)/Button"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ChangeEvent, FormEvent, useState } from "react"
import { SafeUser, safeNews } from "@/app/types"
import Link from "next/link"
import ImageUpload from "@/app/(components)/Inputs/ImageUpload"
// import Input from "postcss/lib/input"
import Input from "@/app/(components)/Inputs/Input"
import Button from "@/app/(components)/Button"
// import ImageUpload from "@/app/(components)/Inputs/ImageUpload"

import updateNews from "@/app/actions/updateNews"

interface NewsProps {
    data: safeNews;
    currentUser: SafeUser | null;
    id: any
}

interface IParams {
    newsId?: string
}

export default function NewsDetailClient({ data, id }: NewsProps) {

    // const [isLoading, setIsLoading] = useState(false)


    const myId = String(JSON.parse(id).newsId);



    const news = data;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(news)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [path, setPath] = useState(PATH.SPECS);



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

        // setLoading(true)
        e.preventDefault();

        // updateNews(state, myId);
        // console.log(JSON.parse(id).newsId);

        // axios.put('/api/news/' + myId, state)
        //     .then(() => {
        //         // setState(initialValue);
        //         // router.push('/admin/news')
        //         router.refresh()
        //         router.replace('/admin/createnews')

        //     })
        //     .catch((err) => {
        //         throw new Error(err)
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })

        // const onSubmit = (event:FormEvent) => {


        // }
        // setIsLoading(true)
        // event.preventDefault()


        // axios.put(`/api/news/6526c2500df71e9cb9cd730a`, {
        axios.put(`/api/news/${myId}`, {
            ...state,
            //   hashedPassword:state.password
        })
            .then(() => {
                router.refresh()
                // router.push('/')
                // router.refresh()
                router.replace('/admin/news')
            })
            .catch((err: any) => {
                throw new Error(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }


    // const router = useRouter();
    // const [show,setShow] = useState(false)

    // const onDelete = (e:FormEvent) => {
    //     setIsLoading(true)
    //     e.preventDefault();

    //     axios.delete(`/api/course/${data.id}`)
    //     .then(() => {
    //       router.refresh();
    //     })
    //     .catch((error) => {
    //       throw new Error(error)
    //     })
    //     .finally(() => {
    //       setIsLoading(false)
    //     })
    //   }

    return (
        // <div className="">

        //     <form className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4" >
        //         <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-2 mb-[20px]">

        //             <h1 className="text-center uppercase text-[20px]">News Detail</h1>
        //         </div>
        //         <div className="grid grid-cols-12">

        //             <div className="col-span-12 p-2">
        //                 {/* <ImageUpload value={initialValue.imageSrc} onChange={(value) => setCustomValue('imageSrc', value)} /> */}

        //                 {/* <Image src={news?.imageSrc} alt="Logo" width={0} height={0} /> */}
        //                 <img className="w-[500px] m-auto" src={news?.imageSrc} alt="" />

        //                 <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4">

        //                     <h2 className="text-[30px] mb-[10px] uppercase text-center">Tiêu đề:</h2>
        //                     <p className="text-[20px]">
        //                         {news?.mainTitle}
        //                     </p>
        //                 </div>

        //                 <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4">

        //                     <h2 className="text-[30px] mb-[10px] uppercase text-center">Mục 1:</h2>
        //                     <p className="text-[20px]">
        //                         {news?.titleOne}
        //                     </p>
        //                 </div>

        //                 <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4">

        //                     <h2 className="text-[30px] mb-[10px] uppercase text-center">Nội dung mục 1:</h2>
        //                     <p className="text-[20px]">
        //                         {news?.contentOne}
        //                     </p>
        //                 </div>

        //                 <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4">

        //                     <h2 className="text-[30px] mb-[10px] uppercase text-center">Mục 2:</h2>
        //                     <p className="text-[20px]">
        //                         {news?.titleTwo}
        //                     </p>
        //                 </div>

        //                 <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4">

        //                     <h2 className="text-[30px] mb-[10px] uppercase text-center">Nội dung mục 2:</h2>
        //                     <p className="text-[20px]">
        //                         {news?.contentTwo}
        //                     </p>
        //                 </div>

        //                 <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4">

        //                     <h2 className="text-[30px] mb-[10px] uppercase text-center">Mục 3:</h2>
        //                     <p className="text-[20px]">
        //                         {news?.titleThree}
        //                     </p>
        //                 </div>

        //                 <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4">

        //                     <h2 className="text-[30px] mb-[10px] uppercase text-center">Nội dung mục 3:</h2>
        //                     <p className="text-[20px]">
        //                         {news?.contentThree}
        //                     </p>
        //                 </div>

        //                 <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4">

        //                     <h2 className="text-[30px] mb-[10px] uppercase text-center">Mục 4:</h2>
        //                     <p className="text-[20px]">
        //                         {news?.titleFour}
        //                     </p>
        //                 </div>

        //                 <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4">

        //                     <h2 className="text-[30px] mb-[10px] uppercase text-center">Nội dung mục 4:</h2>
        //                     <p className="text-[20px]">
        //                         {news?.contentFour}
        //                     </p>
        //                 </div>

        //                 <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 flex justify-center">
        //                     <Link href="/admin/createnews" className="py-1 px-4 border-black border-[1px] rounded-[12px]">Update News</Link>
        //                     {/* <Link ">Update News</Link> */}

        //                 </div>
        //             </div>
        //         </div>


        //     </form>

        // </div>

        <div className="">
            {/* <p>
                Id: {id}
            </p> */}

            <form className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4" >
                <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-2 mb-[20px]">

                    <h1 className="text-center uppercase text-[20px]">News Detail</h1>
                </div>
                <div className="grid grid-cols-12">

                    <div className="col-span-6 p-2">
                        <p className="mb-[10px]">Chọn ảnh nền cho tin tức:</p>
                        <ImageUpload value={state.imageSrc} onChange={(value) => setCustomValue('imageSrc', value)} />
                    </div>

                    <div className="col-span-6 p-2">
                        {/* <Input big placeholder="Nhập tiêu đề tin tức" id="id" type="text" value={state.id} name="id" onChange={handleChange} /> */}
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
                            label="Update"
                            onClick={onSubmit}
                            disabled={loading}
                        />
                    </div>
                </div>


            </form>

        </div>
    )
}