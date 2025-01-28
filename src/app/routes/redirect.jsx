let Redirect = (props) => {
  window.location.href = props.href
    return (
      <div className="standard_page_container">
        <div className="main_middle">
          <h1>Redirecting...</h1>
        </div>
      </div>
    )
  }
  
export default Redirect
