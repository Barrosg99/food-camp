const menu = {
  lunch: {
    selected: null,
    previousSelected: null,
    price: 0,
    name: ''
  },
  drink: {
    selected: null,
    previousSelected: null,
    price: 0,
    name: ''
  },
  dessert: {
    selected: null,
    previousSelected: null,
    price: 0,
    name: ''
  },
}

function refactorSelected({ currentTarget }, key) {
  menu[key].selected = currentTarget;
  menu[key].price = parseFloat(currentTarget.querySelector('.preco').innerText);
  menu[key].name = currentTarget.querySelector('strong').innerText

  if (menu[key].selected === menu[key].previousSelected) {
    if (!menu[key].selected.classList.toggle("selected")) {
      menu[key].selected = null;

      document.querySelector("button").disabled = true;
      document.querySelector("button").style.background = "#CBCBCB"
    } else if (menu['lunch'].selected !== null && menu['drink'].selected !== null && menu['dessert'].selected !== null) {
      document.querySelector("button").disabled = false;
      document.querySelector("button").style.background = "#32B72F"
    }
    return;
  }

  currentTarget.classList.add("selected");

  menu[key].previousSelected && menu[key].previousSelected.classList.remove("selected");
  menu[key].previousSelected = currentTarget;

  if (menu['lunch'].selected !== null && menu['drink'].selected !== null && menu['dessert'].selected !== null) {
    document.querySelector("button").disabled = false;
    document.querySelector("button").style.background = "#32B72F"
  }
}

function refactorCalcPreco() {
  let soma = 0
  const keys = ['lunch', 'drink', 'dessert'];
  keys.forEach(key => {
    soma += menu[key].price;
  });
  return soma
}

function goWpp() //envia a msg pro wpp quando clica no botao 
{
  var a = prompt("Informe o seu nome, por favor");
  var b = prompt("Informe o seu endereço");

  if (!a || !b) return alert('Informe o nome e o endereço, por favor');

    var frase = `Olá, gostaria de fazer o pedido:
  - Prato: `+ menu.lunch.name +`
  - Bebida: `+ menu.drink.name +`
  - Sobremesa: `+ menu.dessert.name +`
    Total: R$ `+refactorCalcPreco().toFixed(2)+`
    
    Nome: `+a+`
    Endereço: `+b;
    var wpp = encodeURIComponent(frase);
    var stringWpp = ("https://wa.me/5512992372037?text="+wpp)
    window.open(stringWpp);   
}