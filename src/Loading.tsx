import  { useEffect, useState } from "react";

function Loading() {
  const [loading, setLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Hello!!", "Hola!!", "Bonjour!!", "Hallo!!", "Ciao!!", "Namaste!!", "こんにちは!!", "안녕하세요!!", "Привет!!", "مرحبا!!"];

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Prevent scrolling
    
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 100);

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto"; // Restore scrolling
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(textInterval);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="flex flex-col justify-center items-center h-screen fixed inset-0 bg-[#0d0d0d] text-white z-[100] p-4">
      <span className="text-xs sm:text-sm uppercase tracking-[0.5rem] text-gray-400">Loading</span>
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-semibold text-center mt-0 sm:mt-6 md:mt-8 lg:mt-0 xl:mt-0">
      {texts[textIndex]}</h1>
      <p className="mt-2 sm:mt-[1rem] text-gray-400 text-center max-w-lg text-sm sm:text-base">
        Please wait while we load the experience for you.
      </p>
    </div>
  );
}

export default Loading;
