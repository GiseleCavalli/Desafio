
<template id="dataFilter">

    <div>
        <p class="p">{{ title }}</p>

        <select v-bind="event" :items="items" @change="filtrar(event)" class="select">
          
            <option v-for="item, index in items" :key="index" :value="item.id">
                {{ item.text }}
            </option>

        </select>
    </div>

</template>

<script>
import '../assets/app.css';

export default{
    name: 'FiltroData',
    emits:[
        'filtrarData'
    ],
    props: {
        title: String,
        event: Number,
        items: Array
    },

    methods: {
        filtrar(event){
            this.$emit('filtrarData', event)
        }
    }
}
</script>