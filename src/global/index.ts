import { App } from "vue";
import { registerIcon } from "./register-element";
import { registerDirectives } from "./register-directives";
export function globalRegister(app: App): void {
    // 注册图标
    registerIcon(app);
    registerDirectives(app);
}
