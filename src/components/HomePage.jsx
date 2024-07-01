import { lazy, Suspense } from 'react'

const CardHome = lazy( () => import("./CardHome"));

function MainPage(){

    return (
    <>
    
        <h1 className="flex items-center justify-center mt-5 text-5xl font-bold">Breaking News</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-screen-2xl m-auto">
        <Suspense  fallback={<div className="text-5xl animate-bounce text-center">...</div>} >
            <CardHome />
        </Suspense>
        </div>
        <div className="flex justify-center gap-20 mb-5">
            {/* <button className="bg-black text-white rounded-md px-5 py-2 hover:bg-slate-300 hover:text-black transition-colors" onClick={previousPage}>Previous</button>
            <button className="bg-black text-white rounded-md px-5 py-2 hover:bg-slate-300 hover:text-black transition-colors" onClick={nextPage}>Next</button> */}
        </div>
    </>
    );
}


function Home() {
  return(
    <> 
        <MainPage />

    </>
  );
}

export default Home;
