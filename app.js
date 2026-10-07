(() => {
  'use strict';

  const films = [
    {
      id: 'dr-no', title: 'Dr. No', year: 1962, actor: 'Sean Connery', era: 'classic', tag: 'Oprindelsen',
      summary: 'Den første EON-film etablerer Bond som en kølig professionel i en verden af spionage, eksotiske miljøer og teknologiske trusler.',
      drama: 'En lineær efterforskning fører Bond fra London til Jamaica og videre ind i Dr. No’s skjulte anlæg. Spændingen vokser, efterhånden som sporene samles.',
      style: 'Kontrasten mellem kontrollerede britiske rum og stærke caribiske farver gør miljøskiftet tydeligt. Musik, kostumer og billedkomposition skaber den tidlige Bond-stil.',
      bond: 'Connery kombinerer fysisk ro, tør humor og farlighed. Figuren virker erfaren fra første scene og viser sjældent tvivl.',
      evidence: 'Scenehenvisning: Bonds introduktion ved baccaratbordet viser identiteten gennem langsom afsløring, kontrolleret blik og den præcise præsentation “Bond, James Bond”. På Crab Key ændres de elegante rum til et teknologisk skjulested, hvor handlingen beviser hans evne til at observere og improvisere.'
    },
    {
      id: 'ohmss', title: 'On Her Majesty’s Secret Service', year: 1969, actor: 'George Lazenby', era: 'classic', tag: 'Den sårbare agent',
      summary: 'Filmen gør kærlighed og personligt tab til en central del af missionen og viser en mere følelsesmæssigt åben Bond.',
      drama: 'Missionen mod Blofeld flettes sammen med forholdet til Tracy. Den private fortælling skærper filmens afsluttende tragedie.',
      style: 'Hurtig klipning og dynamiske actionbilleder står over for romantiske montager. Musikken binder eventyr og melankoli sammen.',
      bond: 'Lazenbys Bond er mindre urørlig. Han vælger et muligt liv uden for tjenesten, og tabet får derfor større vægt.',
      evidence: 'Scenehenvisning: Montagen med Bond og Tracy gør deres forhold til et handlingsforløb i sig selv. I slutscenen fastholder kameraet det private tab frem for en ny mission, og Bonds professionelle maske bryder sammen.'
    },
    {
      id: 'spy-who-loved-me', title: 'The Spy Who Loved Me', year: 1977, actor: 'Roger Moore', era: 'classic', tag: 'Det store spektakel',
      summary: 'Et globalt eventyr, hvor Bond samarbejder med en sovjetisk agent og hvor humor, gadgets og store kulisser fylder meget.',
      drama: 'To rivaliserende agenter følger samme sag og tvinges til samarbejde. Konflikten bliver personlig, da Bonds fortid bliver afsløret.',
      style: 'Store totalbilleder, futuristiske scenografier og ikoniske stunts gør filmen til et visuelt spektakel.',
      bond: 'Moores version løser spændinger med charme og vittighed. Han virker socialt smidig og mindre brutal end sin forgænger.',
      evidence: 'Scenehenvisning: Skiåbningen skifter fra fare til triumf i det øjeblik faldskærmen folder sig ud. Senere gør Lotus-bilen, der kører under vand, teknologien til visuel humor og demonstrerer periodens lyst til spektakel.'
    },
    {
      id: 'living-daylights', title: 'The Living Daylights', year: 1987, actor: 'Timothy Dalton', era: 'transition', tag: 'Alvor og pligt',
      summary: 'Daltons debut flytter serien mod en mere alvorlig og litterær Bond, som tydeligt mistror både fjender og egne overordnede.',
      drama: 'En tilsyneladende afhoppet general sætter en kæde af bedrag i gang. Bond må selv afgøre, hvem han kan stole på.',
      style: 'Koldkrigsprægede miljøer og mere jordnære actionscener dæmper den rene fantasi og giver missionen fysisk tyngde.',
      bond: 'Dalton fremstår intens, professionel og vred. Humoren er mere sparsom, mens pligtkonflikten står tydeligere.',
      evidence: 'Scenehenvisning: Under flugten fra Bratislava improviserer Bond med cellokassen, men scenens tempo og fysiske risiko bevarer alvoren. Kombinationen viser en agent, der stadig er opfindsom uden at gøre faren til ren vittighed.'
    },
    {
      id: 'goldeneye', title: 'GoldenEye', year: 1995, actor: 'Pierce Brosnan', era: 'transition', tag: 'Efter den kolde krig',
      summary: 'Bond placeres i en ny geopolitisk virkelighed, hvor en tidligere ven og hans egen fortid bliver den centrale trussel.',
      drama: 'Konflikten med Alec Trevelyan spejler Bond i en agent, der har vendt sig mod systemet. Missionen bliver både global og personlig.',
      style: 'Klassisk glamour møder 1990’ernes teknologi, hurtige actionsekvenser og tydelige digitale trusler.',
      bond: 'Brosnan samler elegance, humor og fysisk handlekraft. Samtidig bliver figurens relevans og kønsrolle udfordret direkte.',
      evidence: 'Scenehenvisning: Dæmningsspringet præsenterer Bond gennem en ekstrem fysisk handling og et stort totalbillede. I mødet med Alec i Cuba bliver spektaklet personligt, fordi modstanderen kender agentens fortid og bruger den imod ham.'
    },
    {
      id: 'casino-royale', title: 'Casino Royale', year: 2006, actor: 'Daniel Craig', era: 'modern', tag: 'En ny begyndelse',
      summary: 'Serien genstarter Bond som ny 00-agent og lader hans forhold til Vesper Lynd forme den professionelle maske, publikum kender.',
      drama: 'En mission ved pokerbordet udvikler sig til et personligt forhold og et afgørende svigt. Oprindelseshistorien forklarer Bonds senere distance.',
      style: 'Nærgående action, dæmpede farver og fysisk konsekvens gør helten mere kropslig. Elegancen bygges gradvist op omkring ham.',
      bond: 'Craig begynder impulsiv og usleben. Kompetencen er tydelig, men kontrollen og den følelsesmæssige afstand bliver til undervejs.',
      evidence: 'Scenehenvisning: Parkourjagten viser to problemløsningsstile gennem krop og klipning: Mollaka flyder gennem rummet, mens Bond bryder igennem det. Torturscenen fjerner våben og glamour og gør humor til den sidste form for kontrol.'
    },
    {
      id: 'skyfall', title: 'Skyfall', year: 2012, actor: 'Daniel Craig', era: 'modern', tag: 'Arv og identitet',
      summary: 'Bond vender tilbage svækket og må forsvare både M og den institution, han selv har et vanskeligt forhold til.',
      drama: 'En hævnfortælling presser Bond tilbage mod barndommens hjem. Den ydre mission kobles direkte til tab, loyalitet og erindring.',
      style: 'Stærke silhuetter, farvemættede nattemiljøer og klassiske britiske landskaber gør hvert sted tematisk betydningsfuldt.',
      bond: 'Figuren er aldrende og fejlbarlig, men vælger fortsat tjenesten. Sårbarheden erstatter ikke handlekraften; den giver den en pris.',
      evidence: 'Scenehenvisning: Kampen i Shanghai reduceres til silhuetter mod lysende glas og gør volden næsten abstrakt. Ved Skyfall Lodge skifter filmen til ild, mørke og barndommens landskab, så missionen bliver knyttet til Bonds egen historie.'
    },
    {
      id: 'no-time-to-die', title: 'No Time to Die', year: 2021, actor: 'Daniel Craig', era: 'modern', tag: 'Afslutningen',
      summary: 'Craigs sidste film lader Bond konfrontere familie, ansvar og den endelige konsekvens af et liv styret af missioner.',
      drama: 'Fortiden vender tilbage gennem både fjenden og Bonds relationer. Valget mellem selvbeskyttelse og omsorg driver afslutningen.',
      style: 'Store landskaber og præcis action forbindes med intime nærbilleder. Det episke og det private får samme vægt.',
      bond: 'Bond accepterer til sidst en identitet ud over agentrollen. Heltemodet bliver et bevidst offer for andre.',
      evidence: 'Scenehenvisning: DB5-sekvensen i Matera lukker Bond og Madeleine inde bag panserglas, mens skuddene presser tilliden mellem dem. På øen samler de sidste nærbilleder og den åbne himmel seriens action og private afsked i ét valg.'
    }
  ];

  const periods = [
    { id: 'connery', name: 'Sean Connery', years: '1962–1971', count: 6, lede: 'Den kølige grundform: fysisk autoritet, tør humor og ubesværet elegance.', context: 'Koldkrigens spionfantasi møder 1960’ernes nye forbrugskultur. Rejser, biler, tøj og teknologi bliver en del af heltens moderne tiltrækning.', bond: 'Connery etablerer balancen mellem disciplineret agent og farlig outsider. Han virker socialt hjemme overalt, men følelsesmæssigt på afstand.', focus: ['Hvordan kameraet understøtter kontrol og status', 'Forholdet mellem humor og vold', 'Teknologi som tegn på modernitet'] },
    { id: 'lazenby', name: 'George Lazenby', years: '1969', count: 1, lede: 'Et enkelt, afgørende brud: Bond vælger nærhed og oplever et personligt tab.', context: 'Perioden står mellem 1960’ernes frigørelse og seriens behov for fornyelse. Romantikken får usædvanlig stor dramatisk betydning.', bond: 'Lazenby viser en mere åben og usikker agent. Figuren kan forestille sig et andet liv, hvilket gør afslutningen særligt markant.', focus: ['Tracy som selvstændig modspiller', 'Romantisk montage over for action', 'Hvordan slutningen ændrer heltebilledet'] },
    { id: 'moore', name: 'Roger Moore', years: '1973–1985', count: 7, lede: 'Den charmerende verdensmand: større spektakel, tydeligere humor og leg med genren.', context: '1970’ernes og begyndelsen af 1980’ernes populære genrer sætter spor i filmene. Serien reagerer hurtigt på nye trends, teknologier og globale bekymringer.', bond: 'Moore bruger ironi som kontrol. Voldens alvor dæmpes ofte af en replik eller en visuel vittighed, og Bond bliver en mere selskabelig helt.', focus: ['Genrehybrider og samtidens trends', 'Humor som afstand til fare', 'Store kulisser, gadgets og stunts'] },
    { id: 'dalton', name: 'Timothy Dalton', years: '1987–1989', count: 2, lede: 'Den alvorlige professionelle: pligten presses af vrede, loyalitet og personlig moral.', context: 'Slutningen af den kolde krig gør fjendebilledet mindre enkelt. Fortællingerne søger mod mere realistiske konflikter og konsekvenser.', bond: 'Dalton spiller Bond som koncentreret og følelsesmæssigt intens. Han følger ikke automatisk systemet, når egen loyalitet peger en anden vej.', focus: ['Institution kontra personlig moral', 'Fysisk risiko uden komisk afstand', 'Den litterære og alvorlige tone'] },
    { id: 'brosnan', name: 'Pierce Brosnan', years: '1995–2002', count: 4, lede: 'Den elegante hybrid: klassisk Bond i en digital og postkoldkrigs verden.', context: 'Efter Sovjetunionens fald må serien forklare, hvorfor den britiske agent stadig er relevant. Medier, overvågning og privat teknologi bliver nye magtfelter.', bond: 'Brosnan forbinder Connerys kølighed med Moores lethed, men får også glimt af tab og tvivl. Overfladen er poleret, mens konflikterne bliver mere personlige.', focus: ['Relevans efter den kolde krig', 'Teknologi og mediemagt', 'Sammenstødet mellem tradition og fornyelse'] },
    { id: 'craig', name: 'Daniel Craig', years: '2006–2021', count: 5, lede: 'Den kropslige og sårbare Bond: en sammenhængende udvikling fra rekrut til offer.', context: 'Efter 2001 præges spionfortællingen af terror, overvågning, netværk og mistillid til institutioner. Helten forventes at have en tydelig psykologi.', bond: 'Craig gør kontrol til noget, figuren må opbygge. Tab sætter varige spor, relationer fortsætter mellem filmene, og agentrollen udfordres af et muligt privat liv.', focus: ['Konsekvenser på tværs af film', 'Krop, alder og sårbarhed', 'Bond som menneske over for Bond som ikon'] }
  ];

  const comparisonItems = {
    connery: { name: 'Connery-perioden', character: 'Selvsikker, kontrolleret og næsten mytisk professionel.', story: 'Afgrænsede missioner med tydelige geopolitiske fjender.', visual: 'Grafisk 1960’er-modernisme, eksotiske steder og teknologisk fantasi.', values: 'Pligt, autoritet og individuel kunnen.', modernization: 'Skabte seriens grundform og visuelle koder.' },
    moore: { name: 'Moore-perioden', character: 'Charmerende verdensmand, som bruger humor under pres.', story: 'Storslåede eventyr, der ofte optager samtidens populære genrer.', visual: 'Farverigt spektakel, gadgets og store praktiske stunts.', values: 'Smidighed, selvironi og loyalitet mod missionen.', modernization: 'Gjorde Bond lettere og mere legende.' },
    dalton: { name: 'Dalton-perioden', character: 'Intens professionel med personlig moral og synlig vrede.', story: 'Mere jordnære konflikter, bedrag og brud med ordrer.', visual: 'Dæmpet koldkrigsrealisme og fysisk action.', values: 'Loyalitet til mennesker kan veje over institutionen.', modernization: 'Forudgreb den alvorlige og psykologiske Bond.' },
    brosnan: { name: 'Brosnan-perioden', character: 'Poleret kombination af charme, tempo og kontrolleret sårbarhed.', story: 'Postkoldkrigstrusler, mediemagt og teknologisk eskalation.', visual: 'Klassisk glamour møder 1990’ernes digitale udtryk.', values: 'Tradition, relevans og professionel tilpasning.', modernization: 'Bevarede ikonet i en ny verdensorden.' },
    craig: { name: 'Craig-perioden', character: 'Fysisk, fejlbarlig og formet af relationer og tab.', story: 'Sammenhængende karakterudvikling på tværs af fem film.', visual: 'Taktil action, stærke farver og intime nærbilleder.', values: 'Pligt udfordres af kærlighed, traumer og eget ansvar.', modernization: 'Gav Bond kontinuitet og psykologisk konsekvens.' },
    casino: { name: 'Casino Royale (2006)', character: 'En ny 00-agent, dygtig og impulsiv før masken er færdig.', story: 'Mission, kærlighed og svigt skaber den kendte Bond.', visual: 'Fysisk realisme vokser gradvist sammen med klassisk elegance.', values: 'Tillid prøves mod professionel overlevelse.', modernization: 'En filmisk oprindelseshistorie gennem tab.' },
    firstlight: { name: '007 First Light (2026)', character: 'En ung rekrut, der endnu skal lære disciplin og dømmekraft.', story: 'Oprindelsen opleves gennem missioner og spillerens handlinger.', visual: 'Cinematisk spionfantasi kombineret med læselige spilsystemer.', values: 'Initiativ skal balanceres med ansvar og samarbejde.', modernization: 'Gør udviklingen til noget publikum selv udfører.' }
  };

  const pageIndex = [
    ['home', 'Hovedkvarter', 'Forside og overblik'], ['agentprofil', 'Agentprofil', 'Bond som karakter'],
    ['karakteranalyse', 'Karakteranalyse', 'Den moderne helt'], ['arkiv', '007-arkiv', 'Film og fortolkere'],
    ['filmsagsmappe', 'Filmsagsmappe', 'Analyse af en valgt film'], ['tidslinje', 'Tidslinje', 'Bond gennem tiden'],
    ['periodeprofil', 'Periodeprofil', 'En valgt Bond-periode'], ['firstlight', '007 First Light', 'Spilbriefing'],
    ['spilanalyse', 'Spilanalyse', 'GoldenEye 007: debatblog og scenelæsning'], ['sammenligninger', 'Sammenligninger', 'Vælg to fortolkninger'],
    ['sammenligning', 'Sammenligning', 'Resultat side om side'], ['rapport', 'Efterretningsrapport', 'Samlet konklusion'],
    ['kilder', 'Kildearkiv', 'Kilder og bevismateriale']
  ];

  const parentNav = {
    agentprofil: 'agentprofil', karakteranalyse: 'agentprofil', arkiv: 'arkiv', filmsagsmappe: 'arkiv',
    tidslinje: 'tidslinje', periodeprofil: 'tidslinje', firstlight: 'firstlight', spilanalyse: 'firstlight',
    sammenligninger: 'sammenligninger', sammenligning: 'sammenligninger', rapport: 'rapport', kilder: 'kilder'
  };

  const byId = id => document.getElementById(id);
  const getRoute = () => {
    const raw = (location.hash || '#home').slice(1);
    const [routeName, query = ''] = raw.split('?');
    const known = pageIndex.some(([id]) => id === routeName);
    return { name: known ? routeName : 'home', params: new URLSearchParams(query) };
  };

  function notify(message) {
    const toast = byId('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(notify.timer);
    notify.timer = setTimeout(() => { toast.hidden = true; }, 2600);
  }

  function renderFilms(filter = 'all') {
    const selected = films.filter(film => filter === 'all' || film.era === filter);
    byId('film-grid').innerHTML = selected.map(film => `
      <article class="film-card">
        <div class="card-year"><span>${film.year}</span><span>${film.actor}</span></div>
        <h2>${film.title}</h2><p>${film.tag}</p>
        <a href="#filmsagsmappe?film=${film.id}">Åbn sagsmappe <span aria-hidden="true">→</span></a>
      </article>`).join('');
    byId('archive-count').textContent = `${selected.length} ${selected.length === 1 ? 'film' : 'film'} vist`;
  }

  function renderFilm(id) {
    const film = films.find(item => item.id === id) || films[0];
    document.querySelector('[data-film-year]').textContent = film.year;
    document.querySelector('[data-film-title]').textContent = film.title;
    document.querySelector('[data-film-meta]').textContent = `${film.year} · ${film.actor} · ${film.tag}`;
    document.querySelector('[data-film-summary]').textContent = film.summary;
    document.querySelector('[data-film-drama]').textContent = film.drama;
    document.querySelector('[data-film-style]').textContent = film.style;
    document.querySelector('[data-film-bond]').textContent = film.bond;
    document.querySelector('[data-film-evidence]').innerHTML = `<strong>Analysebevis:</strong> ${film.evidence}`;
  }

  function renderTimeline() {
    byId('timeline-list').innerHTML = periods.map(period => `
      <article class="timeline-item">
        <time>${period.years}</time>
        <div><h2>${period.name}</h2><p>${period.lede}</p></div>
        <button type="button" data-period="${period.id}">Se periode</button>
      </article>`).join('');
  }

  function renderPeriod(id) {
    const period = periods.find(item => item.id === id) || periods[0];
    document.querySelector('[data-period-title]').textContent = period.name;
    document.querySelector('[data-period-lede]').textContent = period.lede;
    document.querySelector('[data-period-years]').textContent = period.years;
    document.querySelector('[data-period-count]').textContent = period.count;
    document.querySelector('[data-period-context]').textContent = period.context;
    document.querySelector('[data-period-bond]').textContent = period.bond;
    document.querySelector('[data-period-focus]').innerHTML = period.focus.map(item => `<li>${item}</li>`).join('');
  }

  function setupComparisonOptions() {
    const options = Object.entries(comparisonItems).map(([id, item]) => `<option value="${id}">${item.name}</option>`).join('');
    byId('compare-a').innerHTML = options;
    byId('compare-b').innerHTML = options;
    byId('compare-a').value = 'connery';
    byId('compare-b').value = 'craig';
  }

  function renderComparison(firstId, secondId) {
    const first = comparisonItems[firstId] || comparisonItems.connery;
    const second = comparisonItems[secondId] || comparisonItems.craig;
    document.querySelector('[data-compare-name-a]').textContent = first.name;
    document.querySelector('[data-compare-name-b]').textContent = second.name;
    const rows = [
      ['Karakter', 'character'], ['Fortælling', 'story'], ['Visuelt udtryk', 'visual'],
      ['Værdier', 'values'], ['Fornyelse', 'modernization']
    ];
    byId('comparison-table').innerHTML = `
      <div class="comparison-row"><h2>Kategori</h2><p><strong>${first.name}</strong></p><p><strong>${second.name}</strong></p></div>
      ${rows.map(([label, key]) => `<div class="comparison-row"><h2>${label}</h2><p>${first[key]}</p><p>${second[key]}</p></div>`).join('')}`;
    const firstValue = first.values.replace(/\.$/, '').toLowerCase();
    const secondValue = second.values.replace(/\.$/, '').toLowerCase();
    byId('comparison-conclusion').textContent = `${first.name} og ${second.name} bevarer begge Bond som kompetent agent, men de lægger vægten forskelligt: den ene på ${firstValue}, den anden på ${secondValue}.`;
  }

  function showRoute({ name, params }) {
    document.querySelectorAll('[data-view]').forEach(view => { view.hidden = view.dataset.view !== name; });
    document.querySelectorAll('[data-nav]').forEach(link => {
      if (link.dataset.nav === parentNav[name]) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });

    if (name === 'filmsagsmappe') renderFilm(params.get('film'));
    if (name === 'periodeprofil') renderPeriod(params.get('period'));
    if (name === 'sammenligning') renderComparison(params.get('a'), params.get('b'));

    const current = pageIndex.find(([id]) => id === name);
    document.title = `${current ? current[1] : 'Hovedkvarter'} · 007 Vidensportal`;
    closeMenu();

    const sectionTarget = params.get('section');
    if (sectionTarget && byId(sectionTarget)) {
      requestAnimationFrame(() => byId(sectionTarget).scrollIntoView({ behavior: 'smooth', block: 'start' }));
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
      requestAnimationFrame(() => byId('main-content').focus({ preventScroll: true }));
    }
  }

  const menuButton = document.querySelector('.menu-toggle');
  const nav = byId('primary-nav');
  function closeMenu() {
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }

  renderFilms();
  renderTimeline();
  setupComparisonOptions();

  byId('era-filter').addEventListener('change', event => {
    renderFilms(event.target.value);
    notify(`Arkivet er filtreret: ${event.target.options[event.target.selectedIndex].text}`);
  });

  byId('timeline-list').addEventListener('click', event => {
    const button = event.target.closest('[data-period]');
    if (button) location.hash = `periodeprofil?period=${button.dataset.period}`;
  });

  byId('compare-form').addEventListener('submit', event => {
    event.preventDefault();
    const first = byId('compare-a').value;
    const second = byId('compare-b').value;
    if (first === second) {
      notify('Vælg to forskellige fortolkninger.');
      byId('compare-b').focus();
      return;
    }
    location.hash = `sammenligning?a=${first}&b=${second}`;
  });

  document.querySelectorAll('[data-pair]').forEach(button => button.addEventListener('click', () => {
    const [first, second] = button.dataset.pair.split(',');
    location.hash = `sammenligning?a=${first}&b=${second}`;
  }));

  document.querySelectorAll('[data-source-filter]').forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.sourceFilter;
    document.querySelectorAll('[data-source-filter]').forEach(item => item.classList.toggle('active', item === button));
    document.querySelectorAll('[data-source-type]').forEach(source => { source.hidden = filter !== 'all' && source.dataset.sourceType !== filter; });
    notify(`Kilder filtreret: ${button.textContent}`);
  }));

  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    document.body.classList.toggle('menu-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
  });

  const dialog = byId('search-dialog');
  const searchInput = byId('search-input');
  const searchResults = byId('search-results');
  function updateSearch() {
    const query = searchInput.value.trim().toLowerCase();
    const matches = pageIndex.filter(([, title, description]) => `${title} ${description}`.toLowerCase().includes(query));
    searchResults.innerHTML = matches.map(([route, title, description]) => `<a href="#${route}"><strong>${title}</strong><span>${description}</span></a>`).join('') || '<p>Ingen sager matcher søgningen.</p>';
  }
  document.querySelector('[data-open-search]').addEventListener('click', () => { dialog.showModal(); updateSearch(); searchInput.focus(); });
  document.querySelector('[data-close-search]').addEventListener('click', () => dialog.close());
  dialog.querySelector('form').addEventListener('submit', event => event.preventDefault());
  searchInput.addEventListener('input', updateSearch);
  searchResults.addEventListener('click', event => { if (event.target.closest('a')) dialog.close(); });

  document.addEventListener('keydown', event => {
    if (event.key === '/' && !/input|textarea|select/i.test(document.activeElement.tagName)) {
      event.preventDefault(); dialog.showModal(); updateSearch(); searchInput.focus();
    }
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('hashchange', () => showRoute(getRoute()));
  showRoute(getRoute());
})();
