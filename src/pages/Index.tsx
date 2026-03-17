import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Clock, Users, Dumbbell, Check, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

/* ─── Hero ─── */
const Hero = () => (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-charcoal-deep px-4">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(72_100%_50%/0.06)_0%,_transparent_70%)]" />
    <div className="relative z-10 max-w-5xl text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary"
      >
        Apex Iron Gym
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-glow-lime text-5xl font-black uppercase leading-[1.05] tracking-tight text-foreground sm:text-7xl lg:text-8xl"
      >
        Transform
        <br />
        Your Limits
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
      >
        Unleash your potential in a state-of-the-art facility built for those who refuse to settle.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-10"
      >
        <Button
          size="lg"
          className="animate-pulse-glow rounded-full bg-primary px-10 py-6 text-lg font-extrabold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
          onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
        >
          Book Free Trial
        </Button>
      </motion.div>
    </div>
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <ChevronDown className="h-6 w-6 animate-bounce text-muted-foreground" />
    </div>
  </section>
);

/* ─── Stats ─── */
const stats = [
  { icon: Clock, label: "24/7 Access" },
  { icon: Users, label: "Pro Trainers" },
  { icon: Dumbbell, label: "Modern Equipment" },
];

const StatsBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-y border-border bg-charcoal py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 sm:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex flex-col items-center gap-3"
          >
            <s.icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
            <span className="text-lg font-bold uppercase tracking-widest text-foreground">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* ─── Membership Cards ─── */
const plans = [
  { name: "Basic", price: 29, features: ["Gym floor access", "Locker room", "Free WiFi"] },
  { name: "Pro", price: 59, popular: true, features: ["Everything in Basic", "Group classes", "1 PT session/mo", "Sauna access"] },
  { name: "Elite", price: 99, features: ["Everything in Pro", "Unlimited PT", "Nutrition plan", "Priority booking", "Guest passes"] },
];

const MembershipCards = () => (
  <section className="bg-charcoal-deep py-24 px-4">
    <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-primary">Membership</h2>
    <p className="mb-14 text-center text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl">
      Choose Your Plan
    </p>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
      {plans.map((p) => (
        <div
          key={p.name}
          className={`group relative rounded-2xl border bg-card p-8 transition-all duration-300 hover:scale-[1.03] hover:border-primary hover:box-glow-lime ${
            p.popular ? "border-primary box-glow-lime" : "border-border"
          }`}
        >
          {p.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase text-primary-foreground">
              Most Popular
            </span>
          )}
          <h3 className="text-xl font-extrabold uppercase text-foreground">{p.name}</h3>
          <p className="mt-2">
            <span className="text-4xl font-black text-primary">${p.price}</span>
            <span className="text-sm text-muted-foreground">/mo</span>
          </p>
          <ul className="mt-6 space-y-3">
            {p.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 shrink-0 text-primary" /> {f}
              </li>
            ))}
          </ul>
          <Button
            className="mt-8 w-full rounded-full bg-secondary font-bold uppercase text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
          >
            Get Started
          </Button>
        </div>
      ))}
    </div>
  </section>
);

/* ─── Trainers ─── */
const trainers = [
  { name: "Marcus Cole", specialty: "Powerlifting" },
  { name: "Priya Sharma", specialty: "Yoga" },
  { name: "Jake Torres", specialty: "HIIT" },
];

const TrainerSection = () => (
  <section className="bg-charcoal py-24 px-4">
    <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-primary">Our Trainers</h2>
    <p className="mb-14 text-center text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl">
      Meet The Team
    </p>
    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
      {trainers.map((t) => (
        <div key={t.name} className="flex flex-col items-center text-center">
          <div className="mb-5 flex h-32 w-32 items-center justify-center rounded-full border-2 border-border bg-secondary text-4xl font-black uppercase text-muted-foreground">
            {t.name[0]}
          </div>
          <h3 className="text-lg font-bold text-foreground">{t.name}</h3>
          <span className="mt-1 inline-block rounded-full border border-primary/40 bg-primary/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
            {t.specialty}
          </span>
        </div>
      ))}
    </div>
  </section>
);

/* ─── Lead Capture ─── */
const LeadForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !goal) return;
    toast({ title: "You're in! 🎉", description: "We'll reach out shortly to book your free trial." });
    setName("");
    setPhone("");
    setGoal("");
  };

  return (
    <section id="lead-form" className="bg-charcoal-deep py-24 px-4">
      <div className="mx-auto max-w-lg">
        <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-primary">Get Started</h2>
        <p className="mb-10 text-center text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl">
          Claim Your Free Trial
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 rounded-lg border-border bg-secondary text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
          />
          <Input
            placeholder="Phone Number"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-12 rounded-lg border-border bg-secondary text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
          />
          <Select value={goal} onValueChange={setGoal}>
            <SelectTrigger className="h-12 rounded-lg border-border bg-secondary text-foreground focus:ring-primary">
              <SelectValue placeholder="Your Fitness Goal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weight-loss">Weight Loss</SelectItem>
              <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
              <SelectItem value="general-fitness">General Fitness</SelectItem>
              <SelectItem value="flexibility">Flexibility</SelectItem>
            </SelectContent>
          </Select>
          <Button
            type="submit"
            size="lg"
            className="w-full rounded-full bg-primary py-6 text-lg font-extrabold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Get Started
          </Button>
        </form>
      </div>
    </section>
  );
};

/* ─── WhatsApp FAB ─── */
const WhatsAppFab = () => (
  <a
    href="https://wa.me/1234567890"
    target="_blank"
    rel="noopener noreferrer"
    className="group fixed bottom-6 right-6 z-50 flex items-center gap-2"
  >
    <span className="hidden rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-lg group-hover:inline-block">
      Chat with us
    </span>
    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142_70%_45%)] shadow-lg transition-transform hover:scale-110">
      <MessageCircle className="h-7 w-7 text-white" fill="white" strokeWidth={0} />
    </span>
  </a>
);

/* ─── Footer ─── */
const Footer = () => (
  <footer className="border-t border-border bg-charcoal-deep py-8 text-center text-sm text-muted-foreground">
  © {new Date().getFullYear()} Apex Iron Gym. All rights reserved.
    <p className="mt-1 text-xs text-muted-foreground/60">Built by L'Elite Digital</p>
  </footer>
);

/* ─── Page ─── */
const Index = () => (
  <main className="overflow-x-hidden">
    <Hero />
    <StatsBar />
    <MembershipCards />
    <TrainerSection />
    <LeadForm />
    <Footer />
    <WhatsAppFab />
  </main>
);

export default Index;
