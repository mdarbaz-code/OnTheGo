import Typography from "../../UI/components/Typography";
import Input from "../../UI/components/Input";
import Button from "../../UI/components/Button";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-12 md:px-20 text-white">
      {/* Top Cities */}
      <div className="mb-10">
        <Typography variant="h5" weight="bold" className="mb-4 text-white">
          Our Top Cities
        </Typography>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-white/80">
          {[
            "Mumbai",
            "Delhi",
            "Bengaluru",
            "Hyderabad",
            "Chennai",
            "Kolkata",
            "Pune",
            "Ahmedabad",
            "Jaipur",
            "Surat",
            "Lucknow",
            "Kanpur",
            "Nagpur",
            "Indore",
            "Bhopal",
            "Patna",
            "Chandigarh",
            "Coimbatore",
            "Thiruvananthapuram",
            "Kochi",
            "Visakhapatnam",
            "Madurai",
            "Varanasi",
            "Mysuru",
            "Rajkot",
          ].map((city, i) => (
            <span key={i}>{city}</span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        <div>
          <Typography variant="h5" weight="bold" className="text-white">
            Company
          </Typography>
          <ul className="mt-2 space-y-1 text-white/80 text-sm">
            <li>About us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <Typography variant="h5" weight="bold" className="text-white">
            Contact
          </Typography>
          <ul className="mt-2 space-y-1 text-white/80 text-sm">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>
        <div>
          <Typography variant="h5" weight="bold" className="text-white">
            Legal
          </Typography>
          <ul className="mt-2 space-y-1 text-white/80 text-sm">
            <li>Terms & Conditions</li>
            <li>Refund & Cancellation</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div>
          <Typography variant="h5" weight="bold" className="text-white">
            Follow Us
          </Typography>
          <div className="flex gap-4 mt-2">
            <FaInstagram className="text-white hover:text-pink-500 cursor-pointer" />
            <FaFacebookF className="text-white hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="text-white hover:text-blue-400 cursor-pointer" />
          </div>
          <Typography variant="small" className="mt-4 text-white/80">
            Receive exclusive offers in your mailbox
          </Typography>
          <div className="flex gap-2 mt-2">
            <Input
              type="email"
              placeholder="Enter your email"
              width="full"
              size="sm"
            />
            <Button variant="primary" size="sm">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/30 pt-6 text-center text-sm text-white/70">
        <Typography variant="small" className="text-white/70">
          All rights Reserved ©OnTheGo!, 2026
        </Typography>
        <Typography variant="small" className="mt-1 text-white/70">
          Made with 💛 by Interns
        </Typography>
      </div>
    </footer>
  );
}
