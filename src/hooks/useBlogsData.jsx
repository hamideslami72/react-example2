import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function useBlogsData() {

    const [blogs , setBlogs] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        
        const fetchData = async ()=>{
            setLoading(true);
            try {
                let res = await fetch ('https://65f7f726b4f842e808867f20.mockapi.io/rocket-1/api/blogs')
                let data = await res.json()
                
                if(res.ok){
                    setBlogs(data)
                }
                
                setError(data);
                
            } catch (error) {
                
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    },[])

  return [blogs, loading, error];
}
