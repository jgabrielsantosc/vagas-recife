import { getCompanies } from "@/lib/api"
import { CompanyCard } from "@/components/company-card"

export default async function EmpresasPage() {
  const companies = await getCompanies()
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">
        Empresas em Recife
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {companies.data.map((company) => (
          <CompanyCard key={company.id_company} company={company} />
        ))}
      </div>
    </div>
  )
} 