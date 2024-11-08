const API_URL = "https://new-api-otv-e4k86.ondigitalocean.app/api/v1"

export async function getJobs(params?: {
  page?: number
  limit?: number
  area?: string
  company_id?: string
}) {
  const searchParams = new URLSearchParams()
  
  if (params?.page) searchParams.set("page", params.page.toString())
  if (params?.limit) searchParams.set("limit", params.limit.toString())
  if (params?.area) searchParams.set("area", params.area)
  if (params?.company_id) searchParams.set("company_id", params.company_id)

  const response = await fetch(`${API_URL}/jobs-recife?${searchParams}`)
  
  if (!response.ok) {
    throw new Error("Falha ao carregar vagas")
  }

  return response.json()
}

export async function getCompanies(params?: {
  page?: number
  limit?: number
}) {
  const searchParams = new URLSearchParams()
  
  if (params?.page) searchParams.set("page", params.page.toString())
  if (params?.limit) searchParams.set("limit", params.limit.toString())

  const response = await fetch(`${API_URL}/companies?${searchParams}`)
  
  if (!response.ok) {
    throw new Error("Falha ao carregar empresas")
  }

  return response.json()
} 