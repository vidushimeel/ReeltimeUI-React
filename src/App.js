import './App.css';
import tempimagelanding from './tempimagelanding.png'; //landing page bottom image inclusion
import templogo from './templogo.png'; //logo inclusion

function App() {
  return (

    <div class="sidePanel">
    <body>

      <div class = "reeltimeheading">      
      <p>Welcome to Reeltime!</p>
      </div>

      <div id="logo"> 
      <img src={templogo}  alt="temporary logo smirk with 3d glasses" width={90}  />
      </div> 

    <div class = "footer">
    <img src={tempimagelanding} width={270} alt="temporary landing page image" />
    </div>
    </body>
    </div>
  )
}

export default App;
