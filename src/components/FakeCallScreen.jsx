import { useEffect, useRef, useState } from "react";

const FAKE_NUMBERS = {
  Mom: "(555) 123-4567",
  Boss: "(555) 867-5309",
  "Unknown Number": "+44 7911 123456",
  "Best Friend": "(555) 987-6543",
};

const FakeCallScreen = ({ caller = "Unknown Number", onEnd }) => {
  const audioRef = useRef(null);
  const [answered, setAnswered] = useState(false);

  const displayName = caller;
  const phoneNumber = FAKE_NUMBERS[caller] || "Unknown Number";

  useEffect(() => {
    if (audioRef.current && !answered) {
      audioRef.current.play().catch(() => {});
    }
  }, [answered]);

  const handleAnswer = () => {
    setAnswered(true);
    audioRef.current?.pause();
  };

  const handleDecline = () => {
    audioRef.current?.pause();
    onEnd?.();
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      backgroundColor: '#000000',
      color: 'white'
    }}>
      <audio ref={audioRef} loop>
        <source src="/ringtone.mp3" type="audio/mpeg" />
      </audio>

      <div style={{
        width: '100%',
        maxWidth: '400px',
        backgroundColor: '#18181B',
        border: '2px solid #10B981',
        borderRadius: '24px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '700px'
      }}>
        {!answered ? (
          <>
            {/* Incoming Call */}
            <div style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              flex: 1,
              gap: '32px'
            }}>
              <div style={{
                width: '160px',
                height: '160px',
                margin: '0 auto',
                background: 'linear-gradient(to bottom right, #374151, #1F2937)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                fontWeight: 'bold',
                border: '6px solid #4B5563',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
              }}>
                {displayName.charAt(0)}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  margin: '0',
                  color: 'white'
                }}>{displayName}</h2>
                <p style={{
                  fontSize: '1.125rem',
                  color: '#9CA3AF',
                  margin: '0'
                }}>{phoneNumber}</p>
                <p style={{
                  fontSize: '1.25rem',
                  color: '#10B981',
                  margin: '0',
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                }}>📞 Incoming Call...</p>
              </div>
            </div>

            {/* Answer / Decline */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: '40px',
              gap: '40px'
            }}>
              <button
                onClick={handleDecline}
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#DC2626',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'white',
                  border: '3px solid #EF4444',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: '0 8px 20px rgba(220, 38, 38, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#B91C1C';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#DC2626';
                  e.target.style.transform = 'scale(1)';
                }}
                onMouseDown={(e) => {
                  e.target.style.transform = 'scale(0.95)';
                }}
                onMouseUp={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                }}
              >
                ❌
              </button>
              <button
                onClick={handleAnswer}
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#059669',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'white',
                  border: '3px solid #10B981',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: '0 8px 20px rgba(5, 150, 105, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#047857';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#059669';
                  e.target.style.transform = 'scale(1)';
                }}
                onMouseDown={(e) => {
                  e.target.style.transform = 'scale(0.95)';
                }}
                onMouseUp={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                }}
              >
                ✅
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Connected Call */}
            <div style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              flex: 1,
              gap: '32px'
            }}>
              <div style={{
                width: '160px',
                height: '160px',
                margin: '0 auto',
                backgroundColor: '#065F46',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                fontWeight: 'bold',
                border: '6px solid #10B981',
                boxShadow: '0 10px 25px rgba(16, 185, 129, 0.4)'
              }}>
                {displayName.charAt(0)}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  margin: '0',
                  color: 'white'
                }}>{displayName}</h2>
                <p style={{
                  fontSize: '1.25rem',
                  color: '#10B981',
                  fontWeight: '500',
                  margin: '0'
                }}>Connected...</p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px'
                }}>
                  <span style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#10B981',
                    borderRadius: '50%',
                    animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
                  }}></span>
                  <span style={{
                    fontSize: '1.125rem',
                    color: '#9CA3AF'
                  }}>00:05</span>
                </div>
              </div>
            </div>

            {/* End Call */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '40px'
            }}>
              <button
                onClick={onEnd}
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#DC2626',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  color: 'white',
                  border: '3px solid #EF4444',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: '0 8px 20px rgba(220, 38, 38, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#B91C1C';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#DC2626';
                  e.target.style.transform = 'scale(1)';
                }}
                onMouseDown={(e) => {
                  e.target.style.transform = 'scale(0.95)';
                }}
                onMouseUp={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                }}
              >
                📞
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FakeCallScreen;