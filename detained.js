/* ============================================================
   "If someone is detained" section (Si detienen a alguien).
   Spanish and English side by side.

   APPROACH (November 2026 revision): immigration law and policy
   change often, so this page keeps to a few basic points that do
   not change, and sends people to trusted sources that keep their
   own information current and that work in Spanish and other
   languages. Please do not add step-by-step legal instructions
   here. Add a link to a trusted source instead.

   STATUS: NOT YET REVIEWED BY AN IMMIGRATION ATTORNEY.
   Have the wording checked (Catholic Charities or another legal
   services group) before the site is made public.

   To change wording, edit the text between the quote marks.
   Keep the quotes, commas and brackets exactly as they are.
   ============================================================ */
window.DETAINED = {

  sub: {
    es: "Lo básico, y dónde encontrar información confiable y al día en su idioma",
    en: "The basics, and where to find trusted, up-to-date information in your language"
  },

  notice: {
    es: "Las leyes y las reglas de inmigración cambian seguido. Esta página solo da lo básico. Para información al día, llame a un abogado de inmigración o use los sitios de abajo. Muchos ayudan en español y en otros idiomas. Esto no es consejo legal.",
    en: "Immigration laws and rules change often. This page gives only the basics. For up-to-date information, call an immigration lawyer or use the sites below. Many offer help in Spanish and other languages. This is not legal advice."
  },

  /* Lawyers shown first. Names must match listings in data.js exactly. */
  lawyers: ["Catholic Charities", "Immigration Center at Western Oaks", "Latitude Legal Alliance"],

  sections: [
    { id: "find",
      title: { es: "Si detienen a un familiar", en: "If a family member is detained" },
      steps: {
        es: [
          "Anote el nombre completo, la fecha de nacimiento, el país de nacimiento y el número A, si lo tiene.",
          "Llame a un abogado de inmigración (arriba).",
          "Llame al consulado de su país (más abajo).",
          "El abogado o el consulado pueden ayudarle a encontrar a la persona. También está el localizador de ICE (más abajo)."
        ],
        en: [
          "Write down the full name, date of birth, country of birth and A-number, if they have one.",
          "Call an immigration lawyer (above).",
          "Call your country's consulate (below).",
          "The lawyer or consulate can help find the person. There is also the ICE locator (below)."
        ]
      } },

    { id: "rights",
      title: { es: "Sus derechos básicos", en: "Your basic rights" },
      steps: {
        es: [
          "Todas las personas en Estados Unidos tienen derechos bajo la Constitución, sin importar su estatus migratorio.",
          "Tiene derecho a guardar silencio.",
          "Tiene derecho a hablar con un abogado.",
          "No firme ningún papel que no entienda.",
          "Para más detalles en su idioma, vea las tarjetas rojas y los videos (más abajo)."
        ],
        en: [
          "Everyone in the United States has rights under the Constitution, whatever their immigration status.",
          "You have the right to stay silent.",
          "You have the right to talk to a lawyer.",
          "Do not sign any paper you do not understand.",
          "For more detail in your language, see the red cards and videos (below)."
        ]
      } },

    { id: "plan",
      title: { es: "Prepárese antes", en: "Get ready ahead of time" },
      steps: {
        es: [
          "Elija a una persona de confianza que pueda cuidar a sus hijos.",
          "Guarde los papeles importantes y los números de teléfono donde esa persona los pueda encontrar.",
          "Hable con un abogado de inmigración antes de que pase algo.",
          "Hay un plan familiar para llenar en los enlaces de abajo."
        ],
        en: [
          "Choose a trusted person who can care for your children.",
          "Keep important papers and phone numbers where that person can find them.",
          "Talk to an immigration lawyer before anything happens.",
          "A family plan to fill in is in the links below."
        ]
      } }
  ],

  /* Phone lines, shown as listing cards. Good for people who do not read. */
  phones: [
    { n: "Immigration court case information (EOIR)", ns: "Información de casos de la corte de inmigración (EOIR)",
      p: "800-898-7180",
      d: { en: "Government recorded line, 24 hours a day, in English and Spanish. Have the A-number ready.",
           es: "Línea grabada del gobierno, las 24 horas, en español y en inglés. Tenga listo el número A." },
      cats: ["detained"], g: { en: "", es: "" }, phoneLine: true }
  ],

  /* Consulates, shown as listing cards. Confirm by phone before relying on them. */
  consulates: [
    { n: "Consulate of Mexico - Oklahoma City", ns: "Consulado de México - Oklahoma City",
      a: "1131 W. Sheridan Ave., Oklahoma City", p: "405-753-5622",
      d: { en: "Open to the public 7:00 a.m. to 5:00 p.m.", es: "Atención al público de 7:00 de la mañana a 5:00 de la tarde." },
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

  /* Trusted sources that keep their own information up to date.
     "langs" says which languages each one offers. Check each link
     every few months and remove any that stop working. */
  links: [
    { url: "https://www.ilrc.org/red-cards-tarjetas-rojas", src: "Immigrant Legal Resource Center (ILRC)",
      label: { es: "Tarjetas rojas para imprimir: sus derechos", en: "Red cards to print: your rights" },
      langs: { es: "En español, inglés y más de 50 idiomas, incluso mam, náhuatl y tsotsil", en: "In Spanish, English and more than 50 other languages, including Mam, Nahuatl and Tsotsil" } },
    { url: "https://www.wehaverights.us/", src: "We Have Rights (ACLU)",
      label: { es: "Videos: conozca sus derechos", en: "Videos: know your rights" },
      langs: { es: "Videos en español, inglés y otros idiomas", en: "Videos in Spanish, English and other languages" } },
    { url: "https://www.immigrationlawhelp.org/", src: "ImmigrationLawHelp.org",
      label: { es: "Buscar ayuda legal gratuita o de bajo costo cerca de usted", en: "Find free or low-cost legal help near you" },
      langs: { es: "Escoja «Spanish» arriba a la derecha", en: "Choose Spanish at the top right" } },
    { url: "https://www.justice.gov/eoir/list-pro-bono-legal-service-providers", src: "U.S. Department of Justice (EOIR)",
      label: { es: "Lista oficial de abogados gratuitos para casos en la corte de inmigración", en: "Official list of free lawyers for immigration court cases" },
      langs: { es: "En inglés", en: "In English" } },
    { url: "https://locator.ice.gov/", src: "ICE",
      label: { es: "Localizador de ICE: buscar a una persona detenida", en: "ICE locator: find a detained person" },
      langs: { es: "Vea el folleto en español (abajo)", en: "See the Spanish brochure (below)" } },
    { url: "https://www.ice.gov/doclib/news/library/factsheets/pdf/odls-brochure-esp.pdf", src: "ICE",
      label: { es: "Cómo usar el localizador de ICE (folleto)", en: "How to use the ICE locator (brochure)" },
      langs: { es: "En español", en: "In Spanish" } },
    { url: "https://www.ilrc.org/resources/step-step-family-preparedness-plan", src: "Immigrant Legal Resource Center (ILRC)",
      label: { es: "Plan familiar para llenar", en: "Family plan to fill in" },
      langs: { es: "", en: "" } },
    { url: "https://www.usa.gov/es/asistencia-legal-gratis", src: "USAGov en español",
      label: { es: "Asistencia legal gratis o de bajo costo (gobierno de EE. UU.)", en: "Free or low-cost legal help (U.S. government, in Spanish)" },
      langs: { es: "En español", en: "In Spanish" } }
  ],

  source: {
    es: "Esta página da solo información general y le dirige a organizaciones que mantienen su información al día. Revisada en noviembre de 2026.",
    en: "This page gives only general information and points to organizations that keep their information up to date. Reviewed November 2026."
  }
};
