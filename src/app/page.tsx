import Header from "@/components/navigation/Header";
import Hero from "@/components/sections/Hero";
import Container from "@/components/sections/Container";

import Footer from "@/components/navigation/Footer";
import MainContent from "@/components/sections/MainContent";

function HomePage() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
      </Container>
      <main>
        <MainContent />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
