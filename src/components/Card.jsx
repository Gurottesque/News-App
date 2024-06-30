<<<<<<< HEAD
const Card = ({ title, imagePath, body }) => {
    return (
    <section className="container mx-auto p-6 md:p-12 transform duration-500">
        <article className="shadow-lg mx-auto relative max-w-sm group cursor-pointer">
            <div className="overflow-hidden aspect-w-16 aspect-h-9 ">
                <img className="w-full h-auto transform hover:scale-110 duration-200 " src={imagePath} alt="" />
            </div>
            <div className="p-4 my-auto pb-8">
                <h1 className="text-2xl font-semibold text-gray-800 mt-2">{title}</h1>
                <p className="text-lg text-gray-400 mt-2 leading-relaxed max-h-64 overflow-hidden">
                    {body}
                </p>
            </div>
        </article>
    </section>
    );
  };
  
  export default Card;
=======
const Card = () => {
  return (
  <section class="container mx-auto p-6 md:p-12 transform duration-500">
      <article class="shadow-lg mx-auto relative max-w-sm group cursor-pointer">
          <div class="overflow-hidden">
              <img class="w-full h-auto transform hover:scale-110 duration-200" src="https://www.artisticmoods.com/wp-content/uploads/tropicalia_by_mathiole-d31lvne.jpg" alt="" />
          </div>
          <div class="p-4 my-auto pb-8">
              <h1 class="text-2xl font-semibold text-gray-800 mt-2">Tropicalia</h1>
              <p class="text-lg text-gray-400 mt-2 leading-relaxed">
                  Super creative and colorful illustrations by Matheus Lopes. Check out more of his amazing artworks in his portfolio.
              </p>
          </div>
      </article>
  </section>
  );
};

export default Card;
>>>>>>> ea1b2b21334f3f2cd1fadf184d7e199ab2c86eab
