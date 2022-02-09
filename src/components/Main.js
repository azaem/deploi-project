import React from 'react';

const Main = () => {
    return (
      <main>
          <div className="container mx-auto">
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white    ">
                   <div className="bg-red-400 px-20 px-20 "  >1</div>
                   <div className="bg-black-400 px-20 px-20">2</div>
                   <div className="bg-yellow-400 px-20 px-20">3</div>
                   <div className="bg-amber-400 px-20 px-20">4</div>
               </div>
          </div>
      </main>
    );
};

export default Main;