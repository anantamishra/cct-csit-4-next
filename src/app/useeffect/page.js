'use client'
import React, { useEffect, useState } from 'react';

export default function Page() {
    const [value, setValue] = useState(0)

    useEffect(() => {
        console.log('Component mounted');
        console.log(value)
    }, [value]);

    const handleSubmit = () => {
        setValue(value + 1)
    };

    return (
        <div className='flex w-full min-h-screen justify-center items-center'>
            <button onClick={handleSubmit} className='bg-blue-500 px-5 py-3 text-white'>Submit</button>
        </div>
    );
}
