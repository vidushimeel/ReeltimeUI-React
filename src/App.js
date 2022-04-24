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


  <section class="myform-area">
                  <div class="row justify-content-center">
                          <div class="form-area login-form">
                              <div class="form-input">
                                  <form>
                                      <div class="form-group">
                                          <input type="text"  id="" name="name" required/>
                                          <label>User Name</label>
                                      </div>
                                      <div class="form-group">
                                          <input type="password" id="" name="password" required/>
                                          <label>password</label>
                                      </div>
                                  </form>
                             </div>
                      </div>
                  </div>

          </section>

      <div id="logo"> 
      <img src={templogo}  alt="temporary logo smirk with 3d glasses" width={90}  />
      </div> 

    
    </body>


    </div>



  )

}

export default App;

// <div class = "footer"> 
//<img src={tempimagelanding} width={270} alt="temporary landing page image" />
//</div>