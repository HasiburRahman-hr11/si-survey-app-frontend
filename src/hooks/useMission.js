import axios from "axios";
import { useEffect, useState } from "react";

const useMission = () => {
  const [missions, setMissions] = useState([]);
  const getAllMissions = async () => {
    try {
      const res = await axios.get("http://localhost:8000/mission/get-all");
      if (res.data) {
        setMissions(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  

  useEffect(() => {
    getAllMissions();
  }, []);

  return {
    missions,
    setMissions,
    getAllMissions
  };
};

export default useMission;
