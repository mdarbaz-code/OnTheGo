import Input from "../UI/components/Input";
import {FiMail, FiSearch} from "react-icons/fi";

function InputPage() {
  
  return (
    <>
      <div className="flex bg-red-100 w-full justify-center">

        {/* Inputs component container */}
        <div className="bg-yellow-100 w-xl p-2 ">

          {/* Heading */}
          <h1 className="text-2xl text-center underline font-bold mb-4">Custom Reusable Input Component</h1>

          {/* 1. Basic Usage */}
          <div>
            <h2 className="text-lg font-semibold mb-2">1. Basic Input</h2>
            <Input label="Name" placeholder="Enter your name" />
          </div>
          
          {/* 2. Input With Left Icon */}
          <div>
            <h2 className="text-lg font-semibold mb-2">2. Input With Left Icon</h2>
            <Input label="Email" placeholder="Enter your email" leftIcon={<FiMail />}/>
          </div>

          {/* 3. Input With Right Icon & Custom width */}
          <div>
            <h2 className="text-lg font-semibold mb-2">3. Input With Right Icon & Custom width</h2>
            <Input label="Search" placeholder="Search here..." rightIcon={<FiSearch />} width="w-100"/>
          </div>

          {/* 4. Password With Show/Hide */}
          <div>
            <h2 className="text-lg font-semibold mb-2">4. Password (Show/Hide)</h2>
            <Input label="Password" type="password" placeholder="Enter password" required/>
          </div>
          
          {/* 5. Input With Error Message */}
          <div>
            <h2 className="text-lg font-semibold mb-2">5. Input With Error Message</h2>
            <Input label="Email" placeholder="Enter email" error="Email is required"/>
          </div>
          
          {/* 6. Variant Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">6. Variants</h2>
            <Input label="Outline" variant="outline" placeholder="Outline input" />
            <Input label="Filled" variant="filled" placeholder="Filled input" />
            <Input label="Underline" variant="underline" placeholder="Underline input" />
          </div>

          {/* 7. Size Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">7. Sizes</h2>
            <Input label="Small" size="sm" placeholder="Small input" />
            <Input label="Medium" size="md" placeholder="Medium input" />
            <Input label="Large" size="lg" placeholder="Large input" />
          </div>

        </div>
        
      </div>
    </>
  )
}

export default InputPage
