import { createContext, useState } from "react";

export const CtVis = createContext(null);

export const CtVisProvider = (props) => {
  const [ctStatus, setctStatus] = useState(0);

  return (
    <CtVis.Provider value={{ ctStatus, setctStatus }}>
      {props.children}
    </CtVis.Provider>
  );
};
