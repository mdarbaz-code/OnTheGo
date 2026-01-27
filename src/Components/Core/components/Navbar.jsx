import Typography from "../../UI/components/Typography";
import Button from "../../UI/components/Button";
import Image from "../../UI/components/Image";
import { IoLocation , IoPerson } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import Input from "../../UI/components/Input";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md px-6 py-4 md:px-20 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="../../public/logo.jpg" alt="FoodWagon Logo" size="sm" shape="circle" />
        <Typography variant="h4" weight="bold" color="primary">
          OnTheGo!
        </Typography>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-1 items-center">
        <Typography variant="span" weight="bold">
          Deliver To:
        </Typography>
        <IoLocation />
        <Typography variant="span">
          Current Location : User Location{" "}
        </Typography>
      </nav>

      {/* Right Actions */}
      <div className="flex h-14 gap-x-4 ">
        <Input type="text"  placeholder="Search Food" rightIcon={<FaSearch size="1.5rem" color="orange" />} />
        <Button variant="outline" size="sm"> <IoPerson /> 
           <Typography variant="span" color="primary" weight="semibold" >Login</Typography>
        </Button>
      </div>
    </header>
  );
}
