import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      {loading ? (
        <div className={fadeOut ? "fade-out" : ""}>
          <Loader />
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
        </>
      )}
    </>
  );
}
