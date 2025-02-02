export default {
  methods: {
    routeExists(routeName) {
      return this.$router.hasRoute(routeName)
    },
  },
}
