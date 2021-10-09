<template>
    <div>
        <virtual-list
            style="height: 360px; overflow-y: auto;"
            :data-key="'id'"
            :data-sources="items"
            :data-component="itemComponent"
        />
    </div>
</template>

<script>
    import virtualList from "vue-virtual-scroll-list";
    import Item from "./Item";
    export default {
        components: { "virtual-list": virtualList },
        name: "HelloWorld",
        props: {
            msg: String,
        },
        data() {
            return {
                itemComponent: Item,
                items: [],
            };
        },
        methods: {
            dataSource() {
                for (let i = 1; i <= 900000; i++) {
                    this.items.push({
                        id: i,
                        name: i + "模拟字段",
                    });
                }
            },
        },
        created() {
            this.dataSource();
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>