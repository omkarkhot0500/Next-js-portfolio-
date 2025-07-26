type faviconType = {
  domain?: string; // optional if you're not using it
};

export default function Favicon({ domain }: faviconType) {
  return (
    <span className="mr-2 text-white bg-black px-2 py-1 rounded text-xs font-bold tracking-wide">
      OK
    </span>
  );
}
