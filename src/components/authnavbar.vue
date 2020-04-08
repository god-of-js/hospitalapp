<template>
    <nav class="d-flex justify-space-between pt-5" style="background-color: transparent;">
        <!-- <span class="pl-3">sozo healthyme</span>
        <div class="pr-3">
            <span class="pr-3">about</span>
            <span class="pr-3">contact</span>
        </div> -->
        
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>

    <v-progress-circular
      :width="3"
      color="red"
      indeterminate
    ></v-progress-circular>

    <v-progress-circular
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>

    <v-progress-circular
      :width="3"
      color="green"
      indeterminate
    ></v-progress-circular>

   
    </nav>
</template>