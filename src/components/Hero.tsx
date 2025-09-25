import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-center transition-colors duration-500
                 bg-ms-light text-ms-dark dark:bg-gradient-to-r dark:from-ms-gold dark:to-ms-brown dark:text-white px-4"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
        Welcome to{" "}
        <span className="text-ms-gold dark:text-ms-gold">MS PACKAGING & SUPPLY CORP.</span>
      </h1>

      <p className="text-lg md:text-xl mb-8 max-w-2xl text-ms-gray dark:text-ms-light">
        Big enough to serve. Small enough to care.
      </p>

      <Button
        size="lg"
        className="transition-colors font-semibold
                   bg-ms-gold text-ms-dark hover:bg-ms-brown hover:text-white
                   dark:bg-white dark:text-ms-dark dark:hover:bg-ms-gold dark:hover:text-white"
      >
        Get Started
      </Button>
    </section>
  );
}
