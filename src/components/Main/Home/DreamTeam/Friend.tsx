import React from "react";
import style from "../../../../css/bottom-around.module.css";
import { StarWarsContext } from "../../../../utils/constants";
import { Character } from "../../../../utils/types";

interface IFriend {
  name: string;
  friend: Character;
  pos: number;
}

const Friend = ({ friend, pos, name }: IFriend) => {
  const { setHero } = React.useContext(StarWarsContext);

  const pictureHandler = (e: React.PointerEvent<HTMLImageElement>) => {
    e.preventDefault();
    setHero(name);
  };
  let styles = "col-4 p-1 ";
  if (pos === 7) {
    styles += style["bottom-left"];
  }
  if (pos === 9) {
    styles += style["bottom-right"];
  }
  return (
    <img
      onPointerDown={(e) => pictureHandler(e)}
      className={styles}
      src={friend.img}
      alt="friend"
    />
  );
};

export default Friend;
