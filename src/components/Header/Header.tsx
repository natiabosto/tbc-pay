import React from 'react';
import Logo from '../../assets/logo_tbcpay.png';

interface HeaderProps {
  onLogoClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  return (
    <header className='bg-gray-800 p-4'>
      <div className='m-auto flex gap-10 lg:max-w-screen-lg '>
        <button
          onClick={onLogoClick}
          className='text-white text-xl font-bold hover:text-gray-400'
        >
          <img className='w-40' src={Logo} />
        </button>
        <button
          onClick={onLogoClick}
          className='text-gray-400 text-xl font-bold hover:text-gray-300'
        >
          მთავარი
        </button>
      </div>
    </header>
  );
};

export default Header;
