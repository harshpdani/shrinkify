"use client";

import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

export default function Home() {
  const [url, setUrl] = useState("");
  const [customText, setCustomText] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setShortUrl("");
    setCopied(false);

    try{
      const res = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({url, customText},)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong!");
      }

      setShortUrl(data.shortUrl);
    } catch (err) {
    setError(err.message);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
  <main className="p-8 max-w-2xl mx-auto">
    <h1 className="text-3xl font-bold mb-8 text-center">URL Shortener</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="url" className="block mb-2">
          Enter the URL to be shortened
          </label>
        <input 
        className="w-full p-2 border rounded border-yellow-400" 
        type="url" 
        id="url" 
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required 
        placeholder="https:example.com"/>
      </div>
      <div>
        <label htmlFor="customText" className="block mb-2">
          Custom Text (Optional)
          </label>
        <input 
        className="w-full p-2 border rounded border-yellow-400" 
        type="text" 
        id="customText" 
        value={customText}
        onChange={(e) => setCustomText(e.target.value)}
        placeholder="https:example.com"
        />
      </div>
      <button type="submit" className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700">Shorten URL</button>
    </form>
    {/* On any error show error box */}
    {error && ( 
      <div className="mt-4 p-4 bg-yellow-100 text-red-700 rounded">{error}</div>
    )}
{/* If short url is successful then show the shortened link */}
    {shortUrl && (
      <div className="mt-4 p-4 bg-yellow-100 rounded">
        <p className="mb-2">Shortened URL:</p>
        <div className="flex items-center gap-2">
          <input type ="text" value={shortUrl} readOnly className="w-full p-2 border rounded bg-white" />
        {/* Copy to clipboard button */}
        <button 
        onClick={copyToClipboard} 
        className="p-2.5 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200"
        title={copied ? "Copied" : "Copied to Clipboard"}
        >
          {copied ? (
            <FiCheck className="w-5 h-5 text-yellow-600" />
          ) : (
            <FiCopy className="w-5 h-5 text-yellow-600" />
          )}
        </button>
        </div>
      </div>
    )}
  </main>
  );
}
