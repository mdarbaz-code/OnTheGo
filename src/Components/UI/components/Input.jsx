import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const Input = ({
  label,
  required,
  type = "text",
  error,
  leftIcon,
  rightIcon,
  variant = "outline", // outline | filled | underline
  size = "md", // sm | md | lg
  width,
  options = [], // for radio buttons
  ...props
}) => {
  // Hide or show password
  const [showPassword, setShowPassword] = useState(false);

  // variant styles
  const variantClasses = {
    outline: "border border-gray-300 rounded-md bg-white",
    filled: "bg-gray-100 border border-gray-200 rounded-md",
    underline: "border-b border-gray-300 bg-transparent rounded-none"
  };

  // size control
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  };

  // password toggle logic
  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className={`${width === "full" ? "w-full" : width} mb-4 bg-white p-2`}>
      {/* label */}
      {label && (
        <label className='block mb-1 text-sm font-medium'>
          {label}
          {required && <span className='text-red-500'> *</span>}
        </label>
      )}

      {/* Radio Input Logic */}
      {type === "radio" ? (
        <div className="flex flex-col gap-2">
          {options.map((option, idx) => (
            <label key={idx} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value={option.value}
                name={props.name} // ensure radios share the same name
                className="accent-yellow-500"
                {...props}
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}
        </div>
      ) : (
        // Default Input Container
        <div
          className={`flex items-center gap-2 ${variantClasses[variant]} ${sizeClasses[size]} focus-within:ring-2 focus-within:ring-yellow-400 transition`}
        >
          {/* Left Icon */}
          {leftIcon && <span className='text-gray-500 text-lg'>{leftIcon}</span>}

          {/* Input field */}
          <input type={inputType} className='flex-1 outline-none' {...props} />

          {/* Right Icon */}
          {rightIcon && <span className='text-gray-500 text-lg'>{rightIcon}</span>}

          {/* Password Toggle */}
          {type === "password" && (
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='text-gray-500'
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          )}
        </div>
      )}

      {/* Error Message */}
      {error && <p className='text-xs text-red-500 mt-1'>{error}</p>}
    </div>
  )
}

export default Input;
