import { App } from "vue";
import { registerIcon } from "./register-element";
export function globalRegister(app: App): void {
    // 注册图标
    registerIcon(app);
}
