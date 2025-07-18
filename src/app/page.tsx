import Image from 'next/image';
import { ShieldCheck, Heart, Wrench, Plus, Egg, GripVertical, Trash2, Lock, Wind, DoorOpen,
  Archive,
  Layers,
  Package as BoxPackage,
  AirVent,
  GripHorizontal,
  HardDrive,
  Ruler,
  PanelRight,
  HardHat,
  Stars,
  Feather,
  Activity,} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { PhotoGallery } from '@/components/photo-gallery';


// Data for the page
const coop = {
  name: 'Model Klasik',
  image: 'https://placehold.co/600x400.png',
  hint: 'chicken coop',
  description: 'Klasický design s dostatkem prostoru, ideální pro rostoucí hejno. Spojuje odolnost s okouzlujícím vzhledem, který doplní každou zahradu.',
  price: 'od 12 499 Kč',
  specs: {
    dimensions: '120cm Š x 180cm D x 150cm V',
    capacity: '4-6 slepic',
    materials: 'Prémiové borové dřevo, pozinkované ocelové pletivo',
    features: 'Vnější hnízdní box, 2 hřady, snadno čistitelný výsuvný tác, bezpečné západky, ventilační okno',
    gallery: [
        { src: 'https://placehold.co/600x400.png', hint: 'chicken coop front' },
        { src: 'https://placehold.co/600x400.png', hint: 'chicken coop side' },
        { src: 'https://placehold.co/600x400.png', hint: 'chicken coop interior' }
    ],
  },
};

const whyUsFeatures = [
  {
    icon: 'ShieldCheck',
    title: 'Postaveno, aby vydrželo',
    description: 'Konstrukce je svařena z pevných ocelových profilů a pro maximální životnost je žárově zinkovaná. Odolává vlhkosti, korozi i povětrnostním vlivům – bez nutnosti údržby a bez rizika uhnívání jako u dřeva. Stabilní, robustní řešení, které vydrží dlouhé desítky let i v náročných venkovních podmínkách.',
  },
  {
    icon: 'Heart',
    title: 'Spokojené slepice zaručeny',
    description: 'Prostorný interiér s pohodlnými hřady a odlehlým hnízdním boxem poskytuje prostředí bez stresu pro snášení vajec.',
  },
  {
    icon: 'Wrench',
    title: 'Jednoduché pro vás',
    description: 'Díky velkým dvířkům a rozebíratelnému snáškovému boxu z hygienických materiálů je údržba kurníku rychlá, jednoduchá a účinná.',
  },
];

const whyUsIcons = {
  ShieldCheck: <ShieldCheck className="h-10 w-10 text-accent" />,
  Heart: <Heart className="h-10 w-10 text-accent" />,
  Wrench: <Wrench className="h-10 w-10 text-accent" />,
};

const aboutMe = {
  name: 'Kamil Beneš',
  title: 'Truhlář a chovatel',
  image: 'https://placehold.co/500x500.png',
  hint: 'friendly carpenter',
};

