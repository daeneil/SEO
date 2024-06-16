"use client";

import axios from "axios";
import { useState } from "react";

const AddBackLinkForm = () => {
  const [url, setUrl] = useState("");
  const [domain, setDomain] = useState("");
  const [authority, setAuthority] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/backlinks", {
        url,
        domain,
        authority,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Backlink URL"
      />
      <input
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        placeholder="Domain"
      />
      <input
        value={authority}
        onChange={(e) => setAuthority(Number(e.target.value))}
        placeholder="Authority"
      />
      <button type="submit">Add Backlink</button>
    </form>
  );
};

export default AddBackLinkForm;
