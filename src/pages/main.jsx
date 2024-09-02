import { PhoneForm } from "../components/feedback";
import { Banner } from "../components/banner/index.jsx";
import { About } from "../components/About/index.jsx";



export const MainPage = () => {
    return(
        <main>
            <Banner/>
            <About/>
            <PhoneForm/>
        </main>
    );
}