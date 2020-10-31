import React from "react";

const Message = React.memo(({ text }) => {
  return (
    <div className="text-center padding-y-lg">
      <h4 className="color-contrast-high">{text}</h4>
    </div>
  );
});

export default Message;
