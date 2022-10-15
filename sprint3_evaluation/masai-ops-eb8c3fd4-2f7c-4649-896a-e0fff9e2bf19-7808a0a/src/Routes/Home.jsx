import { Link } from "react-router-dom";

function Home() {
  
const handleClick=()=>{
navigate('/login')
}
  return (
    <div>
      <Link to="/login">
        <h3 data-testid="login-link" onClick={handleClick}>Login Page</h3>
      </Link>
      <Link to="/dashboard">
        <h3 data-testid="home-link">Home</h3>
      </Link>
    </div>
  );
}
export default Home;
