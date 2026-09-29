export default function MapEmbed({ className = '' }: { className?: string }) {
  const src =
    'https://www.google.com/maps?q=Strada+Lenin+192%2F8,+MD-3800,+Comrat,+Moldova&z=17&output=embed';

  return (
    <div className={`overflow-hidden rounded-2xl border border-slate-200 shadow-sm ${className}`}>
      <iframe
        title="A&V Poligraf — Comrat"
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 280 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="w-full h-full min-h-[280px]"
      />
    </div>
  );
}
