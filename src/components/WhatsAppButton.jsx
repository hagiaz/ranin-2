import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      {showBubble && (
        <div className="bg-white text-gray-800 text-sm font-medium py-2 px-3 rounded-xl shadow-md animate-fadeIn">
          💬 Punya pertanyaan?
        </div>
      )}

      <a
        href="https://wa.me/6281297551225"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
        onMouseEnter={() => setShowBubble(true)}
        onMouseLeave={() => setShowBubble(false)}
      >
        <FaWhatsapp className="w-6 h-6" />

        {!showBubble && (
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-sm font-medium py-1 px-2 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            💬 Punya pertanyaan?
          </span>
        )}
      </a>
    </div>
  );
}
