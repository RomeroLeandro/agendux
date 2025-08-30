import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

export default function Home() {
  return (
    <div >
      <ThemeSwitcher />
      <Button>Click me</Button>
    </div>
  );
}
