import img from '../../../../assets/images/me.jpg';
import './my-image.scss';
const MyImage = () => {
  return (
    <div className="home-photo">
      <div className="hp-inner" style={{backgroundImage: `url(${img})`}}></div>
    </div>
  );
};

export default MyImage;
