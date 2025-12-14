export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
      
      {/* GLOW ARC */}
      <div className="absolute bottom-[-120px] w-[600px] h-[300px] rounded-full
        bg-purple-500/30 blur-[120px]" />

      <div className="absolute bottom-[-60px] w-[420px] h-[180px]
        border-t border-purple-400/40 rounded-t-full" />

      {/* CONTENT */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6
        bg-gradient-to-r from-purple-300 via-pink-400 to-purple-500
        bg-clip-text text-transparent">
        Experience Sweetness
      </h1>

      <p className="text-gray-400 max-w-xl mb-8">
        Discover delightful sweets, candies and desserts crafted for the future.
      </p>

      <div className="flex gap-4">
        <a
          href="/register"
          className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition shadow-lg shadow-purple-500/30"
        >
          Get Started
        </a>
        
        <a
          href="/login"
          className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
        >
          Login
        </a>
      </div>
    </div>
  );
}
