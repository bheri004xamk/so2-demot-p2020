//tehdään olio, joka käyttää http-protokollaa
const http = require("http");
//lukee selaimen urlin
const url = require("url");

//luodaan muuttuja portista
const portti = 3001;

//aiemmin määreitellyllä oliolla (joka käyttää http-protokollaa) luodaan serveri
const serveri = http.createServer((req, res) => {
    
    
    if (req.url != "/favicon.ico") {
        
        //tehdään url:sta JSON
        let tiedot = url.parse(req.url, true).query;
        
        //asetetaan muuttujalle 'nimi' JSON:in nimi-tieto, jos ei ole, asetetaan tuntematon 
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon";
    
        //Selaimelle kerrotaan, kaikki ok, käytetään html, käytetään ääkkösiä
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" });
        //
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`);
        //
        res.write(`<h2>Heippa, ${nimi}!</h2>`);
        //
        res.end();

    }

});

serveri.listen(portti, () => {
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   
});
