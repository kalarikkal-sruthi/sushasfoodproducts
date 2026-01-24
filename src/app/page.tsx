import Image from "next/image";
import Header from "@/components/layouts/Header";
import HeroSection from "@/components/home/HeroSection";
import About from "@/components/home/About";

export default function Home() {
  return (
  <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
    
       <HeroSection />
       <About />
        
      
        {/* <Suspense fallback={<LoadingSpinner />}>
          <CategoryGrid />
        </Suspense>
        
       
        <Suspense fallback={<LoadingSpinner />}>
          <FeaturedProducts />
        </Suspense>
        
     
        <PromoBanner />
        
      
        <Testimonials />
        
       
        <Newsletter /> */}
      </main>
      
      {/* <Footer /> */}
    </div>
  );
}
