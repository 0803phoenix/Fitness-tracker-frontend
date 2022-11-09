
const HomeCards = () => {
  return (
   <> 
    <div className="card-group p-2" >
     <div className="card bg-dark text-white">
      <img className="card-image" src="https://source.unsplash.com/1400x500/?cardio" alt="Exercise" />
      <div className="card-image-overlay">
      </div>
     </div>
      <div className="card">
       <div className="card-body">
        <h5 className="display-4">Special title treatment</h5>
        <p className="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href="" className="btn btn-primary">Go somewhere</a>
      </div>
     </div>  
    </div>
    <div className="card-group px-2 pb-2">
    <div className="card" >
       <div className="card-body">
        <h5 className="display-4">Special title treatment</h5>
        <p className="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href="" className="btn btn-primary">Go somewhere</a>
     </div>
    </div>   
     <div className="card bg-dark text-white">
      <img className="card-image" src="https://source.unsplash.com/1400x500/?fitness" alt="Exercise" />
      <div className="card-image-overlay">
      </div>
     </div>
     <div className="card-group" >
     <div className="card bg-dark text-white">
      <img className="card-image" src="https://source.unsplash.com/1400x500/?exercise" alt="Exercise" />
      <div className="card-image-overlay">
      </div>
     </div>
      <div className="card">
       <div className="card-body">
        <h5 className="display-4">Special title treatment</h5>
        <p className="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href="" className="btn btn-primary">Go somewhere</a>
       </div>
      </div>  
     </div> 
    </div>  
   </>  
  );
}

export default HomeCards;