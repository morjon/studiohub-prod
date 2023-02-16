import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>StudioHub App</title>
        <meta name="description" content="landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#eeedf0] to-[#a872c7]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Studio<span className="text-[hsl(280,55%,74%)]">Hub</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://github.com/StanfordCS194/win2023-team3"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Github →</h3>
              <div className="text-lg">
                Currently in development. Check out our Github repo for the
                latest.
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-20 [filter:url(#gooey)]">
            <div className="h-60 w-60 animate-movealt rounded-full bg-zinc-300 bg-gradient-to-br from-white to-zinc-400 shadow-inner shadow-white"></div>
            <div className="h-40 w-40 animate-move rounded-full bg-zinc-300 bg-gradient-to-br from-white to-zinc-400 shadow-inner shadow-white"></div>
          </div>
          <svg>
            <filter id="gooey">
              <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
              <feColorMatrix
                values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 90 -25"
              />
            </filter>
          </svg>
        </div>
      </main>
    </>
  );
};

export default Home;
