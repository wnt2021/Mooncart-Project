$(document).ready(function () {
  // Llamar a la función para obtener datos al cargar la página
  getData();

  // Llamar a las funciones ShowVideo y ChangeImage
  ShowVideo();
  ChangeImage();
});

function getData() {
  $.ajax({
    url: "https://www.tridenia.com/maquetacio/list.php",
    method: "GET",
    dataType: "json",
    success: function (data) {
      // Iterar a través de los datos y crear elementos HTML para mostrarlos
      $.each(data.items, function (index, item) {
        let body = $("<div class='col-md-6 card-container col-lg-3 mb-4'>");
        let divCard = $("<div class='card custom-card h-100'>");
        let divItem = $("<div class='card-body text-center'>");
        let titulo = $("<h5 class='card-title' id='title'>").text(item.title);
        let texto = $("<p class='card-text' id='text'>").text(item.text);
        divItem.append(titulo);
        divItem.append(texto);
        divCard.append(divItem);
        body.append(divCard);

        // Agregar el elemento creado al contenedor con la clase "contenedor"
        $(".contenedor").append(body);
      });
    },
    error: function (xhr, status, error) {
      console.error("Error al obtener los datos:", error);
    },
  });
}

function ShowVideo() {
  // Agregar un evento de clic a elementos con la clase "video-thumbnail"
  $(".video-thumbnail").click(function () {
    $("#videoModal").modal("show"); // Mostrar el modal al hacer clic en la imagen
  });
}

function ChangeImage() {
  // Agregar un evento de cambio a los radio buttons
  $("input[type=radio][name=radioGroup]").change(function () {
    // Obtener el valor del radio button seleccionado
    var selectedValue = $(
      "input[type='radio'][name='radioGroup']:checked"
    ).val();
    // Cambiar la imagen en función del valor seleccionado
    if (selectedValue === "black") {
      $("#product-img").attr("src", "images/product.png");
    } else if (selectedValue === "magenta") {
      $("#product-img").attr("src", "images/product-lilac.png");
    }
  });
}
