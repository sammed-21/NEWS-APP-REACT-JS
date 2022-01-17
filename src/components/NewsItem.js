import React from "react";
// import PropTypes from 'prop-types'

const NewsItem =(props)=> {
   
    let { title, description, imgUrl, newUrl, author, date, source } =
      props;
    return (
      <>
        <div className="my-4">
          <div className="card" style={{ width: " 18rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0",
              }}
            >
              <span className="badge rounded-pill bg-success">{source} </span>
            </div>
            <img
              src={
                !imgUrl
                  ? "https://i.ytimg.com/vi/Bf84tiOybQs/hqdefault.jpg"
                  : imgUrl
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="card-muted">
                  By {author ? "Unknown" : author} on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>
              <a
                href={newUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-dark"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
   
}

export default NewsItem;
