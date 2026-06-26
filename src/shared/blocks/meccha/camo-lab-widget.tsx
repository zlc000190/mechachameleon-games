'use client';

import { useMemo, useState } from 'react';

function clampHex(value: string) {
  const clean = value.replace(/[^0-9a-fA-F]/g, '').slice(0, 6);
  return `#${clean.padEnd(6, '0')}`;
}

function hexToRgb(hex: string) {
  const normalized = clampHex(hex).slice(1);
  return {
    r: parseInt(normalized.slice(0, 2), 16),
    g: parseInt(normalized.slice(2, 4), 16),
    b: parseInt(normalized.slice(4, 6), 16),
  };
}

function rgbToHex({ r, g, b }: { r: number; g: number; b: number }) {
  return `#${[r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('')}`;
}

function mix(rgb: { r: number; g: number; b: number }, amount: number) {
  return rgbToHex({
    r: rgb.r + (amount > 0 ? 255 - rgb.r : rgb.r) * amount,
    g: rgb.g + (amount > 0 ? 255 - rgb.g : rgb.g) * amount,
    b: rgb.b + (amount > 0 ? 255 - rgb.b : rgb.b) * amount,
  });
}

export function CamoLabWidget() {
  const [target, setTarget] = useState('#8d6f4f');
  const [paint, setPaint] = useState('#9a7658');

  const result = useMemo(() => {
    const a = hexToRgb(target);
    const b = hexToRgb(paint);
    const distance = Math.sqrt((a.r - b.r) ** 2 + (a.g - b.g) ** 2 + (a.b - b.b) ** 2);
    const score = Math.max(0, Math.round(100 - (distance / 441.67) * 100));
    return {
      distance: Math.round(distance),
      score,
      lighter: mix(b, 0.16),
      darker: mix(b, -0.16),
      targetRgb: `${a.r}, ${a.g}, ${a.b}`,
      paintRgb: `${b.r}, ${b.g}, ${b.b}`,
    };
  }, [target, paint]);

  return (
    <div id="camo-checker" className="rounded-lg border border-[#D8CFC6] bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-2xl font-bold">Browser-only color checker</h2>
        <p className="mt-2 text-sm leading-6 text-[#4C3B35]">
          Compare a target surface color with your planned paint color. This does not read or modify Meccha Chameleon; it is a legal second-screen practice aid.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="rounded-md border border-[#D8CFC6] bg-[#F6F0EA] p-4">
          <span className="text-sm font-semibold">Target surface</span>
          <div className="mt-3 flex items-center gap-3">
            <input type="color" value={clampHex(target)} onChange={(e) => setTarget(e.target.value)} className="h-12 w-16 rounded border border-[#D8CFC6] bg-white" />
            <input value={target} onChange={(e) => setTarget(e.target.value)} className="min-h-11 flex-1 rounded-md border border-[#D8CFC6] bg-white px-3 text-sm font-semibold text-[#29211D]" />
          </div>
          <div className="mt-2 text-xs text-[#7D6D69]">RGB {result.targetRgb}</div>
        </label>
        <label className="rounded-md border border-[#D8CFC6] bg-[#F6F0EA] p-4">
          <span className="text-sm font-semibold">Your paint</span>
          <div className="mt-3 flex items-center gap-3">
            <input type="color" value={clampHex(paint)} onChange={(e) => setPaint(e.target.value)} className="h-12 w-16 rounded border border-[#D8CFC6] bg-white" />
            <input value={paint} onChange={(e) => setPaint(e.target.value)} className="min-h-11 flex-1 rounded-md border border-[#D8CFC6] bg-white px-3 text-sm font-semibold text-[#29211D]" />
          </div>
          <div className="mt-2 text-xs text-[#7D6D69]">RGB {result.paintRgb}</div>
        </label>
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-md bg-[#29211D] p-5 text-white">
          <div className="text-sm text-white/70">Camouflage score</div>
          <div className="mt-2 text-5xl font-bold">{result.score}</div>
          <div className="mt-2 text-sm text-white/75">RGB distance: {result.distance}</div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ['Current paint', clampHex(paint)],
            ['Shadow variant', result.darker],
            ['Highlight variant', result.lighter],
          ].map(([label, color]) => (
            <div key={label} className="overflow-hidden rounded-md border border-[#D8CFC6] bg-[#F6F0EA]">
              <div className="h-20" style={{ backgroundColor: color }} />
              <div className="p-3 text-sm">
                <div className="font-semibold">{label}</div>
                <div className="mt-1 text-[#4C3B35]">{color}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 text-xs leading-5 text-[#4C3B35]">
        Tip: a high color score still loses if your silhouette sticks out. Match pose and lighting, then use the .art map atlas for real spot references.
      </p>
    </div>
  );
}
