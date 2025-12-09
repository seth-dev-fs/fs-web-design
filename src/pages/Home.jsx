import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import ServicesPreview from '../components/ServicesPreview'
import ContactCTA from '../components/ContactCTA'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>FS Web Design | Web Designer & Developer em Portugal</title>
        <meta
          name="description"
          content="Fábio Sousa - Web Designer especializado em criar websites profissionais para negócios locais. React, Next.js, Tailwind CSS. Transforme visitantes em clientes."
        />
        <link rel="canonical" href="https://fswebdesign.vercel.app/" />
      </Helmet>

      <Hero />
      <FeaturedProjects />
      <ServicesPreview />
      <ContactCTA />
    </>
  )
}

export default Home
