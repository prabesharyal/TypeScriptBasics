// signup.tsx
import React, { useState } from 'react';
import './loginAndSignup.css'

const SignUp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        // Add your signup logic here
        console.log('Signing up with:', email, password);
    };

    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
};

export default SignUp;
