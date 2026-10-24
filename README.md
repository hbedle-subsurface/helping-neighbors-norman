# Helping Neighbors Norman (Vecinos que Ayudan)

A picture-first help directory for Norman, Oklahoma, built for people who may not read well in Spanish.
Spanish is the default language, with an English button at the top.

Live page (after you turn on GitHub Pages): https://hbedle-subsurface.github.io/helping-neighbors-norman/

A project of First Congregational Church of Norman, UCC.

## What people can do

- Tap a big picture (food, a place to stay, health, and so on). The name of the picture is spoken aloud.
- Tap the speaker on any listing to hear its name, address, hours and phone number read in Spanish.
- Tap Llamar to call, Mapa for directions, or WhatsApp to send the listing to someone.
- Tap 911, 988 or 211 at the bottom of the home page.
- Type or speak a word to search (the microphone shows only on phones that support it).

The voices are the ones built into the person's phone or computer, so they cost nothing and work offline once the page has loaded.
Quality varies by device.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole site: layout, pictures, audio, search, sharing |
| `data.js` | All listings, in Spanish and English side by side. **This is the file you edit to update the list.** |
| `fcc-logo.jpeg` | Church logo shown in the footer |

## Updating a listing

Open `data.js`. Each listing looks like this:

    {"n":"Crosspointe Church","a":"2601 SE 24th","p":"405-329-0823",
     "d":{"en":"Fridays 8:30-11:30...","es":"Viernes 8:30-11:30..."},
     "cats":["food"],"g":{"en":"Norman","es":"Norman"}}

- `n` name (`ns` is the Spanish name, only if it differs), `a` address (`as` Spanish address, only if it differs)
- `p` phone, `w` website, `e` email
- `d` details: hours and rules, English and Spanish
- `cats` which picture buttons it appears under: food, shelter, health, money, mental, general, children, clothing, transport, seniors, newcomers, pets
- `g` the area subheading

Change the English and Spanish text together so the two stay in step.

## Turning on GitHub Pages

Settings, then Pages, then choose the main branch and the root folder. The page appears at the address above in about a minute.

## Credits

Thank you to Mary Sallee, Martie Buzzard and everyone who gathered this information and keeps it up to date. The thanks appear in the footer of the page (in `index.html`, under `thanks`).
