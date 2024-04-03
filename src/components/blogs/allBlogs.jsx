import React from 'react'
import BlogsItem from './blogsItem'
import BlogsItemLoading from './blogsItemLoading'
import useBlogsData from '../../hooks/useBlogsData'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function AllBlogs() {

    const [blogs, loading, error] = useBlogsData()
    if (error) return toast.error(error)

  return (
    <div className=''>
        <h2 className=' text-left font-extrabold text-3xl mb-10'>Blogs</h2>
        <div className='grid grid-cols-4 gap-x-12 gap-y-20'>
            {
                loading
                ?
                <>
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className=''>
                            <BlogsItemLoading />
                        </div>
                    ))}
                </>
                :
                <>
                    {blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0,10).map((item,index)=>(
                        <BlogsItem blog={item} index={index} key={index} />
                    ))} 
                </> 
            }
        </div>
    </div>
  )
}
