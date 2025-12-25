import  { FC } from "react";

const WhatsAppButton: FC = () => {
  const phoneNumber: string = "33651086871";
  const message: string = encodeURIComponent(
    "Bonjour 👋 Je souhaiterais bénéficier de vos conseils afin d’identifier les assurances les mieux adaptées à mes besoins. Merci par avance."
  );

  return (
    <>
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Contacter sur WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          style={{ width: "32px", height: "32px" }}
        >
          <path d="M16 0C7.2 0 0 7.1 0 15.9c0 2.8.7 5.4 2 7.8L0 32l8.5-2.2c2.3 1.2 4.9 1.8 7.5 1.8 8.8 0 16-7.1 16-15.9C32 7.1 24.8 0 16 0zm0 29c-2.4 0-4.7-.6-6.7-1.7l-.5-.3-5 1.3 1.3-4.9-.3-.5c-1.1-2-1.7-4.3-1.7-6.7C3.1 8.5 9 2.6 16 2.6s12.9 5.9 12.9 13.3S23 29 16 29zm7.3-9.9c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.9.2s-1 1.2-1.2 1.4c-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3.1-2-1.2-1.1-2-2.5-2.2-2.9-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.3-.4.4-.6.1-.2 0-.4 0-.6s-.9-2.1-1.2-2.9c-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.2.8.4 1.4.6 1.9.8.8.3 1.6.3 2.2.2.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5z" />
        </svg>
        <span className="whatsapp-tooltip">💬 Besoin d’aide ?</span>
      </a>

      <style>{`
        .whatsapp-button {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 64px;
          height: 64px;
          background-color: #25d366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s, background-color 0.3s;
          cursor: pointer;
          z-index: 50;
          animation: gentlePulse 2s ease-in-out infinite;
        }

        .whatsapp-button:hover {
          background-color: #1ebe5d;
        }

        .whatsapp-tooltip {
          position: absolute;
          right: 100%;
          margin-right: 10px;
          background-color: #25d366;
          color: white;
          font-size: 14px;
          font-weight: 500;
          padding: 6px 10px;
          border-radius: 6px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transform: translateX(10px);
          transition: all 0.3s ease;
        }

        .whatsapp-button:hover .whatsapp-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        @keyframes gentlePulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
