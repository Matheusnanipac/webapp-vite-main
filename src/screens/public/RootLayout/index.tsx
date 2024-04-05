import Footer from "@/components/others/footer";
import Header from "@/components/others/header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <main className="min-h-screen">
      <div className="min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
}
