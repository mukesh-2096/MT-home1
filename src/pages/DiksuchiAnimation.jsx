import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DiksuchiAnimation() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      navigate("/home", { replace: true });
    }, 2200);
    return () => window.clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h1 style={styles.text} className="diksuchi-text">
        Diksuchi
      </h1>
      <button
        type="button"
        onClick={() => navigate("/home")}
        style={styles.skipButton}
        className="skip-intro"
        aria-label="Skip intro"
      >
        Skip
      </button>
      <style>
        {`
          .diksuchi-text {
            animation: fadeSlide 1.4s ease-out forwards,
              glow 2.5s ease-in-out infinite alternate;
          }

          .skip-intro:hover {
            background: rgba(37, 99, 235, 0.16);
            color: #1d4ed8;
            transform: translateY(-1px);
          }

          @keyframes fadeSlide {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes glow {
            from {
              text-shadow: 0 0 5px rgba(37, 99, 235, 0.3);
            }
            to {
              text-shadow: 0 0 18px rgba(37, 99, 235, 0.7);
            }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  text: {
    fontSize: "64px",
    fontWeight: "700",
    color: "#2563EB", // blue
    fontFamily: "Poppins, Arial, sans-serif",
    letterSpacing: "2px",
  },
  skipButton: {
    position: "absolute",
    top: "32px",
    right: "32px",
    padding: "10px 20px",
    borderRadius: "999px",
    border: "1px solid rgba(37, 99, 235, 0.25)",
    background: "rgba(255,255,255,0.9)",
    color: "#1e3a8a",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
};
