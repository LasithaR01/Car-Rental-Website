import React from 'react';
import Link from "next/link";

const Header = () => {
  return (
    <div className='bg-white shadow-lg'>
        <Link href="/" className='text-third-color font-bold text-2xl'>
          AutoGO
        </Link>
    </div>
  );
}

export default Header;