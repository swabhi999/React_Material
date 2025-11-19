import React, { useState } from "react";

const FeedbackSystem = () => {
  const [count, setCount] = useState([
    { id: 1, title: "Readability", up: 0, down: 0 },
    { id: 2, title: "Performance", up: 0, down: 0 },
    { id: 3, title: "Security", up: 0, down: 0 },
    { id: 4, title: "testing", up: 0, down: 0 },
    { id: 5, title: "documentation", up: 0, down: 0 }
  ]);

  // Reusable vote handler
  const handleVote = (id, type) => {
    setCount((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, [type]: item[type] + 1 } // "up" or "down"
          : item
      )
    );
  };

  // Helper for stats of a single item
  const getStats = (id) => {
    const item = count.find((i) => i.id === id) || { up: 0, down: 0 };
    const total = item.up + item.down || 1;
    const positive = Math.round((item.up / total) * 100);
    const negative = 100 - positive;
    return { item, total, positive, negative };
  };
const { item: readability, total: totalR, positive: positiveR, negative: negativeR } = getStats(1);
const { item: performance, total: totalP, positive: positiveP, negative: negativeP } = getStats(2);
const { item: security,   total: totalS, positive: positiveS, negative: negativeS } = getStats(3);
const { item: testing,   total: totalT, positive: positiveT, negative: negativeT } = getStats(4);
const { item: documentation,total: totalD, positive: positiveD, negative: negativeD } = getStats(5);


  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-blue-50 py-12 px-4 ">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">
          Content Feedback System
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Readability Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm border-2 border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-linear-to-r from-purple-500 to-blue-500 text-white rounded-xl p-4 mb-6">
              <h2 className="text-2xl font-bold">Readability</h2>
            </div>

            <div className="flex justify-around gap-4 my-8">
              {/* ✅ Pass the id and type explicitly */}
              <button
                onClick={() => handleVote(1, "up")}
                className="flex-1 py-3 px-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                data-testid="upvote-btn-0"
              >
                👍 Upvote
              </button>

              <button
                onClick={() => handleVote(1, "down")}
                className="flex-1 py-3 px-6 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                data-testid="downvote-btn-0"
              >
                👎 Downvote
              </button>
            </div>

            <div className="space-y-4 mt-8">
              <div
                className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg"
                data-testid="upvote-count-0"
              >
                <p className="text-lg text-gray-700">
                  Upvotes:{" "}
                  <strong className="text-2xl text-green-600">
                    {readability.up}
                  </strong>
                </p>
              </div>

              <div
                className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"
                data-testid="downvote-count-0"
              >
                <p className="text-lg text-gray-700">
                  Downvotes:{" "}
                  <strong className="text-2xl text-red-600">
                    {readability.down}
                  </strong>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-2 border-gray-100">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Total Votes:</span>
                <strong className="text-xl text-purple-600">
                  {readability.up + readability.down}
                </strong>
              </div>

              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mb-2">
                  <div
                    className="h-full bg-green-500 transition-all duration-500"
                    style={{ width: `${positiveR}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{positiveR}% positive</span>
                  <span>{negativeR}% negative</span>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm border-2 border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-linear-to-r from-purple-500 to-blue-500 text-white rounded-xl p-4 mb-6">
              <h2 className="text-2xl font-bold">Performance</h2>
            </div>

            <div className="flex justify-around gap-4 my-8">
              {/* ✅ Pass the id and type explicitly */}
              <button
                onClick={() => handleVote(2, "up")}
                className="flex-1 py-3 px-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                data-testid="upvote-btn-0"
              >
                👍 Upvote
              </button>

              <button
                onClick={() => handleVote(2, "down")}
                className="flex-1 py-3 px-6 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                data-testid="downvote-btn-0"
              >
                👎 Downvote
              </button>
            </div>

            <div className="space-y-4 mt-8">
              <div
                className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg"
                data-testid="upvote-count-0"
              >
                <p className="text-lg text-gray-700">
                  Upvotes:{" "}
                  <strong className="text-2xl text-green-600">
                    {performance.up}
                  </strong>
                </p>
              </div>

              <div
                className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"
                data-testid="downvote-count-0"
              >
                <p className="text-lg text-gray-700">
                  Downvotes:{" "}
                  <strong className="text-2xl text-red-600">
                    {performance.down}
                  </strong>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-2 border-gray-100">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Total Votes:</span>
                <strong className="text-xl text-purple-600">
                  {performance.up + performance.down}
                </strong>
              </div>

              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mb-2">
                  <div
                    className="h-full bg-green-500 transition-all duration-500"
                    style={{ width: `${positiveP}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{positiveP}% positive</span>
                  <span>{negativeP}2% negative</span>
                </div>
              </div>
            </div>
          </div>

          {/* Security Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm border-2 border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-linear-to-r from-purple-500 to-blue-500 text-white rounded-xl p-4 mb-6">
              <h2 className="text-2xl font-bold">Security</h2>
            </div>

            <div className="flex justify-around gap-4 my-8">
              {/* ✅ Pass the id and type explicitly */}
              <button
                onClick={() => handleVote(3, "up")}
                className="flex-1 py-3 px-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                data-testid="upvote-btn-0"
              >
                👍 Upvote
              </button>

              <button
                onClick={() => handleVote(3, "down")}
                className="flex-1 py-3 px-6 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                data-testid="downvote-btn-0"
              >
                👎 Downvote
              </button>
            </div>

            <div className="space-y-4 mt-8">
              <div
                className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg"
                data-testid="upvote-count-0"
              >
                <p className="text-lg text-gray-700">
                  Upvotes:{" "}
                  <strong className="text-2xl text-green-600">
                    {security.up}
                  </strong>
                </p>
              </div>

              <div
                className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"
                data-testid="downvote-count-0"
              >
                <p className="text-lg text-gray-700">
                  Downvotes:{" "}
                  <strong className="text-2xl text-red-600">
                    {security.down}
                  </strong>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-2 border-gray-100">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Total Votes:</span>
                <strong className="text-xl text-purple-600">
                  {security.up + security.down}
                </strong>
              </div>

              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mb-2">
                  <div
                    className="h-full bg-green-500 transition-all duration-500"
                    style={{ width: `${positiveS}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{positiveS}% positive</span>
                  <span>{negativeS}% negative</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testing Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm border-2 border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-linear-to-r from-purple-500 to-blue-500 text-white rounded-xl p-4 mb-6">
              <h2 className="text-2xl font-bold">Testing</h2>
            </div>

            <div className="flex justify-around gap-4 my-8">
             
              <button
                onClick={() => handleVote(4, "up")}
                className="flex-1 py-3 px-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                data-testid="upvote-btn-0"
              >
                👍 Upvote
              </button>

              <button
                onClick={() => handleVote(4, "down")}
                className="flex-1 py-3 px-6 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                data-testid="downvote-btn-0"
              >
                👎 Downvote
              </button>
            </div>

            <div className="space-y-4 mt-8">
              <div
                className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg"
                data-testid="upvote-count-0"
              >
                <p className="text-lg text-gray-700">
                  Upvotes:{" "}
                  <strong className="text-2xl text-green-600">
                    {testing.up}
                  </strong>
                </p>
              </div>

              <div
                className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"
                data-testid="downvote-count-0"
              >
                <p className="text-lg text-gray-700">
                  Downvotes:{" "}
                  <strong className="text-2xl text-red-600">
                    {testing.down}
                  </strong>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-2 border-gray-100">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Total Votes:</span>
                <strong className="text-xl text-purple-600">
                  {testing.up + testing.down}
                </strong>
              </div>

              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mb-2">
                  <div
                    className="h-full bg-green-500 transition-all duration-500"
                    style={{ width: `${positiveT}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{positiveT}% positive</span>
                  <span>{negativeT}% negative</span>
                </div>
              </div>
            </div>
          </div>

          {/* Documentation Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm border-2 border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-linear-to-r from-purple-500 to-blue-500 text-white rounded-xl p-4 mb-6">
              <h2 className="text-2xl font-bold">Documentation</h2>
            </div>

            <div className="flex justify-around gap-4 my-8">
              {/* ✅ Pass the id and type explicitly */}
              <button
                onClick={() => handleVote(5, "up")}
                className="flex-1 py-3 px-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                data-testid="upvote-btn-0"
              >
                👍 Upvote
              </button>

              <button
                onClick={() => handleVote(5, "down")}
                className="flex-1 py-3 px-6 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                data-testid="downvote-btn-0"
              >
                👎 Downvote
              </button>
            </div>

            <div className="space-y-4 mt-8">
              <div
                className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg"
                data-testid="upvote-count-0"
              >
                <p className="text-lg text-gray-700">
                  Upvotes:{" "}
                  <strong className="text-2xl text-green-600">
                    {documentation.up}
                  </strong>
                </p>
              </div>

              <div
                className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"
                data-testid="downvote-count-0"
              >
                <p className="text-lg text-gray-700">
                  Downvotes:{" "}
                  <strong className="text-2xl text-red-600">
                    {documentation.down}
                  </strong>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-2 border-gray-100">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Total Votes:</span>
                <strong className="text-xl text-purple-600">
                  {documentation.up + documentation.down}
                </strong>
              </div>

              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mb-2">
                  <div
                    className="h-full bg-green-500 transition-all duration-500"
                    style={{ width: `${positiveD}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{positiveD}% positive</span>
                  <span>{negativeD}% negative</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSystem;
