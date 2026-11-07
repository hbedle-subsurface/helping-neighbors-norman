# Helping Neighbors Norman (Vecinos que Ayudan)

A picture-first help directory for Norman, Oklahoma, built for people who may not read well in Spanish.
English is the default language, with a Spanish (Español) button at the top. A link with `?lang=es` at the end opens it in Spanish.

Live page (after you turn on GitHub Pages): https://hbedle-subsurface.github.io/helping-neighbors-norman/

A project of First Congregational Church of Norman, UCC.

## What people can do

- Tap a big picture (food, a place to stay, health, and so on). The name of the picture is spoken aloud.
- Tap **Ver toda la lista / See the whole list** (just under the search box) to see every listing by topic, or **Imprimir toda la lista / Print the whole list** to print it.
- On each topic page, tap **Imprimir esta lista / Print this list**. On the whole-list page, each topic also has its own **Print this part** button.
- Tap the speaker on any listing to hear its name, address, hours and phone number read in Spanish.
- Tap Llamar to call, Mapa for directions, Sitio web for the website (when we have one), or WhatsApp to send the listing to someone.
- Tap 911, 988 or 211 at the bottom of the home page.
- Tap **Ver o descargar la lista en PDF / View or download the list as a PDF**. The PDF opens in a new tab so people can look at it first, then download or print it from there.
- Tap a language button (فارسی, پښتو, Tiếng Việt, 中文) for a one-page help sheet in that language.
- Type or speak a word to search (the microphone shows only on phones that support it).

The voices are the ones built into the person's phone or computer, so they cost nothing.
The site automatically picks the most natural-sounding voice the device has: "Natural" voices in Microsoft Edge,
Google voices in Chrome and on Android, and "Enhanced" or "Premium" voices on iPhone and Mac. The older robotic voices are used only
when nothing better is installed. Long readings are spoken one sentence at a time, which sounds smoother.

To get better voices on a device:
- **iPhone/iPad:** Settings, Accessibility, Spoken Content, Voices, choose English or Spanish, then download a voice marked Enhanced or Premium.
- **Android:** Settings, search "text-to-speech", choose Speech Services by Google, then install the English and Spanish voice data.
- **Windows:** opening the site in Microsoft Edge gives the most natural voices.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole site: layout, pictures, audio, search, sharing |
| `data.js` | All listings, in Spanish and English side by side. **This is the file you edit to update the list.** |
| `detained.js` | The "Si detienen a alguien" section (steps, consulates, links) in Spanish and English. **Needs review by an immigration attorney before the site is public.** |
| `fcc-logo.jpeg` | Church logo shown in the footer |
| `lista-de-ayuda-es.pdf`, `help-list-en.pdf` | The whole list as printable PDFs (Spanish and English), with emergency numbers, a QR code to the site, and the "If someone is detained" basics. The site's "Descargar la lista en PDF" button opens the one that matches the language. These are made from `data.js` and `detained.js`, so they need to be rebuilt when the list changes |
| `help-sheet-farsi.pdf`, `help-sheet-pashto.pdf`, `help-sheet-vietnamese.pdf`, `help-sheet-chinese.pdf` | One-sheet (front and back) help pages in Farsi, Pashto, Vietnamese and Chinese (Mandarin): emergency numbers, an "I need an interpreter" line to show in English, immigration legal help, refugee support, English classes, community groups, basic rights and a QR code to the full list. Linked from the "Help sheets in other languages" buttons on the home page. **Translations need review by a native speaker before wide sharing.** |
| `listings-without-website.csv` | Listings that do not have a website yet. Fill in the last column as you find them, then add each one to `data.js` as `"w":"example.org"` |

## Updating a listing

Open `data.js`. Each listing looks like this:

    {"n":"Crosspointe Church","a":"2601 SE 24th","p":"405-329-0823",
     "d":{"en":"Fridays 8:30-11:30...","es":"Viernes 8:30-11:30..."},
     "cats":["food"],"g":{"en":"Norman","es":"Norman"}}

- `n` name (`ns` is the Spanish name, only if it differs), `a` address (`as` Spanish address, only if it differs)
- `p` phone, `w` website, `e` email
- `d` details: hours and rules, English and Spanish
- `cats` which picture buttons it appears under: food, shelter, health, money, mental, general, children, clothing, transport, seniors, newcomers, pets
- `g` the area subheading (on the "New to the U.S." page the subheadings are: Immigration legal help, Support groups and information, English classes and schools, Places of worship in other languages; listings show in the order they appear in `data.js`)

Change the English and Spanish text together so the two stay in step.

### Writing text that reads aloud well

The Listen button reads the text with the phone's own voice. To keep it clear:

- Write days in full: "Monday–Friday", "lunes a viernes" (not "M–F").
- Times like "8:30 a.m." and "5 p.m." are fine. The voice says "8:30 in the morning" / "8:30 de la mañana".
- Phone numbers are read digit by digit. House numbers are read in pairs in English (2540 is "twenty-five forty").
  In Spanish they are read as a whole number ("dos mil quinientos cuarenta"). To change either, edit `HOUSE_NUMBERS` near the top of the speech section in `index.html`.
- Common short forms (N., E., NW, St, Ave, Blvd, Ste, OKC, I-35, Hwy) are spoken as full words automatically.

## Turning on GitHub Pages

Settings, then Pages, then choose the main branch and the root folder. The page appears at the address above in about a minute.

## Credits

Thank you to Mary Sallee, Martie Buzzard and everyone who gathered this information and keeps it up to date. The thanks appear in the footer of the page (in `index.html`, under `thanks`).

## The "Si detienen a alguien" section

Immigration law and policy change often, so this section keeps to a few basic points and sends people to trusted
sources that keep their own information current and work in Spanish and other languages.
Please do not add step-by-step legal instructions here; add a link to a trusted source instead.

It has: immigration lawyers, short basics for when a family member is detained, the immigration court case phone line
(English and Spanish, 24 hours), the consulates of Mexico, Guatemala, Honduras and El Salvador, four basic rights,
three steps to get ready ahead of time, and a list of trusted sites (ILRC red cards in 50+ languages, We Have Rights videos,
ImmigrationLawHelp.org, the Justice Department's free-lawyer list, the ICE locator and its Spanish guide, USAGov en español).
Each link says which languages it offers.

Martie (or an immigration attorney, for example at Catholic Charities) should review it before the site goes public.
Check the links every few months.
Edit `detained.js` to change any wording. Consulate numbers should be confirmed by phone.
Venezuela has no confirmed working consulate in the United States, so that card points to a lawyer.

## Privacy

There are no visitor counters or analytics on this site on purpose. Nothing a person types or taps is saved or sent anywhere.
The only thing kept in the browser is the language and the voice on/off setting.

## Sharing

The WhatsApp button on a listing sends the name, address, hours, phone, a map link and a link that opens that exact listing.
