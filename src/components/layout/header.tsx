import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-full flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Vagas Recife
        </Link>
        
        <nav className="flex gap-4">
          <Button variant="ghost" asChild>
            <Link href="/vagas/area/tecnologia">Vagas por Área</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/empresas">Empresas</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
} 