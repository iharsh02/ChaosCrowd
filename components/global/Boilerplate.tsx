import Footer from "./Footer";
import { Navbar } from "./Navbar";

export default function Boilerplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer  />
    </div>
  );
}
