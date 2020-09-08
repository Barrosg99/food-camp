var prato = 0;
var np;
var bebida = 0;                               /*  variaveis globais usadas nas funçoes abaixo */
var nb;                                                       
var sobremesa = 0;
var ns;
var preco = 0
var p;
var b;
var s;
function calcPreco() //calcula o preço e retorna o total ;
{
  if(prato==1)
  {
    preco = parseFloat(document.querySelector("li:first-child .preco").innerText);
    if(bebida==1)
    {
      preco += parseFloat(document.querySelector("main ul:nth-child(4) li:first-child .preco").innerText);
      if(sobremesa==1)
        preco +=parseFloat(document.querySelector("main ul:nth-child(6) li:first-child .preco").innerText);
      if(sobremesa==2)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(2) .preco").innerText);
      if(sobremesa==3)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(3) .preco").innerText);
      if(sobremesa==4)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(4) .preco").innerText);
    }      
    if(bebida==2)
    {
      preco += parseFloat(document.querySelector("main ul:nth-child(4) li:nth-child(2) .preco").innerText);
      if(sobremesa==1)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:first-child .preco").innerText);
      if(sobremesa==2)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(2) .preco").innerText);
      if(sobremesa==3)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(3) .preco").innerText);
      if(sobremesa==4)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(4) .preco").innerText);
    }
    if(bebida==3)
    {
      preco += parseFloat(document.querySelector("main ul:nth-child(4) li:nth-child(3) .preco").innerText);
      if(sobremesa==1)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:first-child .preco").innerText);
      if(sobremesa==2)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(2) .preco").innerText);
      if(sobremesa==3)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(3) .preco").innerText);
      if(sobremesa==4)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(4) .preco").innerText);
    }
    if(bebida==4)
    {
      preco += parseFloat(document.querySelector("main ul:nth-child(4) li:nth-child(4) .preco").innerText);
      if(sobremesa==1)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:first-child .preco").innerText);
      if(sobremesa==2)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(2) .preco").innerText);
      if(sobremesa==3)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(3) .preco").innerText);
      if(sobremesa==4)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(4) .preco").innerText);
    }
  }
  if(prato==2)
  {
    preco = parseFloat(document.querySelector("li:nth-child(2) .preco").innerText);
    if(bebida==1)
    {
      preco += parseFloat(document.querySelector("main ul:nth-child(4) li:first-child .preco").innerText);
      if(sobremesa==1)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:first-child .preco").innerText);
      if(sobremesa==2)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(2) .preco").innerText);
      if(sobremesa==3)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(3) .preco").innerText);
      if(sobremesa==4)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(4) .preco").innerText);
    }      
    if(bebida==2)
    {
      preco += parseFloat(document.querySelector("main ul:nth-child(4) li:nth-child(2) .preco").innerText);
      if(sobremesa==1)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:first-child .preco").innerText);
      if(sobremesa==2)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(2) .preco").innerText);
      if(sobremesa==3)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(3) .preco").innerText);
      if(sobremesa==4)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(4) .preco").innerText);
    }
    if(bebida==3)
    {
      preco += parseFloat(document.querySelector("main ul:nth-child(4) li:nth-child(3) .preco").innerText);
      if(sobremesa==1)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:first-child .preco").innerText);
      if(sobremesa==2)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(2) .preco").innerText);
      if(sobremesa==3)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(3) .preco").innerText);
      if(sobremesa==4)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(4) .preco").innerText);
    }
    if(bebida==4)
    {
      preco += parseFloat(document.querySelector("main ul:nth-child(4) li:nth-child(4) .preco").innerText);
      if(sobremesa==1)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:first-child .preco").innerText);
      if(sobremesa==2)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(2) .preco").innerText);
      if(sobremesa==3)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(3) .preco").innerText);
      if(sobremesa==4)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(4) .preco").innerText);
    }
  }
  if(prato==3)
  {
    preco = parseFloat(document.querySelector("li:nth-child(3) .preco").innerText);
    if(bebida==1)
    {
      preco += parseFloat(document.querySelector("main ul:nth-child(4) li:first-child .preco").innerText);
      if(sobremesa==1)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:first-child .preco").innerText);
      if(sobremesa==2)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(2) .preco").innerText);
      if(sobremesa==3)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(3) .preco").innerText);
      if(sobremesa==4)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(4) .preco").innerText);
    }      
    if(bebida==2)
    {
      preco += parseFloat(document.querySelector("main ul:nth-child(4) li:nth-child(2) .preco").innerText);
      if(sobremesa==1)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:first-child .preco").innerText);
      if(sobremesa==2)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(2) .preco").innerText);
      if(sobremesa==3)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(3) .preco").innerText);
      if(sobremesa==4)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(4) .preco").innerText);
    }
    if(bebida==3)
    {
      preco += parseFloat(document.querySelector("main ul:nth-child(4) li:nth-child(3) .preco").innerText);
      if(sobremesa==1)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:first-child .preco").innerText);
      if(sobremesa==2)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(2) .preco").innerText);
      if(sobremesa==3)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(3) .preco").innerText);
      if(sobremesa==4)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(4) .preco").innerText);
    }
    if(bebida==4)
    {
      preco += parseFloat(document.querySelector("main ul:nth-child(4) li:nth-child(4) .preco").innerText);
      if(sobremesa==1)
          preco += parseFloat(document.querySelector("main ul:nth-child(6) li:first-child .preco").innerText);
      if(sobremesa==2)
          preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(2) .preco").innerText);
      if(sobremesa==3)
          preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(3) .preco").innerText);
      if(sobremesa==4)
          preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(4) .preco").innerText);
    }
  }
  if(prato==4)
  {
    var preco = parseFloat(document.querySelector("li:nth-child(4) .preco").innerText);
    if(bebida==1)
    {
      preco += parseFloat(document.querySelector("main ul:nth-child(4) li:first-child .preco").innerText);
      if(sobremesa==1)
          preco += parseFloat(document.querySelector("main ul:nth-child(6) li:first-child .preco").innerText);
      if(sobremesa==2)
          preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(2) .preco").innerText);
      if(sobremesa==3)
          preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(3) .preco").innerText);
      if(sobremesa==4)
          preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(4) .preco").innerText);
    }      
    if(bebida==2)
    {
      preco += parseFloat(document.querySelector("main ul:nth-child(4) li:nth-child(2) .preco").innerText);
      if(sobremesa==1)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:first-child .preco").innerText);
      if(sobremesa==2)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(2) .preco").innerText);
      if(sobremesa==3)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(3) .preco").innerText);
      if(sobremesa==4)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(4) .preco").innerText);
    }
    if(bebida==3)
    {
      preco += parseFloat(document.querySelector("main ul:nth-child(4) li:nth-child(3) .preco").innerText);
      if(sobremesa==1)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:first-child .preco").innerText);
      if(sobremesa==2)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(2) .preco").innerText);
      if(sobremesa==3)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(3) .preco").innerText);
      if(sobremesa==4)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(4) .preco").innerText);
    }
    if(bebida==4)
    {
      preco += parseFloat(document.querySelector("main ul:nth-child(4) li:nth-child(4) .preco").innerText);
      if(sobremesa==1)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:first-child .preco").innerText);
      if(sobremesa==2)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(2) .preco").innerText);
      if(sobremesa==3)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(3) .preco").innerText);
      if(sobremesa==4)
        preco += parseFloat(document.querySelector("main ul:nth-child(6) li:nth-child(4) .preco").innerText);
    }
  }
  return preco;
}
function selected(x) //seleciona os pedidos e habilita o botao
{
  if(x==1)
  {
    //adiciona borda verde no selecionado e reseta a bordas dos outros li
    document.querySelector("li:first-child").style.boxShadow = "0px 0px 0px 6px #32b72f";
    document.querySelector("li:nth-child(2)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("li:nth-child(3)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("li:nth-child(4)").style.boxShadow = "0px 0px 5px 0px #00000080";
    //adiciona o ion-icon no selecionado e tira dos demais
    document.querySelector("li:first-child ion-icon").style.display = "initial";
    document.querySelector("li:nth-child(2) ion-icon").style.display = "none";
    document.querySelector("li:nth-child(3) ion-icon").style.display = "none";
    document.querySelector("li:nth-child(4) ion-icon").style.display = "none";
    prato = 1;
    np = document.querySelector("li:first-child strong").innerText
    p = document.querySelector("li:first-child .preco").innerText
  }
  else if(x==2)
  {
    document.querySelector("li:first-child").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("li:nth-child(2)").style.boxShadow = "0px 0px 0px 6px #32b72f";
    document.querySelector("li:nth-child(3)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("li:nth-child(4)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("li:first-child ion-icon").style.display = "none";
    document.querySelector("li:nth-child(2) ion-icon").style.display = "initial";
    document.querySelector("li:nth-child(3) ion-icon").style.display = "none";
    document.querySelector("li:nth-child(4) ion-icon").style.display = "none";
    prato = 2;
    np = document.querySelector("li:nth-child(2) strong").innerText
    p = document.querySelector("li:nth-child(2) .preco").innerText
  }
  else if(x==3)
  {
    document.querySelector("li:first-child").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("li:nth-child(2)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("li:nth-child(3)").style.boxShadow = "0px 0px 0px 6px #32b72f";
    document.querySelector("li:nth-child(4)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("li:first-child ion-icon").style.display = "none";
    document.querySelector("li:nth-child(2) ion-icon").style.display = "none";
    document.querySelector("li:nth-child(3) ion-icon").style.display = "initial";
    document.querySelector("li:nth-child(4) ion-icon").style.display = "none";
    prato = 3;
    np = document.querySelector("li:nth-child(3) strong").innerText
    p = document.querySelector("li:nth-child(3) .preco").innerText
  }
  else if(x==4)
  {
    document.querySelector("li:first-child").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("li:nth-child(2)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("li:nth-child(3)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("li:nth-child(4)").style.boxShadow = "0px 0px 0px 6px #32b72f";
    document.querySelector("li:first-child ion-icon").style.display = "none";
    document.querySelector("li:nth-child(2) ion-icon").style.display = "none";
    document.querySelector("li:nth-child(3) ion-icon").style.display = "none";
    document.querySelector("li:nth-child(4) ion-icon").style.display = "initial";
    prato = 4;
    np = document.querySelector("li:nth-child(4) strong").innerText
    p = document.querySelector("li:nth-child(4) .preco").innerText
  }
  if(x==5)
  {
    document.querySelector("main ul:nth-child(4) li:first-child").style.boxShadow = "0px 0px 0px 6px #32b72f";
    document.querySelector("main ul:nth-child(4) li:nth-child(2)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(4) li:nth-child(3)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(4) li:nth-child(4)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(4) li:first-child ion-icon").style.display = "initial";
    document.querySelector("main ul:nth-child(4) li:nth-child(2) ion-icon").style.display = "none";
    document.querySelector("main ul:nth-child(4) li:nth-child(3) ion-icon").style.display = "none";
    document.querySelector("main ul:nth-child(4) li:nth-child(4) ion-icon").style.display = "none";
    bebida = 1;
    nb = document.querySelector("main ul:nth-child(4) li:first-child strong").innerText
    b = document.querySelector("main ul:nth-child(4) li:first-child .preco").innerText
  }
  else if(x==6)
  {
    document.querySelector("main ul:nth-child(4) li:first-child").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(4) li:nth-child(2)").style.boxShadow = "0px 0px 0px 6px #32b72f";
    document.querySelector("main ul:nth-child(4) li:nth-child(3)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(4) li:nth-child(4)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(4) li:first-child ion-icon").style.display = "none";
    document.querySelector("main ul:nth-child(4) li:nth-child(2) ion-icon").style.display = "initial";
    document.querySelector("main ul:nth-child(4) li:nth-child(3) ion-icon").style.display = "none";
    document.querySelector("main ul:nth-child(4) li:nth-child(4) ion-icon").style.display = "none";
    bebida = 2;
    nb = document.querySelector("main ul:nth-child(4) li:nth-child(2) strong").innerText
    b = document.querySelector("main ul:nth-child(4) li:nth-child(2) .preco").innerText
  }
  else if(x==7)
  {
    document.querySelector("main ul:nth-child(4) li:first-child").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(4) li:nth-child(2)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(4) li:nth-child(3)").style.boxShadow = "0px 0px 0px 6px #32b72f";
    document.querySelector("main ul:nth-child(4) li:nth-child(4)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(4) li:first-child ion-icon").style.display = "none";
    document.querySelector("main ul:nth-child(4) li:nth-child(2) ion-icon").style.display = "none";
    document.querySelector("main ul:nth-child(4) li:nth-child(3) ion-icon").style.display = "initial";
    document.querySelector("main ul:nth-child(4) li:nth-child(4) ion-icon").style.display = "none";
    bebida = 3;
    nb = document.querySelector("main ul:nth-child(4) li:nth-child(3) strong").innerText
    b = document.querySelector("main ul:nth-child(4) li:nth-child(3) .preco").innerText
  }
  else if(x==8)
  {
    document.querySelector("main ul:nth-child(4) li:first-child").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(4) li:nth-child(2)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(4) li:nth-child(3)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(4) li:nth-child(4)").style.boxShadow = "0px 0px 0px 6px #32b72f";
    document.querySelector("main ul:nth-child(4) li:first-child ion-icon").style.display = "none";
    document.querySelector("main ul:nth-child(4) li:nth-child(2) ion-icon").style.display = "none";
    document.querySelector("main ul:nth-child(4) li:nth-child(3) ion-icon").style.display = "none";
    document.querySelector("main ul:nth-child(4) li:nth-child(4) ion-icon").style.display = "initial";
    bebida = 4;
    nb = document.querySelector("main ul:nth-child(4) li:nth-child(4) strong").innerText
    b = document.querySelector("main ul:nth-child(4) li:nth-child(4) .preco").innerText
  }
  if(x==9)
  {
    document.querySelector("main ul:nth-child(6) li:first-child").style.boxShadow = "0px 0px 0px 6px #32b72f";
    document.querySelector("main ul:nth-child(6) li:nth-child(2)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(6) li:nth-child(3)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(6) li:nth-child(4)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(6) li:first-child ion-icon").style.display = "initial";
    document.querySelector("main ul:nth-child(6) li:nth-child(2) ion-icon").style.display = "none";
    document.querySelector("main ul:nth-child(6) li:nth-child(3) ion-icon").style.display = "none";
    document.querySelector("main ul:nth-child(6) li:nth-child(4) ion-icon").style.display = "none";
    sobremesa = 1;
    ns = document.querySelector("main ul:nth-child(6) li:first-child strong").innerText
    s = document.querySelector("main ul:nth-child(6) li:first-child .preco").innerText
  }
  else if(x==10)
  {
    document.querySelector("main ul:nth-child(6) li:first-child").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(6) li:nth-child(2)").style.boxShadow = "0px 0px 0px 6px #32b72f";
    document.querySelector("main ul:nth-child(6) li:nth-child(3)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(6) li:nth-child(4)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(6) li:first-child ion-icon").style.display = "none";
    document.querySelector("main ul:nth-child(6) li:nth-child(2) ion-icon").style.display = "initial";
    document.querySelector("main ul:nth-child(6) li:nth-child(3) ion-icon").style.display = "none";
    document.querySelector("main ul:nth-child(6) li:nth-child(4) ion-icon").style.display = "none";
    sobremesa = 2;
    ns = document.querySelector("main ul:nth-child(6) li:nth-child(2) strong").innerText
    s = document.querySelector("main ul:nth-child(6) li:nth-child(2) .preco").innerText
  }
  else if(x==11)
  {
    document.querySelector("main ul:nth-child(6) li:first-child").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(6) li:nth-child(2)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(6) li:nth-child(3)").style.boxShadow = "0px 0px 0px 6px #32b72f";
    document.querySelector("main ul:nth-child(6) li:nth-child(4)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(6) li:first-child ion-icon").style.display = "none";
    document.querySelector("main ul:nth-child(6) li:nth-child(2) ion-icon").style.display = "none";
    document.querySelector("main ul:nth-child(6) li:nth-child(3) ion-icon").style.display = "initial";
    document.querySelector("main ul:nth-child(6) li:nth-child(4) ion-icon").style.display = "none";
    sobremesa = 3;
    ns = document.querySelector("main ul:nth-child(6) li:nth-child(3) strong").innerText
    s = document.querySelector("main ul:nth-child(6) li:nth-child(3) .preco").innerText
  }
  else if(x==12)
  {
    document.querySelector("main ul:nth-child(6) li:first-child").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(6) li:nth-child(2)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(6) li:nth-child(3)").style.boxShadow = "0px 0px 5px 0px #00000080";
    document.querySelector("main ul:nth-child(6) li:nth-child(4)").style.boxShadow = "0px 0px 0px 6px #32b72f";
    document.querySelector("main ul:nth-child(6) li:first-child ion-icon").style.display = "none";
    document.querySelector("main ul:nth-child(6) li:nth-child(2) ion-icon").style.display = "none";
    document.querySelector("main ul:nth-child(6) li:nth-child(3) ion-icon").style.display = "none";
    document.querySelector("main ul:nth-child(6) li:nth-child(4) ion-icon").style.display = "initial";
    sobremesa = 4;
    ns = document.querySelector("main ul:nth-child(6) li:nth-child(4) strong").innerText
    s = document.querySelector("main ul:nth-child(6) li:nth-child(3) .preco").innerText
  }
  if(prato!=0&&bebida!=0&&sobremesa!=0)
  {
    document.querySelector("button").disabled = false;
    document.querySelector("button").style.background = "#32B72F"    
  }
}
function goWpp() //envia a msg pro wpp quando clica no botao 
{
    var a = prompt("Informe o seu nome, por favor")
    var b = prompt("Informe o seu endereço")
    var frase = `Olá, gostaria de fazer o pedido:
  - Prato: `+np+`
  - Bebida: `+nb+`
  - Sobremesa: `+ns+`
    Total: R$ `+calcPreco().toFixed(2)+`
    
    Nome: `+a+`
    Endereço: `+b;
    var wpp = encodeURIComponent(frase);
    var stringWpp = ("https://wa.me/5512992372037?text="+wpp)
    window.open(stringWpp);   
}