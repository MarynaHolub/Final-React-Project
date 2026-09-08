import {Outlet} from 'react-router-dom'
import Header from '../Header/index'
import Footer from '../Footer/index'
import ScrollToTop from '../ScrolltoTop'


function Layout(){

    return(
        <div>
            <ScrollToTop/>
            <Header />
            <main>
                <Outlet/>
            </main>
            <Footer />
        </div>
    )
}
export default Layout