 "use client";
import {useState} from "react";
export function Maya({onClose,onBook}:{onClose:()=>void,onBook:()=>void}){
 const [messages,setMessages]=useState([{role:"assistant",text:"Hi — I'm Maya, the virtual receptionist. Tell me what you need help with and I'll guide you to the right next step."}]);
 const [value,setValue]=useState("");const [busy,setBusy]=useState(false);
 async function send(text=value){if(!text.trim()||busy)return;setValue("");setMessages(m=>[...m,{role:"user",text}]);setBusy(true);
  try{const r=await fetch("/api/maya",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:text})});const d=await r.json();setMessages(m=>[...m,{role:"assistant",text:d.answer||d.error||"I can help with appointments and treatment information."}]);}
  catch{setMessages(m=>[...m,{role:"assistant",text:"I'm having trouble connecting. Please call or text the office at 415-636-0883."}]);}finally{setBusy(false);}
 }
 return <div className="mayaBackdrop"><aside className="mayaPanel"><div className="mayaHead"><div><span className="mayaDot"/>MAYA <small>AI RECEPTIONIST</small></div><button onClick={onClose}>×</button></div>
 <div className="mayaIntro"><span>✦</span><div><b>How can I help?</b><p>Treatments, emergencies, insurance or appointments.</p></div></div>
 <div className="mayaMessages">{messages.map((m,i)=><div key={i} className={m.role==="user"?"mayaMsg user":"mayaMsg"}>{m.text}</div>)}{busy&&<div className="mayaTyping">Maya is thinking…</div>}</div>
 <div className="mayaQuick"><button onClick={()=>send("I need an appointment")}>Book</button><button onClick={()=>send("What treatments do you offer?")}>Treatments</button><button onClick={()=>send("I have severe tooth pain")}>Emergency</button><button onClick={()=>send("Do you accept insurance?")}>Insurance</button></div>
 <div className="mayaBook"><button onClick={onBook}>Request an appointment →</button></div>
 <form className="mayaInput" onSubmit={e=>{e.preventDefault();send()}}><input value={value} onChange={e=>setValue(e.target.value)} placeholder="Ask Maya anything…"/><button>↑</button></form>
 </aside></div>
}
