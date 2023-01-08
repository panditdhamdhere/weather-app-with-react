import hotBg from './assets/hot.jpg'
import coldBg from './assets/cold.jpg'


function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${coldBg})` }}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter the city name" />
            <button>°F</button>

            <div>
              <div className="section__tempreture">
                <div className="icon">
                  <h3>Pune</h3>
                  <img src="" alt="" />
                  <h3>Cloudy</h3>
                </div>
                <div className="tempreture">
                  <h1>25°C</h1>
                </div>
              </div>

              {/*bottom description */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
