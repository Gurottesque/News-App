import Navbar from "./Navbar"
import Footer from "./Footer"
import { useGetTrendingHomeQuery } from "../api/NewsApi"


const topCurrentNews = [
    {
        title: "",
        summary: "",
        categories: "",
        eventDate: "",
    },
    {
        title: "",
        summary: "",
        categories: "",
        eventDate: "",
    },
]

function MainPage(){

    return 
    <>
    
    </>
}

function Home(){

    const { data } = useGetTrendingHomeQuery();
    console.log(data)
    return 
    <>

        <Navbar />
        <MainPage />
        <Footer />
    </>
}

export default Home;