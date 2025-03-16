/* function sign */
function greeting(param)/* any type function argument */ {
    /* types:number,symbol, string, boolean, array, object, undifined,function */

    /* fonksiyon argüöanının kontrolünün sağlanması gerçekleştirecek koşulların yazılması 
    mantıksal kodun veya ifadelerin hatalarını önleyecektir

    if (typeof param === "undifined") {
        console.log("param is undifined");
     */
  console.log("greeting function");
  console.log("Hello " + param);
}



function cb(){
    /* callback function parametere olarak geçilen fonksıyonda hemen çalısır */
    console.log("callback function");
    return "world!";
}



/* Function call in global scope  */
greeting(cb());/* a string type parameter */
