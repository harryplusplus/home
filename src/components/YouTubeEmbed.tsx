export default function YouTubeEmbed({
  videoId,
}: {
  videoId: string;
  title: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          border: "none",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></iframe>
    </div>
  );
}
