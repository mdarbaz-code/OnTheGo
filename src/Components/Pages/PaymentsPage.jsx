import React, { useState } from "react";
import { MapPin, IndianRupee, Package, ArrowLeft } from "lucide-react";
import PaymentPageTitle from "../Core/components/Payments/PaymentPageTitle";
import RadioCard from "../Core/components/Payments/RadioCard";
import { NavLink } from "react-router-dom";


const PaymentsPage = () => {
    //delivery address data
    const [deliveryAddress, setDeliveryAddress] = useState("home");
    const [addresses] = useState([
        { id: "home", title: "Home", address: "Sweet Home, Btm Layout, Bangalore" },
        { id: "work", title: "Work", address: "Tech Park, 3rd Floor, Downtown" },
        { id: "other", title: "Other", address: "123 Main Street, City Center" },
    ]);
    const handleAddressChange = (id) => {
        setDeliveryAddress(id);
    }

    //payment method data
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [payments] = useState([
        { id: "cod", title: "Cash on Delivery", desc: "Pay when your order arrives at your doorstep", use: "enabled" },
        { id: "upi", title: "UPI", desc: "Pay using upi directly", use: "disabled" }
    ]);
    const handlePaymentChange = (payId) => {
        setPaymentMethod(payId);
    }

    // Order summary data
    const orderSummary = {
        itemTotal: 100,
        deliveryFee: 2.99,
        tax: 4.28,
        discount: 50,
    };
    const summaryDetails = [
        { label: "Items Total", value: orderSummary.itemTotal },
        { label: "Delivery Fee", value: orderSummary.deliveryFee },
        { label: "Tax", value: orderSummary.tax },
        { label: "Discount", value: orderSummary.discount },
    ];
    const grandTotal = Math.max(orderSummary.itemTotal + orderSummary.deliveryFee + orderSummary.tax - orderSummary.discount, 0).toFixed(2);

    return (
        <div className=" min-h-screen py-6 px-4 bg-amber-50">
            <div className="  max-w-6xl mx-auto sm: px-4">
                {/* Header */}
                <div className="header mb-8">
                    <div className="heading flex items-center gap-3">
                        <NavLink to="/cart"><ArrowLeft className="w-8 h-8 text-orange-400 hover:text-orange-600 w-10 h -10" /></NavLink>
                        <h1 className="text-3xl sm:text-4xl font-bold mb-1">Checkout</h1>
                    </div>
                    <p className="text-sm text-grey-600 ">
                        Complete your payment details to finish checkout
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 gap-5  md:grid-cols-3 md:gap-10 ">
                    <div className="grid grid-rows-2 gap-5 md:col-span-2">

                        {/* Delivery Address Section */}
                        <div className="bg-white border-1 border-gray-200 rounded-lg p-5 sm:p-6 shadow-lg">
                            {/* title */}
                            <PaymentPageTitle Icon={MapPin} title="Delivery Address" />

                            {/* address fields */}
                            <div className="address-fields space-y-3">
                                {addresses.map((item, index) => (
                                    <RadioCard key={index}
                                        id={item.id}
                                        name="address"
                                        value={item.id}
                                        checked={item.id === deliveryAddress}
                                        title={item.title}
                                        description={item.address}
                                        onChange={() => handleAddressChange(item.id)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Payment Method Section */}
                        <div className="bg-white border-1 border-gray-200 rounded-lg p-5 sm:p-6 shadow-lg">
                            {/* title */}
                            <PaymentPageTitle Icon={IndianRupee} title="Payment Method" />

                            {/* payment fields */}
                            <div className="payment-fields space-y-3">
                                {payments.map((item, index) => (
                                    <RadioCard key={index}
                                        id={item.id}
                                        name="payment"
                                        value={item.id}
                                        disabled={item.use === "disabled"}
                                        checked={paymentMethod === item.id}
                                        title={item.title}
                                        description={item.desc}
                                        onChange={() => handlePaymentChange(item.id)}
                                    />
                                ))}
                                {paymentMethod === "cod" &&
                                    (<p className="text-sm text-gray-600 mt-4 px-2">
                                        Currently, only Cash on Delivery is available
                                    </p>)}
                            </div>

                        </div>
                    </div>

                    {/* Order Summary Section */}
                    <div className="h-max bg-white border-1 border-gray-200 rounded-lg p-5 sm:p-6 shadow-lg">
                        {/* title */}
                        <PaymentPageTitle Icon={Package} title="Order Summary" />

                        {/* order details */}
                        <div className="order-details">
                            <div className="space-y-2 text-sm border-b-2 border-gray-200 pb-4 mb-4">
                                {summaryDetails.map((item, index) => {
                                    if (item.label === "Discount" && orderSummary.discount <= 0) {
                                        return null;
                                    }

                                    return (
                                        <div key={index} className={`flex justify-between ${item.label === "Discount" ? "text-green-600 font-semibold" : ""}`}>
                                            <span>{item.label}</span>
                                            <span>{item.label === "Discount" ? `-₹${item.value}` : `₹${item.value}`}</span>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="flex justify-between items-center rounded-lg p-3 mb-4 bg-orange-50">
                                <span className="text-lg sm:text-xl font-bold text-gray-900">Grand Total</span>
                                <span className="text-2xl sm:text-3xl font-bold text-orange-600">₹{grandTotal}</span>
                            </div>
                        </div>

                        <div className="text-sm text-gray-600">
                            <p className="mb-2">Delivering To: <b >{`${addresses.find(el => el.id === deliveryAddress)?.title}|`}</b> {`${addresses.find(el => el.id === deliveryAddress)?.address}`}</p>
                            <p>Payment: <b className="capitalize">{payments.find(el => el.id === paymentMethod)?.title}</b></p>
                        </div>

                        {/* buttons */}
                        <div className="buttons mt-5">
                            <button className="w-full  bg-orange-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-red-600 hover:shadow-xl cursor-pointer">
                                Place Order
                            </button>
                            <NavLink to="/cart">
                                <button className="w-full mt-5 bg-white text-orange-500 py-3 border-2 rounded-lg font-semibold transition-all duration-300 hover:bg-orange-50 hover:shadow-xl cursor-pointer ">
                                    Back To Cart
                                </button>
                            </NavLink>
                        </div>

                        {/* note */}
                        <div className="note bg-green-50 rounded-xl p-4 mt-5">
                            <div className="title mb-1">
                                <p className="font-semibold text-green-900">🔒 Secure Checkout</p>
                            </div>
                            <div className="desc">
                                <p className="text-xs text-green-900">Your payment information is secure &  encrypted</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentsPage;
