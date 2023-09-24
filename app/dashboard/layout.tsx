import DashboardNav from "@/components/dashboard/DashboardNav"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="lg:my-8 my-4 lg:px-10 px-4 py-6 border rounded-lg">
        <DashboardNav />
        {children}
      </main>
    )
  }