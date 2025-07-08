import Image from 'next/image';
import { ShieldCheck, Heart, Wrench, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';


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

const features = [
  {
    icon: 'ShieldCheck',
    title: 'Postaveno, aby vydrželo',
    description: 'Vyrobeno z prémiového, povětrnostně odolného borového dřeva a pozinkované oceli, aby chránilo vaše hejno před predátory a živly.',
  },
  {
    icon: 'Heart',
    title: 'Spokojené slepice zaručeny',
    description: 'Prostorný interiér s pohodlnými hřady a odlehlým hnízdním boxem poskytuje prostředí bez stresu pro snášení vajec.',
  },
  {
    icon: 'Wrench',
    title: 'Jednoduché pro vás',
    description: 'Výsuvný tác pro rychlé čištění a velká přístupová dvířka znamenají méně času na povinnosti a více času na radost z vašich slepic.',
  },
];

const featureIcons = {
  ShieldCheck: <ShieldCheck className="h-10 w-10 text-accent" />,
  Heart: <Heart className="h-10 w-10 text-accent" />,
  Wrench: <Wrench className="h-10 w-10 text-accent" />,
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

const galleryImages = [
  { src: 'https://placehold.co/800x600.png', alt: 'Spokojený zákazník s kurníkem na zahradě', hint: 'chicken coop garden' },
  { src: 'https://placehold.co/800x600.png', alt: 'Slepice si užívají nový kurník', hint: 'chickens coop' },
  { src: 'https://placehold.co/800x600.png', alt: 'Krásný kurník při východu slunce', hint: 'chicken coop sunrise' },
  { src: 'https://placehold.co/800x600.png', alt: 'Detail borového dřeva', hint: 'wood texture' },
  { src: 'https://placehold.co/800x600.png', alt: 'Hejno slepic ve prostorném výběhu', hint: 'chickens farm' },
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
            <a href="#features" className="transition-colors hover:text-primary">Vlastnosti</a>
            <a href="#coop" className="transition-colors hover:text-primary">Kurník</a>
            <a href="#interactive" className="transition-colors hover:text-primary">Detaily</a>
            <a href="#video" className="transition-colors hover:text-primary">Video</a>
            <a href="#gallery" className="transition-colors hover:text-primary">Galerie</a>
            <a href="#faq" className="transition-colors hover:text-primary">FAQ</a>
            <a href="#contact" className="transition-colors hover:text-primary">Kontakt</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative h-[70vh] w-full">
           <Image
            src="https://placehold.co/1920x1080.png"
            alt="Krásná rustikální farma s kurníkem"
            data-ai-hint="rustic farm"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              Kvalitní domovy pro vaše hejno
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Objevte náš ručně vyráběný kurník, postavený s láskou, péčí a z nejlepších přírodních materiálů.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="#coop">Prohlédnout kurník</a>
            </Button>
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
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col items-center text-center">
                  {featureIcons[feature.icon as keyof typeof featureIcons]}
                  <h3 className="mt-4 font-headline text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </div>
              ))}
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
              Podívejte se na {coop.name} v akci
            </h2>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
              Projděte si s námi všechny detaily a přednosti našeho nejoblíbenějšího modelu.
            </p>
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center shadow-lg">
                <div className="text-center cursor-pointer group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground transition-transform group-hover:scale-110"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                    <p className="mt-2 text-muted-foreground">Přehrát video</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">Z naší farmy na vaši</h2>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">Podívejte se na naše kurníky v jejich nových domovech, kde udržují hejna šťastná a v bezpečí po celé zemi.</p>
            <Carousel className="mt-12 w-full max-w-4xl mx-auto" opts={{ loop: true }}>
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-video relative">
                          <Image src={image.src} alt={image.alt} data-ai-hint={image.hint} fill className="object-cover" />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-16"/>
              <CarouselNext className="mr-16"/>
            </Carousel>
          </div>
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
