import React from "react";
import { LoadingSVG } from "../SVG";

function Loading() {
  return (
    <div className="p-44">
      <div role="status">
        {LoadingSVG}
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
