import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../assets/css/layout/main.css";
const MainLayout = ({ children }) => {
  return (
    <div className="main-container">
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;