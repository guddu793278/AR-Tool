import React, { useState, useRef } from "react";

export default function App() {
  const videoRef = useRef(null);
  const [cameraActive, setCameraActive] = useState(false);

  const startCamera = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        setCameraActive(true);
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <h1 className='text-3xl font-bold mb-4'>Luggage AR Assistant</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='bg-white p-4 shadow rounded'>
          <h2 className='text-xl font-semibold mb-2'>Scan Trunk</h2>
          <p className='mb-4'>Use your camera to scan your car trunk and let the system analyze space.</p>
          <button className='bg-blue-600 text-white px-4 py-2 rounded' onClick={startCamera}>Start Scan</button>
          {cameraActive && <video ref={videoRef} autoPlay playsInline className='mt-4 w-full h-auto rounded shadow' />}
        </div>
        <div className='bg-white p-4 shadow rounded'>
          <h2 className='text-xl font-semibold mb-2'>AR Loading Assistance</h2>
          <p className='mb-4'>Get augmented reality guidance to ease luggage loading.</p>
          <button className='bg-green-600 text-white px-4 py-2 rounded' onClick={() => alert('AR Assistant feature launching soon!')}>Launch AR Assistant</button>
        </div>
        <div className='bg-white p-4 shadow rounded'>
          <h2 className='text-xl font-semibold mb-2'>Visual Cues</h2>
          <p className='mb-4'>View visual stacking and placement suggestions for each item.</p>
          <button className='bg-purple-600 text-white px-4 py-2 rounded' onClick={() => alert('Visual plan feature launching soon!')}>Show Visual Plan</button>
        </div>
      </div>
    </div>
  );
}