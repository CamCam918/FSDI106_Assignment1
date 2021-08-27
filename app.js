

function createTodo() {
    let text=$("#txtTodo").val(); //read the text/val from controls
    
    let syntax= `
    <div class='todo-item'>
        <h5>${text}</h5>
        <button class="btn btn-sm btn-danger">Remove</button>
    </div>`;
    $("#todoContainer").append(syntax);
    // clear input fields
    $("#txtTodo").val('');//wroite the text/val to the control
    $("#txtTodo").focus();
}

function deleteTodo() {
    console.log("delete press")
    $(this).parent().remove();
}

function init() {
    console.log("To Do app");
    // load prev data

    // hook events
    $("#btnSave").click(createTodo);

    $("#todoContainer").on('click', ".btn-danger", deleteTodo);


    $("#txtTodo").keypress(function(args) {
        console.log("key press",args);
        if(args.key==="Enter"){
            createTodo();
        }
    });
}

function clearInputs() {

}
window.onload=init;