import React from 'react';

function ArticleRow({ article, onUpvote, onDelete, isEven }) {
  return (
    <tr className={`border-b transition duration-300 hover:bg-purple-50 ${isEven ? 'bg-gray-50' : 'bg-white'}`}>
      <td className="px-6 py-4 font-semibold text-gray-800">{article.title}</td>

      <td className="px-6 py-4">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">
          {article.upvotes}
        </span>
      </td>

      <td className="px-6 py-4 text-gray-600 text-sm">
        {new Date(article.id).toLocaleString()}
      </td>

      <td className="px-6 py-4 flex gap-2">
        <button 
          onClick={() => onUpvote(article.id)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
        >
          👍 Upvote
        </button>

        <button 
          onClick={() => onDelete(article.id)}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
        >
          🗑️ Delete
        </button>
      </td>
    </tr>
  );
}

export default ArticleRow;
