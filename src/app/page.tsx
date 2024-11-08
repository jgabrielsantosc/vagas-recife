import { JobListings } from './components/job-listings'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">
        Vagas em Recife
      </h1>
      <JobListings />
    </div>
  )
}