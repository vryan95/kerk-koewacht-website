# Kerk Koewacht

Nederlandstalige, responsive website voor het buurtvoorstel rond de voormalige Sint-Philippus en Jacobuskerk. Zes pagina’s: overzicht, West, Oost, Zuid, Bergstraat en contact. Foto’s tonen de bestaande situatie. De deelgebiedpagina’s vergelijken deze met afzonderlijk gelabelde, indicatieve visualisaties; het parkeerreferentiebeeld is eveneens afzonderlijk gelabeld.

## Publiceren op GitHub Pages

1. Maak een GitHub-repository en plaats de inhoud van deze map in de hoofdmap van de `main`-branch, inclusief `.nojekyll`.
2. Kies in de repository **Settings → Pages → Deploy from a branch → main → /(root)** en sla op.
3. GitHub toont de website-URL wanneer de publicatie voltooid is.

Er is geen buildstap nodig. Alle interne links en afbeeldingen zijn relatief, zodat de website ook onder een repositorypad werkt.
Documentatie: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Contact activeren

Het formulier is ingesteld op `ryan-verschuren@hotmail.com`. Het opent een ingevulde e-mail die de bezoeker zelf verzendt vanuit het eigen mailprogramma. Voor automatische verzending kun je later een formulierdienst instellen. In `assets/config.js` zijn deze opties beschikbaar:

- `formEndpoint`: het HTTPS-endpoint van een eigen, geactiveerde formulierdienst die `multipart/form-data` en CORS ondersteunt en alleen bij succesvolle verwerking een 2xx-status retourneert. Verifieer daar eerst de ontvanger en stel spambeveiliging, bewaartermijn en privacy-informatie in. Zet nooit geheime API-sleutels in deze publieke bestanden. Test vóór publicatie een echte inzending en controleer ontvangst.
- `contactEmail`: een ontvangstadres als eenvoudiger alternatief. De knop opent dan expliciet een vooraf ingevulde e-mail. De bezoeker verzendt die zelf. Dit is geen automatische bezorging en vereist een ingesteld mailprogramma.

Wanneer beide ingevuld zijn, heeft `formEndpoint` voorrang. Er worden geen contactgegevens in browseropslag bewaard. Bij mislukte verzending blijft de ingevoerde tekst staan. Formulier heeft verplichte velden, e-mailvalidatie, toestemming, verborgen spamveld en toegankelijke statusmelding. De backend moet zelf valideren en spam beperken.

## Rol van de initiatiefnemer

De website is een vrijwillig initiatief om ideeën en reacties van buurtbewoners te verzamelen. De initiatiefnemer neemt geen eindbeslissingen over inrichting, budget of uitvoering; die liggen bij de bevoegde instanties en eigenaars. Behoud dit onderscheid bij nieuwe teksten en beelden en vermijd toezeggingen over uitvoering.

## Inhoud aanpassen

Bewerk de HTML-pagina’s rechtstreeks. Alle afbeeldingen en het favicon staan in `assets/images/`. De deelgebiedpagina’s tonen de nieuwe foto’s naast de bijbehorende visualisaties; een klik opent het originele beeld. Bewaar bij nieuwe beelden het onderscheid tussen huidige situatie, visualisatie en referentiebeeld. Gebruik bij hergebruik steeds hetzelfde afbeeldingsbestand; aparte kopieën voor de homepage, deelgebiedpagina’s of galerijen zijn niet nodig. Controleer bij het verwijderen of hernoemen van beelden zowel de `src` van afbeeldingen als de `href` van links naar het volledige beeld. Algemene vormgeving: `assets/style.css`. Navigatie en formulier: `assets/site.js`. Er zijn geen externe lettertypen, trackers of externe scripts. Op de contactpagina staat alleen de algemene participatiepagina voor Koewacht; vervang die door de exacte projectlink wanneer het voorstel daar gepubliceerd is.

Het bedrag van € 1 miljoen is als indicatieve masterplanraming weergegeven, niet als toegekende subsidie. De mogelijkheden voor een hondenweide en buurtspeeltuin blijven voorwaardelijk. Restauratie van het kerkgebouw valt buiten het plan. Participatie is online, zonder beloofd buurtmoment.

## Controle

Interne HTML-links en afbeeldingen gecontroleerd; JavaScript syntactisch gecontroleerd. Publicatie en echte formulierontvangst moeten na koppeling nog worden geverifieerd.
