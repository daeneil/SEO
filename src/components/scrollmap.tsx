"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

interface ScrollMapProps {
  url: string;
}

interface ScrollData {
  labels: string[];
  data: number[];
}

export function ScrollMap({ url }: ScrollMapProps) {
  const [scrollData, setScrollData] = useState<ScrollData | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (url) {
      fetchScrollData(url);
    }
  }, [url]);

  const fetchScrollData = async (url: string) => {
    try {
      const response = await axios.get("/api/scroll-map", { params: { url } });
      setScrollData(response.data);
      setError("");
    } catch (error) {
      console.error("Failed to fetch scroll data:", error);
      setError("Failed to fetch scroll data.");
    }
  };

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!scrollData) {
    return (
      <div className="flex flex-col items-center">
        <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
          URL: {url}
        </h2>
        <p>Loading...</p>
      </div>
    );
  }

  const chartData = {
    labels: scrollData.labels,
    datasets: [
      {
        label: "Scroll Depth",
        data: scrollData.data,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Scroll Map",
      },
    },
  };

  return (
    <div className="scroll-map-container">
      <p className="mb-2">URL: {url}</p>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}
