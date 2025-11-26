import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-6 text-center">
      <h1 className="text-[8rem] font-bold text-blue mb-6">404</h1>
      <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4">
        Page Not Found
      </h2>
      <p className="text-lg md:text-xl text-accent mb-8 max-w-xl">
        Oops! The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link href="/" className="btn-primary-color px-6 py-3 rounded-lg text-white-foreground text-lg font-medium hover:bg-blue-700 transition">
        Go Back Home
      </Link>

      {/* Optional decorative shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-blue-background rounded-full opacity-20 animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-background rounded-full opacity-15 animate-bounce-slow"></div>
    </div>
  );
}