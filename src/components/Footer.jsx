import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex justify-center pb-10 pt-20">
        <p className="text-xs text-star-yellow">
          Created by{" "}
          <a
            className=" font-semibold hover:brightness-200"
            href="https://github.com/godricpursue"
          >
            godricpursue
          </a>{" "}
          2023
        </p>
      </div>
    </div>
  );
}

export default Footer;
