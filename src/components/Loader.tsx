import React from "react";
import { ColorRing } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#ffdadd", "#ff868e", "#ffd280", "#97eab9", "#b3b7ff"]}
      />
    </div>
  );
}
