export function DebugOverlay() {
  return (
    <div className="fixed z-[99] top-5 left-5 media-debug py-2 px-3 rounded-xl grid place-items-center font-semibold">
      <h1 className="block xs:hidden">-</h1>
      <h1 className="hidden xs:block sm:hidden">xs</h1>
      <h1 className="hidden sm:block md:hidden">sm</h1>
      <h1 className="hidden md:block md-lg:hidden">md</h1>
      <h1 className="hidden md-lg:block lg:hidden">md-lg</h1>
      <h1 className="hidden lg:block lg-xl:hidden">lg</h1>
      <h1 className="hidden lg-xl:block xl:hidden">lg-xl</h1>
      <h1 className="hidden xl:block 2xl:hidden">xl</h1>
      <h1 className="hidden 2xl:block 3xl:hidden">2xl</h1>
      <h1 className="hidden 3xl:block">3xl</h1>
    </div>
  );
}
