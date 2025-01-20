export const config = {
    compatibility_date: "2024-01-01",
    compatibility_flags: ["nodejs_compat"]
};

export default {
    async fetch(request, env, ctx) {
      return await env.ASSETS.fetch(request);
    }
  };  