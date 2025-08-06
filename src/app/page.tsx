import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">Whoops!</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Porto's under construction — my bad😅
          </p>
        </div>
        
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            But feel free to check my LinkedIn in the meantime (it’s worth it 🫨):
          </p>
          
          <Link 
            href="https://linkedin.com/in/hamza-pratama-092ba5238"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <span>🔗</span>
            <span>linkedin.com/in/hamza-pratama-092ba5238</span>
          </Link>
        </div>
      </div>
    </main>
  )
} 