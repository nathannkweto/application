function ButtonA({ link, imgSrc, label}) {
  return (
    <a href={link} target="_blank">
      <img className="logo" src={imgSrc} alt="" />
      {label}
    </a>
  )
}

function ButtonB({ link, imgSrc, label}) {
  return (
    <a href={link} target="_blank">
       <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href={imgSrc}></use>
                </svg>
      {label}
    </a>
  )
}

export { ButtonA, ButtonB }