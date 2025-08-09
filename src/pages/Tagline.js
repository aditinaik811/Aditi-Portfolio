import Aditi from '../assets/Aditi.jpg';
import Footer from '../components/Footer';
import './Tagline.css';

const Tagline = () => {
  return (

    <div className="tag-wrapper">
      <div className="tag-photo">
        <img src={Aditi} alt="Portrait of Aditi Ravindra Naik" className="home-photo" />
      </div>
      <div className="tag-body">
        <h1 className="home-name">Aditi Ravindra Naik</h1>
        <h4 className="home-tagline">“Bringing Ideas to Life Through Code.”</h4>
      </div>
      <div>
        
      </div>
    </div>
 
  );
};

export default Tagline;
