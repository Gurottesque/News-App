import Navbar from "./Navbar"
import Footer from "./Footer"

const article = {
    title: "",
    summary: "",
    categories: "",
    eventDate: "",
}

function RenderArticleDetails(){

}

function ArticleDetails() {
    return (
    <>
        <Navbar />
        <RenderArticleDetails />
        <Footer />
    </>
    );
}

export default ArticleDetails