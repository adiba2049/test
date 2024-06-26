'use client'
import { useRouter } from "next/navigation";
import '../home.css'

const Blog = () =>{
    const router = useRouter();

    return(
        <div className="homePage">
            <h1>Sadoqat's blog is about her life</h1>
            <button onClick={() => router.push('/blog/oneblog')}>Read</button>
            </div>
        
    )
}
export default Blog;