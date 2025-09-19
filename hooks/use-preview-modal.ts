import { create } from "zustand";

import { Product } from "@/types";

interface PreviewModalState {
    isOpen: boolean;
    onOpen: (data: Product) => void;
    onClose: () => void;
    data?: Product;
}

const usePreviewModal = create<PreviewModalState>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: Product) => set({ isOpen: true, data }),
    onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
