"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

interface Keyword {
  id: string;
  name: string;
  searchVolume: number;
  ranking: number;
  ctr: number;
  createdAt: string;
  updatedAt: string;
}

interface KeywordChartProps {
  id: string; // Assuming id is passed as a prop
}

const KeywordChart: React.FC<KeywordChartProps> = ({ id }) => {
  const [keywordData, setKeywordData] = useState<Keyword | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (id) {
      fetchKeywordData(id);
    }
  }, [id]);

  const fetchKeywordData = async (id: string) => {
    try {
      const response = await axios.get("/api/test", { params: { id } });
      console.log("Fetched data:", response.data); // Log fetched data
      setKeywordData(response.data);
      setError("");
    } catch (error) {
      console.error("Failed to fetch keyword data:", error);
      setError("Failed to fetch keyword data.");
    }
  };

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!keywordData) {
    return (
      <div className="flex flex-col items-center">
        <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
          ID: {id}
        </h2>
        <p>Loading...</p>
      </div>
    );
  }

  const chartData = [
    {
      name: keywordData.name,
      ranking: keywordData.ranking,
    },
  ];

  console.log("Chart data:", chartData); // Log chart data

  return (
    <div className="keyword-chart-container">

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="ranking" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      <div>Hello World</div>
    </div>
  );
};

export default KeywordChart;
