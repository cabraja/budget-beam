import DashboardNav from "@/components/dashboard/DashboardNav"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="my-8 px-10 py-6 border rounded-lg">
        <DashboardNav />
        {children}
      </main>
    )
  }