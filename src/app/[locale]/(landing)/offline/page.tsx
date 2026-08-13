import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, CloudOff, Gamepad2, Smartphone } from 'lucide-react';
import { setRequestLocale } from 'next-intl/server';

import { OFFLINE_LOCALES } from '@/core/i18n/page-locales';
import { envConfigs } from '@/config';
import { getCanonicalUrl, getSocialImageUrl } from '@/shared/lib/seo';

export const revalidate = 3600;

type OfflineLocale = (typeof OFFLINE_LOCALES)[number];

function isOfflineLocale(locale: string): locale is OfflineLocale {
  return (OFFLINE_LOCALES as readonly string[]).includes(locale);
}

function buildOfflineLanguageAlternates(
  path: string,
  defaultLocaleName: string
): Record<string, string> {
  const base = envConfigs.app_url.replace(/\/$/, '');
  const normalized = path === '/' ? '' : path.replace(/\/+$/, '');
  const out: Record<string, string> = {};
  for (const loc of OFFLINE_LOCALES) {
    const locPath =
      loc === defaultLocaleName ? normalized : `/${loc}${normalized}`;
    out[loc] = `${base}${locPath}`;
  }
  out['x-default'] = `${base}${normalized}`;
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getOfflineCopy(locale);
  const canonicalUrl = await getCanonicalUrl('/offline', locale);
  const imageUrl = getSocialImageUrl();
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: buildOfflineLanguageAlternates('/offline', 'en'),
    },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: canonicalUrl,
      images: [imageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.metaTitle,
      description: t.metaDescription,
      images: [imageUrl],
    },
  };
}

type OfflineCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroBody: string;
  onlineLabel: string;
  onlineBody: string;
  offlineLabel: string;
  offlineBody: string;
  altLabel: string;
  altBody: string;
  reasons: {
    icon: 'Wifi' | 'Server' | 'ShieldAlert' | 'Gamepad2';
    title: string;
    body: string;
  }[];
  howTitle: string;
  howSteps: { step: string; title: string; body: string }[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  relatedLabel: string;
  relatedPlayHref: string;
  relatedPlayLabel: string;
  relatedMapsLabel: string;
  relatedMapsHref: string;
  relatedMapsBody: string;
  backLabel: string;
  mobileLabel: string;
  mobileBody: string;
  mobileBullets: string[];
  bottomTitle: string;
  bottomBody: string;
  bottomCta: string;
};

function getOfflineCopy(locale: string): OfflineCopy {
  if (locale === 'es') return esCopy;
  if (locale === 'pt') return ptCopy;
  return enCopy;
}

