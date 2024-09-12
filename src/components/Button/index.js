import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../lib/utils";
export default function Button({ children, className, ...props }) {
    return (_jsx("button", { ...props, className: cn("flex rounded-md bg-blue-500 p-2 text-white", className), children: children }));
}
