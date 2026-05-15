import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Work from './components/Work'
import Stack from './components/Stack'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Work />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
