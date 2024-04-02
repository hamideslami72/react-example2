import React from 'react'
import LatestBlogs from '../components/blogs/latestBlogs'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
   <>
      <div>
        <LatestBlogs />
      </div>
      <ToastContainer />
   </>
  )
}
