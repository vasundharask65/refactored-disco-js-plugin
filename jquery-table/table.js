// Why dynamically added row's click event not working:
Solution:
// dynamically added rows click event doesn't work because Click() event binds the element only if the particular element exist in the Html code(after page loads)
// It won't consider the future elements which are created dynamically. Dynamic elements are created with the help of javascript or jquery(not in Html).
// So the normal click event won't fire on the dynamic element.
// To overcome this we should use on() function
// on can only trigger both the existing and future elements
// on can consider all the elements which are present on the whole page

Impediments:
// 1. To update animal - 2 ways
// i) to replace entire row 
// ii) to replace only particular table data (td) 
// 2. Giving dynamic id in "id" and tried to pass 
// 3. Accessing particular td(2)(for example: <tr><td>1</td><td>name</td></tr>)

Learning:
// innerhtml vs outerhtml 
// innertext vs outertext 
// e.preventDefault();

$(document).ready(function() { 
        $("#add-animal").click(function(e){
            e.preventDefault();
            let id = $("#my-table >tbody >tr").length + 1;
            let name = $("#name").val();
            let tblrow = "<tr><td>" + id + "</td><td>" + name + "</td><td><div><button class='btn-sm btn-primary' data-bs-toggle='modal' data-bs-target='#editModal' id='edit-animal' value=" + id + "><i class='fa-solid fa-pencil'></i></button><button class='btn-sm btn-primary delete-animal ms-2' id='delete-animal' value=" + id + "><i class='fa-solid fa-trash'></i></button></div></td></tr>";
            $("#my-table tbody").append(tblrow);
            $("#addModal").modal('hide');
            $("#addModal").find('form').trigger('reset');
        });  

        $("#my-table tbody").on("click","#edit-animal", function () {    
            let row = $(this).closest('tr');
            let id = $(row).find('td').eq(0).html();
            let name = $(row).find('td').eq(1).html();
            $('#editModal #animalId').val(id);
            $('#editModal #name').val(name);
        });

        $("#update-animal").click(function(e){
            e.preventDefault();
            let updatedId = $("#editModal #animalId").val();
            let updatedName = $("#editModal #name").val();     
            //Not working - getting updated in next row      
            $("#my-table").find('tr').eq(updatedId).find('td').eq(1).text(updatedName);
            $("#editModal").modal('hide');
        }); 

        $("#my-table tbody").on("click","#delete-animal", function () { 
            $(this).closest("tr").remove();
        });
});    

