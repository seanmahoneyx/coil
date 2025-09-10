import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-black bg-image">

      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">

        <div className="flex flex-col gap-6 p12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">MS Packaging & Supply Corp.<br /></h1>
          <address>
            53 Zorn Blvd<br />
            Yaphank, NY 11980
          </address>
          <p>
            Open Daily: 8am - 5pm
          </p>
          <Link href="tel:631-821-6567" className="hover:underline">
            631-821-6567
          </Link>
        </div>


      </main>
    </div>
  );
}