 "use client";
import {useState} from "react";
import Link from "next/link";
import {BookingModal} from "./booking-modal";
import {Maya} from "./maya";

export function SiteShell({children}:{children:React.ReactNode}) {
  const [booking,setBooking]=useState(false);
  const [maya,setMaya]=useState(false);
  const [menu,setMenu]=useState(false);
  return <>
    <div className="emergencyBar"><span>Urgent dental pain or a broken tooth?</span><a href="tel:4156360883">Call / text 415-636-0883</a><span className="hideMob">Same-day emergency requests available</span></div>
    <header className="siteHeader">
      <Link href="/" className="brand" onClick={()=>setMenu(false)}><span>SF FAMILY</span><b>DENTISTRY</b><small>UNION SQUARE · SAN FRANCISCO</small></Link>
      <button className="menuBtn" onClick={()=>setMenu(!menu)} aria-label="Menu">☰</button>
      <nav className={menu?"nav open":"nav"}>
        <Link href="/#care" onClick={()=>setMenu(false)}>Care</Link>
        <Link href="/#why-us" onClick={()=>setMenu(false)}>Why us</Link>
        <Link href="/doctors" onClick={()=>setMenu(false)}>Doctors</Link>
        <Link href="/insurance" onClick={()=>setMenu(false)}>Insurance</Link>
        <Link href="/directions" onClick={()=>setMenu(false)}>Location</Link>
        <button className="navMaya" onClick={()=>{setMaya(true);setMenu(false)}}>Ask Maya</button>
        <button className="navBook" onClick={()=>{setBooking(true);setMenu(false)}}>Book appointment</button>
      </nav>
    </header>
    {children}
    <footer className="footer">
      <div className="footerTop">
        <div><div className="brand footerBrand"><span>SF FAMILY</span><b>DENTISTRY</b><small>UNION SQUARE · SAN FRANCISCO</small></div><p>Personalized dental care for families, professionals and anyone who wants a calmer experience at the dentist.</p></div>
        <div><h4>Explore</h4><Link href="/procedures">All procedures</Link><Link href="/doctors">Meet the dentists</Link><Link href="/testimonials">Patient stories</Link><Link href="/savings-plan">Savings plan</Link></div>
        <div><h4>Visit</h4><p>450 Sutter St #1515<br/>San Francisco, CA 94108</p><a href="tel:4156360883">415-636-0883</a><a href="mailto:info@familydentistsanfrancisco.com">Email the office</a></div>
        <div><h4>Start here</h4><button className="footerBtn" onClick={()=>setBooking(true)}>Request an appointment →</button><button className="footerText" onClick={()=>setMaya(true)}>Talk to Maya →</button></div>
      </div>
      <div className="footerBottom"><span>© 2026 SF Family Dentistry</span><span>450 Sutter St · Union Square · San Francisco</span><span><Link href="/careers">Careers</Link> · <Link href="/blog">Patient education</Link></span></div>
    </footer>
    {booking && <BookingModal onClose={()=>setBooking(false)}/>}
    {maya && <Maya onClose={()=>setMaya(false)} onBook={()=>{setMaya(false);setBooking(true)}}/>}
  </>;
}
