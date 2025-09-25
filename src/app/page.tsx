import Link from "next/link"
import Hero from "@/components/Hero"

// I added the word General in here just to test
export default function GeneralHome() {
  return (
    <>
    
    <Link href="/auth/login/" className="hover:underline">Login</Link>


    </>
  );
}