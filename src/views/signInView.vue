<script setup>
</script>

<template>
  <section id="userSection">
    <!-- signIn Secti on start -->
    <section id="signInSection">
      <h1>登入 :D</h1>
      <form id="signInForm">
        <div class="field">
          <label>
            <h3>Email</h3>
            <input
              type="email"
              id="signInEmail"
              autocomplete="off"
              spellcheck="false"
              placeholder="Email 信箱"
              v-model="email"
            />
          </label>
        </div>

        <div class="field">
          <label>
            <h3>密碼</h3>
            <input
              type="password"
              id="signInPassword"
              autocomplete="off"
              spellcheck="false"
              placeholder="密碼，至少需要 6 個字"
              v-model="password"
            />
          </label>
        </div>

        <div class="field">
          <button>登入</button>
          <div>
            還沒有帳號嗎？
            <RouterLink to="sign_up">註冊</RouterLink>一個吧！
          </div>
        </div>
      </form>
    </section>
    <!-- signIn Section on end -->
  </section>
</template>



<style>
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
  background-color: #e24493;
  color: #fff;
}

section#signInSection {
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 2rem;
}

section#signInSection {
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 2rem;
}
</style>



