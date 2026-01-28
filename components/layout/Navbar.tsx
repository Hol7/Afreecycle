export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-white/70">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <span className="font-sora text-xl font-semibold">
          <a href="#">
            AfreeCycle</a>
            </span>

        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#solutions">Solutions</a>
          <a href="#process">Fonctionnement</a>
          <a href="#Impact">Impact</a>
        </nav>

        <a href="#contact" className="bg-energy text-whiteSoft px-5 py-2 rounded-xl">
          Nous contacter
        </a>
      </div>
    </header>
  );
}