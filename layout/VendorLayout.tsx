import HeaderNav from "@/components/dashboard/HeaderNav";
import SideNav from "@/components/dashboard/SideNav";
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