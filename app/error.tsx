"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#FFCE21] p-4">
            <h2 className="text-2xl font-bold text-[#091529] mb-4">Something went wrong!</h2>
            <p className="text-[#091529] mb-6">{error.message || "An unexpected error occurred"}</p>
            <button
                onClick={reset}
                className="px-6 py-2 bg-[#091529] text-white rounded-md hover:opacity-90 transition"
            >
                Try again
            </button>
        </div>
    );
}

