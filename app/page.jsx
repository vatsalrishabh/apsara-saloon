import Blog from '@/components/Hero/Blog';
import Contact from '@/components/Hero/Contact';
import Hero from '@/components/Hero/Hero';
import PackageCards from '@/components/Hero/PackageCards';
import Section from '@/components/Hero/Section';
import Section2 from '@/components/Hero/Section2';
import Section3 from '@/components/Hero/Section3';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer';

const Homepage = ({}) => {
  return (
    <div className='w-full min-h-screen'>
      <NavBar/>
      <Hero />
      <Section />
      <Section2 />
      <PackageCards/>
      <Section3 />
      <Blog />
      <Contact />
      <Footer/>
      {/* df */}
    </div>
  );
};

export default Homepage;
