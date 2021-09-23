const Element = (props) => {
    const _element = document.createElement(props.type)
    props.classList.forEach(className => _element.classList.add(className))
    _element.textContent = props.textContent
    

    return _element

}

export default Element