import Link from "next/link";

export default function PropertiesGrid({ properties }) {
    if (!properties || properties.length === 0) {
        return (
            <div className="text-center py-20">
                <h3 className="text-2xl font-bold text-gray-400">No properties found.</h3>
            </div>
        );
    }

    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    {properties.map((property) => (
                        <div key={property.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="card-style-1 hover-up">
                                <div className="card-image">
                                    <Link href={`/properties/${property.slug}`}>
                                        <div className="image-box">
                                            {property.images && property.images.length > 0 ? (
                                                <img src={property.images[0]} alt={property.title} className="img-fluid" style={{ height: "250px", objectFit: "cover", width: "100%" }} />
                                            ) : (
                                                <div className="placeholder-image" style={{ height: "250px", backgroundColor: "#2C2C39", display: "flex", alignItems: "center", justifyContent: "center", color: "#888" }}>
                                                    No Image
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                    <div className="card-info">
                                        <span className="status-tag">{property.status}</span>
                                    </div>
                                </div>
                                <div className="card-info-bottom">
                                    <h4 className="card-title">
                                        <Link href={`/properties/${property.slug}`}>{property.title}</Link>
                                    </h4>
                                    <div className="price">
                                        <span>{property.currency} {Number(property.price).toLocaleString()}</span>
                                    </div>
                                    <p className="location">{property.location || "Location not specified"}</p>

                                    <div className="meta-info">
                                        {property.bedrooms && <span>{property.bedrooms} Beds</span>}
                                        {property.bathrooms && <span> • {property.bathrooms} Baths</span>}
                                        {property.areaSqFt && <span> • {property.areaSqFt} sqft</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .card-style-1 {
            background: #14141F;
            border: 1px solid #2C2C39;
            border-radius: 16px;
            overflow: hidden;
            transition: all 0.3s ease;
            margin-bottom: 30px;
        }
        .card-style-1:hover {
            transform: translateY(-5px);
            border-color: #DDF247;
        }
        .card-title a {
            color: #fff;
            text-decoration: none;
        }
        .price {
            color: #DDF247;
            font-weight: bold;
            font-size: 1.2rem;
            margin: 10px 0;
        }
        .location {
            color: #888;
            font-size: 0.9rem;
            margin-bottom: 15px;
        }
        .meta-info {
            border-top: 1px solid #2C2C39;
            padding-top: 15px;
            color: #aaa;
            font-size: 0.9rem;
        }
        .status-tag {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(0,0,0,0.7);
            color: #fff;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
        }
        .card-image {
            position: relative;
        }
        .card-info-bottom {
            padding: 20px;
        }
      `}</style>
        </section>
    );
}
