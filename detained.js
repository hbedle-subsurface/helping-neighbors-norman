/* ============================================================
   "If someone is detained" section (Si detienen a alguien).
   Spanish and English side by side.

   STATUS: FIRST DRAFT, NOT YET REVIEWED BY AN IMMIGRATION ATTORNEY.
   The steps follow materials published by CLINIC (Catholic Legal
   Immigration Network) and the Immigrant Legal Resource Center (ILRC).
   Have the wording checked (Catholic Charities or another legal
   services group) before the site is made public.

   To change wording, edit the text between the quote marks.
   Keep the quotes, commas and brackets exactly as they are.
   ============================================================ */
window.DETAINED = {

  sub: {
    es: "Qué hacer si ICE llega a su casa, si lo para un agente, o si detienen a un familiar",
    en: "What to do if ICE comes to your home, if an agent stops you, or if a family member is detained"
  },

  notice: {
    es: "Esta información es general y no es consejo legal. Si puede, hable con un abogado de inmigración.",
    en: "This information is general and is not legal advice. If you can, talk with an immigration lawyer."
  },

  /* Lawyers shown first. Names must match listings in data.js exactly. */
  lawyers: ["Catholic Charities", "Immigration Center at Western Oaks", "Latitude Legal Alliance"],

  sections: [
    { id: "find",
      title: { es: "Si detienen a un familiar", en: "If a family member is detained" },
      steps: {
        es: [
          "Reúna estos datos: nombre completo, fecha de nacimiento, país de nacimiento y el número A (9 números). El número A está en los papeles de inmigración.",
          "Busque a la persona en el localizador de ICE: locator.ice.gov. Use el número A y el país de nacimiento, o el nombre escrito igual que en sus papeles.",
          "Los menores de 18 años no aparecen. Si la detención es reciente, puede tardar en aparecer.",
          "Llame al consulado de su país (más abajo).",
          "Llame a un abogado de inmigración (arriba). Dígale el nombre y el número A.",
          "Si hay niños, llame a la persona de confianza que los cuidará y avise a la escuela."
        ],
        en: [
          "Gather this information: full name, date of birth, country of birth, and the A-number (9 digits). The A-number is on immigration papers.",
          "Look for the person on the ICE locator: locator.ice.gov. Use the A-number and country of birth, or the name spelled the same way as on their papers.",
          "Children under 18 do not appear. If the arrest was recent, it can take time to show up.",
          "Call your country's consulate (below).",
          "Call an immigration lawyer (above). Give the name and the A-number.",
          "If there are children, call the trusted person who will care for them and tell the school."
        ]
      } },

    { id: "door",
      title: { es: "Si ICE llega a su puerta", en: "If ICE comes to your door" },
      steps: {
        es: [
          "No abra la puerta. Hable a través de la puerta.",
          "Pida que le muestren la orden por debajo de la puerta o en una ventana.",
          "Solo una orden firmada por un juez les permite entrar a la casa. Un papel de ICE sin la firma de un juez no les da permiso.",
          "Tiene derecho a guardar silencio. Diga: «Quiero guardar silencio y quiero hablar con un abogado.»",
          "No diga de dónde es ni cómo llegó. No muestre papeles falsos.",
          "No corra y no se esconda.",
          "Si entran sin permiso, diga en voz alta: «No doy mi permiso.»",
          "No firme nada antes de hablar con un abogado."
        ],
        en: [
          "Do not open the door. Speak through the door.",
          "Ask them to slide the warrant under the door or hold it up to a window.",
          "Only a warrant signed by a judge lets them come into the home. An ICE paper without a judge's signature does not give them permission.",
          "You have the right to stay silent. Say: \"I want to stay silent and I want to talk to a lawyer.\"",
          "Do not say where you are from or how you arrived. Do not show false papers.",
          "Do not run and do not hide.",
          "If they come in without permission, say out loud: \"I do not give my permission.\"",
          "Do not sign anything before you talk to a lawyer."
        ]
      } },

    { id: "street",
      title: { es: "Si lo para un agente en la calle o en el carro", en: "If an agent stops you on the street or in a car" },
      steps: {
        es: [
          "Pregunte con calma: «¿Estoy detenido, o puedo irme?»",
          "Si le dicen que puede irse, camine con calma. No corra.",
          "Tiene derecho a guardar silencio. Diga: «Quiero guardar silencio.»",
          "Si quieren revisar sus cosas o su carro, diga: «No doy mi permiso.»",
          "No se resista ni toque a los agentes, aunque no esté de acuerdo.",
          "Si tiene papeles de inmigración, llévelos con usted.",
          "Pida hablar con un abogado.",
          "Si es seguro, puede grabar."
        ],
        en: [
          "Ask calmly: \"Am I being detained, or am I free to go?\"",
          "If they say you are free to go, walk away calmly. Do not run.",
          "You have the right to stay silent. Say: \"I want to stay silent.\"",
          "If they want to search your things or your car, say: \"I do not give my permission.\"",
          "Do not resist or touch the agents, even if you disagree.",
          "If you have immigration papers, carry them with you.",
          "Ask to talk to a lawyer.",
          "If it is safe, you may record."
        ]
      } },

    { id: "plan",
      title: { es: "Plan de familia: prepárese antes", en: "Family plan: get ready ahead of time" },
      steps: {
        es: [
          "Elija a una persona de confianza para cuidar a sus hijos si usted no puede.",
          "Memorice el número de teléfono de una persona de confianza.",
          "Escriba el número A de cada persona de la familia y déselo a una persona de confianza.",
          "Guarde copias de los papeles importantes (pasaportes, actas de nacimiento, papeles de inmigración). Diga a su persona de confianza dónde están.",
          "Anote las medicinas importantes que toma cada persona.",
          "Hable con un abogado de inmigración antes de que pase algo.",
          "Regístrese en su consulado.",
          "Pregunte a un abogado sobre un permiso por escrito para que otra persona cuide a sus hijos."
        ],
        en: [
          "Choose a trusted person to care for your children if you cannot.",
          "Memorize the phone number of one trusted person.",
          "Write down the A-number of each person in the family and give it to a trusted person.",
          "Keep copies of important papers (passports, birth certificates, immigration papers). Tell your trusted person where they are.",
          "Write down the important medicines each person takes.",
          "Talk to an immigration lawyer before anything happens.",
          "Register with your consulate.",
          "Ask a lawyer about a written permission so another person can care for your children."
        ]
      } }
  ],

  /* Consulates, shown as listing cards. Confirm by phone before relying on them. */
  consulates: [
    { n: "Consulate of Mexico - Oklahoma City", ns: "Consulado de México - Oklahoma City",
      a: "1131 W. Sheridan Ave., Oklahoma City", p: "405-753-5622",
      d: { en: "Open to the public 7:00 a.m. to 5:00 p.m.", es: "Atención al público de 7:00 a 17:00." },
      cats: ["detained"], g: { en: "", es: "" } },
    { n: "Consulate of Guatemala - Oklahoma City", ns: "Consulado de Guatemala - Oklahoma City",
      a: "5909 NW Expressway, Suite 100, Oklahoma City", p: "405-603-6628",
      d: { en: "Call to confirm hours.", es: "Llame para confirmar el horario." },
      cats: ["detained"], g: { en: "", es: "" } },
    { n: "Consulate of Honduras - Irving, Texas", ns: "Consulado de Honduras - Irving, Texas",
      a: "2520 West Irving Blvd, Suite 400, Irving, TX", p: "214-347-4441",
      d: { en: "In the Dallas area. Call to confirm hours.", es: "En el área de Dallas. Llame para confirmar el horario." },
      cats: ["detained"], g: { en: "", es: "" } },
    { n: "Consulate of El Salvador - Dallas", ns: "Consulado de El Salvador - Dallas",
      a: "7610 N Stemmons Fwy #400, Dallas, TX", p: "888-301-1130",
      d: { en: "Call to confirm hours.", es: "Llame para confirmar el horario." },
      cats: ["detained"], g: { en: "", es: "" } },
    { n: "Venezuela", ns: "Venezuela",
      d: { en: "We could not confirm a working Venezuelan consulate in the United States. Call an immigration lawyer (above) for help.",
           es: "No pudimos confirmar un consulado de Venezuela que esté funcionando en Estados Unidos. Llame a un abogado de inmigración (arriba) para pedir ayuda." },
      cats: ["detained"], g: { en: "", es: "" } },
    { n: "Another country", ns: "Otro país",
      d: { en: "Search for \"consulate of (your country)\" in Dallas or Houston, or ask a lawyer.",
           es: "Busque «consulado de (su país)» en Dallas o Houston, o pregunte a un abogado." },
      cats: ["detained"], g: { en: "", es: "" } }
  ],

  /* Printable and outside resources */
  links: [
    { url: "https://www.ilrc.org/red-cards-tarjetas-rojas", src: "ILRC",
      label: { es: "Tarjeta roja para imprimir: sus derechos", en: "Red card to print: your rights" } },
    { url: "https://www.ilrc.org/resources/step-step-family-preparedness-plan", src: "ILRC",
      label: { es: "Plan de preparación familiar paso a paso", en: "Step-by-step family preparedness plan" } },
    { url: "https://locator.ice.gov/", src: "ICE",
      label: { es: "Localizador de ICE: buscar a una persona detenida", en: "ICE locator: find a detained person" } },
    { url: "https://www.immigrationlawhelp.org/", src: "ImmigrationLawHelp.org",
      label: { es: "Buscar ayuda legal gratuita o de bajo costo", en: "Find free or low-cost legal help" } },
    { url: "https://www.wehaverights.us/", src: "We Have Rights",
      label: { es: "Videos: conozca sus derechos", en: "Videos: know your rights" } }
  ],

  source: {
    es: "Basado en materiales publicados por CLINIC (Catholic Legal Immigration Network) y por el Immigrant Legal Resource Center (ILRC).",
    en: "Based on materials published by CLINIC (Catholic Legal Immigration Network) and the Immigrant Legal Resource Center (ILRC)."
  }
};
