import { useState } from 'react'
import React from 'react'
import './App.css'
import Articles from './Component/Articales'
import AddArticleModal from './Component/AddArticle'

function App() {


 const [article, setArtical] = useState([]);

 const [isModalOpen, setIsModalOpen] = useState(false);

 const Addnew = (title) => {
  const newArticle = {
    id: Date.now(),
    upvotes: 0,
    date: new Date(),
    title: title || "my name is Dynamic Article"
  }
  setArtical(prev => [...prev, newArticle])
 }

 const deleteArtical = (id) => {
  setArtical(prev => prev.filter(article => article.id !== id))
 }

 const upvoteArtical = (id) => {
  setArtical(prev => prev.map(article => 
    article.id === id ? { ...article, upvotes: article.upvotes + 1 } : article
  ))
 }

 return (
  <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8">
   <div className="max-w-5xl mx-auto">
    {/* Header */}
    <div className="text-center mb-8">
     <h1 className="text-4xl font-bold text-white mb-4">📰 Article Manager</h1>
     <button 
      onClick={() => setIsModalOpen(true)}  // sets the mode open state to true
      className="bg-white hover:bg-gray-100 text-purple-600 font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
     >
      ➕ Add New Article
     </button>
    </div>

    {/* Modal */}
    <AddArticleModal 
     isOpen={isModalOpen}
     onClose={() => setIsModalOpen(false)}
     onAdd={Addnew}
    />

    {/* Articles Component */}
    <Articles 
     articles={article} 
     onDelete={deleteArtical}
     onUpvote={upvoteArtical}
    />
   </div>
  </div>
 );
}

export default App
