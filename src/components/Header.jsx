import React from 'react';
import { Toolbar, InputBase, IconButton, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = () => {
    console.log('Search Query: ', searchQuery);
  };

  return (
    <div className="w-full top-0 sticky z-50 bg-white shadow-md">
      <Toolbar className="flex flex-col sm:flex-row justify-between items-center p-4">

        {/* Logo */}
        <div className="flex items-center justify-between w-full sm:w-auto mb-4 sm:mb-0 hidden sm:flex ml-10">
          <img
            src="/icons/logo.png"
            alt="Airbnb Logo"
            className="h-10 w-10"
          />
        </div>

        {/* Search Bar */}
<div className="flex items-center border rounded-full max-w-xl mx-auto divide-x divide-gray-300 h-16 shadow-md mb-4 sm:mb-0">
  <div className="flex-grow px-4">
    <InputBase
      placeholder="Where"
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full"
    />
  </div>
  <div className="flex-grow px-4 hidden sm:block">
    <InputBase
      type="text"
      placeholder="Check in"
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full"
    />
  </div>
  <div className="flex-grow px-4 hidden sm:block">
    <InputBase
      placeholder="Check out"
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full"
    />
  </div>
  <div className="flex-grow px-4 hidden sm:block">
    <InputBase
      placeholder="Who"
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full"
    />
  </div>
  <IconButton type="submit" onClick={handleSearch} className="p-1">
    <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center">
      <SearchIcon className="text-white" />
    </div>
  </IconButton>
</div>


        {/* Action Buttons */}
        <div className="flex items-center justify-between w-full sm:w-auto space-x-4 mt-4 sm:mt-0 hidden sm:flex">
          <button className="p-2 px-4 rounded-3xl hover:bg-gray-200">
            <b>Become a host</b>
          </button>
          <IconButton>
            <LanguageIcon />
          </IconButton>
          <div className="flex items-center space-x-2 border border-gray-300 rounded-full p-1">
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Avatar />
          </div>
        </div>

      </Toolbar>
    </div>
  );
};

export default Header;
