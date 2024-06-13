import React from "react";
import { useState } from "react";

const ShowHideToggleContent = () => {
  const [showTitle, setShowTitle] = useState(true);

  const toggleTitle = () => {
    setShowTitle(!showTitle);
  };

  return (
    <div>
      <button onClick={toggleTitle}>Show/ Hide Me</button>
      {showTitle && <h1>Hello World!</h1>}
    </div>
  );
};

export default ShowHideToggleContent;
