export default {
  config(_input: any) {
    return {
      name: "minikeen-sst-demo",
      region: "us-east-1",
    };
  },

  async stacks(app: any) {
    const mod = await import("./stacks/MyStack");
    app.stack(mod.API);
  },
};
