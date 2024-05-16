
//app/components/restrictedpage/Password/Password.tsx
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import vector from "@/app/img/Vector.png";
import './Password.css';
import "@/app/components/button.css";

interface PasswordProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void; // Define the type for the onSubmit prop
}

const Password: React.FC<PasswordProps> = ({ onSubmit }) => { // Adjust the component to expect the onSubmit prop
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check if the entered password is correct
    if (password === 'interno') {
      // If correct, call the onSubmit function provided by the parent component
      onSubmit(e);
    } else {
      // If incorrect, display an error message
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="password">
      <h2>Password Protected</h2>
      <p>This page is password protected. If you are the website admin, or have access to this page, please type your password below.</p>
      <form onSubmit={handleSubmit}>
        <input 
          className="input" 
          type="password" 
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Submit Now <Image src={vector} alt=""/></button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Password;