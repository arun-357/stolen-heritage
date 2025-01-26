export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-8xl mx-auto flex justify-center items-center py-10">
        <h1 className="text-white font-serif text-4xl tracking-wider relative inline-block group cursor-pointer">
          STOLEN HERITAGE
          <span className="underline top-[-5px] origin-left"></span>
          <span className="underline bottom-[-5px] origin-right "></span>
        </h1>
      </div>
    </header>
  );
}
