import CardInfo from "../../CardInfo";
import locationIcon from "../../../assets/icons/location.svg";
import calendarIcon from "../../../assets/icons/calendar-tick.svg";
import carIcon from "../../../assets/icons/car-icon.svg";

import "../../../css/pages/stepsSection.css";

const StepsSection = () => {
  return (
    <section className="steps">
      <div className="steps__title">
        <p>HOW IT WORKS</p>
        <h3>Rent with following 3 working steps</h3>
      </div>

      <div className="steps__cards--containers">
        <CardInfo
          icon={<img src={locationIcon} alt="location icon" loading="lazy" />}
          title="Choose location"
          description="Choose your location and find your best car."
        />
        <div className="dots--line"></div>
        <CardInfo
          icon={<img src={calendarIcon} alt="calendar icon" loading="lazy" />}
          title="Pick-up date"
          description="Select your pick up date and time to book your car."
          isBlueCard={true}
        />
        <div className="dots--line"></div>

        <CardInfo
          icon={<img src={carIcon} alt="car icon" loading="lazy" />}
          title="Book your cart"
          description="Book your car and we will deliver it directly to you."
        />
      </div>
    </section>
  );
};

export default StepsSection;
