function seleccionar() {
  let seccion1 = document.getElementById("seccion1");
  seccion1.addEventListener("click", () => {
    let seleccion = "piedra";
    sessionStorage.setItem("seleccion", seleccion);
    alert("haz seleccionado piedra");
    seleccionRival();
  });
  let seccion2 = document.getElementById("seccion2");
  seccion2.addEventListener("click", () => {
    let seleccion = "papel";
    sessionStorage.setItem("seleccion", seleccion);
    alert("haz seleccionado papel");
    seleccionRival();
  });
  let seccion3 = document.getElementById("seccion3");
  seccion3.addEventListener("click", () => {
    let seleccion = "tijera";
    sessionStorage.setItem("seleccion", seleccion);
    alert("haz seleccionado tijera");
    seleccionRival();
  });

  function seleccionRival() {
    let aleatorio = Math.floor(Math.random() * 3) + 1;
    if (aleatorio === 1) {
      alert("el rival ha seleccionado piedra");
    } else if (aleatorio === 2) {
      alert("el rival ha seleccionado papel");
    } else if (aleatorio === 3) {
      alert("el rival ha seleccionado tijera");
    }
    sessionStorage.setItem("seleccionRival", aleatorio);

    resultadoFinal();

    function resultadoFinal() {
      let seleccionFinal = sessionStorage.getItem("seleccion");
      let seleccionRival = sessionStorage.getItem("seleccionRival");
      if (seleccionFinal == "piedra") {
        if (seleccionRival == 1) {
          alert("se produjo un empate");
          empataste();
        } else if (seleccionRival == 2) {
          alert("has perdido");
          perdiste();
        } else if (seleccionRival == 3) {
          alert("has ganado");
          ganaste();
        }
      } else if (seleccionFinal == "papel") {
        if (seleccionRival == 1) {
          alert("has ganado");
          ganaste();
        } else if (seleccionRival == 2) {
          alert("se produjo un empate");
          empataste();
        } else if (seleccionRival == 3) {
          alert("has perdido");

          perdiste();
        }
      } else if (seleccionFinal == "tijera") {
        if (seleccionRival == 1) {
          alert("has perdido");
          perdiste();
        } else if (seleccionRival == 2) {
          alert("has ganado");
          ganaste();
        } else if (seleccionRival == 3) {
          alert("se produjo un empate");
          empataste();
        }
      }
    }
  }
}

function ganaste() {
  let ganadasRevision = localStorage.getItem("ganadas");
  ganadasSuma = parseInt(ganadasRevision) + 1;
  localStorage.setItem("ganadas", ganadasSuma);
  contador();
}

function perdiste() {
  let perdidasRevision = localStorage.getItem("perdidas");
  perdidasSuma = parseInt(perdidasRevision) + 1;
  localStorage.setItem("perdidas", perdidasSuma);
  contador();
}

function empataste() {
  let empatadasRevision = localStorage.getItem("empatadas");
  empatadasSuma = parseInt(empatadasRevision) + 1;
  localStorage.setItem("empatadas", empatadasSuma);
  contador();
}

function contador() {
  let ganadas = localStorage.getItem("ganadas");
  let perdidas = localStorage.getItem("perdidas");
  let empatadas = localStorage.getItem("empatadas");

  let contador = document.getElementById("contador");

  contador.innerHTML = `<p class="contador"> ganadas: ${ganadas}</p>
    <p class="contador"> perdidas: ${perdidas}</p>
    <p class="contador"> empatadas: ${empatadas}</p>`;
}

function traerDelStorage() {
  let ganadasRevision = localStorage.getItem("ganadas");
  if (ganadasRevision == null) {
    localStorage.setItem("ganadas", 0);
  }
  let empatadasRevision = localStorage.getItem("empatadas");
  if (empatadasRevision == null) {
    localStorage.setItem("empatadas", 0);
  }
  let perdidasRevision = localStorage.getItem("perdidas");
  if (perdidasRevision == null) {
    localStorage.setItem("perdidas", 0);
  }
  contador();
}

seleccionar();
contador();
traerDelStorage();
