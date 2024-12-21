"use client";

import React from "react";
import useResultsData, { ApiResponse } from "@/components/DataComponents/resultsData";
import "./styles.css";

const Badminton: React.FC = () => {
  const { data, error } = useResultsData();

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const renderTable = (title: string, results: [string, number][]) => (
    <div className="results-container">
      <h2>{title}</h2>
      <table className="standings-table font-sans">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {results.map(([country, score], index) => (
            <tr key={index} className={`standing standing-${index + 1}`}>
              <td>{index + 1}</td>
              <td>{country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div
      className="container bg-gradient-to-r from-purple-400 to-blue-500"
      id="output"
    >
      <h1 className="title font-bold text-white font-sans">
        Olympic Prediction 2024
      </h1>
      <div className="results">
        {renderTable(
          "Men's Singles Badminton Predicted Standings",
          data.badminton.mens_singles_results
        )}
        {renderTable(
          "Men's Doubles Badminton Predicted Standings",
          data.badminton.mens_doubles_results
        )}
        {renderTable(
          "Women's Singles Badminton Predicted Standings",
          data.badminton.womens_singles_results
        )}
        {renderTable(
          "Women's Doubles Badminton Predicted Standings",
          data.badminton.womens_doubles_results
        )}
        {renderTable(
          "Mixed Doubles Badminton Predicted Standings",
          data.badminton.mixed_doubles_results
        )}
        {renderTable(
          "Men's Basketball Predicted Standings",
          data.basketball.mens_results
        )}
        {renderTable(
          "Women's Basketball Predicted Standings",
          data.basketball.womens_results
        )}
        {renderTable(
          "Men's Football Predicted Standings",
          data.football.mens_results
        )}
        {renderTable(
          "Women's Football Predicted Standings",
          data.football.womens_results
        )}
      </div>
    </div>
  );
};

export default Badminton;
