export type Toast = {
    id: string;
    message: string;
    duration: number;
};

export type ToastStore = {
    toasts: Toast[];
};
