import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsChart from "@/components/SkillsChart";
import PageLayout from "@/components/PageLayout";

const HomePage = () => {
  return (
    <PageLayout>
      <Hero />
      <About />
      <SkillsChart />
    </PageLayout>
  );
};

export default HomePage;