export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#121a34] via-[#0d1020] to-[#060606]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-32 pb-20 text-center">

        <div className="mb-8 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur">
          🚀 Building Trust Infrastructure for AI
        </div>

        <h1 className="max-w-5xl text-6xl font-extrabold leading-[0.95] tracking-[-0.05em] text-white md:text-8xl">
          Trust Every
          <br />
          AI Action.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400 md:text-2xl">
          Verify identities, govern AI agents, and generate
          cryptographic proof for every important digital action.
        </p>

        <div className="mt-12 flex flex-col gap-5 sm:flex-row">
          <button className="rounded-2xl bg-white px-10 py-5 text-lg font-semibold text-black transition hover:scale-105">
            Get Started
          </button>

          <button className="rounded-2xl border border-white/15 px-10 py-5 text-lg text-white transition hover:bg-white/5">
            View Documentation
          </button>
        </div>

      </div>
    </section>
  );
}
