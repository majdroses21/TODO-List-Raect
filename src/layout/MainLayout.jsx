import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: '93px' }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;