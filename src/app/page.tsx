import Head from 'next/head';


const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>My Website</title>
        <meta name="description" content="A simple one-page website built with Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */} 
      <header className="bg-cover bg-center h-screen relative" style={{ backgroundImage: 'url("/hero-bg.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg mb-6">We create amazing experiences for our clients.</p>
          <a href="#services" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition">Explore Our Services</a>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-around">
          <a href="#about" className="text-gray-800 hover:text-blue-600">About</a>
          <a href="#services" className="text-gray-800 hover:text-blue-600">Services</a>
          <a href="#contact" className="text-gray-800 hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="py-20 text-center">
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="mt-4 text-lg">We are a company that does amazing things!</p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-200 text-center">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Service One</h3>
            <p>High-quality service that meets your needs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Service Two</h3>
            <p>Expert solutions tailored to your business.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Service Three</h3>
            <p>Innovative approaches to your challenges.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="mt-4 text-lg">Get in touch with us!</p>
        <form className="mt-6 max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="border p-2 rounded w-full mb-4" />
          <input type="email" placeholder="Your Email" className="border p-2 rounded w-full mb-4" />
          <textarea placeholder="Your Message" className="border p-2 rounded w-full mb-4" rows={4}></textarea>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 w-full py-10 text-center text-white">
        <p>© 2024 My Website</p>
      </footer>
    </div>
  );
};

export default Home;
