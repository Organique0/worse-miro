"use client";

import { useState, useEffect } from "react";

import { RenameModal } from "@/components/modals/RenameModal";

export const ModalProvider = () => {
    const [mounted, SetIsMounted] = useState(false);

    useEffect(() => {
        SetIsMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <>
            <RenameModal />
        </>
    )
}