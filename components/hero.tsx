'use client'
import { searchLandlords } from "@/app/api/actions";

import { useState } from "react"

export default function Hero() {
    const [inputData, updateInputData] = useState('')
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        searchLandlords(inputData);
    }
    return (
        <div className="w-full flex flex-col justify-center items-center gap-5">
            <h1 className="md:text-6xl text-3xl text-center font-semibold">Get information on a landlord.</h1>
            <form>
                <div className="flex justify-center items-center gap-2">
                    <input
                        className="rounded-xl p-2 drop-shadow-lg border border-gray-400 focus:outline-none"
                        placeholder="Search by name or location"
                        onChange={e => updateInputData(e.target.value)}
                        value={inputData}
                        name="search"
                    />
                    <button
                        className="rounded-xl p-2 text-center bg-lime-400 drop-shadow-lg hover:scale-105 transition-all duration-200"
                        onClick={handleSubmit}
                        type="submit"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}