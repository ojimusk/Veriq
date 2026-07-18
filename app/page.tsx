import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
export default function Home() {
  return (
    <main
      style={{
        background: "#050505",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Navbar />
      <Hero />
    </main>
  );
}
