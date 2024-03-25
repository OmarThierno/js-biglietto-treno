# Calcolo del prezzo del biglietto del treno

## Raccolata dati
  - [ ] quanti Km da percorrere
  - [ ] l'età dell'utente

## Esecuzione logica
  - [ ] il prezzo del biglietto è definito in base ai km (0.21 € al km)
  - [ ] variabile sconto applicato

  se (minorenne) {
    va applicato uno sconto del 20%
  } se (maggiorenne && >= 65) {
    zero sconto
  } altrimenti {
    va applicato uno sconto del 40% 
  }

## Output
  - [ ] L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)