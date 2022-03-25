import Hero from "./components/hero/Hero";
import Header from "./layout/Header";
import Layout from "./layout/Layout";
const App = () => {
  return (
    <Layout>
      <Header />
      <Hero />
    </Layout>
  );
};

export default App;
