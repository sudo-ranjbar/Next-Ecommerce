"use server"

import { postFetch } from "@/utils/fetch"
import { handleError } from "@/utils/helper"
import { cookies } from "next/headers"

export async function editForm(state, formData) {

    const name = formData.get("name")
    const email = formData.get("email")

    if (name === '') {
        return {
            status: "error",
            message: "فیلد نام نباید خالی باشد"
        }
    }

    if (email === '') {
        return {
            status: "error",
            message: "فیلد ایمیل نباید خالی باشد"
        }
    }

    const userToken = (await cookies()).get('token')

    if (!userToken) {
        return {
            status: "error",
            message: "undefined user_token!"
        }
    }

    const data = await postFetch("/profile/info/edit",
        { name, email },
        { 'Authorization': `Bearer ${userToken.value}` }
    )

    if (data.status === 'success') {
        return {
            status: data.status,
            message: "ویرایش اطلاعات با موفقیت انجام شد"
        }
    } else {
        return {
            status: data.status,
            message: handleError(data.message)
        }
    }
}