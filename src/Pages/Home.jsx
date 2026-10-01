import Image1 from "../assets/Image1.png";

function Home() {
    return (
        <main id="home">
            <section className="hero">

                <div className="hero-image">
                    <img src= {Image1}
                     alt="Luna Boutique fashion collection" />
                </div>

                <div className="hero-content">
                    <p className="hero-subtitle">ELEVATE YOUR STYLE</p>

                    <h1>
                        Discover Your
                        <span> Signature Style.</span>
                    </h1>

                    <p className="hero-description">
                        Curated fashion pieces designed to make every moment
                        feel special.
                    </p>

                    <div className="hero-buttons">
                        <button className="primary-btn">
                            Explore Collection
                        </button>

                        <button className="secondary-btn">
                            Our Story
                        </button>
                    </div>
                </div>

               

            </section>
        </main>
    );
}

export default Home;