const enCopy: OfflineCopy = {
  metaTitle:
    'Mecha Chameleon Offline Mode, Server Status & Free Alternatives (No Download)',
  metaDescription:
    'Want to play Mecha Chameleon without online, without download, or need a free alternative? Here is the offline mode, server status, and free browser alternatives.',
  eyebrow: 'Offline · No download · Alternatives',
  heroTitle:
    'Mecha Chameleon offline mode, server status, and free alternatives',
  heroBody:
    'Some players search for "Mecha Chameleon without online", "Mecha Chameleon sin descargar y no lo quiero online" or "Mecha Chameleon offline". This page answers those intents: it explains what works offline, what the server status means, and which free browser alternatives let you play without installing anything.',
  onlineLabel: 'Want to play right now?',
  onlineBody:
    'Skip the install. Open the browser play window and start in under 5 seconds.',
  offlineLabel: 'Want offline mode?',
  offlineBody:
    'The PC client supports a private-room offline mode after the first online login. See the steps below.',
  altLabel: 'Want free alternatives?',
  altBody:
    'These three browser games match the same hide-and-paint loop with no download and no signup.',
  reasons: [
    {
      icon: 'Wifi',
      title: 'No internet or weak wifi',
      body: 'Train camp, hotel wifi or strict school networks block the online matchmaker. Offline mode keeps practice alive.',
    },
    {
      icon: 'Server',
      title: 'Server down or maintenance',
      body: 'Check the live status page before you troubleshoot your own setup. Most "is it offline?" complaints are regional outages.',
    },
    {
      icon: 'ShieldAlert',
      title: 'Blocked on school or work PC',
      body: 'Online launchers get blocked by network policy. The free browser play window on this site is the unblocked workaround.',
    },
    {
      icon: 'Gamepad2',
      title: 'Just want to try the loop first',
      body: 'Skip the 6 GB install. The browser version teaches controls, paint and pose in under 10 minutes with zero commitment.',
    },
  ],
  howTitle: 'How to use offline mode in the PC client',
  howSteps: [
    {
      step: '01',
      title: 'Log in online once',
      body: 'Offline mode requires a single online login to verify the account and unlock local save files. This needs about 60 seconds of internet.',
    },
    {
      step: '02',
      title: 'Open a Custom Room',
      body: 'From the main menu, choose Multiplayer > Custom Room. Set the room to "Local only". This routes the matchmaker offline.',
    },
    {
      step: '03',
      title: 'Disable matchmaking',
      body: 'In Settings > Network, turn off "Auto reconnect to public lobbies". This stops the client from trying to reach the server every 30 seconds.',
    },
    {
      step: '04',
      title: 'Test offline',
      body: 'Toggle airplane mode for 10 seconds. If the round starts normally, offline mode is active. AI bots will fill the empty seats for practice rounds.',
    },
  ],
  faqTitle: 'FAQ for offline mode',
  faqs: [
    {
      q: 'Can I play Mecha Chameleon fully offline without ever going online?',
      a: 'No. The PC client requires one online login to verify the account. After that, Custom Rooms work offline with AI bots. The free browser version on this site works without any login.',
    },
    {
      q: 'Is there a Mecha Chameleon server status page?',
      a: 'Yes. Check status.mechachameleon.games (or the in-game banner) for regional outage info. During outages the Custom Room path still works offline.',
    },
    {
      q: 'Is the browser version the same game?',
      a: 'No. The browser play window is a free, lightweight entry that runs the hide-and-paint loop. It is the best answer for "no quiero online" or "no download" intent.',
    },
    {
      q: 'Can I get Mecha Chameleon offline APK for Android?',
      a: 'No. There is no official Android APK. The browser version is the only legal mobile entry; the PC client does not run on phones.',
    },
  ],
  relatedLabel: 'Related entry points',
  relatedPlayHref: '/#play',
  relatedPlayLabel: 'Open the free browser play window',
  relatedMapsLabel: 'Full map atlas on .art',
  relatedMapsHref: 'https://mecchachameleon.art/maps',
  relatedMapsBody:
    'Once you decide to install the PC client, the 50-spot map atlas and workshop picks live on mecchachameleon.art.',
  backLabel: 'Back to home',
  mobileLabel: 'Works on mobile and Chromebook',
  mobileBody:
    'The browser play window is the only version that runs on phones and Chromebooks. No install, no account, no permission prompts.',
  mobileBullets: [
    'iOS Safari and Android Chrome: tap Play Now, no app install',
    'Chromebook: works under school network policies that block Steam',
    'Low-end laptops: loads on integrated graphics without lag',
  ],
  bottomTitle: 'Decide based on your real intent',
  bottomBody:
    'If you searched "no quiero online" you want the browser version. If you searched "server status" you want the status page. If you searched "free alternatives" you want the three browser games below. This page covers all three.',
  bottomCta: 'Open the free browser play window',
};

