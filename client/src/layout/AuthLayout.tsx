import { Footer } from "./Footer";
import { Header } from "./Header";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-h-dvh w-full overflow-hidden font-inter">
      <Header />
      <div className="h-dvh flex-1 overflow-y-scroll border-l-[1px] border-slate-900/10 bg-cyan-50">
        <div className="mx-auto max-w-6xl p-5 ">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default AuthLayout;
