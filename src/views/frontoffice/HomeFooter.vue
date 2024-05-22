<template>
  <footer class="footer">
    <div class="container-fluid bg-transparent text-white py-5 text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <h3 class="section-title text-white">GoHelp</h3>
            <ul class="list-unstyled">
              <li><a href="#" class="footer-link text-white">Sobre nós</a></li>
              <li><a href="#" class="footer-link text-white">Contacta-nos</a></li>
              <li><a href="#" class="footer-link text-white">Política de Privacidade</a></li>
              <li><a href="#" class="footer-link text-white">Termos e Condições</a></li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6 d-flex  justify-content-center text-center">
            <div>
              <h3 class="section-title text-white">Contacto</h3>
              <ul class="list-unstyled">
                <li><i class="fa fa-map-marker-alt me-2 text-white"></i>Rua Dr.João de Sousa nº233</li>
                <li><i class="fa fa-phone-alt me-2 text-white"></i>+350 914329123</li>
                <li><i class="fa fa-envelope me-2 text-white"></i>GoHelp@gmail.com</li>
              </ul>
              
            </div>
          </div>
          <div class="col-lg-4 col-md-12 d-flex justify-content-end text-center">
            <div classe="text-end"  >
              <h3 class="section-title text-white">Horário</h3>
              <ul class="list-unstyled ">
                <li><span class="fw-bold text-white">Segunda - Sábado:</span> 08h - 20h</li>
                <li><span class="fw-bold text-white">Domingo:</span> 10h - 17h</li>
              </ul>
              <div class="social-icons mt-2">
                <a href="#"><img src="https://freepnglogo.com/images/all_img/1707222563twitter-logo-png.png" alt="Twitter" class="social-icon1" style="margin: 1%;"></a>
                <a href="#"><img src="https://static.vecteezy.com/system/resources/previews/018/930/476/non_2x/facebook-logo-facebook-icon-transparent-free-png.png" alt="Facebook" class="social-icon2" style="margin: 1%;"></a>
                <a href="#"><img src="https://static.vecteezy.com/system/resources/thumbnails/023/986/704/small/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png" alt="YouTube" class="social-icon3" style="margin: 1%;"></a>
                <a href="#"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="LinkedIn" class="social-icon4" style="margin: 1%;"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: transparent;
  margin-bottom: 6%;
}

.section-title {
  align-items: right;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer-link {
  text-decoration: none;
}

.social-icon1{
  width: 10%;
  height: 6%;
  object-fit: contain; 
 
}
.social-icon2{
  width: 15%;
  height: 6%;
  object-fit: contain;
  
}
.social-icon3{
  width: 14%;
  height: 6%;
  object-fit: contain;
  
}
.social-icon4{
  width: 10%;
  height: 6%;
  object-fit: contain;

}
.footer ul li {
  margin-bottom: 15px; 
}
</style>