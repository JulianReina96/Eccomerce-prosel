const jogosSwitch =[
  {
     id:1,
     nome:"Mario Party Superstars",
     img:"https://m.media-amazon.com/images/I/81JrGL5rW+L._AC_SY500_.jpg",
     console:"SWITCH",
     preco:"R$100",
     precoFinal:"RS100",
   }, 
   {
     id:2,
     nome:"Pokemon Sword",
     img:"https://m.media-amazon.com/images/I/713Y+UMVGlL._AC_SX522_.jpg",
     console:"SWITCH",
     preco:"R$100",
     precoFinal:"RS100",
   } , 
    {
     id:2,
     nome:"Pokemon Sword",
     img:"https://m.media-amazon.com/images/I/713Y+UMVGlL._AC_SX522_.jpg",
     console:"SWITCH",
     preco:"R$100",
     precoFinal:"RS100",
   } , 
    
    {
     id:2,
     nome:"Pokemon Sword",
     img:"https://m.media-amazon.com/images/I/713Y+UMVGlL._AC_SX522_.jpg",
     console:"SWITCH",
     preco:"R$100",
     precoFinal:"RS100",
   } , 
  
    {
     id:2,
     nome:"Pokemon Sword",
     img:"https://m.media-amazon.com/images/I/713Y+UMVGlL._AC_SX522_.jpg",
     console:"SWITCH",
     preco:"R$100",
     precoFinal:"RS100",
   } , 
   
   
]
 const jogosPS4 =[
  {
     id:3,
     nome:"Spider-Man",
     img:"https://t.ctcdn.com.br/Y_gjhuiWU9TwKS7neEIZtlioWl8=/1024x0/smart/i328543.png",
     console:"PS4",
     preco:"R$100",
     precoFinal:"RS100",
   } ,
{
     id:4,
     nome:"The Last of Us II",
     img:"https://cdn.awsli.com.br/241/241991/arquivos/capa_game.png",
     console:"PS4",
     preco:"R$100",
     precoFinal:"RS100",
   } ,
   {
    
     id:3,
     nome:"Spider-Man",
     img:"https://t.ctcdn.com.br/Y_gjhuiWU9TwKS7neEIZtlioWl8=/1024x0/smart/i328543.png",
     console:"PS4",
     preco:"R$100",
     precoFinal:"RS100",
   } ,
      {
     id:3,
     nome:"Spider-Man",
     img:"https://t.ctcdn.com.br/Y_gjhuiWU9TwKS7neEIZtlioWl8=/1024x0/smart/i328543.png",
     console:"PS4",
     preco:"R$100",
     precoFinal:"RS100",
   } ,
]
 const jogosXBOX=[{
     id:7,
     nome:"Halo Infinite",
     img:"https://drakemall-files-new.s3.eu-central-1.amazonaws.com/Halo%20Inf-cknta3tef00f601whbfd6x76h.png",
     console:"XBOX",
     preco:"R$100",
     precoFinal:"RS100",
   },
                  {
     id:7,
     nome:"Halo Infinite",
     img:"https://drakemall-files-new.s3.eu-central-1.amazonaws.com/Halo%20Inf-cknta3tef00f601whbfd6x76h.png",
     console:"XBOX",
     preco:"R$100",
     precoFinal:"RS100",
   },
                  {
     id:7,
     nome:"Halo Infinite",
     img:"https://drakemall-files-new.s3.eu-central-1.amazonaws.com/Halo%20Inf-cknta3tef00f601whbfd6x76h.png",
     console:"XBOX",
     preco:"R$100",
     precoFinal:"RS100",
   },
   {
     id:8,
     nome:"Forza Horizon 5",
     img:"https://drakemall-files-new.s3.eu-central-1.amazonaws.com/Forza%20Ho-cl2gh9hq300ab01uz2stqnese.png",
     console:"XBOX",
     preco:"R$100",
     precoFinal:"RS100",
   } ]
 const jogosPS5=[{
     id:5,
     nome:"GOW: Ragnarok",
     img:"https://m.media-amazon.com/images/I/81UzPcO7PiL._AC_SX466_.jpg",
     console:"PS5",
     preco:"R$100",
     precoFinal:"RS100",
   } ,
                 {
     id:5,
     nome:"GOW: Ragnarok",
     img:"https://m.media-amazon.com/images/I/81UzPcO7PiL._AC_SX466_.jpg",
     console:"PS5",
     preco:"R$100",
     precoFinal:"RS100",
   } ,
{
     id:5,
     nome:"GOW: Ragnarok",
     img:"https://m.media-amazon.com/images/I/81UzPcO7PiL._AC_SX466_.jpg",
     console:"PS5",
     preco:"R$100",
     precoFinal:"RS100",
   } ,
{
     id:5,
     nome:"GOW: Ragnarok",
     img:"https://m.media-amazon.com/images/I/81UzPcO7PiL._AC_SX466_.jpg",
     console:"PS5",
     preco:"R$100",
     precoFinal:"RS100",
   } ,

{
     id:6,
     nome:"FIFA 23",
     img:"https://lojasaraiva.vteximg.com.br/arquivos/ids/31772894-400-400/LASA_Box3D_FIFA22_PS5_1000x1000px.png?v=637660958702300000",
     console:"PS5",
     preco:"R$100",
     precoFinal:"RS100",
   },]
 
  
