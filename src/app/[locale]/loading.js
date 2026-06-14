export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#F4EDE3]">
      <div className="relative flex flex-col items-center">
        <div className="absolute h-40 w-40 rounded-full bg-[#C9A86A]/25 blur-3xl" />

        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#C9A86A]/30 bg-white/40 backdrop-blur-xl">
          <div className="h-12 w-12 animate-spin rounded-full border-2 border-[#C9A86A]/30 border-t-[#8B5E1E]" />
        </div>

        <h1 className="heading-font mt-8 text-3xl text-[#17130F]">
          Selçuk Koyuncu
        </h1>

        <p className="mt-2 text-sm tracking-[0.3em] text-[#8B5E1E]">LOADING</p>
      </div>
    </div>
  );
}
