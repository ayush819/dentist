const stories=[
["J.A.","The patient described feeling anxious before visiting and appreciated that Dr. Bhardwaj explained each step and listened carefully."],
["R.V.","A patient since 2012 highlighted the clear explanation of each tooth, a step-by-step plan and an efficient treatment schedule."],
["S.S.","A long-term patient praised the team as friendly, professional and knowledgeable, and said dental visits became less intimidating."],
["B.S.","A patient appreciated the emphasis on prevention, thoroughness and the extra attention to comfort."],
["Y.J.","A family patient described relying on the practice for routine care and after-hours guidance during a dental emergency."]
];
export default function Testimonials(){return <main className="inner"><div className="innerHero"><p className="eyebrow">PATIENT STORIES</p><h1>Care you can<br/><i>feel good about.</i></h1><p>Stories below are summaries of the practice's published patient testimonials.</p></div><div className="testimonialList">{stories.map(s=><article key={s[0]}><b>★★★★★</b><p>“{s[1]}”</p><small>{s[0]} · SF Family Dentistry patient</small></article>)}</div></main>}