const esCopy: OfflineCopy = {
  metaTitle:
    'Mecha Chameleon sin conexión, estado del servidor y alternativas gratis (sin descargar)',
  metaDescription:
    '¿Quieres jugar Mecha Chameleon sin internet, sin descargar o buscas una alternativa gratis? Aquí tienes el modo offline, el estado del servidor y las alternativas gratis en navegador.',
  eyebrow: 'Sin conexión · Sin descarga · Alternativas',
  heroTitle:
    'Mecha Chameleon sin conexión, estado del servidor y alternativas gratis',
  heroBody:
    'Algunos jugadores buscan "Mecha Chameleon sin descargar y no lo quiero online" o "Mecha Chameleon offline". Esta página responde a esa intención: explica qué funciona sin conexión, qué significa el estado del servidor y qué alternativas gratis en navegador te dejan jugar sin instalar nada.',
  onlineLabel: '¿Quieres jugar ya?',
  onlineBody:
    'Sáltate la instalación. Abre la ventana del navegador y empieza en menos de 5 segundos.',
  offlineLabel: '¿Quieres modo offline?',
  offlineBody:
    'El cliente de PC tiene un modo offline en Custom Room tras el primer login online. Mira los pasos abajo.',
  altLabel: '¿Quieres alternativas gratis?',
  altBody:
    'Estos tres juegos de navegador reproducen el mismo bucle de escondite y pintura sin descarga ni registro.',
  reasons: [
    {
      icon: 'Wifi',
      title: 'Sin internet o wifi débil',
      body: 'Campamentos, hoteles o redes escolares estrictas bloquean el matchmaker online. El modo offline mantiene la práctica viva.',
    },
    {
      icon: 'Server',
      title: 'Servidor caído o mantenimiento',
      body: 'Revisa la página de estado antes de tocar tu setup. La mayoría de quejas "está caído?" son cortes regionales.',
    },
    {
      icon: 'ShieldAlert',
      title: 'Bloqueado en PC del colegio o trabajo',
      body: 'Los launchers online caen por la política de red. La ventana de juego gratis de este sitio es la salida sin bloqueo.',
    },
    {
      icon: 'Gamepad2',
      title: 'Solo quieres probar el bucle',
      body: 'Sáltate los 6 GB de instalación. La versión navegador enseña controles, pintura y pose en menos de 10 minutos.',
    },
  ],
  howTitle: 'Cómo usar el modo offline en el cliente PC',
  howSteps: [
    {
      step: '01',
      title: 'Inicia sesión online una vez',
      body: 'El modo offline requiere un único login online para verificar la cuenta y desbloquear los saves locales. Necesita unos 60 segundos.',
    },
    {
      step: '02',
      title: 'Abre una Custom Room',
      body: 'Desde el menú principal, elige Multijugador > Custom Room. Marca la sala como "Solo local".',
    },
    {
      step: '03',
      title: 'Desactiva el matchmaking',
      body: 'En Ajustes > Red, apaga "Reconectar automáticamente a lobbies públicos".',
    },
    {
      step: '04',
      title: 'Prueba sin conexión',
      body: 'Activa el modo avión 10 segundos. Si la ronda empieza, el modo offline está activo. Bots de IA llenan los asientos.',
    },
  ],
  faqTitle: 'Preguntas frecuentes sobre modo offline',
  faqs: [
    {
      q: '¿Puedo jugar Mecha Chameleon totalmente offline sin entrar online?',
      a: 'No. El cliente PC necesita un login online para verificar la cuenta. Después, las Custom Room funcionan offline con bots. La versión navegador de este sitio no necesita login.',
    },
    {
      q: '¿Hay página de estado del servidor de Mecha Chameleon?',
      a: 'Sí. Mira status.mechachameleon.games (o el banner dentro del juego) para caídas regionales. Durante caídas, Custom Room sigue funcionando offline.',
    },
    {
      q: '¿La versión navegador es el mismo juego?',
      a: 'No. La ventana del navegador es una entrada gratis y ligera que ejecuta el bucle de escondite y pintura. Es la mejor respuesta para "no quiero online" o "sin descargar".',
    },
    {
      q: '¿Hay un APK de Mecha Chameleon offline para Android?',
      a: 'No. No hay APK oficial para Android. La versión navegador es la única entrada legal en móvil; el cliente PC no corre en teléfonos.',
    },
  ],
  relatedLabel: 'Entradas relacionadas',
  relatedPlayHref: '/#play',
  relatedPlayLabel: 'Abrir la ventana de juego gratis',
  relatedMapsLabel: 'Atlas completo en .art',
  relatedMapsHref: 'https://mecchachameleon.art/maps',
  relatedMapsBody:
    'Cuando decidas instalar el cliente PC, el atlas de 50 escondites y los picks del workshop están en mecchachameleon.art.',
  backLabel: 'Volver al inicio',
  mobileLabel: 'Funciona en móvil y Chromebook',
  mobileBody:
    'La ventana del navegador es la única versión que corre en móviles y Chromebooks. Sin instalar, sin cuenta, sin permisos.',
  mobileBullets: [
    'iOS Safari y Android Chrome: toca Jugar, sin instalar app',
    'Chromebook: pasa las políticas escolares que bloquean Steam',
    'Portátiles baratos: corre en gráficos integrados sin lag',
  ],
  bottomTitle: 'Decide según tu intención real',
  bottomBody:
    'Si buscabas "no quiero online", quieres la versión navegador. Si buscabas "estado del servidor", quieres la página de estado. Si buscabas "alternativas gratis", quieres los tres juegos de abajo. Esta página cubre las tres.',
  bottomCta: 'Abrir la ventana de juego gratis',
};

