import { cn } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import weatherImage from "../assets/weather.png";

export function CardDemo({ className, ...props }) {
  return (
    <Card className={cn("w-[380px]", className)} {...props} style={{ border: '0px',backgroundColor: '#000', color: '#fff' }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent:'space-evenly'}}>
        <img src={weatherImage} width={"60px"} />
        <CardHeader>
          <CardTitle style={{ color: '#fff' }}>21°C</CardTitle>
          <CardDescription style={{ color: '#fff' }}>Slightly Humid</CardDescription>
        </CardHeader>
      </div>
    </Card>
  );
}
