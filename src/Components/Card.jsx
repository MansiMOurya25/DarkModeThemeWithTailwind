import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" 
                src='data:image/png;base64,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'
                
                />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Lets Learn how to add darkMode in card
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        course price
                    </a>
                </div>
            </div>
        </div>
    );
}