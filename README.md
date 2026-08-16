# SF Family Dentistry — Complete redesign

This build uses the live reference site's verified information architecture and clinic facts, then redesigns the UX as a modern premium dental experience.

Verified reference facts include Union Square / 450 Sutter St #1515, 415-636-0883, emergency care, veneers, Invisalign, root canals, whitening, crowns/bridges, implants, preventive/pediatric care, insurance/savings information, dentist profiles, testimonials, directions, appointments, careers and patient education.

## Run
npm install
npm run dev

For local Maya:
ollama pull llama3.2:3b
ollama serve

Then open http://localhost:3000.

## Functional flows
- Appointment request -> existing Supabase create-appointment Edge Function
- Maya -> local Ollama -> dental-specific receptionist prompt
- Mobile navigation
- Service detail routes
- Insurance inquiry UI
- Directions / phone / email links
- Patient education, careers, savings plan and testimonials sections
