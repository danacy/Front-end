// sweetAlert.js

document.addEventListener("DOMContentLoaded", () => {
    const deleteButtons = document.querySelectorAll(".btn-delete");
  
    deleteButtons.forEach(button => {
      button.addEventListener("click", () => {
        Swal.fire({
          title: "¿Estás seguro?",
          text: "Esta acción eliminará al paseador de forma permanente.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, eliminar",
          cancelButtonText: "No, cancelar",
          reverseButtons: true,
          customClass: {
            confirmButton: 'swal2-confirm btn-confirm',
            cancelButton: 'swal2-cancel btn-cancel'
          }
        }).then((result) => {
          if (result.isConfirmed) {
            // Aquí puedes añadir la lógica para eliminar la tarjeta
            // Por ejemplo: eliminar el card padre del botón
            const card = button.closest(".card");
            card.remove();
  
            Swal.fire(
              "Eliminado",
              "El paseador ha sido eliminado.",
              "success"
            );
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              "Cancelado",
              "La tarjeta no ha sido eliminada.",
              "error"
            );
          }
        });
      });
    });
  });
  