"use client"

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

type Job = {
  id_job: number
  title: string
  company_name: string
  areas: string[]
  subareas: string[]
  seniority: string
  work_model: string
  description: string
  url: string
}

type JobsResponse = {
  jobs: Job[]
  totalJobs: number
  totalPages: number
  currentPage: number
}

export function JobListingsComponent() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [areaFilter, setAreaFilter] = useState('')
  const [seniorityFilter, setSeniorityFilter] = useState('')

  useEffect(() => {
    fetchJobs()
  }, [currentPage, searchTerm, areaFilter, seniorityFilter])

  const fetchJobs = async () => {
    const response = await fetch(`http://localhost:3000/api/v1/jobs-recife?page=${currentPage}&limit=10&search=${searchTerm}&area=${areaFilter}&seniority=${seniorityFilter}`)
    const data: JobsResponse = await response.json()
    setJobs(data.jobs)
    setTotalPages(data.totalPages)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  const handleAreaFilter = (value: string) => {
    setAreaFilter(value)
    setCurrentPage(1)
  }

  const handleSeniorityFilter = (value: string) => {
    setSeniorityFilter(value)
    setCurrentPage(1)
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
            <SelectItem value="">Todas as áreas</SelectItem>
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
            <SelectItem value="">Todas as senioridades</SelectItem>
            <SelectItem value="Júnior">Júnior</SelectItem>
            <SelectItem value="Pleno">Pleno</SelectItem>
            <SelectItem value="Sênior">Sênior</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <Card key={job.id_job}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
              <CardDescription>{job.company_name}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">{job.description.slice(0, 100)}...</p>
              <div className="flex flex-wrap gap-2">
                {job.areas.map((area) => (
                  <Badge key={area} variant="secondary">{area}</Badge>
                ))}
                <Badge>{job.seniority}</Badge>
                <Badge>{job.work_model}</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href={job.url} target="_blank" rel="noopener noreferrer">Ver Vaga</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink href="#" isActive={currentPage === page} onClick={() => setCurrentPage(page)}>
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href="#" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}