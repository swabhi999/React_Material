import React, { useState } from "react";

function PostForm({ onCreatePost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    onCreatePost({
      title: title.trim(),
      content: content.trim(),
    });

    setTitle("");
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/60 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition w-full"
    >
      <h2 className="text-xl font-semibold text-indigo-700 mb-4">Create a new post</h2>

      <label className="block mb-3">
        <span className="text-sm text-gray-600">Title</span>
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition"
        />
      </label>

      <label className="block mb-4">
        <span className="text-sm text-gray-600">Content</span>
        <textarea
          placeholder="Write your content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-3 bg-white/80 min-h-[140px] resize-none focus:outline-none focus:ring-2 focus:ring-indigo-200 transition"
        />
      </label>

      <div className="flex gap-3 justify-end">
        <button
          type="button"
          onClick={() => {
            setTitle("");
            setContent("");
          }}
          className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:shadow-sm transition"
        >
          Reset
        </button>

        <button
          type="submit"
          className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-md hover:shadow-lg transition"
        >
          Publish
        </button>
      </div>
    </form>
  );
}

export default PostForm;
