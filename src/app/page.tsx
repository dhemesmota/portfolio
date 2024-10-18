import Header from "@/components/header";
import HomeSection from "@/components/home-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center text-textDefault">
      <Header />
      
      <HomeSection />
      
      <h3>
        Portfólio em construção...
      </h3>
    </div>
  );
}
