import { createApp } from "vue";
import "./style.css";
import "animate.css";
import App from "./App.vue";
import { router } from "./router";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const vuetify = createVuetify({
  components,
  directives,
});
library.add(fas);

const app = createApp(App).use(router).use(vuetify);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mount("#app");
