import Header from "./Header";
import Footer from "./Footer";
import { ReactComponentProps } from "@/interfaces";

const Layout: React.FC<ReactComponentProps> = ({children}) => {
    return(
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;