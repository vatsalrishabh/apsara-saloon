import Blog from '@/components/Hero/Blog';
import Contact from '@/components/Hero/Contact';
import Hero from '@/components/Hero/Hero';
import Section from '@/components/Hero/Section';
import Section2 from '@/components/Hero/Section2';
import Section3 from '@/components/Hero/Section3';

const Homepage = ({}) => {
  return (
    <div className='w-full min-h-screen'>
      <Hero />
      <Section />
      <Section2 />
      <Section3 />
      <Blog />
      <Contact />
    </div>
  );
};

export default Homepage;
