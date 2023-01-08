import hotBg from './assets/hot.jpg'
import coldBg from './assets/cold.jpg'


function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${coldBg})` }}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter city" />
            <button>°F</button>
          </div>

          <div className="section section__tempreture">
            <div className="icon">
              <h3>London</h3>
              <img src="" alt="" />
              <h3>cloudy</h3>
            </div>

            <div className="tempreture">
              <h1>25° C</h1>
            </div>
          </div>

          {/* bootom description*/}
        </div>
      </div>
    </div>
      
  );
}

export default App;
