
$(document).ready(function(){
    $("#addPerson").on("click", function(){
        let num = $("#custNum").val();
        num++;
        $("#addPersontab").before(`
        
        <li class="nav-item" >
            <a href="#pills-person${num}" aria-controls="pills-person${num}" role="tab" data-toggle="tab">Person ${num}</a>
        </li>

        `)
        $(`#pills-person${num-1}`).after(
            `<div class="tab-pane fade" id="pill-person${num}" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div class="container" >
                    <div id="person${num}">
                    </div>
                </div>
                <script>
                    $('#person${num}').weekly_schedule();
                </script>
            </div>`);
            
        $("#custNum").val(`${num}`);
    })
});