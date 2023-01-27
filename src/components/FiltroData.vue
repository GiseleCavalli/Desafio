
<template>
    <div>
        <p class="p">{{ title }}</p>
        
        <select v-model="inputValue" @change="filtrar" class="select">
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
    props: [
        'value',
        'title',
        'event',
        'items'
    ],
    data() {
        return {
            inputValue: '',
        }
    },
    created() {
        this.inputValue = this.value;
    },
    methods: {
        filtrar(){
            console.log('Value',this.value)
            this.$emit('input', this.value)
            this.$emit('filtrarData')
        }
    }
}
</script>