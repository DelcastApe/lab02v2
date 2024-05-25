import "./styles.css";

const Aside = () => {
    return < aside className="centrar">
      
     
  <div className="m-4 p-3">
    
  <label for="exampleDropdownFormEmail1" class=" p-3 form-label" > <i data-feather="mail"></i> Correo Electronico</label>
      <input type="email" class=" form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
  
      <label for="exampleDropdownFormPassword1" class=" p-3 form-label"><i data-feather="lock"></i> Contraseña</label>
      <input type="password" class="mb-3 form-control" id="exampleDropdownFormPassword1" placeholder="Password" />

        <input type="checkbox" class=" form-check-input" id="dropdownCheck" />
        
        <label class=" form-check-label" for="dropdownCheck">
          Recordarme
        </label>
        <br></br>

    <button type="submit" class="btn secondary">Inicia Sesion</button>
    
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">Eres nuevo por aqui? Inicia Sesion</a>

  <a class="dropdown-item" href="#">Olvidaste tu contraseña?</a>

  </div>

    </aside>;
}

export default Aside;