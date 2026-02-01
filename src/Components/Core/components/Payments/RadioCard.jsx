import React from 'react'

const RadioCard = ({id,value,name,title,description,disabled = false,checked,onChange}) => {
    return (
        <label className={`border-2 rounded-lg p-3 flex items-center gap-3 transition-all ${ disabled ? 'opacity-50 cursor-not-allowed border-orange-200' : checked ? 'border-orange-500 bg-orange-50' : 'border-orange-200 hover:border-orange-400 cursor-pointer'}`}>
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                disabled={disabled}
                onChange={onChange}
            />
            <div>
                <p className="font-semibold text-gray-900">{title}</p>
                {description && (
                    <p className="text-sm text-gray-600">{description}</p>
                )}
            </div>
        </label>
    )
}

export default RadioCard