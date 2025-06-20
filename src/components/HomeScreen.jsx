import { useState } from "react";

const HomeScreen = ({ onStart }) => {
  const [caller, setCaller] = useState("Mom");
  const [delay, setDelay] = useState(5);

  const handleStart = () => {
    onStart({ caller, delay });
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
      backgroundColor: '#111827'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        border: '1px solid #374151',
        borderRadius: '24px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        padding: '32px',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '600px'
      }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '16px',
            margin: '0 0 16px 0'
          }}>Escape </h1>
          <p style={{
            color: '#9CA3AF',
            fontSize: '1.125rem',
            margin: '0'
          }}>Customize your fake call below</p>
        </div>

        {/* Form */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          flexGrow: 1,
          justifyContent: 'center'
        }}>
          {/* Caller Selection */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '1.125rem',
              fontWeight: '500',
              color: '#D1D5DB',
              marginBottom: '16px'
            }}>Caller</label>
            <select
              value={caller}
              onChange={(e) => setCaller(e.target.value)}
              style={{
                width: '100%',
                padding: '20px',
                fontSize: '1.125rem',
                borderRadius: '16px',
                backgroundColor: '#1F2937',
                color: 'white',
                border: '2px solid #4B5563',
                outline: 'none',
                transition: 'all 0.2s'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#10B981';
                e.target.style.boxShadow = '0 0 0 4px rgba(16, 185, 129, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#4B5563';
                e.target.style.boxShadow = 'none';
              }}
            >
              <option>Mom</option>
              <option>Boss</option>
              <option>Unknown Number</option>
              <option>Best Friend</option>
            </select>
          </div>

          {/* Delay Selection */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '1.125rem',
              fontWeight: '500',
              color: '#D1D5DB',
              marginBottom: '16px'
            }}>Delay (seconds)</label>
            <select
              value={delay}
              onChange={(e) => setDelay(Number(e.target.value))}
              style={{
                width: '100%',
                padding: '20px',
                fontSize: '1.125rem',
                borderRadius: '16px',
                backgroundColor: '#1F2937',
                color: 'white',
                border: '2px solid #4B5563',
                outline: 'none',
                transition: 'all 0.2s'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#10B981';
                e.target.style.boxShadow = '0 0 0 4px rgba(16, 185, 129, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#4B5563';
                e.target.style.boxShadow = 'none';
              }}
            >
              <option value={5}>5 seconds</option>
              <option value={10}>10 seconds</option>
              <option value={30}>30 seconds</option>
              <option value={60}>1 minute</option>
            </select>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleStart}
          style={{
            marginTop: '32px',
            width: '80%',
            padding: '24px',
            borderRadius: '16px',
            backgroundColor: '#059669',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            transition: 'all 0.2s',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            border: '2px solid #10B981',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#047857';
            e.target.style.borderColor = '#34D399';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#059669';
            e.target.style.borderColor = '#10B981';
          }}
          onMouseDown={(e) => {
            e.target.style.transform = 'scale(0.95)';
          }}
          onMouseUp={(e) => {
            e.target.style.transform = 'scale(1)';
          }}
        >
          EXECUTE Deploy Ghost Call
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;