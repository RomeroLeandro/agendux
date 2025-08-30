import { Button } from "@/components/ui/Button";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { Typography } from "@/components/ui/Typography";

export default function Home() {
  return (
    <div>
      <ThemeSwitcher />
      <Button>Click me</Button>
      <Typography variant="heading-xl" className="font-adineue">
        Hello, world!
      </Typography>
      <Typography variant="body-md">Hello, world!</Typography>
    </div>
  );
}
