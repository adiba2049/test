'use client'
import { useRouter } from "next/navigation";
import './home.css'

export default function Home() {
  const router = useRouter()
  return (
    <div className="homePage">
      <h1>Shodmonova Sadoqat</h1>
      <button onClick={() => router.push('/blog')}>Mainly</button>
    </div>
  );
}
