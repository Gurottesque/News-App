const Card = () => {
    return (
    <section className="container mx-auto p-6 md:p-12 transform duration-500">
        <article className="shadow-lg mx-auto relative max-w-sm group cursor-pointer">
            <div className="overflow-hidden">
                <img className="w-full h-auto transform hover:scale-110 duration-200" src="https://www.artisticmoods.com/wp-content/uploads/tropicalia_by_mathiole-d31lvne.jpg" alt="" />
            </div>
            <div className="p-4 my-auto pb-8">
                <h1 className="text-2xl font-semibold text-gray-800 mt-2">Tropicalia</h1>
                <p className="text-lg text-gray-400 mt-2 leading-relaxed">
                    Super creative and colorful illustrations by Matheus Lopes. Check out more of his amazing artworks in his portfolio.
                </p>
            </div>
            <div className="border-t pt-4 pb-4 text-center text-sm text-gray-400 uppercase tracking-widest group-hover:text-gray-600 bg-gray-50">
                Matheus Lopes
            </div>
        </article>
    </section>

    );
  };

  export default Card;