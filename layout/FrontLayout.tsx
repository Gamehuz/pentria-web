import FooterNav from '@/components/FooterNav';
import HeaderNav from '@/components/HeaderNav';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode,
  footer?: boolean
};

function FrontLayout({ children, footer }: LayoutProps) {
  return (
    <>
      <main className='bg-[#FAFAFA]'>
        <HeaderNav />
        {children}
        {
          footer !== false && <FooterNav />
        }
      </main>
    </>
  );
};

export default FrontLayout;