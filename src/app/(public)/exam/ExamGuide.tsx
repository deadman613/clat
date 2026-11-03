type ExamGuideProps = {
  name: string;
  fullName: string;
  summary: string;
  overview: string;
  preparationAreas: string[];
};

export default function ExamGuide({
  name,
  fullName,
  summary,
  overview,
  preparationAreas,
}: ExamGuideProps) {
  return (
    <div className="min-h-screen">
      <section className="gradient-hero py-14">
        <div className="container-custom text-center">
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-white/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Exam Guide
          </span>
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-3">
            {name}
          </h1>
          <p className="text-blue-200/70 max-w-2xl mx-auto">{summary}</p>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 space-y-5">
            <div className="p-6 rounded-xl border border-slate-200 bg-white">
              <h2 className="font-playfair text-2xl font-bold text-slate-900 mb-4">
                About {fullName}
              </h2>
              <p className="text-slate-600 leading-relaxed">{overview}</p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white">
              <h2 className="font-playfair text-2xl font-bold text-slate-900 mb-4">
                Preparation areas
              </h2>
              <ul className="space-y-3">
                {preparationAreas.map((area) => (
                  <li key={area} className="flex gap-3 text-slate-600">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <aside className="h-fit p-6 rounded-xl bg-blue-50 border border-blue-100">
            <h2 className="font-semibold text-blue-900 mb-3">Check before you apply</h2>
            <p className="text-blue-800 text-sm leading-relaxed">
              Exam format, eligibility, participating institutions, and admission
              timelines can change. Check the latest official notification for
              the exam and the institutions you plan to apply to.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
