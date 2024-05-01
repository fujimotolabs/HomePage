<template>
  <v-app>
    <v-layout class="rounded-md overflow-hidden h-screen w-screen">
      <v-app-bar title="Application bar" />

      <v-navigation-drawer>
        <v-list>
          <v-list-item>
            <router-link to="/">
              Go to Home
            </router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/labMember">
              Go to Lab Member
            </router-link>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="h-full w-full overflow-auto">
        <router-view v-slot="{ Component, route }">
          <transition
            enter-active-class="animate__animated animate__backInDown"
            leave-active-class="animate__animated animate__fadeOut"
          >
            <div :key="route.fullPath">
              <component :is="Component" />
            </div>
          </transition>
        </router-view>
      </v-main>
    </v-layout>
  </v-app>
</template>

<style></style>
