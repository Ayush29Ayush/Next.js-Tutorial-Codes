"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
    return (
        <div>
            {/* <h2>ErrorBoundary: Error in Review</h2> */}
            <p>{error.message}</p>
        </div>
    );
}