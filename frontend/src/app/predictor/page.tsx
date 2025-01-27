"use client";

import React from "react";
import useResultsData, { ApiResponse } from "@/components/DataComponents/resultsData";
import "./styles.css";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Progress } from "@/components/ui/progress";

const Badminton: React.FC = () => {
  const { data, error } = useResultsData();

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div className="container">Loading....</div>;
  }

  const renderTable = (title: string, results: [string, number][]) => (
    <div className="results-container">
      <h2>{title}</h2>
      <Table className="standings-table font-sans">
        <TableHeader>
          <TableRow>
            <TableHead>Rank</TableHead>
            <TableHead>Country</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map(([country, score], index) => (
            <TableRow key={index} className={`standing standing-${index + 1}`}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
