import React, { useState, useEffect } from 'react';

function LinearProgressWithLabel({ value, color }) {
  const progressStyle = {
    width: `${value}%`,
    backgroundColor: color,
    height: '10px',
    borderRadius: '5px',
    transition: 'width 0.8s ease-in-out',
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1, marginRight: '10px', backgroundColor: '#dde6ed', borderRadius: '5px', overflow: 'hidden' }}>
        <div style={progressStyle}></div>
      </div>
      <span style={{ minWidth: '35px', color: '#6c757d', fontSize: '14px' }}>
        {`${Math.round(value)}%`}
      </span>
    </div>
  );
}

export default function LinearWithValueLabel() {
  const [progress, setProgress] = useState(10);
  const [color, setColor] = useState('#526d82'); // Default bar color
  const targetProgress = 80; // Target progress percentage

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= targetProgress) {
          setColor('#3a4f61'); // Change color at target
          clearInterval(timer); // Stop progress
          return prevProgress; // Maintain progress
        }
        return prevProgress + 10; // Increment progress
      });
    }, 800);

    return () => clearInterval(timer); // Cleanup interval
  }, []);

  return (
    <div style={{ width: '100%', padding: '10px' }}>
      <LinearProgressWithLabel value={progress} color={color} />
    </div>
  );
}
