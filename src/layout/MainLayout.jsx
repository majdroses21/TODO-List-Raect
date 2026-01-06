import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const MainLayout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;