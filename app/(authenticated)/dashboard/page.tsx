import Link from 'next/link'

const miniApps = [
  { name: 'Color Palette Generator', description: 'Generate beautiful color palettes', href: '/mini-apps/color-palette' },
  { name: 'Markdown Editor', description: 'Edit and preview Markdown in real-time', href: '/mini-apps/markdown-editor' },
  { name: 'Pomodoro Timer', description: 'Boost productivity with a Pomodoro timer', href: '/mini-apps/pomodoro' },
  { name: 'Weather Dashboard', description: 'Check weather conditions for any location', href: '/mini-apps/weather' },
]

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Virtual Lab</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {miniApps.map((app) => (
          <Link key={app.name} href={app.href} className="block">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-2">{app.name}</h2>
              <p className="text-gray-600">{app.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

