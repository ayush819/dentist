 "use client";
import {useState} from "react";
const services=["New patient exam","Cleaning & preventive care","Emergency / tooth pain","Veneers","Invisalign","Root canal","Whitening","Crowns & bridges","Dental implants","Other"];
export function BookingModal({onClose}:{onClose:()=>void}) {
 const [sent,setSent]=useState(false),[busy,setBusy]=useState(false),[error,setError]=useState("");
 async function submit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();setBusy(true);setError("");
  const f=new FormData(e.currentTarget);
  try{
   const r=await fetch(process.env.NEXT_PUBLIC_SUPABASE_FUNCTION_URL||"",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
    patient_name:f.get("name"),patient_phone:f.get("phone"),patient_email:f.get("email"),
    service_name:f.get("service"),preferred_date:f.get("date"),preferred_time:f.get("time")
   })});
   const d=await r.json();if(!r.ok)throw new Error(d.error||"Please call the office to complete your request.");
   setSent(true);
  }catch(x){setError(x instanceof Error?x.message:"Something went wrong.");}finally{setBusy(false);}
 }
 return <div className="modalBackdrop"><div className="modal bookingModal"><button className="x" onClick={onClose}>×</button>{sent?<div className="success"><span>✓</span><p className="eyebrow">REQUEST RECEIVED</p><h2>We have your request.</h2><p>The clinic can review your preferred time and contact you to confirm the appointment.</p><a className="button dark" href="tel:4156360883">Call 415-636-0883</a></div>:<>
 <p className="eyebrow">APPOINTMENT REQUEST</p><h2>Let's find a time that works.</h2><p>Tell us what you need. This sends a request to the clinic — it does not guarantee a booking.</p>
 <form onSubmit={submit} className="formGrid"><input name="name" required placeholder="Full name"/><input name="phone" required placeholder="Phone number"/><input name="email" type="email" placeholder="Email"/><select name="service" required><option value="">What can we help with?</option>{services.map(s=><option key={s}>{s}</option>)}</select><input name="date" type="date"/><select name="time"><option>Preferred time</option><option>Morning</option><option>Midday</option><option>Afternoon</option><option>Evening</option></select><button disabled={busy} className="button dark full">{busy?"Sending…":"Request appointment →"}</button></form>{error&&<p className="formError">{error}</p>}<small className="formNote">Prefer to talk? <a href="tel:4156360883">Call or text 415-636-0883.</a></small></>}</div></div>
}
