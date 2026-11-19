"use client";

import { useRef, useState } from "react";
import "./OurClients.css";

const CLIENTS = [
  { name: "Amazon", logo: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2019/10/AmazonbBlack-300x90.png", url: "https://www.amazon.com" },
  { name: "Grab", logo: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2022/06/GrabLogo_Black-300x93.png", url: "https://www.grab.com" },
  { name: "Beam Suntory", logo: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2022/06/BSAsset-14-300x52.png", url: "https://www.beamsuntory.com" },
  { name: "Rakuten", logo: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2022/06/WLAsset-14-1-300x89.png", url: "https://www.rakuten.com" },
  { name: "The Weather Channel", logo: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2022/06/WeatherChannel_Black-1-1-300x300.png", url: "https://weather.com" },
  { name: "SEGA", logo: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2023/11/Sega_Black-300x300.png", url: "https://www.sega.com" },
  { name: "Mobile Premier League", logo: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2022/06/MPL_Black-300x68.png", url: "https://www.mpl.live" },
  { name: "Canva", logo: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2022/06/Canva-logoBLACK-300x93.png", url: "https://www.canva.com" },
  { name: "SoundCloud", logo: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2023/11/Soundcloud_Black-300x300.png", url: "https://soundcloud.com" },
  { name: "JULO", logo: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2022/06/JuloBLACK-300x121.png", url: "https://www.julo.co.id" },
  { name: "FanDuel", logo: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2023/11/Fanduel_Black-300x300.png", url: "https://www.fanduel.com" },
  { name: "Amazon Kindle", logo: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2023/11/Amazon_1-BLack-300x300.png", url: "https://www.amazon.com/kindle" },
  { name: "Myntra", logo: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2023/11/Myntra_Black-300x300.png", url: "https://www.myntra.com" },
  { name: "Swiggy", logo: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2023/11/Swiggy_Black-300x300.png", url: "https://www.swiggy.com" },
  { name: "ASICS", logo: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2023/09/Asics-Logo_Black-300x106.png", url: "https://www.asics.com" },
];

export default function OurClients() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const toggle = () => {
    const next = !expanded;
    setExpanded(next);
    if (!next) {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="clients" className="clients-section" ref={sectionRef} aria-labelledby="clients-title">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 id="clients-title" className="clients-title">Our Clients</h2>
                    <div className="clients-frame">
                        <ul id="clients-grid" className="clients-grid" data-expanded={expanded}>
                            {CLIENTS.map((client) => (
                                <li key={client.name} className="clients-item">
                                    <a href={client.url} target="_blank" rel="noopener noreferrer" className="clients-link" aria-label={`${client.name} (opens in a new tab)`} >
                                        <img src={client.logo} alt={client.name} className="clients-logo" loading="lazy" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button type="button" className="clients-button" onClick={toggle} aria-expanded={expanded} aria-controls="clients-grid" >
                        {expanded ? "View less" : "View more"}
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
}