declare const _default: <T, S>(__VLS_props: {
    readonly type: "checkbox";
    readonly rowId: string;
    value?: boolean | undefined;
    indeterminate?: boolean | undefined;
    onUpdate?: ((rowId: string) => void) | undefined;
    readonly columnId: string;
    onClick?: ((columnId: string, rowId: string) => void) | undefined;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    emit: any;
    slots: {};
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        readonly type: "checkbox";
        readonly rowId: string;
        value?: boolean | undefined;
        indeterminate?: boolean | undefined;
        onUpdate?: ((rowId: string) => void) | undefined;
        readonly columnId: string;
        onClick?: ((columnId: string, rowId: string) => void) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {};
    emit: any;
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            readonly type: "checkbox";
            readonly rowId: string;
            value?: boolean | undefined;
            indeterminate?: boolean | undefined;
            onUpdate?: ((rowId: string) => void) | undefined;
            readonly columnId: string;
            onClick?: ((columnId: string, rowId: string) => void) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: {};
        emit: any;
    } | undefined;
};
export default _default;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
