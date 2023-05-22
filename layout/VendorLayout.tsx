import HeaderNav from "@/components/vendor/HeaderNav";
import SideNav from "@/components/vendor/SideNav";

type LayoutProps = {
  children: React.ReactNode,
};

function VendorLayout({ children }: LayoutProps) {
  return (
    <main>
      <HeaderNav />
      <div className="flex">
        <SideNav />
        {children}
      </div>
    </main>
  )
}

export default VendorLayout