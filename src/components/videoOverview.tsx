export default function VideoOverview() {
  return (
    <div className="" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.youtube.com/embed/7azDE6nY-yU"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
