import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function Decryptor() {
    // eslint-disable-next-line prefer-const
    let [password, setPassword] = useState('');
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');
    const [error, setError] = useState('');

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleEncryptedTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEncryptedText(event.target.value);
    };

    const decryptText = () => {
        try {
            if (!encryptedText) {
                setError('Password and encrypted text fields cannot be empty.');
                return;
            }
            if (!password) {
                password = 'password';
            }

            // Decrypt the encrypted text using AES with the provided password
            const decryptedData = CryptoJS.AES.decrypt(encryptedText, password).toString(CryptoJS.enc.Utf8);
            setDecryptedText(decryptedData);

            setError('Failed to decrypt the encrypted text');
        } catch (error) {
            console.error('Error decrypting data:', error);
            setError('An error occurred during decryption. Incorrect password or encrypted text.');
            setDecryptedText('');
        }
    };

    return (
        <div>
            <h1>React AES Decryptor</h1>
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
                <label htmlFor="encryptedText">Enter Encrypted Text:</label><br />
                <textarea
                    id="encryptedText"
                    value={encryptedText}
                    onChange={handleEncryptedTextChange}
                    rows={5}
                    cols={50}
                    style={{ marginBottom: '10px' }}
                />
            </form>
            <div>
                <button onClick={decryptText}>Decrypt Text</button>
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div>
                <h2>Decrypted Text:</h2>
                <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                    {decryptedText}
                </pre>
            </div>
        </div>
    );
}

export default Decryptor;
