import Vue from "vue";
import * as VeeValidate from "vee-validate";
import { extend, ValidationProvider, ValidationObserver } from "vee-validate";
import { required, email, min, confirmed } from "vee-validate/dist/rules";

// The types of validators used in the project
extend("required", required);
extend("confirmed", confirmed);
extend("email", email);
extend("min", min);

Vue.use(VeeValidate);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

export default VeeValidate;
