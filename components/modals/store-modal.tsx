'use client'

import { useStoreModal } from "@/hooks/use-store-modal"
import Modal from "../ui/modal"

export const StoreModal = () => {
    const StoreModal = useStoreModal();
    return (
        <Modal
        title="Buat Store"
        description="Tambahkan Store Untuk Membuat produk Dan Kategori"
        isOpen={StoreModal.isOpen}
        onClose={StoreModal.onClose}
        >
            Store Form
        </Modal>
    )
}