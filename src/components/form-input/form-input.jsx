import React from 'react'

const FormInput = ({ label, className, ...others }) => {
    return (
        <>
        <label className="block text-gray-700 uppercase text-sm font-bold mb-2" >
        {label}
        </label>
        <input
            className={`p-2 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ${className} `}
                autoComplete='off'
            // required
            {...others}

        />
        </>
    )
}

export default FormInput;