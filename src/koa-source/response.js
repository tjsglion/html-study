module.export = {
  get data () {
    return this.res.data;
  },
  set data (data) {
    this.res.data = data;
  },
  get state () {
    return this.res.state,
  },
  set state (stateCode) {
    this.res.state = stateCode;
  }
}