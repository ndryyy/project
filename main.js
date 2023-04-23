function slide(e){
    const target = $(e.target)

    if($(target).hasClass("active")){
        $(target).html('More Info').removeClass("active")
    }else{
        $(target).html("Less Info").addClass("active")
    }
    const item = $(target).parents(".exp-detail")
    const detail = $(item).children(".exp-detail-item")
    $(detail).slideToggle()
}

function onFormSubmit(e){
    e.preventDefault()

    const email = $("#email")
    const subject = $('#subject')
    const message = $('#message')

    // console.log($(email).val())

    if (!$(email).val()){
        alert('email is required')
    } else if (!$(subject).val()){
        alert('subject is required')
    } else if (!$(message).val()){
        alert('message is required')
    } else {
        alert('Well Done')
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }
}