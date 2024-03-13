import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function Encryptor() {
    // eslint-disable-next-line prefer-const
    let [password, setPassword] = useState('');
    const [text, setText] = useState('');
    const [encryptedText, setEncryptedText] = useState('');
    const [error, setError] = useState('');

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    const encryptText = () => {
        try {
            if (!text) {
                setError('Password and text fields cannot be empty.');
                return;
            }
            if (!password) {
                password = 'password';
            }

            // Encrypt the text using AES with the provided password
            const encryptedData = CryptoJS.AES.encrypt(text, password).toString();
            setEncryptedText(encryptedData);

            setError('');
        } catch (error) {
            console.error('Error encrypting data:', error);
            setError('An error occurred during encryption.');
            setEncryptedText('');
        }
    };

    return (
        <div>
            <h1>React AES Encryptor</h1>
            <form>
                <label htmlFor="password">Enter Password:</label><br />
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    style={{ marginBottom: '10px' }}
                />
                <br />
                <label htmlFor="text">Enter Text:</label><br />
                <textarea
                    id="text"
                    value={text}
                    onChange={handleTextChange}
                    rows={5}
                    cols={50}
                    style={{ marginBottom: '10px' }}
                />
            </form>
            <div>
                <button onClick={encryptText}>Encrypt Text</button>
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div>
                <h2>Encrypted Text:</h2>
                <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                    {encryptedText}
                </pre>
            </div>
        </div>
    );
}

export default Encryptor;
