import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import './ChatLayout.css'
import Markdown from 'react-markdown'

const AiwithText = () => {
    const genAI = new GoogleGenerativeAI('Your_API_KEY');

    const [search, setSearch] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    /**
     * Generative AI Call to fetch text insights
     */
    async function aiRun() {
        if (search.trim() === '') {
            setError('Please enter a valid search query.');
            return;
        }

        setLoading(true);
        setResponse('');
        setError('');

        try {
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const prompt = `${search}`;
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            setResponse(text);
        } catch (error) {
            setError('An error occurred while processing your request. Please try again later.');
        } finally {
            setLoading(false);
        }
    }

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setError('');
    }
    const handleKeyPress = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            aiRun();
        }
    };

    const handleClick = () => {
        aiRun();
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(aiResponse)
            .then(() => {
                console.log('Text copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy text:', err);
            });
    };
    return (
        <div className="ai-chat-container">
            <div className="input-container">
                <input
                    placeholder='Ask me anything...'
                    value={search}
                    onKeyDown={handleKeyPress}
                    onChange={(e) => handleChangeSearch(e)}
                />
                <button className='geminiSearch' onClick={() => handleClick()}>
                    <img className="logo" id="search-logo" src="/google-gemini-icon.svg" alt="Search"/>
                </button>
            </div>

            {loading && <p>Loading ...</p>}
            {error && <p className="error-message">{error}</p>}
            {aiResponse && <p className="response"><Markdown>{aiResponse}</Markdown></p>}
            {aiResponse && <button className="copyButton" onClick={handleCopy}><img className="copyButtonimg" src="copy-svgrepo-com.svg" alt="Copy To Clipboard"></img></button>}

        </div>
    );
};

export default AiwithText;
