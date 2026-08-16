import Link from "next/link";
const groups=[
 ["Preventive & general care",["Comprehensive examinations & X-rays","Individualized treatment planning","Teeth cleaning","Fluoride therapy","Periodontal disease treatment","Oral cancer screening","Tooth-colored fillings","Pediatric dentistry"]],
 ["Restorative care",["Root canal therapy","Crowns & bridges","Dental implants","Extractions","Wisdom tooth extractions","Dentures","Teeth grinding treatment"]],
 ["Cosmetic care",["Veneers","Invisalign","Teeth whitening"]],
 ["Urgent care",["Emergency dental treatment","Broken or cracked teeth","Tooth pain guidance","Same-day appointment requests"]]
];
export default function Procedures(){return <main className="inner"><div className="innerHero"><p className="eyebrow">DENTAL PROCEDURES</p><h1>Everything your smile needs.<br/><i>Nothing it doesn't.</i></h1><p>A complete care menu, organized so you can understand what each visit is for — and choose your next step with confidence.</p></div><div className="procedureGroups">{groups.map(g=><section key={g[0]}><h2>{g[0]}</h2><div>{g[1].map(x=><article key={x}><span>+</span><b>{x}</b></article>)}</div></section>)}</div><div className="ctaBand"><h2>Not sure which treatment fits?</h2><p>Ask Maya and start with your symptoms, goals or questions.</p><a href="/" className="button light">Start with Maya →</a></div></main>}
