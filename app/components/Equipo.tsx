import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function Equipo() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Nuestro Equipo Scrum</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Integrante 1 */}
        <Card>
          <CardHeader className="flex flex-col items-center">
            <Avatar className="w-20 h-20 mb-4">
              <AvatarImage src="/cindia.jpg" alt="Cindia López" />
              <AvatarFallback>CL</AvatarFallback>
            </Avatar>
            <CardTitle>Cindia López</CardTitle>
            <Badge className="mt-2">Scrum Master</Badge>
          </CardHeader>
          <CardContent className="text-center">
            Facilita el proceso Scrum y ayuda al equipo a superar impedimentos.
          </CardContent>
        </Card>

        {/* Integrante 2 */}
        <Card>
          <CardHeader className="flex flex-col items-center">
            <Avatar className="w-20 h-20 mb-4">
              <AvatarImage src="/nattier.jpg" alt="Nattier Caraballo" />
              <AvatarFallback>NC</AvatarFallback>
            </Avatar>
            <CardTitle>Nattier Caraballo</CardTitle>
            <Badge className="mt-2">Product Owner</Badge>
          </CardHeader>
          <CardContent className="text-center">
            Define prioridades y maximiza el valor del producto para el cliente.
          </CardContent>
        </Card>

        {/* Integrante 3 */}
        <Card>
          <CardHeader className="flex flex-col items-center">
            <Avatar className="w-20 h-20 mb-4">
              <AvatarImage src="/luis.jpg" alt="Luis Mujica" />
              <AvatarFallback>LM</AvatarFallback>
            </Avatar>
            <CardTitle>Luis Mujica</CardTitle>
            <Badge className="mt-2">Developer</Badge>
          </CardHeader>
          <CardContent className="text-center">
            Implementa funcionalidades y asegura la calidad técnica del sistema.
          </CardContent>
        </Card>

        {/* Integrante 4 */}
        <Card>
          <CardHeader className="flex flex-col items-center">
            <Avatar className="w-20 h-20 mb-4">
              <AvatarImage src="/jorge.jpg" alt="Jorge Linares" />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <CardTitle>Jorge Linares</CardTitle>
            <Badge className="mt-2">Developer</Badge>
          </CardHeader>
          <CardContent className="text-center">
            Contribuye al desarrollo y asegura que las entregas cumplan con los requisitos.
          </CardContent>
        </Card>

      </div>
    </section>
  )
}
