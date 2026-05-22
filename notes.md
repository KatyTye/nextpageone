# Noter For Next Project

## Opgave 1

### Øvelse 1:
- Projected starter på port 3000
- Den laver et hotreload når man laver ændringer ligesom i Vite
- Jeg kan stoppe serveren ved klikke på CTRL+C 2 gange

### Øvelse 2:
- Det er forsiden som ligger på http://localhost:3000/
- Layout tsx filen bruges til at lave selve layouted til alle sider og som fortæller hvor alt skal ligge fra sidernes indhold
- Favicon ligger på url'en http://localhost:3000/favicon.ico
- Selve scriptet 'dev' kører projected i development som er i next

### Øvelse 3:
- Jeg skulle ikke gøre noget ved/installere nogle config filer for at lave selve routing til de andre sider
- Jeg misted en masse kontrol over hvordan routeren skal virke når man bruger next istedet for Vite

### Øvelse 4:
- /app/layout.tsx: C
- /app/page.tsx: A
- /public: B
- /app/about/page.tsx: D

# Opgave 2

### Øvelse 1:
- Det var super nemt

### Øvelse 2:
- Det er indput fæltet der ændrer sig og det gør indholdet sig også på grund af at indholdet bruger paramet

### Øvelse 3:
- Selve det tag som jeg har kalt h1 istedet for nav så kommer den på alle sider siden den er fra layout og alt det andet indhold kommer fra de filer som hedder page.tsx

# Opgave 3

### Øvelse 1:
- Ja den er en del af den statiske side så den er statisk

### Øvelse 2:
- Ja der stor forskel fordi de andre 2 virker ikke det er 'npm run build' og 'npm run start' men hvis de gøres rigtig så er der igen forskel
- Nej det er dynamisk indhold men det kommer bare fra chachen/fetchen
- Der er forskel på at hente data fra en tjedepart istedet for at det ligger fast kodet ind på hjemmesiden

### Øvelse 3:
- Fordi at selve optællingen skal ske på klientens side for ellers virker det ikke
- Fordi den indeholder noget dynamisk der kræver bruger klik

# Opgave 3

### Øvelse 1:
- Ja

### Øvelse 2:
- Den er en midlertidig side/component for at hente den dynamiske data
- Loading page er en del af den statiske skal fordi den ændrer sig ikke

### Øvelse 3:
- Den ændrer sig ikke med det samme fact da det er chached
- Ja det gør den så chachen reloader hvert minut

### Øvelse 4:
- Det er på grund af at console ændrer sig når den bruges på serveren istedet for clienten da server console ligger i serverens terminal
- Den ene gemmer tingne på serveren og den anden gør det på en extern API
