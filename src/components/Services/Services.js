import ServiceCard from "./ServiceCard/ServiceCard";
import "./Services.css";
import servicesList from "../../servicesData";

const Services = () => {
  return (
    <section className="services">
      <div className="service-more">
        <a href="#" className="">
          More
        </a>
      </div>
      {/* Seervices Card Cntainer */}
      <div className="service-card-container">
        {servicesList.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            image={service.img}
            list={service.list}
          />
        ))}
        {/* <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard /> */}
      </div>
    </section>
  );
};
export default Services;
