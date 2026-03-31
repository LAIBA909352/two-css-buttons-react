import { useState } from "react";

export default function NeumorphismButtons() {
  const [active, setActive] = useState(null);

  return (
    <>
    <div className="container">
      <button
        className={`btn-1 ${active === 1 ? "active-1" : ""}`}
        onClick={() => setActive(1)}
      >
        Click Me
      </button>

      <button
        className={`btn-2 ${active === 2 ? "active-2" : ""}`}
        onClick={() => setActive(2)}
      >
        Click Me
      </button>
    </div>
    </>
  );
}