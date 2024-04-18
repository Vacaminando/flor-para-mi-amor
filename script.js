$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var words = $(".words"); // Selecciona el elemento que contiene el texto

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
        showText(); // Llama a la función showText() cuando se hace clic en el botón "Open"
    });
    btn_reset.click(function() {
        close();
        hideText(); // Llama a la función hideText() cuando se hace clic en el botón "Reset"
    });

    function open() {
        envelope.addClass("open").removeClass("close");
    }
    function close() {
        envelope.addClass("close").removeClass("open");
    }
    function showText() {
        words.show(); // Muestra el texto
    }
    function hideText() {
        words.hide(); // Oculta el texto
    }
});
