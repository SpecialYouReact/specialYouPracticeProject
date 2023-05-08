import React from "react";

const Line = (props) => {
  const { marginBottom } = props;
  return (
    <hr
      style={{
        border: "1px solid rgba(92, 92, 92, 0.2)",
        marginBottom: `${marginBottom}`,
      }}
    />
  );
};

export default Line;
