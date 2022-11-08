import "./styles.css"

function Social({url,children}) {
  return ( 
    <a className="social" href={url} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
   );
}

export default Social;