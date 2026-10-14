# Helmar — Din Spelguide

Helmar är Izabelles svenskspråkiga AI-chatbot och levande uppslagsverk, specialiserad på Skyrim, Toukiden 2, Where Winds Meet, Fallout, Cyberpunk 2077, vikingahistoria och nordisk mytologi. Hon kan ha en naturlig konversation med Helmar och ställa följdfrågor. Om ett spel är valt söker han flera relevanta wikiartiklar och använder dem som faktaunderlag för ett utförligt, lättöverskådligt chatsvar med källänkar. Om ett annat spel nämns vid namn använder han det spelets wiki; under "Alla äventyr" frågar han vilket spel som avses när det behövs. När spelaren kört fast ger han konkreta nästa steg och alternativ utan att kräva en redogörelse för alla framsteg. Den separata muntliga sammanfattningen är kort så att Helmar inte läser upp hela svaret.

## Spel & Ämnen
- Skyrim
- Toukiden 2
- Where Winds Meet
- Fallout
- Cyberpunk 2077
- Vikingahistoria
- Nordisk mytologi

## AI på Netlify

AI-svaren skapas i `netlify/functions/helmar.mts` via Anthropic SDK och Netlify AI Gateway. Gatewayen måste vara aktiverad för Netlify-kontot och webbplatsen måste ha en production deploy. Funktionen använder modell-ID:t i `HELMAR_AI_MODEL` om det är satt, annars `claude-haiku-4-5`. Den begränsar trafik till 20 frågor per minut och IP-adress.

Lokal utveckling av funktionen kräver Netlify CLI och ett tidigare production deploy för att AI Gateway ska vara tillgänglig. Om Gateway inte är aktiverad visas ett tydligt fel i chatten.

Helmar behåller de senaste chattmeddelandena i sidans minne så att följdfrågor kan använda tidigare spel- och uppdragskontext. Den befintliga 3D-modellen visas permanent i närbild från bröstet och upp; hälsningstexten är "Jag är redo att svara på dina frågor, Izabelle." Modellen saknar ansiktsrigg och mun-morfmål; munöppningen under tal är därför approximativ, inte fullständig ansikts- eller fonemsynk.

Tal använder en svensk mansröst från webbläsarens installerade röster (till exempel "Microsoft Bengt - Swedish" i Chrome på Windows). Om ingen igenkänd svensk mansröst finns tillgänglig visas ett meddelande i chatten i stället för att byta till en ospecificerad röst. När Izabelle startar mikrofonen avbryts Helmars uppläsning direkt så att han kan lyssna.

---
Skapad av Catherine Eskilsdotter 2026.
