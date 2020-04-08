<template>
  <v-app>
    <div class="d-flex" style="height: 100%">
      <div class="bluebackground" style="color: black;">
        <div class="header pl-12 pt-4">sozo healthyme</div>
        <div class="mx-auto" style=" width: 75%;padding-top: 90px">
          <span style="font-size: 29px; color: #000; font-weight: bold;">Hospital Sign Up</span>
          <form class="mt-6 mx-auto">
            <input placeholder="Name Of Hospital" v-model="data.name" />
            <input placeholder="Email" color="#000" v-model="data.email" />
            <input placeholder="Location" color="#000" v-model="data.location" />
            <input placeholder="Password" color="#000" type="password" v-model="data.password" />
          </form>
          <div class="d-flex justify-space-between pt-12 align-items-center">
            <span>
              Not a member yet?
              <router-link to="/login" style="color: black;">Login</router-link>
            </span>

            <button @click="register()" :loading="loader">
              <span v-if="loader === false">
                Register
                <i class="mdi mdi-arrow-right"></i>
              </span>
              <v-progress-circular :width="3" color="white" indeterminate v-if="loader === true"></v-progress-circular>
            </button>
          </div>
        </div>
      </div>
      <div style=" width: 60%; background-color: #FAFAFA;height: 100%">
        <div class="d-flex justify-end pl-12 pt-4">
          <span class="mr-4 header navtext">about</span>
          <span class="mr-4 header navtext">contact</span>
        </div>
        <div class="d-flex align-center" style=" height: 80%">
          <img src="../../assets/regimage.png" width="500" class="mx-auto d-flex align-center" />
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
import { auth , database} from "../../firebase/index.js";
export default {
  data: () => {
    return {
      loader: false,
      data: {
        name: null,
        email: null,
        password: null,
        location: null
      }
    };
  },
  methods: {
    register() {
      this.loader = true;
      auth
        .createUserWithEmailAndPassword(this.data.email, this.data.password)
        .then(result => {
          console.log(result.user.uid);
          let data = {
            name: this.data.name,
            email: this.data.email,
            location: this.data.location,
          };
          database.ref('hospitals').child(result.user.uid).set(data)
        })
        .finally(() => {
          this.loader = false;
        });
    }
  }
};
</script>
<style scoped>
input {
  border-bottom: 1px solid #000;
  color: #000 !important;
  width: 100%;
  margin-top: 45px !important;
  outline: none;
}
vue-tel-input {
  border-bottom: 1px solid #000;
  color: #000 !important;
  width: 100%;
  margin-top: 45px !important;
  outline: none;
}
button {
  border: 2px solid #000;
  border-left: 1px solid #000;
  padding-top: 3px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 3px;
  color: #000;
}
.navtext:hover {
  color: red;
}
button:hover {
  color: #ffffff;
  background-color: #000;
}
input::placeholder {
  color: #000;
}
</style>