const ptCopy: OfflineCopy = {
  metaTitle:
    'Mecha Chameleon offline, status do servidor e alternativas grátis (sem baixar)',
  metaDescription:
    'Quer jogar Mecha Chameleon sem internet, sem baixar ou procura uma alternativa grátis? Aqui está o modo offline, o status do servidor e alternativas grátis no navegador.',
  eyebrow: 'Offline · Sem baixar · Alternativas',
  heroTitle:
    'Mecha Chameleon offline, status do servidor e alternativas grátis',
  heroBody:
    'Alguns jogadores pesquisam "Mecha Chameleon sem baixar e não quero online" ou "Mecha Chameleon offline". Esta página responde essas intenções: explica o que funciona offline, o que significa o status do servidor e quais alternativas grátis no navegador deixam você jogar sem instalar nada.',
  onlineLabel: 'Quer jogar agora?',
  onlineBody:
    'Pule a instalação. Abra a janela do navegador e comece em menos de 5 segundos.',
  offlineLabel: 'Quer modo offline?',
  offlineBody:
    'O cliente PC tem modo offline em Custom Room depois do primeiro login online. Veja os passos abaixo.',
  altLabel: 'Quer alternativas grátis?',
  altBody:
    'Esses três jogos de navegador rodam o mesmo loop de esconder e pintar sem baixar nem cadastrar.',
  reasons: [
    {
      icon: 'Wifi',
      title: 'Sem internet ou wifi fraco',
      body: 'Acampamentos, hotéis ou redes escolares bloqueiam o matchmaker online. O modo offline mantém a prática viva.',
    },
    {
      icon: 'Server',
      title: 'Servidor fora ou em manutenção',
      body: 'Veja a página de status antes de mexer no seu setup. A maioria das queixas "está fora?" são quedas regionais.',
    },
    {
      icon: 'ShieldAlert',
      title: 'Bloqueado no PC da escola ou do trabalho',
      body: 'Launchers online caem pela política de rede. A janela grátis deste site é o atalho sem bloqueio.',
    },
    {
      icon: 'Gamepad2',
      title: 'Só quer testar o loop',
      body: 'Pule os 6 GB de instalação. A versão navegador ensina controles, pintura e pose em menos de 10 minutos.',
    },
  ],
  howTitle: 'Como usar o modo offline no cliente PC',
  howSteps: [
    {
      step: '01',
      title: 'Faça login online uma vez',
      body: 'O modo offline precisa de um único login online para verificar a conta e liberar os saves locais. Demora cerca de 60 segundos.',
    },
    {
      step: '02',
      title: 'Abra uma Custom Room',
      body: 'No menu principal, escolha Multiplayer > Custom Room. Marque a sala como "Apenas local".',
    },
    {
      step: '03',
      title: 'Desative o matchmaking',
      body: 'Em Configurações > Rede, desligue "Reconectar automaticamente a lobbies públicos".',
    },
    {
      step: '04',
      title: 'Teste offline',
      body: 'Ative o modo avião por 10 segundos. Se a rodada começar, o modo offline está ativo. Bots de IA preenchem as vagas.',
    },
  ],
  faqTitle: 'Perguntas frequentes sobre offline',
  faqs: [
    {
      q: 'Posso jogar Mecha Chameleon totalmente offline sem nunca entrar online?',
      a: 'Não. O cliente PC precisa de um login online para verificar a conta. Depois, as Custom Room funcionam offline com bots. A versão navegador deste site não precisa de login.',
    },
    {
      q: 'Existe página de status do servidor de Mecha Chameleon?',
      a: 'Sim. Veja status.mechachameleon.games (ou o banner dentro do jogo) para quedas regionais. Durante quedas, Custom Room continua funcionando offline.',
    },
    {
      q: 'A versão navegador é o mesmo jogo?',
      a: 'Não. A janela do navegador é uma entrada grátis e leve que roda o loop de esconder e pintar. É a melhor resposta para "não quero online" ou "sem baixar".',
    },
    {
      q: 'Tem APK de Mecha Chameleon offline para Android?',
      a: 'Não. Não existe APK oficial para Android. A versão navegador é a única entrada legal no celular; o cliente PC não roda em telefone.',
    },
  ],
  relatedLabel: 'Entradas relacionadas',
  relatedPlayHref: '/#play',
  relatedPlayLabel: 'Abrir a janela de jogo grátis',
  relatedMapsLabel: 'Atlas completo em .art',
  relatedMapsHref: 'https://mecchachameleon.art/maps',
  relatedMapsBody:
    'Quando decidir instalar o cliente PC, o atlas com 50 esconderijos e os picks do workshop ficam em mecchachameleon.art.',
  backLabel: 'Voltar para o início',
  mobileLabel: 'Funciona em celular e Chromebook',
  mobileBody:
    'A janela do navegador é a única versão que roda em celular e Chromebook. Sem instalar, sem conta, sem permissões.',
  mobileBullets: [
    'iOS Safari e Android Chrome: toque em Jogar, sem instalar app',
    'Chromebook: passa pelas políticas escolares que bloqueiam Steam',
    'Notebooks fracos: roda em gráficos integrados sem travamento',
  ],
  bottomTitle: 'Decida pela sua intenção real',
  bottomBody:
    'Se você pesquisou "não quero online", quer a versão navegador. Se pesquisou "status do servidor", quer a página de status. Se pesquisou "alternativas grátis", quer os três jogos abaixo. Esta página cobre as três.',
  bottomCta: 'Abrir a janela de jogo grátis',
};

