import Navbar from "./Navbar"
import Footer from "./Footer"
import Card from "./Card"


const topCurrentNews = [
    {
        title: "",
        summary: "",
        categories: "",
        eventDate: ""
    },
    {
        title: "",
        summary: "",
        categories: "",
        eventDate: ""
    }
]

function MainPage(){

    return (
    <>
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-2 space-y-2 md:space-y-0 p-4 gap-4">
            <Card />
            <Card />
            <Card />
        </div>
    </>
    );
}

function Home(){

    return (
    <>
      
        <Navbar />
        <MainPage />
        <Footer />
    </>
    );
}

export default Home;