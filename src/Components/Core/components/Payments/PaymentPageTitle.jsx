import React from 'react'


const PaymentPageTitle = ({Icon,title}) => {
    return (
        <div className="delivery-title mb-4 bg-white flex items-center gap-3">
            <Icon className="w-6 h-6 text-orange-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                {title}
            </h2>
        </div>
    )
}

export default PaymentPageTitle