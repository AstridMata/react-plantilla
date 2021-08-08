const Navbar = () => {
    return ( <nav className="navbar navbar-expand-lg navbar-light bg-light p-3" style={{backgroundColor:`#e3f2fd`}}>
    <a className="navbar-brand text-primary" href="#">Poderio UI</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Link <span className="sr-only"></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link </a>
        </li>
        <li className="nav-item">
        <button class="btn btn-outline-success my-2 my-sm-0 p-3 mb-2 bg-primary text-white" type="submit">Search</button>
        </li>
        
      </ul>
      
    </div>
    </nav> );
}
 
export default Navbar;