const NewsItem = ({ news }) => {
  const { title, description, url, urlToImage } = news;
  return (
    <ul>
      <li>
        <a href={url} target="_blank" style={{ width: 400, display: "block" }}>
          <img src={urlToImage} alt={title} style={{ width: 200 }} />
          <h3>{title}</h3>
          <p>{description}</p>
        </a>
      </li>
    </ul>
  );
};

export default NewsItem;
