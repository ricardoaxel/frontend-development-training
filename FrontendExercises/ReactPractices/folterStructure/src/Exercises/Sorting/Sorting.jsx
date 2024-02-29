import React, { useEffect, useState } from "react";
import "./Sorting.css"
import { Articles } from "./Articles";

const title = "React Sorting articles";

const ARTICLES = [
  {
    title: "A message to our customers",
    upvotes: 12,
    date: "2020-01-24",
  },
  {
    title: "Alphabet earnings",
    upvotes: 22,
    date: "2019-11-23",
  },
  {
    title: "Artificial Mountains",
    upvotes: 2,
    date: "2019-11-22",
  },
  {
    title: "Scaling to 100k Users",
    upvotes: 72,
    date: "2019-01-21",
  },
  {
    title: "the Emu War",
    upvotes: 24,
    date: "2019-10-21",
  },
  {
    title: "What's SAP",
    upvotes: 1,
    date: "2019-11-21",
  },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 7,
    date: "2010-12-31",
  },
];

export function Sorting({ articles = ARTICLES }) {

  const sortedByUpVotes = [...articles.sort((a, b) => a.upvotes - b.upvotes)]
  const [articlesList, setArticlesList] = useState(sortedByUpVotes);

  const orderBy = (type) => setArticlesList(type == "upvotes" 
    ? sortedByUpVotes
    : [...articles.sort((a, b) => new Date(a.date) - new Date(b.date))]
  )
  
  return (
    <div className="App">
      <h1> {title} </h1>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={() => orderBy("upvotes")}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={() => orderBy("date")}
        >
          Most Recent
        </button>
      </div>
      {articles.length > 0 && <Articles articles={articlesList} />}
     
    </div>
  );
}
