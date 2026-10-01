import aboutImage from "../assets/aboutImage.png"


function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img src={aboutImage} alt="Dolly Boutique interior" />
      </div>

      <div className="about-content">

        <p className="about-label">
          OUR STORY
        </p>

        <h2>
          Fashion that
          <span> feels like you.</span>
        </h2>

        <p className="about-description">
          At Dolly Boutique, we believe fashion is more than
          what you wear. It's a reflection of your personality,
          confidence, and individuality.
        </p>

        <p className="about-description">
          We carefully curate timeless pieces and contemporary
          styles to help you express your unique sense of style.
        </p>

        <button className="about-btn">
          Discover Our Story
        </button>

      </div>

    </section>
  );
}

export default About;