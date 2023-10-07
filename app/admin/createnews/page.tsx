'use client'

import { ChangeEvent, FormEvent, useState } from "react"
import Button from "../(components)/Button"
import Input from "../(components)/Inputs/Input"
import ImageUpload from "../(components)/Inputs/ImageUpload"
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

//   interface InitialValue {
//     // name: string,
//     // imageSrc: string,
//     // author: string,
//     // price: number,
//     // videoSrc: string,
//     // description: string

//     mainTitle:    String,
//     titleOne:     String,
//     titleTwo:     String,
//     titleThree:   String,
//     titleFour:    String,
//     contentOne:   String,
//     contentTwo:   String,
//     contentThree: String,
//     imageSrc:String,
//     contentFour:  String
// }

// const initialValue: InitialValue = {
//     mainTitle: '',
//     titleOne: '',
//     titleTwo: '',
//     titleThree: '',
//     titleFour: '',
//     contentOne: '',
//     contentTwo: '',
//     contentThree: '',
//     imageSrc:'',
//     contentFour: ''
// }

// enum PATH {
//     SPECS = 0,
//     VIDEOS = 1,
// }

export default function page() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(initialValue)
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


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()

    const onSubmit = (e: FormEvent) => {

        setLoading(true)
        e.preventDefault();

        axios.post('/api/news', state)
            .then(() => {
                router.push('/')

            })
            .catch((err) => {
                throw new Error(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className="flex justify-center pb-[500px]">
            <div className="flex flex-col h-[900px]">
                <form className="w-[600px] py-12 flex flex-col items-center gap-4" >


                    <>
                        <div className="w-[500px]">
                            <ImageUpload value={state.imageSrc} onChange={(value) => setCustomValue('imageSrc', value)} />
                        </div>

                        <div className="flex flex-col gap-2 py-4 w-full">
                            <Input big placeholder="maintitle" id="mainTitle" type="text" value={state.mainTitle} name="mainTitle" onChange={handleChange} />
                            <Input big placeholder='titleOne' id='titleOne' type='text' value={state.titleOne} name='titleOne' onChange={handleChange} />
                            <Input big placeholder='titleTwo' id='titleTwo' type='text' value={state.titleTwo} name='titleTwo' onChange={handleChange} />
                            <Input big placeholder='titleThree' id='titleThree' type='text' value={state.titleThree} name='titleThree' onChange={handleChange} />
                            <Input big placeholder='titleFour' id='titleFour' type='text' value={state.titleFour} name='titleFour' onChange={handleChange} />
                            <Input big placeholder='contentOne' id='contentOne' type='text' value={state.contentOne} name='contentOne' onChange={handleChange} />
                            <Input big placeholder='contentTwo' id='contentTwo' type='text' value={state.contentTwo} name='contentTwo' onChange={handleChange} />
                            <Input big placeholder='Description' id='contentThree' type='text' value={state.contentThree} name='contentThree' onChange={handleChange} />
                            <Input big placeholder='contentFour' id='contentFour' type='text' value={state.contentFour} name='contentFour' onChange={handleChange} />
                            {/* <Input big placeholder='Price' id='price' type='number' value={state.price} name='price' onChange={handleChange} /> */}
                        </div>
                    </>

                </form>

                <Button
                    label="Next"
                    onClick={onSubmit}
                    disabled={loading}
                />
            </div>
        </div>
    )
}