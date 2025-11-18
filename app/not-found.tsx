import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#FFCE21] p-4">
            <h2 className="text-3xl font-bold text-[#091529] mb-4">404 - Page Not Found</h2>
            <p className="text-[#091529] mb-6">The page you are looking for does not exist.</p>
            <Link
                href="/"
                className="px-6 py-2 bg-[#091529] text-white rounded-md hover:opacity-90 transition"
            >
                Return Home
            </Link>
        </div>
    );
}

