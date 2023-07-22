

export const GifImg = ({ title, url, id }) => {
    console.log(id)
    return (
      <div className="card">
          <img src={ url } alt={ title } />
          <p>{ title }</p>
      </div>
    )
  }
  