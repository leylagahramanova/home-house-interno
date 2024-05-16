//app/changelog/page.tsx
"use client"
import React, { useState } from 'react';
import Banner from '../components/changelogpage/Banner/Banner';
import Change from '../components/changelogpage/Change/Change';
import RestrictedPage, { RestrictedPageProps } from '../password/page'; // Correct import path

function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <RestrictedPage handleLogin={handleLogin} />;
  }
  return (
    <div>
      <Banner/>
      <Change/>
    </div>
  );
}

export default Page;