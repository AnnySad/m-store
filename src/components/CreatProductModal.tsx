import React, {useState} from 'react';



const CreatProductModal = () => {

    const [value, setValue] = useState('')

   const submitHandler = (event:React.FormEvent) => {
       event.preventDefault()
   }

   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
       setValue(event.currentTarget.value)
   }

    return (
        <form onSubmit={submitHandler}>
            <input
            type='text'
            className='border py-2 px-4 mb-2 w-full outline-0'
            placeholder='Enter product title...'
            value={value}
            onChange={changeHandler}
            />

            <button type='submit' className='py-2 px-4 border bg-blue-500 hover:text-amber-100'>Create</button>
        </form>
    );
};

export default CreatProductModal;