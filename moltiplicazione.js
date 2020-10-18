const moltiplicazione = (moltiplicando, moltiplicatore) => {
  let prodotto = 0;
  for (let i = 0; i < moltiplicatore; i++) {
    prodotto += moltiplicando;
  }
  return prodotto;
};

console.log('prodotto', moltiplicazione(3, 4));
