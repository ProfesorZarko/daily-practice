import { useState, useEffect } from "react";

export default function Greeting() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <h2>
      Zdravo, Žarko! 👋<br />
      Trenutno vreme je: {time}
    </h2>
  );
}
