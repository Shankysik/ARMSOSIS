function DeleteObor(id) {
    swal({
        title: 'Вы уверены?',
        text: "Вы не сможете восстановить элемент!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger m-l-10',
        cancelButtonText: 'Отмена',
        confirmButtonText: 'Да, удалить это!'
    }, function () {
            swal({
                title:'Удалено!',
                text:'Элемент был успешно удален.',
                type:'success'
            });
            setTimeout(function Deleter() {
                window.location.assign('obor/'+id+'/delete')
            }, 1000)
    });
}
