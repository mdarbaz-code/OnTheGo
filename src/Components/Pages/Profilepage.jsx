import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authUtils, isAuthenticated } from "../../utils/authUtils";

// ProfileCard Component
const ProfileCard = ({ title, children, className = "" }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-md p-6 mb-6 ${className}`}>
      {title && (
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

// Edit Profile Modal Component
const EditProfileModal = ({ isOpen, field, value, onSave, onCancel }) => {
  const [editValue, setEditValue] = useState(value);

  if (!isOpen) return null;

  const handleSave = () => {
    if (editValue.trim()) {
      onSave(editValue);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Edit {field.charAt(0).toUpperCase() + field.slice(1)}
        </h3>
        <input
          type={field === "email" ? "email" : "text"}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:border-blue-500"
          placeholder={`Enter your ${field}`}
          autoFocus
        />
        <div className="flex gap-4">
          <button
            onClick={handleSave}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 rounded-lg transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

// ProfileInfoField Component
const ProfileInfoField = ({
  label,
  value,
  icon,
  editable = false,
  onEdit,
  type = "text",
}) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
      <div className="flex items-center gap-3 flex-1">
        {icon && <span className="text-xl">{icon}</span>}
        <div>
          <p className="text-gray-600 text-sm">{label}</p>
          <p className="text-gray-800 font-medium">{value}</p>
        </div>
      </div>
      {editable && (
        <button
          onClick={onEdit}
          className="text-blue-500 hover:text-blue-700 text-sm font-semibold ml-2"
        >
          Edit
        </button>
      )}
    </div>
  );
};

// ProfileImageUpload Component
const ProfileImageUpload = ({ currentImage, onImageChange }) => {
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(currentImage);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        setImagePreview(result);
        onImageChange(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mb-6">
      <div onClick={handleImageClick} className="relative cursor-pointer group">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300 group-hover:border-blue-500 transition-colors">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-3xl">
              👤
            </div>
          )}
        </div>
        <div className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 transition-colors group-hover:scale-110">
          📷
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      <p className="text-sm text-gray-600 text-center">
        Click the profile picture to upload a new image
      </p>
    </div>
  );
};

// Payment Form Modal Component
const PaymentFormModal = ({ isOpen, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    type: "Credit",
    cardNumber: "",
    cardholderName: "",
    expiryDate: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (
      formData.cardNumber.trim() &&
      formData.cardholderName.trim() &&
      formData.expiryDate.trim()
    ) {
      onSave(formData);
      setFormData({
        type: "Credit",
        cardNumber: "",
        cardholderName: "",
        expiryDate: "",
      });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Add Payment Method
        </h3>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Card Type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          >
            <option>Credit</option>
            <option>Debit</option>
            <option>PayPal</option>
            <option>Wallet</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            maxLength="19"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Cardholder Name
          </label>
          <input
            type="text"
            name="cardholderName"
            value={formData.cardholderName}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Expiry Date
          </label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="MM/YY"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            maxLength="5"
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleSave}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 rounded-lg transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

// Delete Confirmation Modal Component
const DeleteConfirmationModal = ({
  isOpen,
  message,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Confirm Delete</h3>
        <p className="text-gray-600 mb-6">{message}</p>
        <div className="flex gap-4">
          <button
            onClick={onConfirm}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            Yes, Remove
          </button>
          <button
            onClick={onCancel}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 rounded-lg transition-colors"
          >
            No, Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

// PaymentOption Component
const PaymentOption = ({
  id,
  type,
  cardNumber,
  expiryDate,
  cardholderName,
  isSelected,
  onSelect,
  onRemove,
}) => {
  const getPaymentIcon = () => {
    switch (type.toLowerCase()) {
      case "credit":
        return "💳";
      case "debit":
        return "🏧";
      case "paypal":
        return "🅿️";
      case "wallet":
        return "👛";
      default:
        return "💰";
    }
  };

  return (
    <div
      className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
        isSelected ? "border-blue-500 bg-blue-50" : "border-gray-300"
      }`}
      onClick={() => onSelect(id)}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <span className="text-2xl">{getPaymentIcon()}</span>
          <div>
            <p className="font-semibold text-gray-800">{type} Card</p>
            <p className="text-sm text-gray-600">{cardholderName}</p>
            <p className="text-sm font-medium text-gray-700">
              **** **** **** {cardNumber.slice(-4)}
            </p>
            <p className="text-xs text-gray-500">Expires {expiryDate}</p>
          </div>
        </div>
        <div className="flex gap-2">
          {isSelected && (
            <div className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove(id);
            }}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

