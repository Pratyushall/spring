import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  tag: string;
  title: string;
  description: string;
}

export function ServiceCard({ tag, title, description }: ServiceCardProps) {
  return (
    <Card className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <Badge
          variant="secondary"
          className="mb-4 bg-secondary/50 text-secondary-foreground"
        >
          {tag}
        </Badge>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors font-(family-name:--font-crimson)">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
