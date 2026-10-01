import dress2 from "../assets/products/dress2.jpg";
import handbag2 from "../assets/products/handbag2.jpg";
import heels2 from "../assets/products/heels2.jpg";
import accessories2 from "../assets/products/accessories2.jpg";

function Collections() {
  const collections = [
    {
      name: "Floral Dresses",
      category: "DRESSES",
      image: dress2,
      size: "large",
    },
    {
      name: "Classic Handbags",
      category: "HANDBAGS",
      image: handbag2,
      size: "small",
    },
    {
      name: "Aesthetic Accessories",
      category: "ACCESSORIES",
      image: accessories2,
      size: "small",
    },
    {
      name: "Luxury Heels",
      category: "FOOTWEAR",
      image: heels2,
      size: "wide",
    },
  ];

  return (
    <section className="collections" id="collections">

      <div className="section-heading">
        <p>OUR COLLECTION</p>

        <h2>
          Discover pieces
          <span> made for you.</span>
        </h2>
      </div>

      <div className="editorial-grid">

        {collections.map((item) => (
          <div
            className={`editorial-item ${item.size}`}
            key={item.name}
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <div className="editorial-overlay">
              <p>{item.category}</p>

              <h3>{item.name}</h3>

              <button>
                Explore Collection →
              </button>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Collections;
