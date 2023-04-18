import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex justify-center pt-20 pb-10">
        <p className="text-star-yellow text-xs">
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
