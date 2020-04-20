<template>
  <div class="bli_kund">
    <div class="container">
      <br />
      <br />
      <h2>Bli kund</h2>
      <br />
      <br />
      <br />
      <div class="form-row mb-4">
        <div class="col">
          <!-- First name -->
          <input
            type="text"
            id="RegisterFormFirstName"
            class="form-control"
            placeholder="Förstnamn"
          />
        </div>
        <div class="col">
          <!-- Last name -->
          <input type="text" id="RegisterFormLastName" class="form-control" placeholder="Efternamn" />
        </div>
      </div>

      <!-- E-mail -->
      <input type="email" id="RegisterFormEmail" class="form-control mb-4" placeholder="E-post" />

      <!-- TelefonNumber -->
      <input type="text" id="RegisterFormTel" class="form-control mb-4" placeholder="Telefonnummer" />

      <!-- Password -->
      <input
        type="password"
        id="RegisterFormPassword"
        class="form-control mb-4"
        placeholder="Lösenord"
        aria-describedby="RegisterFormPasswordHelpBlock"
      />
      <small id="RegisterFormPasswordHelpBlock" class="form-text text-muted mb-4"></small>

      <!-- Sign up button -->
      <button class="btn btn-info my-4 btn-block" type="submit">Skapa ett konto</button>

      <hr />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
