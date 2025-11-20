import React from "react";
import { useState } from "react";
import ArticleRow from "./Articlerow";

const Articales = ({ articles, onDelete, onUpvote,onAdd }) => {
  const [sortType, setSortType] = useState("upvotes");

  const sortedArticles = [...articles].sort((a, b) => {
    if (sortType === "upvotes") {
      return b.upvotes - a.upvotes;
    }
    if (sortType === "recent") {
      return b.id - a.id;
    }
    return 0;
  });

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
        <h2 className="text-2xl font-bold text-white">Articles List</h2>
      </div>

      {/* Sorting Buttons */}
      <div className="p-6 border-b border-gray-200 flex gap-4 flex-wrap">
        <button 
          onClick={() => setSortType("upvotes")}
          className={`px-6 py-2 rounded-lg font-semibold transition duration-300 transform hover:scale-105 ${
            sortType === "upvotes"
              ? "bg-purple-600 text-white shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          👍 Sort by Upvotes
        </button>

        <button 
          onClick={() => setSortType("recent")}
          className={`px-6 py-2 rounded-lg font-semibold transition duration-300 transform hover:scale-105 ${
            sortType === "recent"
              ? "bg-purple-600 text-white shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          🕐 Sort by Recent
        </button>
      </div>

      {/* Articles Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b-2 border-purple-600">
              <th className="px-6 py-4 text-left font-bold text-gray-700">Title</th>
              <th className="px-6 py-4 text-left font-bold text-gray-700">Upvotes</th>
              <th className="px-6 py-4 text-left font-bold text-gray-700">Date</th>
              <th className="px-6 py-4 text-left font-bold text-gray-700">Actions</th>
            </tr>
          </thead>

          <tbody>
            {sortedArticles.map((article, index) => (
              <ArticleRow 
                key={article.id}
                article={article}
                onUpvote={onUpvote}
                onDelete={onDelete}
                isEven={index % 2 === 0}
                onAdd={onAdd}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {articles.length === 0 && (
        <div className="p-8 text-center text-gray-500">
          <p className="text-lg">No articles yet. Add one to get started! 📝</p>
        </div>
      )}
    </div>
  )
};

export default Articales;
