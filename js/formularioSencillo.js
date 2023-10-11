var formulario = document.getElementById("formulario"),
    //Aqui accedemos al name NO al id
    nombre = formulario.nombre,
    correo = formulario.correo,
    sexo = formulario.sexo,
    terminos = formulario.terminos,
    error = document.getElementById("error");

function validarNombre(e)
{
    if(nombre.value == "" || nombre.value == null)
    {
        console.log("Por favor completa el nombre");
        error.style.display = "block";
        error.innerHTML = error.innerHTML + "<li>Por favor completa el nombre.</li>";
        e.preventDefault();//Para evitar que se envien los datos
    } else {
        error.style.display = "none";
    }
}

function validarCorreo(e)
{
    if(correo.value == "" || correo.value == null)
    {
        console.log("Por favor completa el correo");
        error.style.display = "block";
        error.innerHTML = error.innerHTML + "<li>Por favor completa el correo.</li>";
        e.preventDefault();
    } else {
        error.style.display = "none";
    }
}

function validarSexo(e)
{
    if(sexo.value == "" || sexo.value == null)
    {
        console.log("Por favor selecciona el genero.")
        error.style.display = "block";
        error.innerHTML += "<li>Por favor selecciona el genero.</li>"
        e.preventDefault();
    } else {
        error.style.display = "none";
    }
}

function validarTerminos(e)
{
    if(terminos.checked == false)
    {
        console.log("Por favor acepta los terminos.");
        error.style.display = "block";
        error.innerHTML += "<li>Por favor acepta los terminos.</li>";
        e.preventDefault();
    } else {
        error.style.display = "none";
    }
}

function validarFormulario(e)
{
    error.innerHTML = "";
    validarNombre(e);
    validarCorreo(e);
    validarSexo(e);
    validarTerminos(e);
}

formulario.addEventListener("submit", validarFormulario);