// NotificationToggle Component
const NotificationToggle = ({ label, enabled, onChange, icon }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200 last:border-b-0">
      <div className="flex items-center gap-3">
        {icon && <span className="text-xl">{icon}</span>}
        <p className="text-gray-800 font-medium">{label}</p>
      </div>
      <button
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          enabled ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
};

// OrderHistoryItem Component
const OrderHistoryItem = ({
  orderId,
  restaurantName,
  date,
  total,
  status,
  items,
  onReorder,
}) => {
  const getStatusColor = () => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  return (
    <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-bold text-gray-800">{restaurantName}</h3>
          <p className="text-sm text-gray-600">Order #{orderId}</p>
          <p className="text-xs text-gray-500 mt-1">{date}</p>
        </div>
        <div className="text-right">
          <p className="font-bold text-gray-800">₹{total}</p>
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 ${getStatusColor()}`}
          >
            {status}
          </span>
        </div>
      </div>

      <div className="mb-3 pb-3 border-b border-gray-300">
        <p className="text-sm text-gray-700">
          <span className="font-medium">{items.length}</span> item
          {items.length !== 1 ? "s" : ""}
        </p>
      </div>

      {status.toLowerCase() === "delivered" && (
        <button
          onClick={onReorder}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors"
        >
          Reorder
        </button>
      )}
    </div>
  );
};

// OrderHistorySection Component
const OrderHistorySection = ({ orderHistory }) => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <ProfileCard title="📋 Order History">
      {!showHistory ? (
        <button
          onClick={() => setShowHistory(true)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          View Order History
        </button>
      ) : (
        <div>
          {orderHistory.length > 0 ? (
            <div>
              {orderHistory.map((order) => (
                <OrderHistoryItem
                  key={order.id}
                  orderId={order.id}
                  restaurantName={order.restaurantName}
                  date={order.date}
                  total={order.total}
                  status={order.status}
                  items={order.items}
                  onReorder={order.onReorder}
                />
              ))}
              <div className="flex gap-2 mt-4">
                <button className="flex-1 text-blue-500 hover:text-blue-700 font-semibold py-2 border border-blue-500 rounded-lg">
                  View All Orders
                </button>
                <button
                  onClick={() => setShowHistory(false)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 rounded-lg transition-colors"
                >
                  Hide
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">No orders yet</p>
              <button
                onClick={() => setShowHistory(false)}
                className="mt-4 text-blue-500 hover:text-blue-700 font-semibold"
              >
                Back
              </button>
            </div>
          )}
        </div>
      )}
    </ProfileCard>
  );
};

// CouponCard Component
const CouponCard = ({
  code,
  discount,
  description,
  expiryDate,
  minOrderValue,
  onApply,
  applied = false,
}) => {
  const isExpired = new Date(expiryDate) < new Date();

  return (
    <div
      className={`rounded-xl p-4 mb-3 border-2 border-dashed ${
        isExpired
          ? "bg-gray-100 border-gray-300 opacity-60"
          : "bg-orange-50 border-orange-300"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🎟️</span>
            <div>
              <p className="font-bold text-gray-800">{code}</p>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>

          <div className="flex gap-4 text-xs text-gray-600 mb-2">
            <span>Min: ₹{minOrderValue}</span>
            <span>•</span>
            <span>Expires: {expiryDate}</span>
          </div>

          {isExpired && (
            <p className="text-xs font-semibold text-red-500">Expired</p>
          )}
        </div>

        <div className="text-right">
          <p className="text-2xl font-bold text-orange-600">{discount}%</p>
          <p className="text-xs text-gray-600 mb-2">OFF</p>
          <button
            onClick={onApply}
            disabled={isExpired || applied}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
              isExpired
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : applied
                  ? "bg-green-500 text-white"
                  : "bg-orange-500 hover:bg-orange-600 text-white"
            }`}
          >
            {applied ? "Applied" : "Apply"}
          </button>
        </div>
      </div>
    </div>
  );
};

// CouponSection Component
const CouponSection = ({ coupons, onApply }) => {
  const [showCoupons, setShowCoupons] = useState(false);

  return (
    <ProfileCard title="🎟️ Available Coupons">
      {!showCoupons ? (
        <button
          onClick={() => setShowCoupons(true)}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          View Available Coupons ({coupons.length})
        </button>
      ) : (
        <div>
          {coupons.length > 0 ? (
            <div>
              {coupons.map((coupon) => (
                <CouponCard
                  key={coupon.id}
                  code={coupon.code}
                  discount={coupon.discount}
                  description={coupon.description}
                  expiryDate={coupon.expiryDate}
                  minOrderValue={coupon.minOrderValue}
                  applied={coupon.applied}
                  onApply={() => onApply(coupon.id)}
                />
              ))}
              <button
                onClick={() => setShowCoupons(false)}
                className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 rounded-lg transition-colors mt-4"
              >
                Hide Coupons
              </button>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">No coupons available</p>
            </div>
          )}
        </div>
      )}
    </ProfileCard>
  );
};

// Main Profilepage Component
const Profilepage = () => {
  const navigate = useNavigate();
  
  // Check if user is authenticated
  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login', { state: { redirectTo: '/profile', showLoginMessage: false } });
    }
  }, [navigate]);
  
  // Profile State
  const [userProfile, setUserProfile] = useState({
    name: "Shahid Khan",
    email: "shahid@example.com",
    phone: "+91 9876543210",
    address: "123 Main Street, Mumbai, Maharashtra 400001",
    language: "English",
    country: "India",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shahid",
  });

  // Edit Modal State
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingField, setEditingField] = useState(null);

  // Payment Methods State
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "Credit",
      cardNumber: "4532111111111111",
      expiryDate: "12/25",
      cardholderName: "Shahid Khan",
      isSelected: true,
    },
    {
      id: 2,
      type: "Debit",
      cardNumber: "5425233010103010",
      expiryDate: "08/26",
      cardholderName: "Shahid Khan",
      isSelected: false,
    },
  ]);

  // Payment Form Modal State
  const [paymentFormOpen, setPaymentFormOpen] = useState(false);

  // Delete Confirmation State
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [paymentToDelete, setPaymentToDelete] = useState(null);

  // Notification Preferences State
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: true,
    newRestaurants: false,
    weeklyDeals: true,
    referralBonus: false,
  });

  // Order History State
  const [orderHistory] = useState([
    {
      id: "ORD001",
      restaurantName: "Pizza Palace",
      date: "Jan 25, 2026",
      total: 450,
      status: "Delivered",
      items: ["Margherita Pizza", "Garlic Bread"],
      onReorder: () => console.log("Reorder from Pizza Palace"),
    },
    {
      id: "ORD002",
      restaurantName: "Burger Barn",
      date: "Jan 23, 2026",
      total: 320,
      status: "Delivered",
      items: ["Classic Burger", "Fries", "Coke"],
      onReorder: () => console.log("Reorder from Burger Barn"),
    },
    {
      id: "ORD003",
      restaurantName: "Sushi House",
      date: "Jan 20, 2026",
      total: 680,
      status: "Delivered",
      items: ["California Roll", "Spicy Tuna Roll"],
      onReorder: () => console.log("Reorder from Sushi House"),
    },
  ]);

  // Coupons State
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      code: "SAVE20",
      discount: 20,
      description: "20% off on your next order",
      expiryDate: "2026-02-28",
      minOrderValue: 300,
      applied: false,
    },
    {
      id: 2,
      code: "FREEDELIV",
      discount: 100,
      description: "Free delivery on orders above ₹500",
      expiryDate: "2026-03-15",
      minOrderValue: 500,
      applied: false,
    },
    {
      id: 3,
      code: "FLAT50",
      discount: 50,
      description: "Flat ₹50 off on your order",
      expiryDate: "2026-02-10",
      minOrderValue: 200,
      applied: false,
    },
  ]);

  // Handlers
  const handleImageChange = (newImage) => {
    setUserProfile((prev) => ({ ...prev, profileImage: newImage }));
  };

  const handleEditProfile = (field) => {
    setEditingField(field);
    setEditModalOpen(true);
  };

  const handleEditSave = (newValue) => {
    if (editingField) {
      setUserProfile((prev) => ({
        ...prev,
        [editingField]: newValue,
      }));
    }
    setEditModalOpen(false);
    setEditingField(null);
  };

  const handleEditCancel = () => {
    setEditModalOpen(false);
    setEditingField(null);
  };

  const handlePaymentSelect = (id) => {
    setPaymentMethods((prev) =>
      prev.map((method) => ({
        ...method,
        isSelected: method.id === id,
      })),
    );
  };

  const handlePaymentRemoveClick = (id) => {
    setPaymentToDelete(id);
    setDeleteConfirmOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (paymentToDelete) {
      setPaymentMethods((prev) =>
        prev.filter((method) => method.id !== paymentToDelete),
      );
    }
    setDeleteConfirmOpen(false);
    setPaymentToDelete(null);
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmOpen(false);
    setPaymentToDelete(null);
  };

  const handleAddPayment = (formData) => {
    const newPayment = {
      id: Math.max(...paymentMethods.map((m) => m.id), 0) + 1,
      type: formData.type,
      cardNumber: formData.cardNumber,
      expiryDate: formData.expiryDate,
      cardholderName: formData.cardholderName,
      isSelected: false,
    };
    setPaymentMethods((prev) => [...prev, newPayment]);
    setPaymentFormOpen(false);
  };

  const handleNotificationChange = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleCouponApply = (id) => {
    setCoupons((prev) =>
      prev.map((coupon) =>
        coupon.id === id ? { ...coupon, applied: !coupon.applied } : coupon,
      ),
    );
  };

  const handleLogout = () => {
    authUtils.logout();
    navigate('/login', { state: { redirectTo: '/profile', showLoginMessage: false } });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>

        {/* Edit Profile Modal */}
        <EditProfileModal
          isOpen={editModalOpen}
          field={editingField}
          value={userProfile[editingField] || ""}
          onSave={handleEditSave}
          onCancel={handleEditCancel}
        />

        {/* Payment Form Modal */}
        <PaymentFormModal
          isOpen={paymentFormOpen}
          onSave={handleAddPayment}
          onCancel={() => setPaymentFormOpen(false)}
        />

        {/* Delete Confirmation Modal */}
        <DeleteConfirmationModal
          isOpen={deleteConfirmOpen}
          message="Do you really want to remove this payment method?"
          onConfirm={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
        />

        {/* Profile Picture & Basic Info */}
        <ProfileCard>
          <ProfileImageUpload
            currentImage={userProfile.profileImage}
            onImageChange={handleImageChange}
          />

          <div className="space-y-2">
            <ProfileInfoField
              label="Full Name"
              value={userProfile.name}
              icon="👤"
              editable
              onEdit={() => handleEditProfile("name")}
            />
            <ProfileInfoField
              label="Email Address"
              value={userProfile.email}
              icon="📧"
              editable
              onEdit={() => handleEditProfile("email")}
            />
            <ProfileInfoField
              label="Mobile Number"
              value={userProfile.phone}
              icon="📱"
              editable
              onEdit={() => handleEditProfile("phone")}
            />
            <ProfileInfoField
              label="Address"
              value={userProfile.address}
              icon="📍"
              editable
              onEdit={() => handleEditProfile("address")}
            />
          </div>
        </ProfileCard>

        {/* Language & Country */}
        <ProfileCard title="🌍 Preferences">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Language
              </label>
              <select
                value={userProfile.language}
                onChange={(e) =>
                  setUserProfile((prev) => ({
                    ...prev,
                    language: e.target.value,
                  }))
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              >
                <option>English</option>
                <option>Hindi</option>
                <option>Marathi</option>
                <option>Gujarati</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Country
              </label>
              <select
                value={userProfile.country}
                onChange={(e) =>
                  setUserProfile((prev) => ({
                    ...prev,
                    country: e.target.value,
                  }))
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              >
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
              </select>
            </div>
          </div>
        </ProfileCard>

        {/* Payment Methods */}
        <ProfileCard title="💳 Payment Methods">
          <div className="space-y-3 mb-4">
            {paymentMethods.map((method) => (
              <PaymentOption
                key={method.id}
                id={method.id}
                type={method.type}
                cardNumber={method.cardNumber}
                expiryDate={method.expiryDate}
                cardholderName={method.cardholderName}
                isSelected={method.isSelected}
                onSelect={handlePaymentSelect}
                onRemove={handlePaymentRemoveClick}
              />
            ))}
          </div>
          <button
            onClick={() => setPaymentFormOpen(true)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            + Add New Payment Method
          </button>
        </ProfileCard>

        {/* Notification Preferences */}
        <ProfileCard title="🔔 Notification Preferences">
          <NotificationToggle
            label="Order Updates"
            enabled={notifications.orderUpdates}
            onChange={() => handleNotificationChange("orderUpdates")}
            icon="📦"
          />
          <NotificationToggle
            label="Promotions & Offers"
            enabled={notifications.promotions}
            onChange={() => handleNotificationChange("promotions")}
            icon="🎉"
          />
          <NotificationToggle
            label="New Restaurants"
            enabled={notifications.newRestaurants}
            onChange={() => handleNotificationChange("newRestaurants")}
            icon="🏪"
          />
          <NotificationToggle
            label="Weekly Deals"
            enabled={notifications.weeklyDeals}
            onChange={() => handleNotificationChange("weeklyDeals")}
            icon="🤑"
          />
          <NotificationToggle
            label="Referral Bonus"
            enabled={notifications.referralBonus}
            onChange={() => handleNotificationChange("referralBonus")}
            icon="🎁"
          />
        </ProfileCard>

        {/* Order History */}
        <OrderHistorySection orderHistory={orderHistory} />

        {/* Coupons & Promo Codes */}
        <CouponSection coupons={coupons} onApply={handleCouponApply} />

        {/* Footer Actions */}
        <div className="flex gap-4 mt-8">
          <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors">
            Save Changes
          </button>
          <button 
            onClick={handleLogout}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