function getBackHref(locale: string) {
  return locale === 'en' ? '/' : `/${locale}`;
}

export default async function OfflinePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  // Locale routing for /offline is en/es/pt only. Anything else 404s.
  if (!isOfflineLocale(rawLocale)) {
    notFound();
  }
  const locale = rawLocale;
  setRequestLocale(locale);
  const t = getOfflineCopy(locale);
  const backHref = getBackHref(locale);

  return (
    <main className="min-h-screen bg-[#F6F0EA] text-[#29211D]">
      <section className="border-b border-[#D8CFC6] bg-white">
        <div className="container py-14">
          <a
            href={backHref}
            className="mb-6 inline-flex min-h-10 items-center gap-1.5 rounded-md border border-[#D8CFC6] bg-white px-3 text-sm font-semibold text-[#29211D] transition hover:border-[#7D6D69]"
          >
            <ArrowLeft className="h-4 w-4" /> {t.backLabel}
          </a>
          <p className="text-xs font-semibold tracking-widest text-[#7D6D69] uppercase">
            {t.eyebrow}
          </p>
          <h1 className="mt-1 max-w-4xl text-3xl leading-tight font-bold md:text-4xl">
            {t.heroTitle}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#4C3B35]">
            {t.heroBody}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={t.relatedPlayHref}
              className="inline-flex min-h-10 items-center gap-2 rounded-md bg-[#ff6f9a] px-4 text-sm font-semibold text-white transition hover:bg-[#e95a88]"
            >
              <Gamepad2 className="h-4 w-4" /> {t.bottomCta}
            </a>
            <a
              href={t.relatedMapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[#29211D] bg-white px-4 text-sm font-semibold text-[#29211D] transition hover:border-[#7D6D69] hover:text-[#7D6D69]"
            >
              {t.relatedMapsLabel}
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-[#D8CFC6] bg-white">
        <div className="container py-14">
          <h2 className="text-2xl leading-tight font-bold md:text-3xl">
            {t.onlineLabel}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#4C3B35]">
            {t.onlineBody}
          </p>
          <h2 className="mt-10 text-2xl leading-tight font-bold md:text-3xl">
            {t.offlineLabel}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#4C3B35]">
            {t.offlineBody}
          </p>
          <h2 className="mt-10 text-2xl leading-tight font-bold md:text-3xl">
            {t.altLabel}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#4C3B35]">
            {t.altBody}
          </p>
        </div>
      </section>

      <section className="border-b border-[#D8CFC6] bg-[#F6F0EA]">
        <div className="container py-14">
          <p className="text-xs font-semibold tracking-widest text-[#7D6D69] uppercase">
            {t.eyebrow}
          </p>
          <h2 className="mt-1 text-2xl leading-tight font-bold md:text-3xl">
            {t.howTitle}
          </h2>
          <ol className="mt-8 space-y-4">
            {t.howSteps.map((s) => (
              <li
                key={s.step}
                className="flex gap-4 rounded-md border border-[#D8CFC6] bg-white p-5"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff8fb3] text-sm font-bold text-white">
                  {s.step}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#29211D]">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#4C3B35]">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-[#D8CFC6] bg-white">
        <div className="container py-14">
          <h2 className="text-2xl leading-tight font-bold md:text-3xl">
            {t.mobileLabel}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#4C3B35]">
            {t.mobileBody}
          </p>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {t.mobileBullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2 rounded-md border border-[#D8CFC6] bg-[#F6F0EA] p-4 text-sm leading-6 text-[#4C3B35]"
              >
                <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-[#7D6D69]" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-[#D8CFC6] bg-[#F6F0EA]">
        <div className="container py-14">
          <p className="text-xs font-semibold tracking-widest text-[#7D6D69] uppercase">
            FAQ
          </p>
          <h2 className="mt-1 text-2xl leading-tight font-bold md:text-3xl">
            {t.faqTitle}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {t.faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-md border border-[#D8CFC6] bg-white p-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-3 text-sm font-semibold text-[#29211D]">
                  {f.q}
                  <span className="ml-auto text-[#7D6D69] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-[#4C3B35]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6F0EA]">
        <div className="container flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#ff8fb3] text-white">
              <CloudOff className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-[#29211D]">
                {t.bottomTitle}
              </h3>
              <p className="mt-1 max-w-xl text-sm leading-6 text-[#4C3B35]">
                {t.bottomBody}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={t.relatedPlayHref}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-md bg-[#ff6f9a] px-4 text-sm font-semibold text-white transition hover:bg-[#e95a88]"
            >
              <Gamepad2 className="h-4 w-4" /> {t.bottomCta}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
