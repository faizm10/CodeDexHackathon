"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Result = [string, number];

export interface ApiResponse {
  badminton: {
    mens_singles_results: Result[];
    mens_doubles_results: Result[];
    womens_singles_results: Result[];
    womens_doubles_results: Result[];
    mixed_doubles_results: Result[];
  };
  basketball: {
    mens_results: Result[];
    womens_results: Result[];
  };
  football: {
    mens_results: Result[];
    womens_results: Result[];
  };
}

const useResultsData = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/results");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  return { data, error };
};

export default useResultsData;
