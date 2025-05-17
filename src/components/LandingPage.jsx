import React from 'react';
import { useState } from 'react';
import Room from './Room';
import { useNavigate } from 'react-router-dom';

function LandingPage(){
    const navigate = useNavigate();
    const [roomCode,setRoomCode] = useState('');

    const handleCreateRoom = () =>{
        const new_roomId = Math.random().toString(36).substring(2, 8).toUpperCase();
        setRoomCode(new_roomId);
        console.log(`Room created with ID: ${new_roomId}`)
        localStorage.setItem('roomId', new_roomId);
        alert(`Room created with ID: ${new_roomId}`);
        navigate('/room');
    }
    
    return (
        <div className='flex flex-col items-center justify-center h-screen text-white bg-gradient-to-r from-orange-400 to-orange-200'>
            <h1 className='px-10 mb-3.5 md:p-4 text-8xl font-bold'>Welcome to Sync-Beats</h1>
            <p className='text-xl mb-8 text-[#a0522d] drop-shadow-md drop-shadow-yellow-600/80'>Your ultimate music synchronization tool.</p>
            <div className='flex space-x-4'>
                <button className='border p-3 bg-[#ff7e5f] rounded-2xl cursor-pointer shadow-xl' onClick={handleCreateRoom}>Create Room</button>
                <button className='border p-3 bg-[#ff7e5f] rounded-2xl cursor-pointer shadow-xl'>Join Room</button>
            </div>
        </div>
    )
}

export default LandingPage;