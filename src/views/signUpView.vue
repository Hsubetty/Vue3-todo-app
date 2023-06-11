<template>
  <section id="userSection">
    <!-- signUp Section on start -->
    <section id="signUpSection">
      <h1>註冊 :D</h1>
      <form id="signUpForm">
        <div class="field">
          <label>
            <h3>Email</h3>
            <input
              type="email"
              id="signUpEmail"
              autocomplete="off"
              spellcheck="false"
              placeholder="Email 信箱"
            />
          </label>
        </div>
        <div class="field">
          <label>
            <h3>暱稱</h3>
            <input
              type="text"
              id="signUpNickname"
              autocomplete="off"
              spellcheck="false"
              placeholder="要怎麼稱呼你呢？"
            />
          </label>
        </div>

        <div class="field">
          <label>
            <h3>密碼</h3>
            <input
              type="password"
              id="signUpPassword"
              autocomplete="off"
              spellcheck="false"
              placeholder="密碼，至少需要 6 個字"
            />
          </label>
        </div>

        <div class="field">
          <button>註冊</button>
          <div>
            已經有帳號了？
            <RouterLink to="sign_in">登入</RouterLink>
          </div>
        </div>
      </form>
    </section>
    <!-- signUp Section on end -->
  </section>
</template>

<style scoped>
section#userSection h1 {
  margin-bottom: 1rem;
  margin-left: 0.25rem;
  font-size: 1.875rem;
}

section#userSection form {
  width: 100%;
  padding: 0;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  border: 1px solid #f7fafc;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

section#userSection form .field {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
}

section#userSection form .field label h3 {
  font-size: 1.25rem;
}

section#userSection form .field input[type='email'],
section#userSection form .field input[type='text'],
section#userSection form .field input[type='password'] {
  width: 100%;
  padding: 1rem;
  font-size: 1.25rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.125rem;
}

section#userSection form .field button {
  width: 60%;
  padding: 0.75rem;
  margin: 0.5rem;
  font-size: 1.5rem;
  border-radius: 0.125rem;
  background-color:#e24493;
  color:#fff;
}

section#signUpSection{
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 2rem;
}

section#signUpSection{
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 2rem;
}
</style>


