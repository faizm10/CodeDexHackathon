"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Result = [string, number];

interface ApiResponse {
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

const ResultsData = () => {
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

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Badminton Mens Singles Results</h2>
      <pre>{JSON.stringify(data.badminton.mens_singles_results, null, 2)}</pre>
      {/* <h2>Badminton Men's Doubles Results</h2>
      <pre>{JSON.stringify(data.badminton.mens_doubles_results, null, 2)}</pre>
      <h2>Badminton Women's Singles Results</h2>
      <pre>{JSON.stringify(data.badminton.womens_singles_results, null, 2)}</pre>
      <h2>Badminton Women's Doubles Results</h2>
      <pre>{JSON.stringify(data.badminton.womens_doubles_results, null, 2)}</pre>
      <h2>Badminton Mixed Doubles Results</h2>
      <pre>{JSON.stringify(data.badminton.mixed_doubles_results, null, 2)}</pre> */}

      <h2>Basketball Mens Results</h2>
      <pre>{JSON.stringify(data.basketball.mens_results, null, 2)}</pre>
      {/* <h2>Basketball Women's Results</h2>
      <pre>{JSON.stringify(data.basketball.womens_results, null, 2)}</pre> */}

      <h2>Football Mens Results</h2>
      <pre>{JSON.stringify(data.football.mens_results, null, 2)}</pre>
      {/* <h2>Football Women's Results</h2>
      <pre>{JSON.stringify(data.football.womens_results, null, 2)}</pre> */}
    </div>
  );
};

export default ResultsData;
