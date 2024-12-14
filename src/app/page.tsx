"use client"
import { useEffect } from "react"
export default function Home() {
   useEffect(() => {
      window.location.href = "https://play.google.com/store/apps/details?id=com.rondera.rondera"
   }, [])
   return null
}
