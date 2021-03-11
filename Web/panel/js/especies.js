
$(document).ready( function () {
    $('#myTable').DataTable();
} );

$('#myTable').DataTable( {
    language: {
        processing:     "Procesando datos...",
        search:         "Buscar&nbsp;:",
        lengthMenu:     "Mostar _MENU_ filas",
        info:           "Mostrando _START_ a _END_ de _TOTAL_ filas",
        infoEmpty:      "No hay elementos para mostrar",
        infoFiltered:   "(filtrado de _MAX_ filas en total)",
        infoPostFix:    "",
        loadingRecords: "Cargando datos...",
        zeroRecords:    "No hay elementos para mostrar",
        emptyTable:     "No hay elementos para mostrar",
        paginate: {
            first:      "Primero",
            previous:   "Anterior",
            next:       "Siguiente",
            last:       "Último"
        },
        aria: {
            sortAscending:  ": Ordenar la columna en forma ascendente",
            sortDescending: ": Ordenar la columna en forma descendente"
        }
    },
} );
