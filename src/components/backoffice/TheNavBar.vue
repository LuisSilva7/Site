<template>
  <nav class="navbar navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo-main-image.png" alt="logo" class="navbar-logo">
        <span class="navbar-text">GoHelp</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-body">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/">Voltar ao Frontoffice</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/dashboard">Dashboard</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pedidos
              </a>
              <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown1">
                <li><router-link class="dropdown-item" to="/proposedIniciativesPendent">Pendentes</router-link></li>
                <li><router-link class="dropdown-item" to="/proposedIniciativesRejected">Rejeitados</router-link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Iniciativas
              </a>
              <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown2">
                <li><router-link class="dropdown-item" to="/pastIniciatives">Passadas</router-link></li>
                <li><router-link class="dropdown-item" to="/futureIniciatives">Futuras</router-link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Colaboradores
              </a>
              <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown3">
                <li><router-link class="dropdown-item" to="/collaboratorsList">Consultar</router-link></li>
                <li><router-link class="dropdown-item" to="/collaboratorsAdd">Adicionar</router-link></li>
                <li><router-link class="dropdown-item" to="/proposedCollaborators">Pedidos</router-link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Materiais
              </a>
              <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown4">
                <li><router-link class="dropdown-item" to="/materialsList">Consultar</router-link></li>
                <li><router-link class="dropdown-item" to="/materialsAdd">Adicionar</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    navigationItems: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-logo {
  width: 80px; 
  height: auto;
  margin-right: 10px;
}

.navbar-text {
  font-size: 1.5rem; 
}

.offcanvas-body {
  padding-top: 10px;
}

.nav-item {
  margin-bottom: 10px; 
}

.nav-link {
  transition: color 0.3s ease; /* Adicionando transição suave ao clicar nos links */
}

.nav-link:hover {
  color: #aba6a6; /* Cor do texto ao passar o mouse */
}
</style>