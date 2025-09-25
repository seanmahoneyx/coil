import Link from "next/link"
import Hero from "@/components/Hero"
import { VisitorHeader } from "@/components/VisitorHeader";

export default function Home() {
  return (
    <>
    <VisitorHeader />
    <Hero />
    <h1>Test for VisitorHeader</h1>
    {/* <Link href="/auth/login/" className="hover:underline">Login</Link> */}


    </>
  );
}