import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

interface JobFiltersProps {
  onSearchChange: (value: string) => void
  onAreaChange: (value: string) => void
  onSeniorityChange: (value: string) => void
  searchTerm: string
  areaFilter: string
  seniorityFilter: string
}

export function JobFilters({
  onSearchChange,
  onAreaChange,
  onSeniorityChange,
  searchTerm,
  areaFilter,
  seniorityFilter
}: JobFiltersProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row mb-6">
      <Input
        type="text"
        placeholder="Buscar vagas..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-grow"
      />
      
      <Select value={areaFilter} onValueChange={onAreaChange}>
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

      <Select value={seniorityFilter} onValueChange={onSeniorityChange}>
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
  )
} 