import type { Config } from "tailwindcss";
import sharedConfig from "@repo/config/tailwind.config";

const config: Pick<Config, "content" | "presets"> = {
    content: [
        "./src/app/**/*.tsx",
        "./src/components/**/*.tsx",
        "../../packages/ui/src/*.{tsx,ts}"
    ],
    presets: [sharedConfig],
};

export default config;
