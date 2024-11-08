import { Job } from "@/types"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="line-clamp-2">{job.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{job.company.company_name}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4 line-clamp-3">{job.description}</p>
        <div className="flex flex-wrap gap-2">
          {job.areas.map((area) => (
            <Badge key={area} variant="secondary">{area}</Badge>
          ))}
          <Badge>{job.seniority}</Badge>
          <Badge variant="outline">{job.work_model}</Badge>
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
  )
} 