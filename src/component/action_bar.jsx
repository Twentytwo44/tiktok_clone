import React, { useState } from "react";



export const Action_bar  = ({
  likeCount,
  commentCount,
  favoriteCount,
  shareCount,
}) => {
  const [likes, setLikes] = useState(likeCount);
  const [isLiked, setIsLiked] = useState(false);
  const [favorites, setFavorites] = useState(favoriteCount);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikes(likeCount - 1);
    } else {
      setLikes(likeCount + 0);
    }
    setIsLiked(!isLiked);
  };

  const handleFavoriteClick = () => {
    if (isFavorite) {
      setFavorites(favorites - 1);
    } else {
      setFavorites(favorites + 1);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="flex flex-col h-40 py-72 gap-2">
      <button onClick={handleLikeClick} className="py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
          fill={isLiked ? "#ff0000" : "none"}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
            stroke={isLiked ? "#ff0000" : "#ffffff"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h6 className="text-white border-none bg-none outline-none p-0 relative flex items-center cursor-pointer flex-col text-rgba font-TikTokFont font-sans text-xs leading-4 text-center">
          {likes}
        </h6>
      </button>
      <button className="py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
          enable-background="new 0 0 24 24"
        >
          <path d="M12,2C6.5,2,2,6.5,2,12c0,2.3,0.8,4.5,2.3,6.3l-2,2c-0.4,0.4-0.4,1,0,1.4C2.5,21.9,2.7,22,3,22h9c5.5,0,10-4.5,10-10S17.5,2,12,2z M8,13c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S8.6,13,8,13z M12,13c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,13,12,13z M16,13c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S16.6,13,16,13z" />
        </svg>
        <h6 className="text-white border-none bg-none outline-none p-0 relative flex items-center cursor-pointer flex-col text-rgba font-TikTokFont font-sans text-xs leading-4 text-center">
          {commentCount}
        </h6>
      </button>
      <button onClick={handleFavoriteClick} className="py-2">
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 64 64"
          fill={isFavorite ? "#ffffff" : "#FACE15"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.051 45.6071L17.851 54.7401C17.2728 55.1729 16.5856 55.4363 15.8662 55.5008C15.1468 55.5652 14.4237 55.4282 13.7778 55.1049C13.1319 54.7817 12.5887 54.2851 12.209 53.6707C11.8293 53.0563 11.6281 52.3483 11.628 51.626V15.306C11.628 13.2423 12.4477 11.2631 13.9069 9.8037C15.3661 8.34432 17.3452 7.52431 19.409 7.52405H45.35C47.4137 7.52431 49.3929 8.34432 50.8521 9.8037C52.3112 11.2631 53.131 13.2423 53.131 15.306V51.625C53.1309 52.3473 52.9297 53.0553 52.55 53.6697C52.1703 54.2841 51.6271 54.7807 50.9812 55.1039C50.3353 55.4272 49.6122 55.5642 48.8928 55.4998C48.1734 55.4353 47.4862 55.1719 46.908 54.739L34.715 45.6071C34.0419 45.1031 33.2238 44.8308 32.383 44.8308C31.5422 44.8308 30.724 45.1031 30.051 45.6071V45.6071Z"
            stroke={isFavorite ? "#ffffff" : "#FACE15"}
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h6 className="text-white border-none bg-none outline-none p-0 relative flex items-center cursor-pointer flex-col text-rgba font-TikTokFont font-sans text-xs leading-4 text-center">
          {favorites}
        </h6>
      </button>
      <button className="py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          width="32px"
          fill="#ffffff"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="M512,230.431L283.498,44.621v94.807C60.776,141.244-21.842,307.324,4.826,467.379   c48.696-99.493,149.915-138.677,278.672-143.14v92.003L512,230.431z" />
          </g>
        </svg>
        <h6 className="text-white border-none bg-none outline-none p-0 relative flex items-center cursor-pointer flex-col text-rgba font-TikTokFont font-sans text-xs leading-4 text-center">
          {shareCount}
        </h6>
      </button>
    </div>
  );
};