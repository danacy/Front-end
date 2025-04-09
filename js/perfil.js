document.addEventListener("DOMContentLoaded", () => {
    const btnConfirm = document.getElementById("btn-confirm");
    const btnCancel = document.getElementById("btn-cancel");

    if (btnConfirm) {
        btnConfirm.addEventListener("click", () => {
            Swal.fire({
                icon: 'success',
                title: 'Cambios guardados',
                text: 'Tu perfil se ha actualizado correctamente.',
                confirmButtonText: 'OK'
            }).then(() => {
                window.location.href = "admin.html";
            });
        });
    }

    if (btnCancel) {
        btnCancel.addEventListener("click", () => {
            Swal.fire({
                icon: 'info',
                title: 'Cambios descartados',
                text: 'Volverás al panel de administración.',
                confirmButtonText: 'OK'
            }).then(() => {
                window.location.href = "admin.html";
            });
        });
    }
});

const deleteText = document.getElementById("delete-account");

if (deleteText) {
    deleteText.addEventListener("click", () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Esta acción eliminará tu cuenta permanentemente.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminar cuenta',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Cuenta eliminada',
                    'Tu cuenta ha sido eliminada correctamente.',
                    'success'
                ).then(() => {
                    // Redirige o realiza la lógica de eliminación real
                    window.location.href = "registro.html";
                });
            }
        });
    });
}
