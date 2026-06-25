export default function SpecTable({ type = 'submersible' }) {
  const submersibleRows = [
    ['Radhe Sub-3/5', '50 / 65 mm', '220V / 415V', '100 mm (4")', 'Available as per model', 'SS / CI'],
    ['Radhe Sub-7.5/10', '65 / 80 mm', '415V', '150 mm (6")', 'Available as per model', 'SS / CI'],
    ['Radhe Sub-12.5/15', '80 / 100 mm', '415V', '150 mm (6")', 'Available as per model', 'SS / CI'],
  ];

  const monosetRows = [
    ['Radhe Mono-0.5/1', '25 mm', '220V', 'Surface', '2880 RPM', 'Available as per model', 'CI / Alloy'],
    ['Radhe Mono-2/3', '50 / 65 mm', '220V / 415V', 'Surface', '2880 RPM', 'Available as per model', 'CI / Alloy'],
    ['Radhe Mono-5', '80 mm', '415V', 'Surface', '2880 RPM', 'Available as per model', 'CI / Alloy'],
  ];

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-card">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-navy text-white">
              <th className="px-5 py-4 text-left font-semibold font-heading text-xs uppercase tracking-wider">Model Group</th>
              <th className="px-5 py-4 text-left font-semibold font-heading text-xs uppercase tracking-wider">Outlet Size</th>
              <th className="px-5 py-4 text-left font-semibold font-heading text-xs uppercase tracking-wider">Voltage</th>
              {type === 'submersible' ? (
                <th className="px-5 py-4 text-left font-semibold font-heading text-xs uppercase tracking-wider">Min. Bore Size</th>
              ) : (
                <th className="px-5 py-4 text-left font-semibold font-heading text-xs uppercase tracking-wider">Installation</th>
              )}
              {type === 'monoset' && (
                <th className="px-5 py-4 text-left font-semibold font-heading text-xs uppercase tracking-wider">Speed</th>
              )}
              <th className="px-5 py-4 text-left font-semibold font-heading text-xs uppercase tracking-wider">Head / Discharge</th>
              <th className="px-5 py-4 text-left font-semibold font-heading text-xs uppercase tracking-wider">Material</th>
            </tr>
          </thead>
          <tbody>
            {(type === 'submersible' ? submersibleRows : monosetRows).map((row, i) => (
              <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-mist/60'}`}>
                {row.map((cell, j) => (
                  <td key={j} className={`px-5 py-4 ${j === 0 ? 'font-semibold text-graphite' : 'text-steel'}`}>
                    {cell === 'Available as per model' ? (
                      <span className="italic text-aqua/80">{cell}</span>
                    ) : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-orange/5 border-t border-orange/20 px-5 py-3 text-xs text-orange font-medium">
        âš  Exact values available from official manufacturer datasheet. Contact us for model-wise specifications.
      </div>
    </div>
  );
}
