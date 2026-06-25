export default function HPRangeBar() {
  return (
    <section className="bg-brand-gradient py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-pump-blue bg-pump-blue/10 px-4 py-1.5 rounded-full mb-3">HP Range Guide</span>
          <h2 className="text-3xl font-bold font-heading text-graphite">Find Your Horsepower Range</h2>
          <p className="text-steel mt-2">Complete coverage from 0.5 HP domestic needs to 15 HP heavy agricultural lifting</p>
        </div>

        <div className="bg-mist rounded-2xl p-8 border border-gray-100">
          {/* Monoset Range */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-graphite">Monoset Pump</span>
              <span className="text-xs text-steel">0.5 HP – 5 HP</span>
            </div>
            <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-aqua to-pump-blue rounded-full flex items-center justify-end pr-3 transition-all duration-1000"
                style={{ width: '33%' }}
              >
                <span className="text-white text-[10px] font-bold">0.5–5 HP</span>
              </div>
            </div>
            <div className="flex text-[10px] text-steel mt-1 justify-between">
              <span>Domestic</span><span>Garden</span><span>Small Farm</span><span>Light Commercial</span>
            </div>
          </div>

          {/* Submersible Range */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-graphite">Submersible Pump</span>
              <span className="text-xs text-steel">3 HP – 15 HP</span>
            </div>
            <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-pump-blue to-navy rounded-full flex items-center justify-end pr-3 transition-all duration-1000"
                style={{ width: '100%' }}
              >
                <span className="text-white text-[10px] font-bold">3–15 HP</span>
              </div>
            </div>
            <div className="flex text-[10px] text-steel mt-1 justify-between">
              <span>Small Borewell</span><span>Farm Irrigation</span><span>Community Supply</span><span>Industrial</span>
            </div>
          </div>

          {/* Axis */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-steel font-semibold uppercase tracking-wider">HP Scale:</span>
              <div className="flex-1 flex text-[10px] text-steel justify-between">
                {['0.5', '1', '2', '3', '5', '7.5', '10', '12.5', '15'].map(hp => (
                  <span key={hp}>{hp}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
