import React from "react";

const Players = props => {
  if (props.players.length == 0) {
    return <p>No players found</p>;
  }

  return (
    <>
      {props.players.map(player => (
        <div key={player.id} data-testid="player">
          {player.name}
        </div>
      ))}
    </>
  );
};

module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

export default function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
