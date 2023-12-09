'use client';

// import Input from "../(components)/Inputs/Input";
import Input from "@/app/(components)/Inputs/Input";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ChangeEvent, FormEvent, SetStateAction, useState } from "react";
// import Button from "../(components)/Button";
// import { SafeUser } from "../types";
import { SafeUser } from "@/app/types";
import ImageUpload from "@/app/(components)/Inputs/ImageUpload"


interface InitialStateProps {
    name: string,
    email: string,
    password: string
}

const initialState: InitialStateProps = {
    name: '',
    email: '',
    password: ''
}


interface ProfileProps {
    data: SafeUser

}




export default function PasswordComponent({ data }: ProfileProps) {
    const userData = data;

    const router = useRouter()
    const [state, setState] = useState(userData)
    const [isLoading, setIsLoading] = useState(false)
    const [password, setPassword] = useState('')



    // function handleChange(event: any) {
    //     setState({ ...state, [event.target.name]: event.target.value });
    //     console.log(event.target.value)
    // }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const changePassword = (e: FormEvent) => {

        if (state.hashedPassword !== password) {
            alert("Mật khẩu không trùng khớp");
            e.preventDefault();

        }
        else {
            e.preventDefault();
            axios.put(`/api/user/${userData.id}`, {
                ...state, pass: true
            })
                .then(() => {
                    router.refresh()
                    router.replace('/setting')
                })
                .catch((err: any) => {
                    throw new Error(err)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }


    return (
        <form className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] col-span-12 p-4'>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto w-[350px] py-3 mb-[40px]">

                <h1 className="text-center uppercase text-[25px]">Thay đổi mật khẩu</h1>
            </div>
            <div className="grid grid-cols-12">

                <div className="col-span-6 p-2 col-start-4">
                    <p className="mb-[10px] text-[20px]">Mật khẩu cũ:</p>
                    <Input big placeholder='Hãy nhập mật khẩu cũ' id='oldPassword' type='password' name='oldPassword' />
                    <p className="mb-[10px] text-[20px]">Mật khẩu mới:</p>
                    <Input big placeholder='Hãy nhập mật khẩu mới' id='hashedPassword' type='password' name='hashedPassword' onChange={handleChange} />
                    <p className="mb-[10px] text-[20px]">Nhập lại mật khẩu mới:</p>
                    <Input big placeholder='Hãy nhập lại mật khẩu mới' id='password' type='password' name='password' onChange={(event: { target: { value: SetStateAction<string>; }; }) => { setPassword(event.target.value) }} />
                    <button type="submit" className="mb-[10px] block transition disabled:cursor-not-allowed relative bg-yellow-400 hover:bg-yellow-700 text-white font-bold py-3 px-4 rounded w-full" disabled={isLoading} onClick={changePassword}>
                        Đổi mật khẩu
                    </button>

                </div>
            </div>
            {/* <Button type='submit' label="Update" disabled={isLoading} /> */}
        </form>
    )
}