function SWITCH (){
var containerSwitch=document.getElementById('SWITCH');
jogosSwitch.forEach((val)=>{
  
 


  
  containerSwitch.innerHTML += `

<section class="produto">
     <img src=" `+val.img+` ">
<p class="tituloProduto"><h1>`+val.nome+` </h1></p>
    <p class="precoProduto"><strong>`+val.preco+`</strong></p>
       <p class="precoFinal">`+val.precoFinal+`</p>
       <button onclick="addCart()" id="cart" title="Adicionar ao carrinho"> Adicionar ao carrinho</button>
    </section>

  `;}
)}

function PS4 (){
var containerPS4=document.getElementById('PS4');
jogosPS4.forEach((val)=>{
  
 


  
  containerPS4.innerHTML += `

<section class="produto">
     <img src=" `+val.img+` ">
<p class="tituloProduto"><h1>`+val.nome+` </h1></p>
    <p class="precoProduto"><strong>`+val.preco+`</strong></p>
       <p class="precoFinal">`+val.precoFinal+`</p>
<button onclick="addCart()" id="cart" title="Adicionar ao carrinho"> Adicionar ao carrinho</button>
    </section>

  `;}
)}

function XBOX (){
var containerXBOX=document.getElementById('XBOX');
jogosXBOX.forEach((val)=>{
  
 


  
  containerXBOX.innerHTML += `

<section class="produto">
     <img src=" `+val.img+` ">
<p class="tituloProduto"><h1>`+val.nome+` </h1></p>
    <p class="precoProduto"><strong>`+val.preco+`</strong></p>
       <p class="precoFinal">`+val.precoFinal+`</p>
<button onclick="addCart()" id="cart" title="Adicionar ao carrinho"> Adicionar ao carrinho</button>
    </section>

  `;}
)}

function PS5 (){
var containerPS5=document.getElementById('PS5');
jogosPS5.forEach((val)=>{
  
  
  
  containerPS5.innerHTML += `

<section class="produto">
     <img src=" `+val.img+` ">
<p class="tituloProduto"><h1>`+val.nome+` </h1></p>
    <p class="precoProduto"><strong>`+val.preco+`</strong></p>
       <p class="precoFinal">`+val.precoFinal+`</p><a key="" href="">
<button onclick="addCart()" id="cart" title="Adicionar ao carrinho"> Adicionar ao carrinho</button>
    </section>

  `;}
)}


   
 
   
function abastecerLoja(){
 
PS4();
SWITCH();
 XBOX();
  PS5();
  
}

abastecerLoja();
  
window.onscroll = function() {};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}