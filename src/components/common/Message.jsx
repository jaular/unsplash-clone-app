import React from "react";

const Message = ({ text }) => {
  return (
    <div className="text-center padding-y-xxl margin-bottom-xxl">
      <h4 className="color-contrast-high">{text}</h4>
    </div>
  );
};

export default Message;
