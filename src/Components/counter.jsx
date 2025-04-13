// Components/Counter.jsx
import { useEffect, useState } from "react";

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / (duration / 50);
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev + increment >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + increment;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [target, duration]);

  return <span>{Math.floor(count)}</span>;
};

export default Counter;
