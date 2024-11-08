import { getJobs } from "@/lib/api"
import { JobCard } from "@/components/job-card"

export default async function VagasPorAreaPage({
  params
}: {
  params: { slug: string }
}) {
  const jobs = await getJobs({ area: params.slug })
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">
        Vagas em {params.slug}
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.data.map((job) => (
          <JobCard key={job.id_job} job={job} />
        ))}
      </div>
    </div>
  )
} 