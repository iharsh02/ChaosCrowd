import Footer from "./Footer";
import { Navbar } from "./Navbar";

export default function Boilerplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="mt-[8rem]">
        {''}
      </div>
      <main className="flex-grow min-h-screen">
        {children}
      </main>
      <Footer  />
    </div>
  );
}
