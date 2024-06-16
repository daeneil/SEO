"use client";

import React, { useState } from "react";
import axios from "axios";
import { PlaceholdersAndVanishInput } from "./globals/placeholders-and-vanish-input";
import { ScrollMap } from "./scrollmap"; // Make sure the path is correct

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [submittedUrl, setSubmittedUrl] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setError(""); // Clear error on new input
  };

  const validateURL = (url: string) => {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate the protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i" // fragment locator
    );
    return !!urlPattern.test(url);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !validateURL(inputValue)) {
      e.preventDefault();
      setError("Please enter a valid URL.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateURL(inputValue)) {
      setError("Please enter a valid URL.");
      return;
    }
    console.log("submitted");

    try {
      await axios.post("/api/submit-url", { url: inputValue });
      console.log("URL saved successfully!");
      setSubmittedUrl(inputValue); // Set the submitted URL to the state
    } catch (error) {
      console.error("Failed to save URL:", error);
    }
  };

  return (
    <section>
      <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
        <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
          Paste A Website URL
        </h2>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          onSubmit={handleSubmit}
        />
        {error && <p className="text-red-500">{error}</p>}
        {submittedUrl && <ScrollMap url={submittedUrl} />} {/* Render ScrollMap when URL is submitted */}
      </div>
    </section>
  );
}
