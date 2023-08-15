import Sidebar from "@/components/Sidebar"

export default function layout({children} : {children: React.ReactNode}) {
   return (
      <Sidebar>{children}</Sidebar>
   )
}