import { createContext } from "react";
import useMission from "../hooks/useMission";

export const MissionContext = createContext();

const MissionContextProvider = ({ children }) => {
  const allContext = useMission();
  return (
    <MissionContext.Provider value={allContext}>
      {children}
    </MissionContext.Provider>
  );
};

export default MissionContextProvider;
