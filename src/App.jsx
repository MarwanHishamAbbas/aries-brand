import Funding from "./components/landing/Funding";
import Hero from "./components/landing/Hero";
import Program from "./components/landing/Program";
import Sponsorship from "./components/landing/Sponsorship";
import Header from "./layout/Header";
import Layout from "./layout/Layout";
const App = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <Program />
      <Funding />
      <Sponsorship />
    </Layout>
  );
};

export default App;
