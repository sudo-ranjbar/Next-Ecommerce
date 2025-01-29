"use client"

export default function Button({ title, isPending }) {

    return (
        <button type="submit" disabled={isPending}>
            {title}
            {isPending && <div className="spinner-border spinner-border-sm ms-2"></div>}
        </button>
    )
}