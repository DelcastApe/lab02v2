const Aside = () => {
    return <aside>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
  
      <label for="exampleDropdownFormEmail1" class="form-label">Correo Electronico</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
  
      <label for="exampleDropdownFormPassword1" class="form-label">Contraseña</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />

        <input type="checkbox" class="form-check-input" id="dropdownCheck" />
        
        <label class="form-check-label" for="dropdownCheck">
          Recordarme
        </label>
        <br></br>

    <button type="submit" class="btn btn-primary">Inicia Sesion</button>
    
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">Eres nuevo por aqui? Inicia Sesion</a>

  <a class="dropdown-item" href="#">Olvidaste tu contraseña?</a>


    </aside>;
}

export default Aside;