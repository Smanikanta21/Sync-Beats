import React from "react";
export default function Room() {
    const roomId = localStorage.getItem('roomId');
    return(
        <div>
            <h1 className="text-4xl font-bold text-center mt-10">Room {roomId}</h1>
            <p className="text-center mt-4">This is the room page.</p>
            <div className="flex justify-center mt-8">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Start Sync</button>
            </div>
        </div>
    )
}