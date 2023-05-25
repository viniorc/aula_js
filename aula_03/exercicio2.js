divC.style.display = 'none'

const hideImputs = () => {
    let selected = inSelect.value
    console.log(inSelect);

    if(selected === 'c'){
        divC.style.display = 'none'
        divF.style.display = 'block'
    } else if (selected === 'f') {
        divF.style.display = 'none'
        divC.style.display = 'block'
    }
}

const toC = () => {
    e.preventDefault()
}