const detailedFeatures = [
 
  {
    icon: 'DoorOpen',
    title: 'Automatická dvířka',
    description:
      'Součástí kurníků jsou automatická dvířka od českého výrobce Chytrý kurník, která se otevírají a zavírají zcela automaticky, bez vaší přítomnosti. Vývoj a výroba v České republice s důrazem na kvalitu, spolehlivost a dlouhou životnost.\n\nKe každému kurníku dostanete originální doklad o koupi dvířek a možnost případné reklamace přímo u výrobce. Pokud by se něco pokazilo, máte jistotu rychlého a vstřícného vyřízení.',
  },
  {
    icon: 'Archive',
    title: 'Krmicí a napájecí systém',
    description:
      'Pod kurníkem se nachází dva zdravotně nezávadné boxy – jeden na vodu s niplovým dávkovačem proti znečištění a druhý na krmný vápenec se spádovým dávkováním – umístěné na společném držáku. Díky promyšlenému uchycení lze tyto boxy vzájemně zaměnit podle světové strany, tedy podle toho, odkud svítí slunce. Box s vodou tak můžete snadno umístit do stínu, aby se voda v horkých dnech nepřehřívala.\n\nPlus uvnitř se nachází krmný box pro suchou i míchanou směs.',
  },
  {
    icon: 'Layers',
    title: 'Promyšlené zázemí pod kurníkem',
    description:
      'Hygiena – Pohodlí – Efektivní krmení\n\npopeliště – bidlo – krmící boxy',
  },
  {
    icon: 'BoxPackage',
    title: 'Prostorné snáškové hnízdo',
    description:
      'Na levé straně uvnitř kurníku se nachází jedno velké snáškové hnízdo přes celou šířku kurníku, do kterého se vejde 5 až 7 slepic současně. Díky otevřené konstrukci a pohodlnému přístupu si slepice najdou své místo bez stresu a tlačení.\n\nHnízdo je navrženo se sklonem a pevným plastovým roštem, díky čemuž se vajíčka po snesení automaticky odkootálí do sběrné části. Tím se minimalizuje riziko znečištění, pojídání, zahřívání a rozbíjení vajíček. Vajíčka jednoduše odeberete zvenku přes praktická výklopná dvířka – pohodlně a bez zbytečného rušení.',
  },
  {
    icon: 'Wrench',
    title: 'Rozebiratelný a omyvatelný interiér',
    description:
      'Celé snáškové hnízdo je plně rozebíratelné včetně přední a zadní stěny i plastového roštu. Všechno je hygienické a snadno čistitelné, což oceníte hlavně při pravidelné údržbě.\n\nBidla uvnitř kurníku jsou vyjímatelná, takže se snadno dostanete ke každému místu. Vnitřní plášť tvoří lakovaný plech, který je plně omyvatelný a odolný vůči vlhkosti. Podlaha je z voděodolné překližky, kterou lze rovněž jednoduše umýt. Celý interiér kurníku je tak navržen s důrazem na čistotu a dlouhou životnost.',
  },
  {
    icon: 'AirVent',
    title: 'Chytré větrání kurníku',
    description:
      'Nerezový anemostat s regulací proudění vzduchu. Chytré řešení pro ideální klima po celý rok. V létě umožňuje snadné a rychlé odvětrání přehřátého vzduchu, v zimě pak můžete regulovat přívod čerstvého vzduchu podle aktuální potřeby. Průtok vzduchu si snadno přizpůsobíte podle vlhkosti v podestýlce a počtu slepic, čímž zajistíte zdravé prostředí bez plísní a nadměrné vlhkosti.',
  },
  {
    icon: 'GripHorizontal',
    title: 'Snadná manipulace',
    description:
      'Kurník je vybaven čtyřmi masivními, pevně přivařenými madly, která slouží pro snadné uchopení při převozu nebo stěhování. Ať už potřebujete kurník přenést na nové místo nebo ho jednorázově usadit na zahradě, madla zajistí pevný a pohodlný úchop. Není potřeba složitá manipulace ani speciální nářadí.',
  },
  {
    icon: 'HardDrive',
    title: 'Podlaha',
    description:
      'Robustní a praktická podlaha z kvalitní protiskluzové překližky – bezpečný a hygienický prostor pro vaše slepice. Materiál je odolný vůči vlhkosti i mechanickému opotřebení, takže zvládne každodenní provoz i pravidelné čištění.',
  },
  {
    icon: 'Ruler',
    title: 'Rozměry kurníku',
    description:
      'Rozměry kurníku jsou: výška 1 m, šířka 1 m a délka 2 m. Kurník je navržen pro maximální počet 10 slepic. Váha kurníku je do 100 kg, takže je stále snadno manipulovatelný, například při stěhování nebo přepravě.',
  },
  {
    icon: 'Stars',
    title: 'Schůdky pro slepice',
    description:
      'Schůdky jsou vyrobené kompletně z modřínového dřeva, včetně příček pro snadný výstup. Příčky jsou spojeny nerezovými šrouby a spodní část je pro zvýšenou odolnost proti vlhkosti oplechovaná 1 mm hliníkovým plechem.',
  },
  {
    icon: 'PanelRight',
    title: 'Opláštění kurníku',
    description:
      'Opláštění tvoří moderní sendvičové panely o tloušťce 40 mm, které zajišťují výbornou tepelnou izolaci. Kurník si díky nim udrží stabilní klima po celý rok, což vytváří ideální podmínky pro zdraví a pohodu slepic.',
  },
  {
    icon: 'HardHat',
    title: 'Konstrukce kurníku',
    description:
      'Konstrukce je svařena z pevných ocelových profilů a pro maximální životnost je žárově zinkovaná. Odolává vlhkosti, korozi i povětrnostním vlivům – bez nutnosti údržby a bez rizika uhnívání jako u dřeva. Stabilní, robustní řešení, které vydrží dlouhé desítky let i v náročných venkovních podmínkách.',
  },
  {
    icon: 'Feather',
    title: 'Vnitřní a venkovní bidla',
    description:
      'Uvnitř kurníku jsou umístěna dvě bidla z odolného modřínového dřeva, třetí venkovní bidlo, také z modřínu, je dlouhé 100 cm a nachází se pod kurníkem, kde slepicím slouží jako příjemné místo k odpočinku během dne – chráněné před deštěm i silným sluncem.',
  },
  {
    icon: 'Activity',
    title: 'Venkovní popeliště',
    description:
      'Pod kurníkem se nachází prostorné popeliště o rozměrech 80 × 40 cm, které slepicím poskytuje ideální prostor pro přirozené popelení. Nachází se na čerstvém vzduchu a zároveň je chráněné před deštěm i ostrým sluncem, takže ho mohou využívat kdykoliv během dne.',
  },
   {
    icon: 'Activity',
    title: 'Bezpečnostní okno',
    description:
      'Součástí kurníku je velké bezpečnostní okno o rozměru 50×50 cm, které je osazeno v pevnostním hliníkovém rámu s výplní z 16mm polykarbonátu, který výborně izoluje a odolá nárazům.Bezpečnost a odolnost zajišťuje žárově zinkovaná síť v okně. Díky velikosti okna mají slepice dostatek přirozeného světla i během krátkých zimních dnů. Bezpečí, světlo a čerstvý vzduch – to vše v jednom okně.',
  },
];

