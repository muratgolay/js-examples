/* function sign */
function greeting(param)/* any type function argument */ {
    /* number, string, boolean, array, object, undifined,function */
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
