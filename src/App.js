import React from 'react';
import './index.css';

function App() {
  return (
    <>
    {/* header start  */}
    <div id="sticky-wrapper" className="sticky-wrapper" style={{height: '87px'}}>
      <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
      
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <div className="site-logo mr-auto w-25"><a href="index.html">LaListaDeEspera</a></div>

          <div className="mx-auto text-center">
            <nav className="site-navigation position-relative text-right" role="navigation">
              <ul className="site-menu main-menu js-clone-nav mx-auto d-none d-lg-block  m-0 p-0">
                <li><a href="#Inicio-section" className="nav-link active">Inicio</a></li>
                <li><a href="#Qué ofrecemos-section" className="nav-link">Qué ofrecemos</a></li>
                <li><a href="#Contacto-section" className="nav-link">Contacto</a></li>
                <li><a href="#Nuestro equipo-section" className="nav-link">Nuestro equipo</a></li>
              </ul>
            </nav>
          </div>

          <div className="ml-auto w-25">
            <nav className="site-navigation position-relative text-right" role="navigation">
              <ul className="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-lg-block m-0 p-0">
                <li className="cta"><a href="#contact-section" className="nav-link"><span>Iniciar sesión</span></a></li>
              </ul>
            </nav>
            <a href="http://google.es" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right"><span className="icon-menu h3"></span></a>
          </div>
        </div>
      </div>
      
    </header>
    </div>
    {/* // header end */}


    {/* // intro section  */}
    <div className="intro-section" id="Inicio-section">
      
      <div className="slide-1" style={{backgroundImage: "url(&quot;images/hero_1.jpg&quot;)", backgroundPosition: "50% -25px;" }} data-stellar-background-ratio="0.5">
        <div className="container">

          <div className="row align-items-center">
            <div className="col-12">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4">
                  <h3 data-aos="fade-up" data-aos-delay="100" className="aos-init aos-animate" style={{color: 'white'}}>Una <b>lista de espera online</b> para poder <b>mantener la distancia</b>.</h3>
                  <p className="mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">Gestiona el acceso a tu recinto facilmente para poder evitar contagios del COVID-19.</p>
                  {/* <p data-aos="fade-up" data-aos-delay="300" className="aos-init aos-animate"><a href="#" className="btn btn-primary py-3 px-5 btn-pill">Admission Now</a></p> */}
                </div>
                <div className="col-lg-5 ml-auto aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                  <form action="" method="post" className="form-box">
                    <h3 className="h4 text-black mb-4">Crear una cuenta</h3>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Correo electrónico" />
                    </div>
                    <div className="form-group">
                      <input type="Contraseña" className="form-control" placeholder="Contraseña" />
                    </div>
                    <div className="form-group mb-4">
                      <input type="Contraseña" className="form-control" placeholder="Repetir Password" />
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btn btn-primary btn-pill" value="Crear una cuenta" />
                    </div>
                  </form>
                </div>
              </div>

            </div>
            
          </div>

        </div>
      </div>
    </div>
    
    {/* // Intro section end */}

    <footer class="footer-section bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h3>LaListaDeEspera</h3>
            <p>Servicio para gestionar el acceso de personas a cualquier establecimiento. Fácil de usar y totalmente customizable.</p>
          </div>

          <div class="col-md-3 ml-auto">
            <h3>MENU</h3>
            <ul class="list-unstyled footer-MENU">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Qué ofrecemos</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Nuestro equipo</a></li>
            </ul>
          </div>

          <div class="col-md-4">
            <h3>SUBSCRÍBETE</h3>
            <p>¿Quieres recibir nuestro boletín de noticias? Introduce tu email en el siguiente formulario para estar en la lista de mailing y enterarte de todas nuestras novedades.</p>
            <form action="#" class="footer-SUBSCRÍBETE">
              <div class="d-flex mb-5">
                <input type="text" class="form-control rounded-0" placeholder="Email" />
                <input type="submit" class="btn btn-primary rounded-0" value="SUBSCRÍBETE" />
              </div>
            </form>
          </div>

        </div>

        <div class="row pt-5 mt-5 text-center">
          <div class="col-md-12">
            <div class="border-top pt-5">
            {/* <p>
            Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright ©<script>document.write(new Date().getFullYear());</script>2020 All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            </p> */}
            </div>
          </div>
          
        </div>
      </div>
    </footer>

  </>
  );
}

export default App;
