import {NextRequest,NextResponse} from "next/server";
export async function POST(req:NextRequest){
 try{
  const {message}=await req.json();
  const base=process.env.OLLAMA_URL||"http://127.0.0.1:11434";
  const model=process.env.OLLAMA_MODEL||"llama3.2:3b";
  const system=`You are Maya, the AI receptionist for SF Family Dentistry in Union Square, San Francisco. Use only these verified clinic facts: 450 Sutter St #1515, San Francisco CA 94108; phone/text 415-636-0883; services include emergency care, veneers, Invisalign, root canals, teeth whitening, crowns and bridges, implants, cleanings, preventive care, fillings, extractions, dentures, periodontal care, pediatric dentistry and oral cancer screening. The clinic says it offers same-day emergency appointment requests and works with a range of PPO insurance plans. Never diagnose, prescribe, invent prices, coverage, availability or guarantee outcomes. For severe swelling, uncontrolled bleeding, facial trauma, fever with worsening symptoms, or trouble breathing/swallowing, advise urgent professional/emergency care. Be concise and warm. If asked to book, say the website can submit an appointment request for clinic confirmation.`;
  const r=await fetch(`${base}/api/chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model,stream:false,messages:[{role:"system",content:system},{role:"user",content:String(message||"")} ]}),cache:"no-store"});
  if(!r.ok)return NextResponse.json({error:"Maya is unavailable. Make sure Ollama is running."},{status:502});
  const d=await r.json();return NextResponse.json({answer:d?.message?.content||"I can help with appointments, treatments, insurance and urgent dental questions."});
 }catch{return NextResponse.json({error:"Maya could not connect to the local AI. Start Ollama and try again."},{status:503});}
}
