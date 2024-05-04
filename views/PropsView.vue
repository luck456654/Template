<template>
    <p>{{ content }}</p>
    <p>{{ content2 }}</p>
</template>
<script>

export default {
  name: "PropsView",  
  props: {
        content: {
            type: String,
            required: true
        },
        content2: {
            type: String,
            required: true
        }
    }
};

</script>