'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react'
import Input from '../(components)/Inputs/Input'
import {signIn} from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


interface InitialStateProps {
    email:string,
    password:string
}

const initialState:InitialStateProps = {
    email:'',
    password:''
}

export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(initialState)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false)

    function handleChange(event:ChangeEvent<HTMLInputElement>) {
        setState({...state, [event.target.name]: event.target.value})
    }

    function onSubmit(event:FormEvent) {
        event.preventDefault();

        setLoading(true)

        signIn('credentials', {
            ...state,
            redirect:false
        })
        .then((callback) => {
            if(callback?.ok) {
                router.push('/');
                router.refresh()
            }
            
            if(callback?.error) {
                throw new Error('Wrong Credentials')
            }
        }).catch((err) => {
            throw new Error(err)
        }).finally(() => {
            setLoading(false)
        })

     
    }

  return (
    <form onSubmit={onSubmit} className='text-center'>
        <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
            <Input placeholder='Email' id='email' type='email' name='email' onChange={handleChange} value={state.email}/>
            <Input placeholder='Password' id='password' type='password' name='password' onChange={handleChange} value={state.password}/>
        </div>

        <button type='submit'>Submit</button>

        <div>
            <div>Havent got an account ? <Link href='/register'>Sign up</Link></div>
        </div>
    </form>
  )
}