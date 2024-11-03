"use client";

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div>
            {/* <h2>ErrorBoundary: Error in Review</h2> */}
            <p>{error.message}</p>
            <button onClick={reset}>Try Again</button>
        </div>
    );
}