const detailedFeatureIcons = {
  Egg: <Egg className="h-10 w-10 text-primary" />,
  GripVertical: <GripVertical className="h-10 w-10 text-primary" />,
  Trash2: <Trash2 className="h-10 w-10 text-primary" />,
  Lock: <Lock className="h-10 w-10 text-primary" />,
  Wind: <Wind className="h-10 w-10 text-primary" />,
  ShieldCheck: <ShieldCheck className="h-10 w-10 text-primary" />,
  DoorOpen: <DoorOpen className="h-10 w-10 text-primary" />,
  Archive: <Archive className="h-10 w-10 text-primary" />,
  Layers: <Layers className="h-10 w-10 text-primary" />,
  BoxPackage: <BoxPackage className="h-10 w-10 text-primary" />,
  Wrench: <Wrench className="h-10 w-10 text-primary" />,
  AirVent: <AirVent className="h-10 w-10 text-primary" />,
  GripHorizontal: <GripHorizontal className="h-10 w-10 text-primary" />,
  HardDrive: <HardDrive className="h-10 w-10 text-primary" />,
  Ruler: <Ruler className="h-10 w-10 text-primary" />,
  Stairs: <Stars className="h-10 w-10 text-primary" />,
  PanelRight: <PanelRight className="h-10 w-10 text-primary" />,
  HardHat: <HardHat className="h-10 w-10 text-primary" />,
  Feather: <Feather className="h-10 w-10 text-primary" />,
  Activity: <Activity className="h-10 w-10 text-primary" />,
};
const interactiveFeatures = [
  {
    id: 1,
    position: { top: '35%', left: '75%' },
    title: 'Ventilační okno',
    description: 'Zajišťuje optimální proudění vzduchu pro zdravé prostředí uvnitř kurníku.',
  },
  {
    id: 2,
    position: { top: '60%', left: '85%' },
    title: 'Vnější hnízdní box',
    description: 'Pohodlný a bezpečný sběr vajec bez nutnosti vstupovat do kurníku a rušit slepice.',
  },
  {
    id: 3,
    position: { top: '78%', left: '50%' },
    title: 'Výsuvný tác na trus',
    description: 'Extrémně usnadňuje čištění. Stačí vysunout, vyčistit a zasunout zpět.',
  },
  {
    id: 4,
    position: { top: '55%', left: '20%' },
    title: 'Bezpečné západky',
    description: 'Robustní západky na všech dvířkách chrání vaše hejno před predátory.',
  },
];

