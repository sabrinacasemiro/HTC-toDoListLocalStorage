const Element = (props) => {
    const _element = document.createElement(props.type)
    props.classList?.forEach(className => _element.classList.add(className))
    props.textContent && (_element.textContent = props.textContent)
    props.src && (_element.src = props.src)
    props.type && (_element.type = props.type)
    props.placeholder && (_element.placeholder = props.placeholder)

    

    return _element

}

export default Element