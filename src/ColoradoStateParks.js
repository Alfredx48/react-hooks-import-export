import React from "react";
import howManyParks from "./parks/howManyParks";
import { trees, elevation, wildlife } from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain"
import MesaVerde from "./parks/MesaVerde"

console.log(RMFunctions.trees)

RMFunctions.wildlife()

RMFunctions.elevation()

console.log(trees);

wildlife()

elevation()


function ColoradoStatePark() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}

ColoradoStatePark()


export default function ColoradoStateParks() {
 
  return (

    <div>
      <ColoradoStatePark />
      <MesaVerde />
    </div>
  );
}