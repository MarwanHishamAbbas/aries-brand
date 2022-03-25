import Hero from "./components/landing/hero/Hero";
import Program from "./components/landing/Program";
import Header from "./layout/Header";
import Layout from "./layout/Layout";
const App = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <Program />
    </Layout>
  );
};

export default App;
