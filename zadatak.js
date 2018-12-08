novniz="";
brojac=0;
function odredi(){

  niz=document.getElementById("br1").value;
  i=niz.length-1;
  
  while (i>=0){
    novniz+=niz[i]; //niz guramo u nov niz
    brojac++;
    if(brojac%3==0 && brojac<niz.length){
      novniz+=" ,";
    }
    i--;
  }

  rezultat=" ";
  for (i=novniz.length-1;i>=0;i--){
    document.getElementById("br2").value+=novniz[i];
  }
  
}
