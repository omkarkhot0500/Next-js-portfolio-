// utils/favicon.tsx

type FaviconProps = {
  domain?: string;
  alt?: string;
};

export default function Favicon({ domain, alt }: FaviconProps) {
  if (domain) {
    return (
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}`}
        alt={alt || "favicon"}
        width={16}
        height={16}
        style={{ display: "inline-block", verticalAlign: "middle", marginRight: 4 }}
      />
    );
  }
  return (
    <span className="mr-2 text-white bg-black px-2 py-1 rounded text-xs font-bold tracking-wide">
      OK
    </span>
  );
}
