"use client";

import axios from 'axios';
import { useState } from 'react';
import KeywordChart from './keywordchart';

const AddKeywordForm = () => {
  const [name, setName] = useState('');
  const [searchVolume, setSearchVolume] = useState(0);
  const [ranking, setRanking] = useState(0);
  const [ctr, setCtr] = useState(0.0);
  const [error, setError] = useState<string>("");
  const [keywordId, setKeywordId] = useState<string | null>(null);


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/keyword', {
        name,
        searchVolume,
        ranking,
        ctr
      });
      console.log('Keyword added:', res.data);
      // Assuming the response data contains the id of the added keyword
      setKeywordId(res.data.id); // Set the keywordId here
    } catch (error) {
      console.error('Failed to add keyword', error);
    }
  };
  

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Keyword" />
      <input value={searchVolume} onChange={(e) => setSearchVolume(Number(e.target.value))} placeholder="Search Volume" />
      <input value={ranking} onChange={(e) => setRanking(Number(e.target.value))} placeholder="Ranking" />
      <input value={ctr} onChange={(e) => setCtr(Number(e.target.value))} placeholder="CTR" />
      <button type="submit">Add Keyword</button>
    </form>
    {error && <p className="text-red-500">{error}</p>}
    {keywordId && <KeywordChart id={keywordId} />}
    </div>
  );
};

export default AddKeywordForm;
