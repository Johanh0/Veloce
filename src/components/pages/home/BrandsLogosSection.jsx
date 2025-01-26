import { brandLogos } from "../../../utils/brandLogos";

const BrandsLogosSection = () => {
  return (
    <section className="logos">
      {brandLogos.map((logo) => (
        <img src={logo.img} alt="logo" />
      ))}
    </section>
  );
};

export default BrandsLogosSection;
