import axios from "axios";
import { useEffect, useState } from "react";

const useMission = () => {
  const [missions, setMissions] = useState([]);
  const [loadingMissions, setLoadingMissions] = useState(false);

  const getAllMissions = async () => {
    setLoadingMissions(true);
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/mission/get-all`);
      if (res.data) {
        setMissions(res.data);
        setLoadingMissions(false);
      }
    } catch (error) {
      console.log(error);
      setLoadingMissions(false);
    }
  };

  

  useEffect(() => {
    getAllMissions();
  }, []);

  return {
    missions,
    setMissions,
    getAllMissions,
    loadingMissions
  };
};

export default useMission;