const testimonials = [
  {
    quote: "Kurník je fantastický! Montáž byla snadná a naše slepice si ho okamžitě oblíbily. Je robustní a na naší zahradě vypadá skvěle.",
    author: 'Emílie R.',
    location: 'Lhota',
  },
  {
    quote: "Jsem tak ohromen kvalitou a designem. Snadno čistitelný tác je revoluční. Vřele doporučuji Kurníky Beneš!",
    author: 'David L.',
    location: 'Doubrava',
  },
];

const faqs = [
    {
        question: "Jak dlouho trvá montáž?",
        answer: "Náš kurník je navržen pro snadnou montáž. Ve dvou lidech to obvykle trvá 1-2 hodiny. Všechny součástky a podrobné pokyny jsou součástí balení."
    },
    {
        question: "Je dřevo ošetřené?",
        answer: "Používáme vysoce kvalitní, odolné borové dřevo. I když je přirozeně odolné, doporučujeme každoročně aplikovat netoxický nátěr pro maximální prodloužení životnosti."
    },
    {
        question: "Jaké jsou náklady na dopravu a doba doručení?",
        answer: "Nabízíme paušální dopravu po celé ČR. Doručení obvykle trvá 3-5 pracovních dnů. Po odeslání objednávky obdržíte sledovací číslo."
    },
    {
        question: "Mohu si kurník přizpůsobit?",
        answer: "V současné době nabízíme Model Klasik pouze ve standardní konfiguraci, abychom zajistili kvalitu a rychlé dodání. Zkoumáme možnosti přizpůsobení do budoucna!"
    }
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-headline text-lg font-semibold">
            <Icons.Logo className="h-8 w-8 text-primary" />
            Kurníky Beneš
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#features" className="transition-colors hover:text-primary">Proč my</a>
            <a href="#about" className="transition-colors hover:text-primary">O nás</a>
            <a href="#coop" className="transition-colors hover:text-primary">Kurník</a>
            <a href="#detailed-features" className="transition-colors hover:text-primary">Vlastnosti</a>
            <a href="#interactive" className="transition-colors hover:text-primary">Prozkoumat</a>
            <a href="#video" className="transition-colors hover:text-primary">Video</a>
            <a href="#gallery" className="transition-colors hover:text-primary">Galerie</a>
            <a href="#faq" className="transition-colors hover:text-primary">FAQ</a>
            <a href="#contact" className="transition-colors hover:text-primary">Kontakt</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative h-[70vh] w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://placehold.co/1920x1080.png"
          >
            <source src="/videos/0716.mp4" type="video/mp4" />
            Váš prohlížeč nepodporuje video tag.
          </video>
            <div className="absolute inset-0 bg-black/80 pointer-events-none" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              Kvalitní domovy pro vaše hejno
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Objevte náš ručně vyráběný kurník, postavený s láskou, péčí a z nejlepších přírodních materiálů.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="#coop">Prohlédnout kurník</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white">
                <a href="#contact">Kontaktujte nás</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">
              Proč Kurníky Beneš?
            </h2>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
              Stavíme kurníky s ohledem na tři věci: bezpečí vašeho hejna, jejich štěstí a váš klid.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {whyUsFeatures.map((feature) => (
                <div key={feature.title} className="flex flex-col items-center text-center">
                  {whyUsIcons[feature.icon as keyof typeof whyUsIcons]}
                  <h3 className="mt-4 font-headline text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="about" className={cn('py-16 md:py-24', 'bg-wood-pattern')}>
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square">
                <Image
                  src={aboutMe.image}
                  alt={`Portrét ${aboutMe.name}`}
                  data-ai-hint={aboutMe.hint}
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Kdo stojí za vaším kurníkem?</h2>
                <p className="mt-4 font-headline text-xl text-muted-foreground">{aboutMe.name}, {aboutMe.title}</p>
                <p className="mt-6 text-muted-foreground">
Jmenuji se Kamil Beneš a chovu slepic se věnuji už od roku 2000. Od roku 2010 navíc chovám brojlery na maso, takže velmi dobře vím, co slepice opravdu potřebují – i co chovatel ocení.
<br/>
<br/>
Proto jsem spojil svůj dlouholetý koníček s řemeslem – jsem vyučený klempíř a celý život pracuji ve stavebnictví, hlavně s kovem, plechem a svařováním. Z těchto zkušeností vznikl projekt, kterému dnes věnuji veškerý svůj čas – výroba poctivých plně automatických a bezúdržbových kurníků pro slepice.
<br/><br/>


Každý kurník vyrábím ručně ve své dílně, kompletně sám, od konstrukce až po finální montáž. Nosná konstrukce je celosvařená z profilů a následně proveden žárový zinek, který vydrží až 40 let. Stěny tvoří polyuretanové panely (PUR) – lakovaný plech zvenku i zevnitř, žádné natírání, minimální údržba.
<br/><br/>


Součástí každého kurníku jsou plně automatická dvířka, která se samy zavírají i otvírají. Uvnitř na podlaze je voděodolná překližka, velké snáškové hnízdo, bidla, propracovaný větrací systém, a také krmný a napájecí systém, který je součástí každého kurníku.
<br/>
<br/>

Nechybí ani popeliště a bidlo pod kurníkem, kde si slepice rády posedí. Kurník má i držadla pro snadné přenášení, takže se s ním dá pohodlně manipulovat.
<br/>
<br/>

Dodávám kompletní kurníky na klíč – plně vybavené, funkční a připravené k okamžitému používání. Stačí postavit na místo a můžete začít chovat.
<br/>
<br/>

Věřím, že poctivá práce a kvalitní materiály se vyplácí. Mým cílem je vyrábět kurníky, které vydrží dlouhé roky bez oprav a budou sloužit vám i slepicím s maximálním komfortem.                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="coop" className={cn('py-16 md:py-24', 'bg-wood-pattern')}>
          <div className="container">
            <div className="text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                Náš hlavní model: {coop.name}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Dokonalé spojení řemeslného zpracování, funkčnosti a rustikálního šarmu, navržené jako ideální domov pro vaše hejno.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="w-full">
                  <Carousel className="rounded-lg overflow-hidden shadow-lg">
                    <CarouselContent>
                      {coop.specs.gallery.map((img, i) => (
                        <CarouselItem key={i}>
                          <div className="aspect-video relative">
                            <Image src={img.src} alt={`${coop.name} pohled ${i+1}`} data-ai-hint={img.hint} fill className="object-cover" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
              </div>
              
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="font-headline text-3xl font-bold text-primary">{coop.name}</h3>
                <p className="mt-2 text-muted-foreground">{coop.description}</p>
                
                <div className="mt-6">
                  <h4 className="font-headline text-xl font-semibold mb-2">Specifikace</h4>
                  <Table>
                    <TableBody>
                      <TableRow><TableCell className="font-medium">Rozměry</TableCell><TableCell>{coop.specs.dimensions}</TableCell></TableRow>
                      <TableRow><TableCell className="font-medium">Kapacita</TableCell><TableCell>{coop.specs.capacity}</TableCell></TableRow>
                      <TableRow><TableCell className="font-medium">Materiály</TableCell><TableCell>{coop.specs.materials}</TableCell></TableRow>
                      <TableRow><TableCell className="font-medium">Vlastnosti</TableCell><TableCell>{coop.specs.features}</TableCell></TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="font-headline text-3xl font-bold text-primary">{coop.price}</p>
                  <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">Poptat nyní</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="detailed-features" className="py-16 md:py-24 bg-background">
            <div className="container">
                <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">
                    Vybavení pro spokojené hejno
                </h2>
                <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
                    Každý detail našeho kurníku je navržen s ohledem na pohodlí a bezpečí vašich slepic.
                </p>
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {detailedFeatures.map((feature) => (
                        <div key={feature.title} className="flex gap-4">
                           <div className="flex-shrink-0">
                             {detailedFeatureIcons[feature.icon as keyof typeof detailedFeatureIcons]}
                           </div>
                           <div>
                             <h3 className="font-headline text-xl font-semibold">{feature.title}</h3>
                             <p className="mt-1 text-muted-foreground">{feature.description}</p>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="interactive" className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">Prozkoumejte každý detail</h2>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
              Kliknutím na jednotlivé body na obrázku zjistíte více o klíčových vlastnostech našeho kurníku.
            </p>
            <div className="mt-12 relative max-w-4xl mx-auto">
              <Image
                src="https://placehold.co/1024x768.png"
                alt="Interaktivní pohled na kurník"
                data-ai-hint="chicken coop details"
                width={1024}
                height={768}
                className="rounded-lg shadow-lg w-full"
              />
              {interactiveFeatures.map((feature) => (
                <Popover key={feature.id}>
                  <PopoverTrigger asChild>
                    <button
                      className="absolute w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg hotspot z-10"
                      style={{ top: feature.position.top, left: feature.position.left, transform: 'translate(-50%, -50%)' }}
                      aria-label={`Více informací o: ${feature.title}`}
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64">
                    <h4 className="font-bold text-lg mb-2 text-primary">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </PopoverContent>
                </Popover>
              ))}
            </div>
          </div>
        </section>

   <section id="video" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">
          Podívejte se na náš model v akci
        </h2>
        <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          Projděte si s námi všechny detaily a přednosti našeho nejoblíbenějšího modelu.
        </p>
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/W_qoHwtREsc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>

        <section id="gallery" className="py-16 md:py-24 bg-background">
          <PhotoGallery />
        </section>

        <section id="testimonials" className={cn('py-16 md:py-24', 'bg-wood-pattern')}>
          <div className="container">
            <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">Co říkají naši zákazníci</h2>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
              Jsme hrdí na to, že máme šťastná hejna a ještě šťastnější majitele.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card">
                  <CardContent className="p-6">
                    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                      {testimonial.quote}
                    </blockquote>
                    <p className="mt-4 font-semibold text-right text-card-foreground">
                      - {testimonial.author}, {testimonial.location}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section id="faq" className="py-16 md:py-24 bg-background">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">
              Často kladené otázky
            </h2>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
              Máte otázky? Máme odpovědi.
            </p>
            <Accordion type="single" collapsible className="w-full mt-12">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contact" className={cn('py-16 md:py-24', 'bg-wood-pattern')}>
          <div className="container">
            <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">Spojte se s námi</h2>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
              Máte dotazy nebo jste připraveni objednat? Rádi se vám budeme věnovat.
            </p>
            <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Icons.Mail className="h-12 w-12 text-accent" />
                <h3 className="mt-4 font-headline text-xl font-semibold">Napište nám</h3>
                <p className="text-muted-foreground mt-1">Pro prodej a dotazy</p>
                <a href="mailto:prodej@kurnikуbenes.com" className="mt-2 text-primary hover:underline">
                  prodej@kurnikybenes.com
                </a>
              </div>
              <div className="flex flex-col items-center text-center">
                <Icons.Phone className="h-12 w-12 text-accent" />
                <h3 className="mt-4 font-headline text-xl font-semibold">Zavolejte nám</h3>
                <p className="text-muted-foreground mt-1">Po - Pá, 9:00 - 17:00</p>
                <a href="tel:+420123456789" className="mt-2 text-primary hover:underline">
                  +420 123 456 789
                </a>
              </div>
              <div className="flex flex-col items-center text-center">
                <Icons.MapPin className="h-12 w-12 text-accent" />
                <h3 className="mt-4 font-headline text-xl font-semibold">Naše dílna</h3>
                <p className="text-muted-foreground mt-1">Návštěva po domluvě</p>
                <p className="mt-2 text-primary">Rustikální 123, Loučná</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kurníky Beneš. Všechna práva vyhrazena.
        </div>
      </footer>
    </div>
  );
}
