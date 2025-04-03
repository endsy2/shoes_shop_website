import { useEffect, useState } from "react";
import { dashboardHeaderAll, dashboardHeaderData, logoutFetch } from "../../Fetch/FetchAPI";
import { dashBoradMain_item } from "../../Constants";
import Cookies from "js-cookie";

const DashBoardHeader = () => {
  const [selectDate, setSelectDate] = useState("ALL");
  const [mergedData, setMergedData] = useState([]);

  const fetchDate = async () => {
    try {
      const response = await dashboardHeaderData(selectDate);
      const data = response.data || [];
      const merged = data.data.map((value, index) => ({
        ...(value || {}),
        ...(dashBoradMain_item[index] || {}),
        date: selectDate,
      }));
      setMergedData(merged);
    } catch (error) {
      console.error("Error fetching date data:", error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await logoutFetch();
      Cookies.remove("token");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAll = async () => {
    try {
      const response = await dashboardHeaderAll();
      const data = response.data || [];
      const merged = data.data.map((value, index) => ({
        ...(value || {}),
        ...(dashBoradMain_item[index] || {}),
        date: "ALL",
      }));
      setMergedData(merged);
    } catch (error) {
      console.error("Error fetching all data:", error);
    }
  };

  useEffect(() => {
    if (selectDate === "ALL") {
      fetchAll();
    } else {
      fetchDate();
    }
  }, [selectDate]);

  
};

export default DashBoardHeader;
