import './styles.css'

function Home() {
  return ( 
    <div className='container'>
      <h1>Pablo Kaliel</h1>
      <span>Veja meus links abaixo:</span>

      <main className='links'>
      <section className="link-area">
        <a href='#'>
          <p className='link-text'>Youtube</p>
        </a>
      </section>
      </main>
    </div>
   );
}

export default Home;