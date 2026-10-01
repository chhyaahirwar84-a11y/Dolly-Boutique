function Services() {
  const services = [
    {
      icon: "✦",
      title: "Curated Collections",
      description:
        "Discover thoughtfully selected pieces that blend timeless elegance with modern trends.",
    },
    {
      icon: "◇",
      title: "Premium Quality",
      description:
        "Every piece is selected with attention to detail, comfort, and lasting style.",
    },
    {
      icon: "♡",
      title: "Personalized Service",
      description:
        "We're here to help you find pieces that match your style and make you feel confident.",
    },
  ];

  return (
    <section className="services" id="services">

      <div className="services-heading">
        <p>WHY DOLLY BOUTIQUE</p>

        <h2>
          More than fashion.
          <span>It's your style.</span>
        </h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={service.title}
          >
            <div className="service-number">
              0{index + 1}
            </div>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a href="#contact">
              Discover More →
            </a>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Services;