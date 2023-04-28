import { serverAuth$ } from "@builder.io/qwik-auth";
import GitHub from "@auth/core/providers/github";
import type { Provider } from "@auth/core/providers";

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => {
    if (!env.get("AUTH_SECRET")) throw new Error("Missing AUTH_SECRET");
    return {
      secret: env.get("AUTH_SECRET"),
      trustHost: true,
      providers: [
        GitHub({
          clientId: env.get("GITHUB_ID")!,
          clientSecret: env.get("GITHUB_SECRET")!,
        }),
      ] as Provider[],
    };
  });
