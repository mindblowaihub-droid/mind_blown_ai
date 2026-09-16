"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [mediaUrl, setMediaUrl] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setMediaUrl(null);

    setTimeout(() => {
      setLoading(false);
      setMediaUrl("https://via.placeholder.com/600x400?text=Mindblown+AI+Media");
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Mindblown AI
        </h1>
        <p className="text-slate-400 text-lg">
          Turn your wildest imaginations into AI-generated videos and images.
        </p>

        <div className="flex gap-2 bg-slate-900 p-2 rounded-xl border border-slate-800 shadow-2xl">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the video or image you want to create..."
            className="flex-1 bg-transparent px-4 py-3 text-white focus:outline-none"
          />
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-500 font-semibold px-6 py-3 rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>

        {mediaUrl && (
          <div className="mt-8 p-4 bg-slate-900 rounded-xl border border-slate-800">
            <img src={mediaUrl} alt="AI Result" className="w-full rounded-lg" />
          </div>
        )}
      </div>
    </main>
  );
}
