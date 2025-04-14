import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const BotPage = () => {

  const API_KEY = "YOUR_API_KEY";


  const Response = async (PROMPT) => {
    try {
      const data = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1:free",
          temperature: 0.8,
          messages: [
            {
              role: "system",
              content: "You are a Gen Z slang expert. Whenever a user sends a normal sentence, you must translate it into a fun, casual, Gen Z style response. Use slang, abbreviations, memes, emojis, and humor naturally. Keep it understandable but vibey and short. Make sure it feels like a cool Gen Z friend is casually replying. Do not just paraphrase — transform the vibe while keeping the original meaning .",
            },
            {
              role: "user",
              content: PROMPT,
            },
          ],
        }),
      });

      const responseData = await data.json(); 

      if (responseData?.choices?.[0]?.message?.content) {
        setOutputText(responseData.choices[0].message.content); 
      } else {
        toast.error("No response from API");
      }
    } catch (e) {
      toast.error("An error occurred");
    }
  };
  const handleCopy = () => {
    if (outputText.trim()) {
      navigator.clipboard.writeText(outputText)
        .then(() => {
          toast.success("Text copied to clipboard! 🎉");
        })
        .catch(err => {
          toast.error("Failed to copy text 😢");
        });
    }
  };

  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConvert = () => {
    if (!inputText.trim()) {
      setOutputText("👀 Bro, type *something* first...");
      return;
    }

    setLoading(true);
    setOutputText('');
    Response(inputText).finally(() => setLoading(false));
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 flex flex-col items-center justify-center px-6 py-10 overflow-hidden relative">
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}

        className="w-full md:w-2/3 lg:w-1/2 bg-white/30 backdrop-blur-3xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 flex flex-col space-y-8 z-10 hover:scale-105 transition-transform duration-500"
      >
        <button
        onClick={handleCopy}
        className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg font-bold transition-all duration-300"
      >
        Copy to Clipboard ✂️
      </button>
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-center drop-shadow-lg leading-tight"
        >
          Gen Z Textify 🚀✨
        </motion.h1>

        {/* Input Area */}
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your boring ol' text here 👇"
          onKeyDown={(e)=>{
            if(e.key== "Enter"){
              handleConvert();
            }
          }}
          className="w-full p-4 rounded-2xl bg-white/40 focus:bg-white/60 focus:ring-4 focus:ring-pink-400 placeholder-gray-700 text-gray-900 font-semibold shadow-md transition-all duration-300 resize-none h-32 md:h-40"
        />

        {/* Convert Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleConvert}
          className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-pink-500/50 transition-all duration-300 text-lg tracking-wide"
        >
          Make it ✨ Gen Z ✨
        </motion.button>

        {/* Loading Spinner */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full text-center mt-4"
          >
<h1 className="text-4xl font-bold text-center  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 drop-shadow-lg animate-pulse">
  Hold up, it's loadin'...
</h1>
          </motion.div>
        )}

        {/* Output Area */}
        {outputText && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-white/50 backdrop-blur-xl p-6 rounded-2xl shadow-inner border border-white/20 text-center font-semibold text-lg md:text-xl text-gray-800"
          >
            {outputText}
          </motion.div>
        )}
      </motion.div>

      {/*Emoji */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 right-10 text-5xl"
      >
        🧃
      </motion.div>
    </section>
  );
};

export default BotPage;
