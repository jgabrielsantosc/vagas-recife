"use client"

import { useState, useEffect, useCallback } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

type Job = {
  id_job: number
  title: string
  areas: string[]
  subareas: string[]
  seniority: string
  url: string
  work_model: string
  deeplink: string
  contract_model: string
  remuneration: string | null
  company: {
    company_name: string
    url_logo_company: string | null
  }
  description: string
  address: {
    city: string
    state: string
    country: string
  }
  benefits: string[]
  requirements: string[]
}

type JobsResponse = {
  jobs: Job[]
  totalJobs: number
  totalPages: number
  currentPage: number
}

export function JobListingsComponent() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [areaFilter, setAreaFilter] = useState('all')
  const [seniorityFilter, setSeniorityFilter] = useState('all')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchJobs = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(
        'https://new-api-otv-e4k86.ondigitalocean.app/api/v1/jobs-recife',
        {
          method: 'GET',
          headers: {
            'Accept': '*/*',
          },
        }
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: JobsResponse = await response.json()
      setJobs(data.jobs)
    } catch (error) {
      console.error('Erro ao buscar vagas:', error)
      setError('Erro ao carregar as vagas. Por favor, tente novamente mais tarde.')
      setJobs([])
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    void fetchJobs()
  }, [fetchJobs])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleAreaFilter = (value: string) => {
    setAreaFilter(value)
  }

  const handleSeniorityFilter = (value: string) => {
    setSeniorityFilter(value)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Vagas em Recife</h1>
      <div className="flex gap-4 mb-4">
        <Input
          type="text"
          placeholder="Buscar vagas..."
          value={searchTerm}
          onChange={handleSearch}
          className="flex-grow"
        />
        <Select value={areaFilter} onValueChange={handleAreaFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Área" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as áreas</SelectItem>
            <SelectItem value="Tecnologia">Tecnologia</SelectItem>
            <SelectItem value="Vendas">Vendas</SelectItem>
            <SelectItem value="Administrativo">Administrativo</SelectItem>
          </SelectContent>
        </Select>
        <Select value={seniorityFilter} onValueChange={handleSeniorityFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Senioridade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as senioridades</SelectItem>
            <SelectItem value="Júnior">Júnior</SelectItem>
            <SelectItem value="Pleno">Pleno</SelectItem>
            <SelectItem value="Sênior">Sênior</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {isLoading ? (
        <div className="text-center py-8">Carregando vagas...</div>
      ) : error ? (
        <div className="text-center py-8 text-red-500">{error}</div>
      ) : jobs.length === 0 ? (
        <div className="text-center py-8">Nenhuma vaga encontrada</div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <Card key={job.id_job}>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>{job.company.company_name}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">{job.description.slice(0, 100)}...</p>
                <div className="flex flex-wrap gap-2">
                  {job.areas.map((area) => (
                    <Badge key={area} variant="secondary">{area}</Badge>
                  ))}
                  {job.seniority && <Badge>{job.seniority}</Badge>}
                  {job.work_model && <Badge variant="outline">{job.work_model}</Badge>}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <a href={job.url} target="_blank" rel="noopener noreferrer">
                    Ver vaga
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}