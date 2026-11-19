"use client";

import { useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Bird, CalendarDays, Check,
  ChevronDown, Clock3, Coffee, Flower2, Leaf, MapPin, Menu, MessageCircle,
  Mountain, Music2, ParkingCircle, Phone, ShieldCheck, Sparkles, Utensils,
  Wifi, X
} from "lucide-react";

const WA = "https://wa.me/250787396666";
const BASE = "/Nature%20kigali";
const photos = {
  hero:    `${BASE}/Exterior-Photo-at-Nature-Kigali-2-1-1024x683.jpg`,
  room:    `${BASE}/SUqBiBmxiYTBrE3Nz24Q27oUUHeT1tqMaveLjZx7QZgEm2w-_pznnwh19bTbg0fpRyJi3PIj2Fhba6JQfq-QFwnwAN7T88TPvSvtJnIX4WEz3fCoeXy2IjxJUeUtVkvuwhuCZLeo2wn60WuwwDEUbxcNvz5EzwvFkRDslVaUQeDkRS6ML3onAvgzHQXn8mtp.jpg`,
  dining:  `${BASE}/Indoor-Dining-Area-at-Nature-Kigali-1-1024x683.jpg`,
  garden:  `${BASE}/Exterior-Photo-at-Nature-Kigali-3-1-683x1024.jpg`,
  lawn:    `${BASE}/Garden-Area-at-Nature-Kigali-4-683x1024.jpg`,
  entrance:`${BASE}/2024-03-21.webp`,
  room2:   `${BASE}/q5fDcGhOCBe7gKR4rWDxtvmqzMBr_OrM-FtNkPi5Tx7MRUprCiEyxEAZIQ28F1IOfZI2ni-zA0xe2344GwBbaSw1ICFVZYjHhHsdufseOgmQesM7yXGsdRHrYFOTjJXIvW_Tqyk9M5PGZuJYSiNZe5To7BsWlaBsQ_2Y-WPOhCaNOCVFP3Y6e9o-oipc95uy.jpg`,
  exterior:`${BASE}/RGUJmR78QsmS3mDN-m7s2BQiUAhFdPVNHi9QXFUueao7FbHHCAnvFwEvimB4aIXZZ0ma-EVt3P0iDSRrgRpY1sL9hMhoTgPIL04fbkdezQhHBFNnBMMkec0MWL7WOXG84gqGcOlLmbIa1w59fsEvInk7t0BaQtmkIzHt5dErtHx-iC8KUrZz_qXkf5KpPQFU.jpg`,
  gate:    `${BASE}/XZlFGUaN06N8KpB6fgM3wOIUoidZBMNgkDcyKi8dh5i1TKkPs0RWtgYhpVHyNSh9-zE6QqboxRznRTZgbSclDUeA-u0ijogO7wuRe9UTWbEGKtqvWQZ_Qf1X7EKbI8WXc2U6qzTyJbGJhxntJoELrssHWszIuAEFaZhWOnN2Bg0yuGRMlsihX7wzc3vdLgxc.jpg`,
};

