import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  clientType: string;
  tags: string[];
  image: string;
}

export function ProjectCard({
  title,
  clientType,
  tags,
  image,
}: ProjectCardProps) {
  return (
    <Card className="group hover:border-primary/50 transition-all duration-300 overflow-hidden bg-card/50 backdrop-blur-sm cursor-pointer">
      <div className="aspect-video relative overflow-hidden bg-secondary">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors font-(family-name:--font-crimson)">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">{clientType}</p>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
