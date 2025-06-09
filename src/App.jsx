import Waves from './waves';

function App() {
  return (
    <div className="h-screen flex items-center">
      <div className="flex-1 flex items-center justify-center h-[562px] overflow-hidden">
        <div
          className="relative w-full py-[84px] bg-[#FAF338]"
          style={{
            backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
    `,
            backgroundSize: '120px 120px',
          }}
        >
          <div className="absolute top-[-60px] left-0 right-0 rotate-0 waveToRight flex">
            {Array.from({ length: 6 }).map((_, index) => (
              <span key={index}>
                <Waves />
              </span>
            ))}
          </div>
          <div className="absolute bottom-[-60px] left-0 right-0 rotate-180 waveToLeft flex">
            {Array.from({ length: 6 }).map((_, index) => (
              <span key={index}>
                <Waves />
              </span>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF338] via-[#FAF338]/0 to-[#FAF338]" />

          <div className="relative z-10 flex flex-col items-center justify-center ">
            <p className="text-5xl font-bold uppercase mb-4">Don't Miss Out</p>
            <p className="text-2xl text-[#494706] mb-10">
              Get the latest news and updates delivered straight to your inbox.
            </p>

            <div className="bg-black py-0.5 px-2 rounded-full">
              <div className="bg-white rounded-full p-2 pl-8 w-[688px] flex items-center justify-between gap-4">
                <input
                  className="bg-transparent outline-none font-[800] text-2xl flex-1"
                  placeholder="your email address"
                  type="email"
                />
                <button className="text-black uppercase font-bold p-0.5 rounded-full group gradient-button">
                  <span
                    className="relative block bg-gradient-to-b from-[#E7E7E7] to-[#FFFFFF] text-black rounded-full px-[34px] py-[26px] uppercase font-bold transition-transform duration-200"
                    style={{
                      boxShadow: 'inset 0 0 0 4px rgba(255, 255, 255, 0.5)',
                    }}
                  >
                    <span className="absolute right-0 left-0 -translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                      Subscribe
                    </span>
                    <span className="block translate-y-0 opacity-100 group-hover:translate-y-8 group-hover:opacity-0 transition-all ease-in-out duration-300">
                      Subscribe
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
