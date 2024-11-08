"use client"

import { useEffect, useState } from "react"
import { Job } from "@/types"
import { JobCard } from "./job-card"
import { JobFilters } from "./job-filters"
import { getJobs } from "@/lib/api"

export function JobList() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [areaFilter, setAreaFilter] = useState("all")
  const [seniorityFilter, setSeniorityFilter] = useState("all")

  useEffect(() => {
    async function loadJobs() {
      try {
        const response = await getJobs()
        setJobs(response.data)
      } catch (err) {
        setError("Erro ao carregar vagas")
      } finally {
        setIsLoading(false)
      }
    }

    loadJobs()
  }, [])

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesArea = areaFilter === "all" || job.areas.includes(areaFilter)
    const matchesSeniority = seniorityFilter === "all" || job.seniority === seniorityFilter

    return matchesSearch && matchesArea && matchesSeniority
  })

  return (
    <div>
      <JobFilters
        searchTerm={searchTerm}
        areaFilter={areaFilter}
        seniorityFilter={seniorityFilter}
        onSearchChange={setSearchTerm}
        onAreaChange={setAreaFilter}
        onSeniorityChange={setSeniorityFilter}
      />

      {isLoading ? (
        <div className="text-center py-8">Carregando vagas...</div>
      ) : error ? (
        <div className="text-center py-8 text-destructive">{error}</div>
      ) : filteredJobs.length === 0 ? (
        <div className="text-center py-8">Nenhuma vaga encontrada</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <JobCard key={job.id_job} job={job} />
          ))}
        </div>
      )}
    </div>
  )
} 