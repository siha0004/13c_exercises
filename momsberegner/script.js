"use strict";

function momsBeregner(beloeb, moms = 25) {
  console.log(`Beløbet med moms (${moms}%) er: ${beloeb * (1 + moms / 100)}`);
}

momsBeregner(100, 37);
