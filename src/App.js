import './App.css';
import tempimagelanding from './tempimagelanding.png'; //landing page bottom image inclusion
import templogo from './templogo.png'; //logo inclusion

function App() {
  return (

    <div class="sidePanel">
     
  
     <div class = "reeltimeheading">      
      <p>Welcome, sign in...</p>
      </div>

    <div class = "signin">
    <label for="username">username:</label>
    <input type="text" id="username" name="username" size="30"/> 
    <label for="pass">password:</label>
    <input type="password" id="pass" name="password" size="30" minlength="8" required/> </div>

      
      <div id="logo"> 
      <img src={templogo}  alt="temporary logo smirk with 3d glasses" width={90}  />
      </div> 

</div>








  )

}

export default App;

// <div class = "footer"> 
//<img src={tempimagelanding} width={270} alt="temporary landing page image" />
//</div>