function Photo({ src, alt, className = "" }: {src:string; alt:string; className?:string}) {
  return <div role="img" aria-label={alt} className={`photo ${className}`} style={{backgroundImage:`url("${src}")`}} />;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [guests, setGuests] = useState("2 guests");
  const [galleryIndex, setGalleryIndex] = useState<number|null>(null);

  const requestBooking = () => {
    const msg = `Hello Nature Kigali, I would like to enquire about a stay.%0AArrival: ${arrival || "To be confirmed"}%0ADeparture: ${departure || "To be confirmed"}%0AGuests: ${guests}`;
    window.open(`${WA}?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  const gallery = [
    {src: photos.exterior,  title:"The property from the garden"},
    {src: photos.room,      title:"A comfortable place to rest"},
    {src: photos.dining,    title:"Good food, thoughtfully served"},
    {src: photos.lawn,      title:"Open gardens to explore and unwind"},
    {src: photos.room2,     title:"Spacious rooms with garden views"},
    {src: photos.gate,      title:"Welcome to Nature Kigali"},
  ];

  return (
    <main>
      <div className="announcement"><span className="announcement-dot"/> A QUIETER SIDE OF KIGALI <span className="announce-line"/> NYARUTARAMA, RWANDA</div>
      <header className="header">
        <a href="#" className="brand" aria-label="Nature Kigali home">
          <span className="brand-mark"><Leaf size={22}/></span>
          <span><strong>NATURE</strong><small>KIGALI</small></span>
        </a>
        <nav className="desktop-nav">
          <a href="#stay">Stay</a><a href="#dine">Dine</a><a href="#nature">Nature</a><a href="#gather">Gather</a><a href="#visit">Find us</a>
        </nav>
        <button className="nav-cta" onClick={()=>setBookingOpen(true)}>Enquire / Book <ArrowUpRight size={15}/></button>
        <button className="mobile-toggle" aria-label="Toggle menu" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
      </header>
      {menuOpen && <div className="mobile-menu">{["Stay","Dine","Nature","Gather","Visit"].map(x=><a key={x} href={`#${x.toLowerCase()}`} onClick={()=>setMenuOpen(false)}>{x}</a>)}<button onClick={()=>{setBookingOpen(true);setMenuOpen(false)}}>Enquire / Book <ArrowUpRight size={16}/></button></div>}

      <section className="hero">
        <Photo src={photos.hero} alt="Nature Kigali exterior and gardens" className="hero-image"/>
        <div className="hero-shade"/>
        <div className="hero-content">
          <div className="eyebrow light"><span/> A BOUTIQUE GARDEN RETREAT IN KIGALI</div>
          <h1>Find your<br/><em>natural</em> pause.</h1>
          <p>Stay a little slower. Dine a little longer. Discover a greener side of Kigali, tucked away in the heart of Nyarutarama.</p>
          <div className="hero-actions"><button className="button button-light" onClick={()=>setBookingOpen(true)}>Plan your stay <ArrowUpRight size={17}/></button><a className="text-link light-link" href="#experience">Explore the experience <ArrowDown size={15}/></a></div>
        </div>
        <div className="hero-bottom"><span>01 — 06</span><span className="hero-bottom-line"/><span>STAY · DINE · EXPLORE</span><span className="hero-scroll">SCROLL TO DISCOVER ↓</span></div>
        <div className="hero-stamp"><Leaf size={18}/><span>ROOTED IN<br/>RWANDAN WARMTH</span></div>
      </section>

      <section className="intro section-pad" id="experience">
        <div className="section-kicker">WELCOME TO NATURE KIGALI <span>✳</span></div>
        <div className="intro-grid">
          <h2>A little sanctuary.<br/><em>Right where you need it.</em></h2>
          <div className="intro-copy"><p>Some places make you feel like you have stepped away from the city. Nature Kigali brings that feeling close — a welcoming boutique stay surrounded by gardens, thoughtful hospitality and the everyday beauty of Rwanda.</p><a href="#stay" className="under-link">Discover the place <ArrowUpRight size={16}/></a></div>
        </div>
        <div className="stats-row">
          <div><strong>06</strong><span>BOUTIQUE ROOMS</span></div><div><strong>50+</strong><span>BIRD SPECIES OBSERVED</span></div><div><strong>3</strong><span>WAYS TO EXPERIENCE</span></div><div><strong>KGL</strong><span>NYARUTARAMA, KIGALI</span></div>
        </div>
      </section>

      <section className="stay section-pad" id="stay">
        <div className="section-heading"><div><div className="section-kicker">REST EASY <span>01 / STAY</span></div><h2>Room to <em>unwind.</em></h2></div><p>Six thoughtfully welcoming rooms, made for restful nights and unhurried mornings in Kigali.</p></div>
        <div className="stay-grid">
          <div className="stay-photo-wrap"><Photo src={photos.room} alt="Warm boutique hotel bedroom" className="stay-photo"/><span className="image-note">YOUR SPACE TO RESET</span></div>
          <div className="stay-details"><span className="mini-label">THE BOUTIQUE HOTEL</span><h3>Come in.<br/><em>Feel at home.</em></h3><p>Whether Kigali is a stop on your journey or the destination itself, settle into a calm and comfortable base with the essentials taken care of.</p>
            <div className="amenities"><span><Coffee/> Breakfast included</span><span><Wifi/> Complimentary Wi-Fi</span><span><Clock3/> Check-in 2 PM · Check-out 11 AM</span><span><ParkingCircle/> On-site parking</span></div>
            <button className="button button-dark" onClick={()=>setBookingOpen(true)}>Enquire about a room <ArrowUpRight size={16}/></button>
          </div>
        </div>
      </section>

      <section className="dine" id="dine">
        <div className="dine-image"><Photo src={photos.dining} alt="Restaurant dining experience"/></div>
        <div className="dine-copy"><div className="section-kicker light">GATHER AROUND THE TABLE <span>02 / DINE</span></div><h2>Good food.<br/><em>Garden moments.</em></h2><p>Fresh meals, coffee and outdoor dining come together in a relaxed, family-friendly setting. Come for a meal, stay for the atmosphere.</p><a href="https://naturekigali.com/wp-content/uploads/2025/11/NatureKigaliMenu.pdf" target="_blank" rel="noreferrer" className="button button-outline">Explore the menu <ArrowUpRight size={16}/></a><small>Menu and offerings may change. Please confirm directly with the team.</small></div>
      </section>

      <section className="nature section-pad" id="nature">
        <div className="nature-top"><div><div className="section-kicker">A DIFFERENT KIND OF CITY ESCAPE <span>03 / NATURE</span></div><h2>Let the city<br/><em>become a little quieter.</em></h2></div><p>Look a little closer. The gardens are alive with indigenous plants and birdlife — a peaceful pocket of nature in the middle of Kigali.</p></div>
        <div className="nature-feature"><Photo src={photos.garden} alt="Lush green garden" className="nature-main"/><div className="nature-card"><Bird size={25}/><strong>50+</strong><span>BIRD SPECIES OBSERVED IN THE GARDENS</span><p>Explore birding experiences, discover local hotspots and ask about arranging a bird guide.</p><a href="https://naturekigali.com/" target="_blank" rel="noreferrer">Discover more <ArrowUpRight size={15}/></a></div></div>
      </section>

      <section className="gather section-pad" id="gather">
        <div className="section-heading"><div><div className="section-kicker">MAKE IT A MOMENT <span>04 / GATHER</span></div><h2>Good things happen<br/><em>when we gather.</em></h2></div><p>From intimate celebrations to team gatherings, Nature Kigali offers indoor and outdoor spaces for moments worth bringing people together for.</p></div>
        <div className="gather-grid"><Photo src={photos.lawn} alt="Garden and outdoor event space at Nature Kigali" className="gather-image"/><div className="gather-text"><span className="mini-label">EVENTS & OCCASIONS</span><h3>Your people.<br/><em>Your occasion.</em></h3><p>Ask the team about hosting birthdays, celebrations, meetings, team-building activities and other special occasions.</p><a className="under-link" href={WA} target="_blank" rel="noreferrer">Talk to our events team <ArrowUpRight size={16}/></a></div></div>
      </section>

      <section className="gallery-section section-pad">
        <div className="gallery-head"><div><div className="section-kicker">A GLIMPSE OF THE EXPERIENCE <span>05 / GALLERY</span></div><h2>Little moments.<br/><em>Lasting memories.</em></h2></div><p>Explore the feeling of Nature Kigali.</p></div>
        <div className="gallery-grid">{gallery.map((item,i)=><button key={item.title} className={`gallery-item gallery-${i}`} onClick={()=>setGalleryIndex(i)} aria-label={`Open image: ${item.title}`}><Photo src={item.src} alt={item.title}/><span>{item.title}<ArrowUpRight size={15}/></span></button>)}</div>
      </section>

      <section className="visit" id="visit">
        <div className="visit-copy"><div className="section-kicker light">YOUR KIGALI MOMENT STARTS HERE <span>06 / VISIT</span></div><h2>Come find<br/><em>your place.</em></h2><p>In Nyarutarama, close to the city and airport, yet wonderfully removed from the rush.</p><div className="visit-info"><span><MapPin/> KG 515 Street, Nyarutarama, Kigali, Rwanda</span><span><Phone/> +250 787 396 666</span><span><MessageCircle/> +250 783 611 493</span></div><button className="button button-light" onClick={()=>setBookingOpen(true)}>Make an enquiry <ArrowUpRight size={16}/></button></div>
        <div className="map-panel"><div className="map-card"><span className="map-pin"><MapPin size={22}/></span><strong>NATURE KIGALI</strong><small>KG 515 St, Nyarutarama</small><a href="https://www.google.com/maps/search/?api=1&query=Nature+Kigali+KG+515+Street+Nyarutarama" target="_blank" rel="noreferrer">Open directions <ArrowUpRight size={15}/></a></div><div className="map-caption">KIGALI · RWANDA</div></div>
      </section>

      <section className="closing section-pad"><span className="closing-mark"><Leaf size={27}/></span><div className="section-kicker">A WARM WELCOME AWAITS</div><h2>Stay close to nature.<br/><em>Feel at home.</em></h2><button className="button button-dark" onClick={()=>setBookingOpen(true)}>Start planning your stay <ArrowUpRight size={16}/></button></section>

      <footer className="footer"><a href="#" className="brand brand-footer"><span className="brand-mark"><Leaf size={20}/></span><span><strong>NATURE</strong><small>KIGALI</small></span></a><span>KG 515 Street, Nyarutarama · Kigali, Rwanda</span><span>© {new Date().getFullYear()} NATURE KIGALI</span><a href={WA} target="_blank" rel="noreferrer">SAY HELLO <ArrowUpRight size={14}/></a></footer>

      {bookingOpen && <div className="modal-backdrop" onClick={()=>setBookingOpen(false)}><div className="booking-modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setBookingOpen(false)} aria-label="Close"><X/></button><div className="section-kicker">LET'S PLAN SOMETHING GOOD</div><h2>Your stay,<br/><em>your pace.</em></h2><p>Share a few details and our team can help with availability and the best way to plan your visit.</p><label>Arrival date<input type="date" value={arrival} onChange={e=>setArrival(e.target.value)}/></label><label>Departure date<input type="date" value={departure} min={arrival || undefined} onChange={e=>setDeparture(e.target.value)}/></label><label>Guests<select value={guests} onChange={e=>setGuests(e.target.value)}><option>1 guest</option><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5+ guests</option></select></label><button className="button button-dark full-button" onClick={requestBooking}>Continue on WhatsApp <ArrowUpRight size={16}/></button><small className="modal-note">Demo enquiry interface · Availability is confirmed directly by Nature Kigali.</small></div></div>}

      {galleryIndex!==null && <div className="lightbox" onClick={()=>setGalleryIndex(null)}><button aria-label="Close gallery" onClick={()=>setGalleryIndex(null)}><X/></button><Photo src={gallery[galleryIndex].src} alt={gallery[galleryIndex].title}/><span>{gallery[galleryIndex].title}</span></div>}
    </main>
  );
}
