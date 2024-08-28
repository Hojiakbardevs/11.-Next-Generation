import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ButtonEnter() {
  return (
    <div>
      <div className="flex w-full max-w-sm items-center">
        <Input type="text" className="w-[250px]"/>
        <Button type="submit">Notify Me ✌️</Button>
      </div>
      <p className="text-sm opacity-80 mt-4">
        Be first on launch and updates. <span className="opacity-100">GDPR</span> ready.
      </p>
    </div>
  );
}
