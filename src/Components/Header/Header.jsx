

const Header = () => {
    return (
<div className="carousel w-full h-screen">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={"https://i.ibb.co/kgqz693/1111.jpg"} className="w-full" />
    <div className="absolute flex flex-col items-center justify-center w-full h-full text-white">
      <h1 className="text-5xl font-extrabold mb-4 text-[#ffb531]">Event Excellence, Executed</h1>
      <p className="text-lg text-center w-1/2">Experience the pinnacle of event excellence with our agency, where meticulous planning meets flawless execution to ensure your corporate gatherings leave a lasting impression.</p>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={"https://i.ibb.co/s3nQtbk/2222.jpg"} className="w-full" />
    <div className="absolute flex flex-col items-center justify-center w-full h-full text-white">
      <h1 className="text-5xl font-extrabold mb-4 text-[#ffb531]">Beyond Expectations, Beyond Events</h1>
      <p className="text-lg text-center w-1/2">Redefining corporate gatherings by going beyond expectations, our event management agency is dedicated to delivering unparalleled experiences that transcend the ordinary.</p>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={"https://i.ibb.co/xjPtdtC/3333.jpg"} className="w-full" />
    <div className="absolute flex flex-col items-center justify-center w-full h-full text-white">
      <h1 className="text-5xl font-extrabold mb-4 text-[#ffb531]">Seamless Events, Endless Success</h1>
      <p className="text-lg text-center w-1/2">Elevate your corporate experience with our precision event management services, where every detail seamlessly converges to create endless moments of success.</p>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={"https://i.ibb.co/k1vrtYr/4444.jpg"} className="w-full" />
    <div className="absolute flex flex-col items-center justify-center w-full h-full text-white">
      <h1 className="text-5xl font-extrabold mb-4 text-[#ffb531]">Crafting Tomorrow's Memories Today</h1>
      <p className="text-lg text-center w-1/2">Unleash the power of unforgettable corporate events as we meticulously craft each moment, transforming your vision into tomorrow's cherished memories.</p>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
</div>

            );
};

            export default Header;