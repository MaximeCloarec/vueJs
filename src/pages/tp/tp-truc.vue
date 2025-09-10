<template>
    <input
        class="input-primary"
        type="text"
        name="text"
        id="text"
        @keyup="changeText1($event)"
    />
    <p>{{ text1 }}</p>
    <input
        class="input-primary"
        type="text"
        name=""
        id=""
        @keyup="changeText2($event)"
    />
    <p>{{ text2 }}</p>
    <button @click="alert12" class="btn">CLICK ME</button>
</template>

<script setup lang="js">
import { ref } from "vue";

let text1 = ref("");
let text2 = ref("")
let textLog = ""

function changeText1(e){
    console.log(e);
    
    text1.value += e.key
}

function changeText2(e){

    if(e.key == "Escape"){
        console.log(e)
        console.log(textLog);

        text2.value = textLog
    }else{
        console.log(textLog)
        textLog += e.key
    }
}

function alert12(){
    alert()
}

</script>

<style></style>
