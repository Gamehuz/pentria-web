import HeaderNav from "@/components/vendor/HeaderNav";
import SideNav from "@/components/vendor/SideNav";
import { useEffect, useState } from "react";

type LayoutProps = {
  children: React.ReactNode,
};

function VendorLayout({ children }: LayoutProps) {
  const [toggle, setToggle] = useState(true)
  useEffect(() => {
    if (window.innerWidth <= 600) {
      setToggle(false)
    }
  }, [])
  return (
    <main>
      <HeaderNav setToggle={() => setToggle(!toggle)} />
      <div className="flex">
        <SideNav toggle={toggle} />
        {children}
      </div>
    </main>
  )
}

export default VendorLayout