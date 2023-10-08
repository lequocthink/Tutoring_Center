'use client'


interface InputProps {
    type?: string,
    value?: string | number,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string
    textarea?: boolean
    id: string
    placeholder?: string
    big?: boolean
}


export default function Input({
    type,
    value,
    onChange,
    name,
    textarea,
    id,
    placeholder,
    big
}: InputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            id={id}
            value={value}
            onChange={onChange}
            name={name}
            className={`
        mb-[10px]
        font-light
        bg-white   
          text-black 
          shadow-sm bg-black-50 border border-gray-600 text-black-900 text-sm rounded-lg block w-full p-2.5
          ${textarea ? 'w-700px h-500px' : 'w-full'}
           ${big ? 'w-[700px]' : ''}`}

        />
    )
}