# frontend_adm-Personal

Aplicación diseñada utilizando la biblioteca ReactJS y el entorno de desarrollo Vite. Esta aplicación permite ingresar, editar y eliminar personas a una base de datos y visualizarlas en el navegador en formato de tabla.

### Link backend: https://github.com/JuanMMV/backend_adm-Personal
### Demo: https://frontend-adm-personal.vercel.app/

## Funcionalidades

- Mostrar usuarios:  
La aplicación muestra en formato de tabla todos los usuarios registrados en la base de datos.

- Crear usuarios:  
La aplicación permite crear usuarios. Para ello, se debe ingresar el Rut, nombre, teléfono y email del usuario. Todos los campos son obligatorios. El número de teléfono debe ser ingresado en formato numérico, y el email en su formato correspondiente. Si se intenta ingresar un Rut que ya está registrado en la base de datos, se mostrará un mensaje de error y se deberá proporcionar uno diferente.

- Eliminar usuario:  
En la tabla de usuarios, aparecerá un icono para eliminar. Al presionarlo, se eliminará el usuario seleccionado y se actualizará la tabla sin recargar la página.

- Actualizar usuario:  
Actualizar usuario: En la tabla de usuarios, aparecerá un icono para actualizar. Si se presiona, se mostrarán dos iconos: uno para cancelar y otro para aceptar. Al mismo tiempo, los campos de email y teléfono cambiarán a input para editarlos. Se puede actualizar uno o ambos campos, pero se debe respetar su respectivo formato. Si se intenta cambiar el email, pero no tiene el formato requerido, no se actualizará ningún campo y aparecerá un mensaje de error. Si se presiona el icono para cancelar, no se guardará ningún cambio.
