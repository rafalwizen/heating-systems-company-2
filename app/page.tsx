import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Testimonials from '@/components/testimonials';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />

      {/* Footer */}
      <footer className="py-8 bg-dark-900 text-dark-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} BUDLEPSERWIS. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </>
  );
}
