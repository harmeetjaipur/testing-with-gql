import React from 'react'

const Loading: React.FC = () => (
    <div className="flex items-center justify-center min-h-screen bg-darkblue-900">
        <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
            <p className="mt-4 text-lg font-semibold text-blue-300">Loading...</p>
        </div>
    </div>
);

export default Loading;