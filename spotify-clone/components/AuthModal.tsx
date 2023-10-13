"use client"

import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Modal from "./Modal";
import { useRouter } from "next/router";

const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    return (
        <Modal
            title="Welcome"
            description="Hello"
            isOpen
            onChange={() => {}}
        >
            Auth Modal Children
        </Modal>
    );
}
 
export default AuthModal;