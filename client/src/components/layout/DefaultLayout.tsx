import { Footer } from "./Footer";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-h-dvh w-full overflow-hidden font-inter">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="h-dvh flex-1 overflow-y-scroll bg-slate-50">
          <div className="mx-auto max-w-6xl px-5 ">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
