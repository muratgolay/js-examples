/* arguments fonksiyon çağrılarındaki parametre sayısına göre oluşturulan bir 
itarette symbol türüdür.. 

 fonksiyon bloğu'...(){}' içerinde erişilebilir*/
function argumentsFun(){
    console.log(arguments);
}
argumentsFun('kerem','murat','kaan','...');

/* rest params ...yı takip edern parametre ismiyle yazılır
fonksiyona geçilen parametre veya parametreler dizi türünde (arry) verecektir */

function restParam(...params){
    console.log(params);
    console.log(params.length);
}
restParam(11,22,33,44,55,66,77,88,99,100);


/* default parametre fonsiyon çağrısında paremetre zorunlu değildir */
function defaultParam(param = "Kerem"){
    console.log(param);
}
defaultParam();
defaultParam("Murat");