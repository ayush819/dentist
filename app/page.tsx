 "use client";
import Link from "next/link";
const cards=[
 ["Emergency dentistry","Fast guidance when you're hurting.","emergency-dentist-san-francisco"],
 ["Veneers","A more confident smile, planned around you.","veneers"],
 ["Invisalign","Clear aligners for a straighter, healthier-looking smile.","invisalign-san-francisco-dentist"],
 ["Root canals","Protect your natural tooth and get back to normal.","root-canals"],
 ["Whitening","A brighter smile with a plan that fits you.","procedures"],
 ["Crowns & bridges","Restore function, strength and appearance.","procedures"],
];
const reviews=[
 ["“She takes the time to explain what she is doing and makes you feel at ease.”","J.A. · Patient since 2014"],
 ["“She explained the condition of each tooth and laid out a step-by-step plan.”","R.V. · Patient since 2012"],
 ["“Friendly, professional and knowledgeable. I’m no longer nervous about appointments.”","S.S. · Patient since 2014"]
];
export default function Home(){
 return <main>
  <section className="hero2"><div className="heroCopy"><div className="eyebrow">UNION SQUARE · SAN FRANCISCO</div><h1>Dentistry that feels <i>human.</i></h1><p>Personalized, gentle dental care for busy San Francisco lives — with same-day emergency requests, modern treatment and a team that explains what matters.</p><div className="heroActions"><a href="/appointments" className="button dark">Book an appointment →</a><a className="button ghost" href="#ask-maya">Ask Maya ✦</a></div><div className="proof"><span><b>★★★★★</b> Patient-loved care</span><span>450 Sutter St · Union Square</span></div></div><div className="heroVisual"><div className="orb"></div><div className="heroPhoto"><span>SF FAMILY DENTISTRY</span><b>Gentle care.<br/>Clear answers.</b><small>450 Sutter St #1515</small></div><div className="floatCard"><strong>Same-day</strong><span>Emergency requests</span></div></div></section>
  <section className="ticker"><span>PERSONALIZED CARE</span><span>EMERGENCY DENTISTRY</span><span>INVISALIGN</span><span>VENEERS</span><span>ROOT CANALS</span><span>INSURANCE SUPPORT</span></section>
  <section id="why-us" className="split"><div><p className="eyebrow">WHY SF FAMILY DENTISTRY</p><h2>A dentist you can actually talk to.</h2></div><div><p>Dr. Sushmita Bhardwaj and the SF Family Dentistry team emphasize gentle care, clear explanations and treatment plans shaped around the patient's needs. The practice is near Union Square and the Financial District, with flexible block appointments for families and busy professionals.</p><Link className="textLink" href="/doctors">Meet the dentists →</Link></div></section>
  <section id="care" className="careSection"><div className="sectionHead"><div><p className="eyebrow">CARE, REIMAGINED</p><h2>From “what is this?”<br/>to “I understand.”</h2></div><Link className="button light" href="/procedures">Explore all procedures</Link></div><div className="serviceGrid">{cards.map((c,i)=><Link className="serviceCard" href={`/services/${c[2]}`} key={c[0]}><span>0{i+1}</span><div><h3>{c[0]}</h3><p>{c[1]}</p></div><b>↗</b></Link>)}</div></section>
  <section className="emergencyFeature"><div className="emergencyIcon">+</div><div><p className="eyebrow gold">NEED HELP NOW?</p><h2>Dental pain shouldn't wait.</h2><p>The practice says it reserves same-day urgent-care slots for dental emergencies. If you're dealing with severe pain, a broken tooth or another urgent concern, call or text the office.</p><div><a className="button light" href="tel:4156360883">Call 415-636-0883</a><a className="button outlineLight" href="/emergency-dentist-san-francisco">Emergency care guide</a></div></div></section>
  <section className="doctorsTeaser"><div className="doctorImage"><span>DR. SUSHMITA BHARDWAJ, DDS</span></div><div><p className="eyebrow">YOUR DENTISTS</p><h2>Expertise without the intimidating feeling.</h2><p>Dr. Bhardwaj is joined by a team of dentists with backgrounds spanning general, cosmetic and restorative care. Their shared goal: make the patient feel informed, comfortable and cared for.</p><Link className="textLink" href="/doctors">Meet the team →</Link></div></section>
  <section className="stories"><div className="sectionHead"><div><p className="eyebrow">PATIENT STORIES</p><h2>People remember<br/><i>how you made them feel.</i></h2></div><Link className="textLink" href="/testimonials">Read all stories →</Link></div><div className="reviewGrid">{reviews.map(r=><article key={r[1]}><b>★★★★★</b><p>{r[0]}</p><small>{r[1]}</small></article>)}</div></section>
  <section className="aiBanner"><div><p className="eyebrow">MEET MAYA · AI RECEPTIONIST</p><h2>Not sure what you need?<br/><i>Just ask.</i></h2><p>Maya can help you explore treatments, understand the next step and start an appointment request — anytime.</p></div><a className="button light" href="#ask-maya">Talk to Maya ✦</a></section>
  <section className="locationHome"><div><p className="eyebrow">COME SEE US</p><h2>Right in the heart<br/>of Union Square.</h2><p>450 Sutter Street #1515<br/>San Francisco, CA 94108</p><a className="textLink" href="https://www.google.com/maps/search/?api=1&query=450+Sutter+Street+San+Francisco+CA+94108" target="_blank">Get directions →</a></div><div className="mapMock"><div className="mapPin">SF</div><span>450 SUTTER ST</span></div></section>
  <style>{``}</style>
 </main>
}
