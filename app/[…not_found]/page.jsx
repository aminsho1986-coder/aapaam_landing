import { notFound } from "next/navigation"
export default function NotFoundCatchAll() {
    return notFound(); //Just end as file not found and prevent reloading
}﻿