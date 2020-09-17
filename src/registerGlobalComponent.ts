import HelloWorld from '@/components/HelloWorld.vue';

const components = [
    HelloWorld,
]

const useGlobalComponent = (app: any) => {
    components.forEach(component => {
        app.component(component.name, component);
    })
}
export default useGlobalComponent
