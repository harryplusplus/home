type Props = {
  src: string;
  alt: string;
};

export default function Image({ src, alt }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ maxWidth: "100%", height: "auto", cursor: "pointer" }}
      onClick={() => window.open(src, "_blank")}
    />
  );
}
