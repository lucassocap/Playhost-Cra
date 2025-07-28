import React from 'react';

const distributionCentersContent = {
  en: {
    title: "Our Distribution Network",
    subtitle: "Strategically located to serve you",
    miami: {
      name: "Miami Distribution Center",
      address: "[Miami address here]", // Replace with actual address
      description: "Our primary distribution center in Miami ensures efficient handling and shipping of parts across Latin America.",
    },
    futureLocations: {
        title: "Future Locations",
        description: "We are continuously expanding our network to better serve our customers. Stay tuned for announcements on new regional offices."
    }
  },
  es: {
    title: "Nuestra Red de Distribución",
    subtitle: "Ubicada estratégicamente para servirle",
    miami: {
      name: "Centro de Distribución de Miami",
      address: "[Dirección de Miami aquí]", // Replace with actual address
      description: "Nuestro centro de distribución principal en Miami garantiza un manejo y envío eficiente de piezas en toda América Latina.",
    },
     futureLocations: {
        title: "Futuras Ubicaciones",
        description: "Estamos expandiendo continuamente nuestra red para servir mejor a nuestros clientes. Estén atentos a los anuncios sobre nuevas oficinas regionales."
    }
  },
};

const DistributionCenters = ({ language }) => {
  const content = distributionCentersContent[language] || distributionCentersContent.en; // Default to English

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="subtitle fadeInUp mb-3">{content.subtitle}</div>
          <h2 className="fadeInUp mb20">{content.title}</h2>
        </div>

        <div className="clearfix"></div>

        <div className="col-lg-6 offset-lg-3">
          <div className="location-item text-center">
            <h3>{content.miami.name}</h3>
            <p>{content.miami.address}</p>
            <p>{content.miami.description}</p>
          </div>
        </div>

        {/* You can add more distribution centers here */}

        <div className="col-lg-12 text-center mt-5">
            <h3>{content.futureLocations.title}</h3>
            <p>{content.futureLocations.description}</p>
        </div>

      </div>
    </div>
  );
};

export default DistributionCenters;
