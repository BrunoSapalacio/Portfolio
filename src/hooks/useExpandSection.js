import { useEffect, useState } from "react";

export const useExpandSection = (boolean) => {
  const [expand, setExpand] = useState();

  useEffect(() => {
    if (boolean === true) {
      setExpand({
        width: "100%",
        height: "100vh",
        margin: "0",
        zIndex: "2",
        position: "absolute",
      });
    } else {
      setExpand();
    }
  }, [boolean]);

  return expand;
};
