import Seo from 'components/shared/seo';
import Navbar from 'components/shared/navbar/navbar';
const LayoutMain = ({ children }) => (
  <>
    <Seo />
    <Navbar />
    <main>{children}</main>
  </>
);

export default LayoutMain;
