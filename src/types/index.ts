export interface Job {
  id_job: number
  title: string
  description: string
  seniority: string
  work_model: string
  contract_model?: string
  remuneration?: number
  company: Company
  areas: string[]
  url: string
  created_at: string
}

export interface Company {
  id_company: number
  company_name: string
  url_logo_company: string | null
  description?: string
  site?: string
  linkedin?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
} 