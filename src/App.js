import React from "react";
import Wrapper from "./App.styled";
import {
  FindOut,
  Footer,
  Header,
  Hero,
  MainSection,
  MobileNav,
} from "./Components";

const App = () => {
  return (
    <Wrapper>
      <MobileNav />
      <Header />
      <main>
        <Hero />
        <MainSection />
        <FindOut />
      </main>
      <Footer />
    </Wrapper>
  );
};

export default App;
