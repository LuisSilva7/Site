<template>
    <div v-if="visible" class="custom-alert">
      <span class="close" @click="close">&times;</span>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        visible: true
      };
    },
    methods: {
      close() {
        this.visible = false;
      }
    }
  }
  </script>
  
  <style scoped>
  .custom-alert {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .close {
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
    color: #721c24;
  }
  
  .close:hover {
    color: #721c24;
  }
  </style>