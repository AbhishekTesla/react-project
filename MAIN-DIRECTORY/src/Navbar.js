import React,{useState,useEffect} from 'react'
import './Nav.css'

function Navbar() {

    const [show,handleshow] = useState("");

    useEffect(()=>{

        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleshow(true);
            }
            else{
                handleshow(false);
            }
        })

        return ()=>{
            window.removeEventListener("scroll");
        }

    },[])








  return (
    <div className={`nav && ${show && "nav_black"}`}>
        <div className="nav-container">
       <div className="nav-img">
        <img src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456" alt="nav_logo" className="nav-logo" />
        </div>

        <div className="nav-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="nav_avatar" className="nav-avatar" />
        </div>
        </div>
     
       
    </div>
  )
}

export default Navbar