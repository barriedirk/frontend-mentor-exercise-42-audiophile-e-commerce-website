import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="px-10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-0 relative">
          <h1>Home</h1>
        </div>
      </div>
    </>
  );
}
