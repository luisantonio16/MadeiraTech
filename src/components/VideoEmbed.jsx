import "../css/VideoEmbed.css";

function VideoEmbed({ url, title, horizontal = false }) {
  return (
    <div id="video-embed">
      {horizontal ? (
        <div className="horizontal">
          <iframe
            width="100%"
            height="100%"
            src={url}
            title={title || ""}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="vertical">
          <iframe
            width="100%"
            height="100%"
            src={url}
            title={title || ""}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default VideoEmbed;
