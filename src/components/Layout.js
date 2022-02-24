import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Layout/Footer';
import Header from "./Layout/Header";

const Layout = ({children}) => {
    return (<>
        <Header />
        {children}
        <Footer />
    </>
    )
}

export default Layout;