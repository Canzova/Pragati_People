import what from "../images/What.png"
import who from "../images/Who.png"
const Home = ()=>{
    return(
        <div className="home_wrapper">
            <div className="img_wrapper">
               <h1>Propelling people's progress </h1>
            </div>
            <div className="our_services">
                <div className="who">
                    <img src={who} alt="" />
                    <h1>Who we are ?</h1>
                </div>
                <div className="what">
                    <img src={what} alt="" />
                    <h1>What we do ?</h1>
                </div>
            </div>
        </div>
    )
}
export default Home;