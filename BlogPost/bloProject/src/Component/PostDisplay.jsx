import React from "react";

function PostList({ posts, onDeletePost }) {
  if (!posts || posts.length === 0) {
    return <p className="text-gray-500 mt-4">No posts yet. Write something!</p>;
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <article
          key={post.id}
          className="bg-white/70 border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition flex flex-col gap-3"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-800">{post.title}</h3>
              <p className="text-xs text-gray-400">#{post.id}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onDeletePost(post.id)}
                className="text-sm text-red-500 hover:text-red-700 bg-red-50 px-3 py-1 rounded-md border border-red-100 shadow-sm"
              >
                Delete
              </button>
            </div>
          </div>

          <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>

          <footer className="flex items-center justify-between text-xs text-gray-500">
            <span>Fresh • {new Date(post.id).toLocaleString()}</span>
            <span>0 comments</span>
          </footer>
        </article>
      ))}
    </div>
  );
}
export default PostList;
