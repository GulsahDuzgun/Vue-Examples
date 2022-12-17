<template>
    <ul>
        <li v-for="item in NameList" :key="item">{{item}}</li>
    </ul>
</template>
<script>
export default{
    inject:['NameList']
}
</script>