import Navbar from './_components/Navbar.jsx';
import Footer from './_components/Footer';
import HorizontalScrollCarousel from './_components/HorizontalScrollCarousel';



import dynamic from "next/dynamic"

const Scene2 = dynamic(() => import("./_components/Scene2"), { ssr: false })

export default function Home() {
  return (
    <main className="relative h-screen">
      <Navbar />
      {/* <Scene2  /> */}
      <HorizontalScrollCarousel />
      <Footer />
    </main>
  );
}

