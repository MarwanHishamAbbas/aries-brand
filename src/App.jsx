import Funding from "./components/landing/Funding";
import Hero from "./components/landing/Hero";
import Jobs from "./components/landing/Jobs";
import Program from "./components/landing/Program";
import Sponsorship from "./components/landing/Sponsorship";
import Team from "./components/landing/Team";
import ContactForm from "./layout/ContactForm";
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
      <Team />
      <Jobs />
      <ContactForm />
    </Layout>
  );
};

export default App;
