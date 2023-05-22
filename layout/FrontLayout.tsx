import FooterNav from '@/components/FooterNav';
import HeaderNav from '@/components/HeaderNav';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode,
};

function FrontLayout({ children }: LayoutProps) {
  return (
    <>
      <main className='bg-[#FAFAFA]'>
        <HeaderNav />
        {children}
        <FooterNav />
      </main>
    </>
  );
};

export default FrontLayout;