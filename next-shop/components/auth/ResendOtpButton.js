"use client"

import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"
import Button from "../Button"
import { resendOtp } from "@/actions/auth"

export default function ResendOtpButton() {

    const [state_resend, formAction_resend, isPending] = useActionState(resendOtp, {})

    useEffect(() => {

        toast(state_resend?.message, { type: `${state_resend?.status}` })

    }, [state_resend])

    return (
        <div className="resend-otp-btn">
            <form action={formAction_resend}>
                <Button title="ارسال دوباره" style="btn btn-dark" isPending={isPending} />
            </form>
        </div>
    )
}