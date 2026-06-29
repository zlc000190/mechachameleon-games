import Image from 'next/image';
import { ArrowLeft, Download, ExternalLink, ShieldAlert, Sparkles } from 'lucide-react';

import { guideText, type GuidePage } from './problem-guides';

function localHref(locale: string, href: string) {
  if (href.startsWith('http') || href.startsWith('#')) return href;
  if (locale === 'en') return href;
  return `/${locale}${href}`;
}

export function ProblemGuidePage({ guide, locale }: { guide: GuidePage; locale: string }) {
  const zh = locale === 'zh';
  const Icon = guide.icon;
  const copy = guideText(guide, locale);
  const isToolsPage = guide.slug === 'tools';
  const paidDownloadHref = localHref(locale, '/tools?download=play-kit-7#download-tools');

  return (
    <main className="min-h-screen bg-[#fff7f1] text-[#29211D]">
      <section className="border-b border-[#D8CFC6] bg-gradient-to-br from-[#fff7c8] via-[#ffd2e1] to-[#cdefff]">
        <div className="container pb-12 pt-28 lg:pb-16 lg:pt-36">
          <a
            href={localHref(locale, '/')}
            className="mb-6 inline-flex min-h-10 items-center gap-2 rounded-md border border-[#29211D]/20 bg-white/75 px-3 py-2 text-sm font-semibold text-[#29211D] hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {locale === 'vi' ? 'Quay lại trang chơi' : zh ? '返回游戏入口' : 'Back to play hub'}
          </a>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-[#29211D]/20 bg-white/75 px-3 py-1 text-sm font-semibold text-[#29211D]">
                {copy.eyebrow}
              </p>
              <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-normal md:text-6xl">
                {copy.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-[#4C3B35] md:text-lg">
                {copy.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={localHref(locale, copy.primaryCta.href)}
                  className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#ff6f9a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e95a88]"
                >
                  <Icon className="h-4 w-4" />
                  {copy.primaryCta.label}
                </a>
                {copy.secondaryCta ? (
                  <a
                    href={localHref(locale, copy.secondaryCta.href)}
                    className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[#29211D]/20 bg-white px-5 py-3 text-sm font-semibold text-[#29211D] transition hover:bg-[#fff7c8]"
                  >
                    {copy.secondaryCta.label}
                  </a>
                ) : null}
              </div>
            </div>
            <div className="rounded-lg border border-white/70 bg-white/75 p-5 shadow-[0_18px_60px_rgba(134,103,124,0.18)]">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#29211D] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{locale === 'vi' ? 'Trả lời nhanh' : zh ? '快速解答' : 'Quick answers'}</div>
                  <div className="text-xs text-[#7D6D69]">{locale === 'vi' ? 'Xử lý trường hợp phổ biến trước' : zh ? '先解决最常见的问题' : 'Solve the common case first'}</div>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {copy.quickAnswers.map(([q, a]) => (
                  <div key={q} className="rounded-md border border-[#D8CFC6] bg-[#F6F0EA] p-4">
                    <h2 className="text-sm font-semibold">{q}</h2>
                    <p className="mt-2 text-sm leading-6 text-[#4C3B35]">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {isToolsPage ? (
        <section id="download-tools" className="border-b border-[#D8CFC6] bg-[#07131f] text-white">
          <div className="container grid gap-8 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-lg border border-[#39ff88]/40 bg-[#081b18] shadow-[0_24px_80px_rgba(57,255,136,0.18)]">
              <Image
                src="/imgs/meccha/play-kit-promo.png"
                alt="Meccha Chameleon Play Kit paid download preview"
                width={1672}
                height={941}
                priority
                className="h-auto w-full"
              />
            </div>
            <div>
              <p className="inline-flex rounded-full border border-[#39ff88]/40 bg-[#39ff88]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#39ff88]">
                {locale === 'vi' ? 'Một lần mua' : zh ? '一次性付费' : 'One-time purchase'}
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-normal md:text-4xl">
                {locale === 'vi'
                  ? 'Test nhu cầu tải Play Kit với giá thấp.'
                  : zh
                    ? '先用低价测试：用户愿不愿意为工具包点下载。'
                    : 'Test paid intent with a low-price Play Kit.'}
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/75">
                {locale === 'vi'
                  ? 'Không đưa người chơi sang link miễn phí nữa. CTA này tập trung vào bản tải $7 để xem người dùng có thật sự muốn trả tiền trước khi nối Stripe.'
                  : zh
                    ? '不再把用户送去外部仓库或备用包。这个按钮专门测试 $7 下载意向；如果点击和回访有量，再接 Stripe 付款和真实下载。'
                    : 'No external repo detour or backup archive. This CTA measures whether players will click a $7 download before Stripe checkout and the real file delivery are connected.'}
              </p>
              <div className="mt-6 rounded-lg border border-[#39ff88]/30 bg-white/8 p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-sm text-white/60">
                      {locale === 'vi' ? 'Giá thử nghiệm' : zh ? '测试价' : 'Test price'}
                    </div>
                    <div className="mt-1 text-5xl font-bold">$7</div>
                  </div>
                  <Sparkles className="h-8 w-8 text-[#39ff88]" />
                </div>
                <a
                  href={paidDownloadHref}
                  className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#39ff88] px-5 py-3 text-sm font-bold text-[#07131f] transition hover:bg-[#72ffad]"
                  data-analytics="download-tools-intent"
                  data-product="meccha-play-kit"
                  data-price="7"
                >
                  <Download className="h-4 w-4" />
                  {locale === 'vi' ? 'Download Tools - $7' : zh ? '付费 Download Tools - $7' : 'Download Tools - $7'}
                </a>
                <p className="mt-3 text-xs leading-5 text-white/55">
                  {locale === 'vi'
                    ? 'Khi có đủ click, bước tiếp theo là nối Stripe checkout và giao file tải thật.'
                    : zh
                      ? '有足够点击后，下一步接 Stripe checkout，再交付真实下载包。'
                      : 'Once clicks prove intent, the next step is Stripe checkout plus real file delivery.'}
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section id="quick-checks" className="border-b border-[#D8CFC6] bg-white">
        <div className="container py-14">
          <div className="grid gap-5 lg:grid-cols-3">
            {copy.sections.map((section, index) => (
              <article key={section.title} className="rounded-lg border border-[#D8CFC6] bg-[#F6F0EA] p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#ff8fb3] text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h2 className="text-2xl font-bold tracking-normal">{section.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#4C3B35]">{section.body}</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[#29211D]">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff6f9a]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {copy.warnings?.length ? (
        <section className="border-b border-[#D8CFC6] bg-amber-50">
          <div className="container py-10">
            <div className="rounded-lg border border-amber-300 bg-white p-5 text-amber-950">
              <div className="mb-3 flex items-center gap-2 font-semibold">
                <ShieldAlert className="h-5 w-5" />
                {locale === 'vi' ? 'Lưu ý an toàn' : zh ? '安全提醒' : 'Safety notes'}
              </div>
              <ul className="space-y-2 text-sm leading-6">
                {copy.warnings.map((warning) => (
                  <li key={warning}>• {warning}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[#F6F0EA]">
        <div className="container py-12">
          <h2 className="text-2xl font-bold">{locale === 'vi' ? 'Bước tiếp theo' : zh ? '下一步' : 'Next steps'}</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {copy.related.map((link) => (
              <a
                key={link.href}
                href={localHref(locale, link.href)}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[#D8CFC6] bg-white px-5 py-3 text-sm font-semibold text-[#29211D] hover:bg-[#fff7c8]"
              >
                {link.label}
                {link.href.startsWith('http') ? <ExternalLink className="h-4 w-4" /> : null}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
