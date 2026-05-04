export function CloudyBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #FFF0F5 0%, #F3E8FF 100%)'
        }} 
      /> 

      <svg
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(20px)' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cloud-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FFF0F5', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: '#F3E8FF', stopOpacity: 0.4 }} />
          </linearGradient>
          <linearGradient id="cloud-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#F3E8FF', stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: '#FFF0F5', stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>

        <ellipse
          cx="15%"
          cy="20%"
          rx="250"
          ry="180"
          fill="url(#cloud-gradient-1)"
          className="animate-float"
        />

        <ellipse
          cx="85%"
          cy="30%"
          rx="200"
          ry="150"
          fill="url(#cloud-gradient-2)"
          className="animate-float-delayed"
        />

        <ellipse
          cx="10%"
          cy="70%"
          rx="180"
          ry="200"
          fill="url(#cloud-gradient-1)"
          className="animate-float"
        />

        <ellipse
          cx="90%"
          cy="80%"
          rx="220"
          ry="160"
          fill="url(#cloud-gradient-2)"
          className="animate-float-delayed"
        />

        <ellipse
          cx="50%"
          cy="50%"
          rx="300"
          ry="250"
          fill="url(#cloud-gradient-1)"
          opacity="0.3"
          className="animate-float"
        />
      </svg>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 10s ease-in-out infinite;
          animation-delay: -3s;
        }
      `}</style>
    </div>
  );
}
