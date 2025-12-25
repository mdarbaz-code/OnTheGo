import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBox,
  FaCreditCard,
  FaSignOutAlt,
  FaEdit,
  FaBell,
  FaQuestionCircle,
  FaLocationArrow,
  FaArrowLeft,
} from "react-icons/fa";

const Profile = () => {
  const [activePage, setActivePage] = useState("profile");

  // 🔴 USER DATA (MAIN STATE)
  const [user, setUser] = useState({
    name: "Shahid Ansari",
    email: "support@email.com",
    phone: "+91 9876543210",
    address: "Mumbai, Maharashtra",
  });

  // PAGE SWITCHING
  if (activePage === "edit")
    return (
      <EditProfile
        user={user}
        setUser={setUser}
        goBack={() => setActivePage("profile")}
      />
    );

  if (activePage === "address")
    return (
      <Address
        user={user}
        setUser={setUser}
        goBack={() => setActivePage("profile")}
      />
    );

  if (activePage === "orders")
    return <Orders goBack={() => setActivePage("profile")} />;

  if (activePage === "payment")
    return <Payment goBack={() => setActivePage("profile")} />;

  if (activePage === "notifications")
    return <Notifications goBack={() => setActivePage("profile")} />;

  if (activePage === "help")
    return <Help goBack={() => setActivePage("profile")} />;

  // MAIN PROFILE UI
  return (
    <div className="min-h-screen bg-gray-100">c

      {/* HEADER */}
      <div className="bg-red-600 text-white px-8 py-10 flex items-center gap-5">
        <img
          src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
          alt="profile"
          className="w-20 h-20 rounded-full border-4 border-white"
        />
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-sm opacity-90">Customer</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="bg-white mx-6 -mt-8 rounded-2xl shadow-lg p-6 space-y-4">

        <Item icon={<FaEnvelope />} text={user.email} />
        <Item icon={<FaPhone />} text={user.phone} />
        <Item icon={<FaMapMarkerAlt />} text={user.address} />

        <hr />

        <Item icon={<FaEdit />} text="Edit Profile" arrow onClick={() => setActivePage("edit")} />
        <Item icon={<FaLocationArrow />} text="Saved Address" arrow onClick={() => setActivePage("address")} />
        <Item icon={<FaBox />} text="Your Orders" arrow onClick={() => setActivePage("orders")} />
        <Item icon={<FaCreditCard />} text="Payment Method" arrow onClick={() => setActivePage("payment")} />
        <Item icon={<FaBell />} text="Notifications" arrow onClick={() => setActivePage("notifications")} />
        <Item icon={<FaQuestionCircle />} text="Help & Support" arrow onClick={() => setActivePage("help")} />

        <hr />

        <button className="w-full flex items-center justify-center gap-2 text-red-600 font-semibold py-3 border border-red-200 rounded-xl hover:bg-red-50">
          <FaSignOutAlt /> Logout
        </button>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8 pb-6">
        App Version 1.0.0
      </div>
    </div>
  );
};

// ---------- REUSABLE ITEM ----------
const Item = ({ icon, text, arrow, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center justify-between py-3 px-2 rounded-xl cursor-pointer
               hover:bg-red-50 active:scale-[0.98] transition-all group"
  >
    <div className="flex items-center gap-4">
      <span className="text-red-600 text-lg">{icon}</span>
      <span className="text-base font-medium group-hover:text-red-600">
        {text}
      </span>
    </div>
    {arrow && (
      <span className="text-gray-400 text-xl group-hover:translate-x-1 transition">
        ›
      </span>
    )}
  </div>
);

// ---------- COMMON PAGE WRAPPER ----------
const PageWrapper = ({ title, children, goBack }) => (
  <div className="min-h-screen bg-gray-100 p-6">
    <button onClick={goBack} className="flex items-center gap-2 text-red-600 font-semibold mb-4">
      <FaArrowLeft /> Back
    </button>
    <h1 className="text-xl font-bold mb-4">{title}</h1>
    {children}
  </div>
);

// ---------- SUB PAGES ----------
const EditProfile = ({ user, setUser, goBack }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const handleSave = () => {
    setUser({ ...user, name, email, phone });
    goBack();
  };

  return (
    <PageWrapper title="Edit Profile" goBack={goBack}>
      <input className="border p-2 w-full mb-3" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="border p-2 w-full mb-3" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="border p-2 w-full mb-3" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button onClick={handleSave} className="bg-red-600 text-white px-4 py-2 rounded">
        Save
      </button>
    </PageWrapper>
  );
};

const Address = ({ user, setUser, goBack }) => {
  const [address, setAddress] = useState(user.address);

  const handleSave = () => {
    setUser({ ...user, address });
    goBack();
  };

  return (
    <PageWrapper title="Saved Address" goBack={goBack}>
      <textarea
        className="border p-2 w-full mb-3"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleSave} className="bg-red-600 text-white px-4 py-2 rounded">
        Save Address
      </button>
    </PageWrapper>
  );
};

const Orders = ({ goBack }) => (
  <PageWrapper title="Order History" goBack={goBack}>
    <p>No orders yet</p>
  </PageWrapper>
);

const Payment = ({ goBack }) => (
  <PageWrapper title="Payment Methods" goBack={goBack}>
    <ul className="space-y-2">
      <li>✅ UPI</li>
      <li>💳 Debit / Credit Card</li>
      <li>🏦 Net Banking</li>
    </ul>
  </PageWrapper>
);

const Notifications = ({ goBack }) => (
  <PageWrapper title="Notifications" goBack={goBack}>
    <p>No new notifications</p>
  </PageWrapper>
);

const Help = ({ goBack }) => (
  <PageWrapper title="Help & Support" goBack={goBack}>
    <p>Email: support@deliveryapp.com</p>
  </PageWrapper>
);

export default Profile;