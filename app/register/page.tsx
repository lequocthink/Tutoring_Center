'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react'
import Input from '../(components)/Inputs/Input'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


interface InitialStateProps {
    name:string,
    email:string,
    password:string
}

const initialState:InitialStateProps = {
    name:'',
    email:'',
    password:''
}

export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(initialState)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    function handleChange(event:ChangeEvent<HTMLInputElement>) {
        setState({...state, [event.target.name]: event.target.value})
    }

    function onSubmit(event:FormEvent) {
        setLoading(true)
        event.preventDefault();
      

        axios.post('/api/register',state)
        .then(() => {
            router.refresh()
        })
        .then(() => {
            setTimeout(() => {
                router.push('/login')
            },2500)

        })

        .catch((error:any) => {
            throw new Error(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }

  return (
    <form onSubmit={onSubmit} className='text-center'>
        <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
            <Input placeholder='Name' id='name' type='text' name='name' onChange={handleChange} value={state.name}/>
            <Input placeholder='Email' id='email' type='email' name='email' onChange={handleChange} value={state.email}/>
            <Input placeholder='Password' id='password' type='password' name='password' onChange={handleChange} value={state.password}/>

        </div>
        
        <button type='submit'>Submit</button>

        <div>
            <div>Do you have an account ? <Link href='/login'>Sign in</Link></div>
        </div>
    </form>
  )
}