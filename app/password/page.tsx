
// app/password/page.tsx
'use client'
import React, { useState } from 'react';
import Banner from '../components/restrictedpage/Banner/Banner';
import Password from '../components/restrictedpage/Password/Password';

export interface RestrictedPageProps {
  handleLogin: () => void; 
}

const RestrictedPage: React.FC<RestrictedPageProps> = ({ handleLogin }) => {
  const [error, setError] = useState('');

  const handleSubmit = () => {
    handleLogin();
  };

  return (
    <div>
      <Banner />
      <Password onSubmit={handleSubmit} />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default RestrictedPage;