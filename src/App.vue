<template>
    <div>
        <!-- ... -->
        <p>获取vuex里面的数据{{count}}</p>
        <!-- ... -->
    </div>
</template>
<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
    setup() {
        const store = useStore();
        const count = computed(() => store.state.count)

        return {
            count
        }
    }
})
</script>
