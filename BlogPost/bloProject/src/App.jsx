import React, { useState } from "react";
import "./App.css";
import PostForm from "./Component/input.jsx";
import PostList from "./Component/PostDisplay.jsx";

function App() {
  const [posts, setPosts] = useState([]);

  const HandleCreatepost = (newpost) => {
    setPosts((prevpost) => [
      ...prevpost,
      {
        id: Date.now(),
        title: newpost.title,
        content: newpost.content,
      },
    ]);
  };

  const handlePostListDelete = (id) => {
    setPosts((prevpost) => prevpost.filter((post) => post.id !== id));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-indigo-50 p-8 flex flex-col items-center">
      <header className="w-full max-w-4xl mb-8">
        <div className="backdrop-blur-sm bg-white/60 border border-gray-200 rounded-2xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-indigo-700">
              My Blog
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Share ideas — fast, pretty and simple.
            </p>
          </div>
          <div className="text-sm text-gray-500">Posts: {posts.length}</div>
        </div>
      </header>

      <main className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PostForm onCreatePost={HandleCreatepost} />
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-gray-700">Recent Posts</h2>
          <PostList posts={posts} onDeletePost={handlePostListDelete} />
        </section>
      </main>
    </div>
  );
}

export default App;
