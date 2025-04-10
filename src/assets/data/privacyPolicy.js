const data = [
  {
    contentId: "raccolta",
    delay: 200,
    title: "Informazioni che raccogliamo",
    description:
      "<p>Raccogliamo diversi tipi di informazioni per fornire e migliorare il nostro servizio, tra cui:</p><ul><li><strong>Informazioni personali</strong>: come nome, indirizzo email, numero di telefono, informazioni di pagamento quando crei un account o utilizzi i nostri servizi.</li><li><strong>Dati di utilizzo</strong>: informazioni su come utilizzi la nostra app, quali funzionalità utilizzi più frequentemente e come interagisci con i contenuti.</li><li><strong>Contenuto caricato</strong>: immagini del tuo guardaroba e dei tuoi vestiti che carichi volontariamente sull'app.</li><li><strong>Informazioni del dispositivo</strong>: come indirizzo IP, tipo di browser, sistema operativo e altre informazioni tecniche sul dispositivo che utilizzi per accedere al nostro servizio.</li></ul>",
  },
  {
    contentId: "utilizzo",
    delay: 250,
    title: "Come utilizziamo le tue informazioni",
    description:
      "<p>Utilizziamo le informazioni raccolte per:</p><ul><li>Fornire, mantenere e migliorare il nostro servizio</li><li>Elaborare i tuoi pagamenti e gestire il tuo account</li><li>Comunicare con te, inclusi aggiornamenti del servizio, risposte a richieste di assistenza e inviare notifiche</li><li>Personalizzare l'esperienza utente, inclusi suggerimenti di outfit e combinazioni di abbigliamento</li><li>Sviluppare nuove funzionalità e analizzare come gli utenti interagiscono con l'app</li><li>Garantire la sicurezza del servizio e prevenire frodi</li></ul><p>Utilizziamo l'intelligenza artificiale per analizzare le immagini dei tuoi vestiti e fornirti suggerimenti personalizzati. Questo processo è automatizzato e progettato per migliorare la tua esperienza sull'app.</p>",
  },
  {
    contentId: "condivisione",
    delay: 300,
    title: "Condivisione delle informazioni",
    description:
      "<p>OutfitMatch si impegna a proteggere la tua privacy. Non vendiamo, affittiamo o condividiamo le tue informazioni personali con terze parti per scopi di marketing senza il tuo consenso esplicito.</p><p>Possiamo condividere le tue informazioni nelle seguenti circostanze:</p><ul><li>Con fornitori di servizi che ci aiutano a gestire l'app e fornire i servizi (come provider di pagamento, servizi cloud)</li><li>Quando richiesto dalla legge, come in risposta a un mandato di comparizione o simile procedimento legale</li><li>Per proteggere la sicurezza di OutfitMatch, rispondere a emergenze o proteggere i diritti, la proprietà o la sicurezza dei nostri utenti</li><li>Nel caso di una fusione, acquisizione o vendita di asset, in cui i dati degli utenti potrebbero essere trasferiti come parte dell'operazione (ti avviseremo prima)</li></ul>",
  },
  {
    contentId: "sicurezza",
    delay: 350,
    title: "Sicurezza dei dati",
    description:
      "<p>La sicurezza delle tue informazioni è importante per noi. Utilizziamo misure di sicurezza tecniche e organizzative adeguate per proteggere le tue informazioni personali da perdita, uso improprio e accesso non autorizzato, divulgazione, alterazione e distruzione.</p><p>Tra le misure di sicurezza che adottiamo:</p><ul><li>Crittografia dei dati sensibili durante la trasmissione e l'archiviazione</li><li>Accesso ai dati limitato solo al personale autorizzato</li><li>Monitoraggio regolare dei nostri sistemi per rilevare possibili vulnerabilità</li><li>Test periodici della sicurezza e aggiornamenti per proteggere contro nuove minacce</li></ul><p>Tuttavia, nessun metodo di trasmissione via Internet o metodo di archiviazione elettronica è sicuro al 100%, pertanto non possiamo garantire la sicurezza assoluta.</p>",
  },
  {
    contentId: "diritti",
    delay: 400,
    title: "I tuoi diritti sulla privacy",
    description:
      "<p>Rispettiamo i tuoi diritti alla privacy e ti forniamo controllo sulle tue informazioni personali. Hai il diritto di:</p><ul><li>Accedere alle informazioni personali che abbiamo su di te</li><li>Correggere o aggiornare informazioni inesatte o incomplete</li><li>Richiedere la cancellazione delle tue informazioni personali</li><li>Opporti al trattamento dei tuoi dati in determinate circostanze</li><li>Richiedere la limitazione del trattamento dei tuoi dati</li><li>Richiedere la portabilità dei tuoi dati</li><li>Revocare il consenso in qualsiasi momento (dove il trattamento si basa sul consenso)</li></ul><p>Per esercitare uno qualsiasi di questi diritti, puoi contattarci all'indirizzo privacy@outfitmatch.it. Risponderemo alla tua richiesta entro 30 giorni.</p>",
  },
  {
    contentId: "cookie",
    delay: 450,
    title: "Cookie e tecnologie simili",
    description:
      "<p>Utilizziamo cookie e tecnologie di tracciamento simili per raccogliere e archiviare informazioni quando visiti la nostra app o il nostro sito web. I cookie sono piccoli file di testo che vengono archiviati sul tuo dispositivo.</p><p>Utilizziamo sia cookie di sessione (che scadono quando chiudi il browser) sia cookie permanenti (che rimangono sul tuo dispositivo finché non li elimini o non scadono). Utilizziamo questi cookie per:</p><ul><li>Ricordare le tue preferenze e impostazioni</li><li>Mantenere le tue sessioni di accesso quando torni sull'app</li><li>Raccogliere informazioni su come utilizzi il nostro sito e la nostra app</li><li>Migliorare il nostro servizio e la tua esperienza utente</li></ul><p>Puoi gestire le preferenze dei cookie nelle impostazioni del tuo browser o dispositivo. Tieni presente che la disabilitazione di alcuni cookie potrebbe influire sulla tua esperienza e limita alcune funzionalità dell'app.</p>",
  },
  {
    contentId: "minori",
    delay: 500,
    title: "Minori",
    description:
      "<p>Il nostro servizio non è destinato a persone di età inferiore ai 16 anni e non raccogliamo consapevolmente informazioni personali da bambini di età inferiore ai 16 anni. Se sei un genitore o tutore e ritieni che tuo figlio ci abbia fornito informazioni personali, contattaci e prenderemo misure per rimuovere tali informazioni dai nostri server.</p>",
  },
  {
    contentId: "modifiche",
    delay: 550,
    title: "Modifiche a questa Informativa sulla Privacy",
    description:
      "<p>Possiamo aggiornare la nostra Informativa sulla Privacy di tanto in tanto. Ti informeremo di eventuali modifiche pubblicando la nuova Informativa sulla Privacy su questa pagina e aggiornando la data dell'ultima modifica.</p><p>Ti consigliamo di rivedere periodicamente questa Informativa sulla Privacy per eventuali modifiche. Le modifiche a questa Informativa sulla Privacy sono efficaci quando vengono pubblicate su questa pagina.</p>",
  },
  {
    contentId: "contattaci",
    delay: 600,
    title: "Contattaci",
    description:
      "<p>Se hai domande su questa Informativa sulla Privacy, contattaci:</p><ul><li>Via email: privacy@outfitmatch.it</li><li>Via posta: OutfitMatch, Via Milano 123, 20100 Milano, Italia</li></ul>",
  }
];

export default data;