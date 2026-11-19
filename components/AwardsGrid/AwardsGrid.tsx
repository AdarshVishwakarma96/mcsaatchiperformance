import Image from "next/image";
import "./AwardsGrid.css";

const awards = [
  { src: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2023/10/MMA-Smarties-APAC-Winner__Gold_Black-1-300x300.png", alt: "MMA Smarties APAC Winner Gold", href: "https://example.com/mma-smarties" },
  { src: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2023/12/Asia-Pacific-Performance-Agency-300x300.png", alt: "Campaign Agency of the Year 2023 Asia Pacific, Winner", href: "https://example.com/campaign-apac" },
  { src: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2023/10/The-Drum-Awards__Highly-Commended__White-1-300x300.png", alt: "The Drum Awards Digital Advertising APAC, Highly Commended 2022", href: "https://example.com/drum-awards" },
  { src: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2023/10/Markies_Individual_Winner_Black-1-300x300.png", alt: "Markies Awards 2023 Gold", href: "https://example.com/markies" },
  { src: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2023/10/Stevie_Black-300x300.png", alt: "2022 Stevie Winner Gold, American Business Awards", href: "https://example.com/stevie" },
  { src: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2023/10/UK-Agency-Awards__Gold__2023___550x550_Black-300x300.png", alt: "UK Agency Awards 2023 Winner", href: "https://example.com/uk-agency-awards" },
  { src: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2023/10/Markies-Agency-of-the-Year_Black-300x300.png", alt: "Agency of the Year Awards 2023 Gold", href: "https://example.com/agency-of-the-year" },
  { src: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2023/11/Marketing-Excellence-Awards-Black-1-300x300.png", alt: "Marketing Excellence Awards 2023 Indonesia Gold", href: "https://example.com/marketing-excellence" },
  { src: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2023/11/Global-Logo_Black-1-300x300.png", alt: "Global Performance Marketing Awards 2023 Winner", href: "https://example.com/gpma" },
  { src: "https://cdn-ilellnp.nitrocdn.com/DVoHflVnJQHYOqexcWVIsCcCJdgJBITv/assets/images/optimized/rev-b7a65ae/www.mcsaatchiperformance.com/wp-content/uploads/2023/12/SEA-Performance-Agency-Gold-300x300.png", alt: "Campaign Agency of the Year 2023 Southeast Asia, Gold", href: "https://example.com/campaign-sea" },
];

export default function AwardsGrid() {
  return (
    <div className="mcs-awards" aria-label="Awards and recognition">
      <ul className="mcs-awards-list">
        {awards.map((award) => (
          <li className="mcs-awards-item" key={award.src}>
            <a className="mcs-awards-link" href={award.href} target="_blank" rel="noopener noreferrer" >
              <img className="mcs-awards-logo" src={award.src} alt={award.alt} width={260} height={200} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}