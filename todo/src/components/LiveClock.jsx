import React, { useState, useEffect } from "react";

function LiveClock() {
  const [time, setTime] = useState(new Date().toLocaleString());

  

  return <div className="text-xl font-bold text-white">{time}</div>;
}

export default LiveClock;
