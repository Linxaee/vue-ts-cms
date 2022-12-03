import { App } from "vue";
import { registerFormatTime } from "@/directives";
export function registerDirectives(app: App) {
    registerFormatTime(app);
}
