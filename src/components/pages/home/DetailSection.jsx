import { detailService } from "../../../utils/detailService";
import carMapSvg from "../../../assets/images/car-map.svg";
import "../../../css/pages/detailSection.css";

const DetailSection = () => {
  return (
    <section className="detail">
      <div>
        <img src={carMapSvg} alt="" />
      </div>
      <div className="detail--info">
        <p>WHY CHOOSE US</p>
        <h3>We offer the best experience with our rental deals</h3>
        <div className="detail--info__cards">
          {detailService.map((service) => (
            <div className="info__card" key={service.id}>
              <div className="info__card--img">
                <img src={service.icon} alt="" loading="lazy" />
              </div>
              <div>
                <h6>{service.title}</h6>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
